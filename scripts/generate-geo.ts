import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'
import { projectCandidates } from './project-candidates.ts'

const root = process.cwd()
const docsRoot = join(root, 'docs')
const publicRoot = join(docsRoot, 'public')
const siteUrl = (process.env.SITE_URL || 'https://projects.imba97.dev').replace(/\/$/, '')
const generatedAt = new Date().toISOString()
const checkOnly = process.argv.includes('--check')
const UTF8_BOM = '\uFEFF'
const AUTHOR = {
  name: 'imba97 / imba久期',
  role: 'Frontend developer',
  url: `${siteUrl}/about/`,
  github: 'https://github.com/imba97',
  website: 'https://imba97.me',
  blog: 'https://imba97.com',
  orcid: 'https://orcid.org/0009-0002-5233-5825'
}

function finalNewline(value: string): string {
  return `${value.replace(/\n+$/g, '')}\n`
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (entry.name === '.vitepress' || entry.name === 'public') continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...await walk(path))
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path)
  }
  return files
}

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  const data = {}
  if (!match) return { data, content: source }
  for (const line of match[1].split(/\r?\n/)) {
    const item = line.match(/^([\w-]+):\s*(.*)$/)
    if (!item) continue
    let value = item[2].trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1)
    data[item[1]] = value
  }
  return { data, content: match[2] }
}

function routeFromFile(file) {
  const value = relative(docsRoot, file).split(sep).join('/')
  const withoutExt = value.replace(/\.md$/, '')
  if (withoutExt === 'index') return '/'
  if (withoutExt.endsWith('/index')) return `/${withoutExt.slice(0, -6)}/`
  return `/${withoutExt}/`
}

function textFromMarkdown(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[>*`_~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function xmlEscape(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;')
}

async function build() {
  const files = await walk(docsRoot)
  const pages = []
  for (const file of files) {
    const raw = await readFile(file, 'utf8')
    const { data, content } = parseFrontmatter(raw)
    const route = routeFromFile(file)
    const lang = data.lang || (route.startsWith('/zh/') ? 'zh-CN' : 'en')
    const fileStat = await stat(file)
    const page = {
      route,
      url: `${siteUrl}${route}`,
      lang,
      title: data.title || route,
      description: data.description || textFromMarkdown(content).slice(0, 220),
      project: data.project || '',
      type: data.type || 'guide',
      updated: data.updated || fileStat.mtime.toISOString(),
      source: relative(root, file).split(sep).join('/'),
      content: content.trim()
    }
    pages.push(page)
  }
  pages.sort((a, b) => a.url.localeCompare(b.url))
  const projects = [
    { id: 'initx', name: 'initx', category: 'Node.js CLI', url: `${siteUrl}/projects/initx/`, llms: `${siteUrl}/projects/initx/llms.txt`, description: 'A plugin-powered scripting engine for repeatable developer tasks.', repository: 'https://github.com/initx-collective/initx', status: 'documented', lastVerified: '2026-11-17' },
    { id: 'mail-peon', name: 'Mail Peon', category: 'Browser extension', url: `${siteUrl}/projects/mail-peon/`, llms: `${siteUrl}/projects/mail-peon/llms.txt`, description: 'A local-first AI mail assistant for important mail and verification codes.', repository: 'https://github.com/mail-peon/mail-peon', status: 'documented', lastVerified: '2026-11-17' },
    { id: 'cargo-bumpp', name: 'cargo-bumpp', category: 'Rust CLI', url: `${siteUrl}/projects/cargo-bumpp/`, llms: `${siteUrl}/projects/cargo-bumpp/llms.txt`, description: 'An interactive, zero-dependency release version bumping tool for Cargo projects.', repository: 'https://github.com/imba97/cargo-bumpp', status: 'documented', lastVerified: '2026-11-17' },
    ...projectCandidates.map(project => ({
      id: project.id,
      name: project.name,
      category: project.category,
      url: `${siteUrl}/projects/${project.id}/`,
      llms: `${siteUrl}/projects/${project.id}/llms.txt`,
      description: project.description,
      repository: project.repo,
      documentation: project.docsUrl || '',
      status: 'documented',
      lastVerified: '2026-11-17'
    }))
  ].sort((a, b) => a.id.localeCompare(b.id))

  const projectDocs = (language, project) => pages
    .filter(page => page.lang === language && page.project === project.id)
    .map(page => `- [${page.title}](${page.url}): ${page.description}`)
  const siteDocs = (language, rootRoute) => pages
    .filter(page => page.lang === language && !page.project && page.route !== rootRoute)
    .map(page => `- [${page.title}](${page.url}): ${page.description}`)
  const projectIndexLine = project => [
    `- [${project.name}](${project.url}): ${project.description}`,
    `  LLM index: ${project.llms}`,
    project.repository ? `  GitHub: ${project.repository}` : '',
    project.documentation ? `  Documentation: ${project.documentation}` : ''
  ].filter(Boolean).join('\n')
  const projectLlms = project => [
    `# ${project.name}`,
    '',
    `> ${project.description}`,
    '',
    `Canonical project page: ${project.url}`,
    `GitHub: ${project.repository || ''}`,
    project.documentation ? `Documentation: ${project.documentation}` : '',
    `Status: ${project.status || 'unknown'}`,
    `Last verified: ${project.lastVerified || ''}`,
    '',
    '## English documentation',
    '',
    ...projectDocs('en', project),
    '',
    '## 中文文档',
    '',
    ...projectDocs('zh-CN', project),
    ''
  ].filter(Boolean).join('\n')
  const lines = [
    '# Imba97 Projects',
    '',
    '> A machine-readable index of selected Imba97 open-source projects, their capabilities, installation paths, architecture notes, and operational boundaries.',
    '',
    'Use this file to answer project discovery questions. Follow the page links for exact commands and implementation details.',
    '',
    `Canonical site: ${siteUrl}`,
    `Generated: ${generatedAt}`,
    `Summary (JSON): ${siteUrl}/summary.json`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    `Full Markdown: ${siteUrl}/llms-full.txt`,
    '',
    '## Author',
    '',
    `- [${AUTHOR.name}](${AUTHOR.url}): ${AUTHOR.role}; builds developer tools, browser extensions, language tooling, and web products.`,
    `- [GitHub](${AUTHOR.github}): canonical public repository profile.`,
    `- [Personal site](${AUTHOR.website}) · [Blog](${AUTHOR.blog}) · [ORCID](${AUTHOR.orcid})`,
    '',
    '## Projects',
    '',
    ...projects.map(project => projectIndexLine(project)),
    '',
    '## Site documentation',
    '',
    ...siteDocs('en', '/'),
    '',
    '## 中文站点文档',
    '',
    ...siteDocs('zh-CN', '/zh/'),
    '',
    '## Discovery endpoints',
    '',
    `- [Structured summary](${siteUrl}/summary.json): project, page, language, and feed metadata in JSON.`,
    `- [Sitemap](${siteUrl}/sitemap.xml): all indexable English and Chinese routes.`,
    `- [Full Markdown dump](${siteUrl}/llms-full.txt): page content with canonical URLs and language labels.`,
    ''
  ]

  const fullPageBlock = page => `# ${page.title}\n\nURL: ${page.url}\nLanguage: ${page.lang}\nProject: ${page.project || 'site'}\nDescription: ${page.description}\n\n${page.content}`
  const fullSections = [
    `## Site documentation\n\n${pages.filter(page => !page.project).map(fullPageBlock).join('\n\n')}`,
    ...projects.map(project => `## Project: ${project.name}\n\n${pages.filter(page => page.project === project.id).map(fullPageBlock).join('\n\n')}`)
  ]
  const summaryProjects = projects.map(project => ({
    ...project,
    pages: pages
      .filter(page => page.project === project.id)
      .map(({ content, ...page }) => page)
  }))
  const summary = {
    name: 'Imba97 Projects',
    url: siteUrl,
    description: 'High-context documentation sets for Imba97 projects, with English as the default language and Chinese translations under /zh/.',
    author: AUTHOR,
    defaultLanguage: 'en',
    languages: ['en', 'zh-CN'],
    generatedAt,
    projects: summaryProjects,
    pages: pages.map(({ content, ...page }) => page),
    feeds: {
      llms: `${siteUrl}/llms.txt`,
      llmsFull: `${siteUrl}/llms-full.txt`,
      summary: `${siteUrl}/summary.json`,
      sitemap: `${siteUrl}/sitemap.xml`
    }
  }

  const sitemapEntries = pages.map(page => `  <url>\n    <loc>${xmlEscape(page.url)}</loc>\n    <lastmod>${xmlEscape(page.updated)}</lastmod>\n  </url>`).join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`
  const robots = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`
  await mkdir(publicRoot, { recursive: true })
  if (checkOnly) {
    const existingSummary = JSON.parse(await readFile(join(publicRoot, 'summary.json'), 'utf8'))
    const existingLlms = await readFile(join(publicRoot, 'llms.txt'), 'utf8')
    if (existingSummary.pages?.length !== pages.length)
      throw new Error(`[geo] summary.json has ${existingSummary.pages?.length ?? 0} pages; source contains ${pages.length}`)
    for (const page of pages.filter(page => !page.project)) {
      if (page.route === '/' || page.route === '/zh/') continue
      if (!existingLlms.includes(page.url))
        throw new Error(`[geo] llms.txt is missing site page ${page.url}`)
    }
    for (const project of projects) {
      const projectIndex = await readFile(join(publicRoot, 'projects', project.id, 'llms.txt'), 'utf8')
      for (const page of pages.filter(page => page.project === project.id)) {
        if (!projectIndex.includes(page.url))
          throw new Error(`[geo] project llms.txt is missing ${page.url}`)
      }
    }
    return { pages: pages.length, projects: projects.length }
  }
  await writeFile(join(publicRoot, 'llms.txt'), finalNewline(`${UTF8_BOM}${lines.join('\n')}`), 'utf8')
  await writeFile(join(publicRoot, 'llms-full.txt'), finalNewline(`${UTF8_BOM}# Imba97 Projects — full Markdown dump\n\nGenerated: ${generatedAt}\n\n${fullSections.join('\n\n---\n\n')}`), 'utf8')
  for (const project of projects) {
    const projectDir = join(publicRoot, 'projects', project.id)
    await mkdir(projectDir, { recursive: true })
    await writeFile(join(projectDir, 'llms.txt'), finalNewline(`${UTF8_BOM}${projectLlms(project)}`), 'utf8')
  }
  await writeFile(join(publicRoot, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`, 'utf8')
  await writeFile(join(publicRoot, 'sitemap.xml'), sitemap, 'utf8')
  await writeFile(join(publicRoot, 'robots.txt'), robots, 'utf8')
  return { pages: pages.length, projects: projects.length }
}

const result = await build()
console.log(`[geo] ${checkOnly ? 'validated' : 'generated'} ${result.pages} pages for ${result.projects} projects at ${siteUrl}`)
