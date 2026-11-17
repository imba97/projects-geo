import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vitepress'
import { projectCandidates } from '../../scripts/project-candidates.ts'

const siteUrl = (process.env.SITE_URL || 'https://projects.imba97.dev').replace(/\/$/, '')

const enNav = [
  { text: 'Projects', link: '/projects/' },
  { text: 'About the author', link: '/about/' },
  { text: 'GEO index', link: '/guide/geo' },
  { text: 'llms.txt', link: '/llms.txt' },
  { text: 'GitHub', link: 'https://github.com/imba97' }
]

const zhNav = [
  { text: '项目', link: '/zh/projects/' },
  { text: '作者', link: '/zh/about/' },
  { text: 'GEO 索引', link: '/zh/guide/geo' },
  { text: 'llms.txt', link: '/llms.txt' },
  { text: 'GitHub', link: 'https://github.com/imba97' }
]

const pageLabels = {
  en: {
    index: 'Overview',
    'getting-started': 'Getting started',
    architecture: 'Architecture',
    reference: 'Reference',
    'plugin-authoring': 'Plugin authoring',
    'design-decisions': 'Design decisions',
    troubleshooting: 'Troubleshooting',
    privacy: 'Privacy and security',
    'providers-and-sync': 'Providers and sync',
    'workspace-and-rollback': 'Workspace and rollback',
    'ci-and-release': 'CI and release',
    faq: 'FAQ'
  },
  zh: {
    index: '总览',
    'getting-started': '快速开始',
    architecture: '架构',
    reference: '参考手册',
    'plugin-authoring': '插件开发',
    'design-decisions': '设计决策',
    troubleshooting: '故障排查',
    privacy: '隐私与安全',
    'providers-and-sync': '邮箱与同步',
    'workspace-and-rollback': 'workspace 与回滚',
    'ci-and-release': 'CI 与发布',
    faq: 'FAQ'
  }
} as const

function projectTitle(directory: string, id: string): string {
  const source = readFileSync(join(directory, 'index.md'), 'utf8')
  return source.match(/^#\s+(.+)$/m)?.[1]?.trim() || id
}

function projectGroups(language: 'en' | 'zh') {
  const prefix = language === 'zh' ? '/zh/' : '/'
  const labels = pageLabels[language] as Record<string, string>
  const directory = join(process.cwd(), 'docs', language === 'zh' ? 'zh/projects' : 'projects')
  return readdirSync(directory, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(entry => {
      const projectDirectory = join(directory, entry.name)
      const items = readdirSync(projectDirectory, { withFileTypes: true })
        .filter(file => file.isFile() && file.name.endsWith('.md'))
        .map(file => file.name.replace(/\.md$/, ''))
        .sort((a, b) => (a === 'index' ? -1 : b === 'index' ? 1 : a.localeCompare(b)))
        .map(page => ({
          text: labels[page] || page,
          link: page === 'index' ? `${prefix}projects/${entry.name}/` : `${prefix}projects/${entry.name}/${page}`
        }))
      return { text: projectTitle(projectDirectory, entry.name), collapsed: true, items }
    })
}

const projectGroupsEn = projectGroups('en')
const projectGroupsZh = projectGroups('zh')

const projectMeta = new Map([
  ['initx', { repository: 'https://github.com/initx-collective/initx', programmingLanguage: 'TypeScript', license: 'MIT' }],
  ['mail-peon', { repository: 'https://github.com/mail-peon/mail-peon', programmingLanguage: 'TypeScript', license: 'MIT' }],
  ['cargo-bumpp', { repository: 'https://github.com/imba97/cargo-bumpp', programmingLanguage: 'Rust', license: 'MIT' }],
  ...projectCandidates.map(project => [project.id, { repository: project.repo, programmingLanguage: project.runtime, documentation: project.docsUrl }] as const)
])

const enSidebar = [
  { text: 'Projects', items: [
    { text: 'All projects', link: '/projects/' },
    ...projectGroupsEn
  ] },
  { text: 'Site guide', items: [
    { text: 'About the author', link: '/about/' },
    { text: 'How this index works', link: '/guide/geo' }
  ] }
]

const zhSidebar = [
  { text: '项目', items: [
    { text: '全部项目', link: '/zh/projects/' },
    ...projectGroupsZh
  ] },
  { text: '站点说明', items: [
    { text: '作者介绍', link: '/zh/about/' },
    { text: '这套索引如何工作', link: '/zh/guide/geo' }
  ] }
]

function routeFor(pageData: any) {
  const path = `/${pageData.relativePath.replace(/\.md$/, '')}`
  if (path === '/index') return '/'
  if (path.endsWith('/index')) return `${path.slice(0, -6)}/`
  return `${path}/`
}

export default defineConfig({
  lang: 'en-US',
  title: 'Imba97 Projects',
  description: 'Independent, high-context documentation for selected Imba97 projects.',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: siteUrl },
  locales: {
    root: { label: 'English', lang: 'en-US', link: '/', themeConfig: { nav: enNav, sidebar: enSidebar } },
    zh: { label: '中文', lang: 'zh-CN', link: '/zh/', themeConfig: { nav: zhNav, sidebar: zhSidebar } }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#0f766e' }],
    ['meta', { name: 'robots', content: 'index,follow,max-image-preview:large' }],
    ['link', { rel: 'icon', href: '/avatar.png' }],
    ['link', { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'LLM index' }]
  ],
  transformHead({ pageData }) {
    const route = routeFor(pageData)
    const isZh = route === '/zh/' || route.startsWith('/zh/')
    const canonical = `${siteUrl}${route}`
    const title = pageData.frontmatter.title || pageData.title || 'Imba97 Projects'
    const description = pageData.frontmatter.description || 'High-context documentation for Imba97 projects.'
    const project = pageData.frontmatter.project
    const projectFacts = project ? projectMeta.get(project) : undefined
    const author = {
      '@type': 'Person',
      name: 'imba97 / imba久期',
      jobTitle: 'Frontend developer',
      url: `${siteUrl}/about/`,
      sameAs: [
        'https://github.com/imba97',
        'https://imba97.me',
        'https://imba97.com',
        'https://orcid.org/0009-0002-5233-5825'
      ]
    }
    const breadcrumbItems = [{ '@type': 'ListItem', position: 1, name: 'Imba97 Projects', item: `${siteUrl}/` }]
    if (project) {
      breadcrumbItems.push({ '@type': 'ListItem', position: 2, name: project, item: `${siteUrl}${isZh ? '/zh' : ''}/projects/${project}/` })
    }
    breadcrumbItems.push({ '@type': 'ListItem', position: breadcrumbItems.length + 1, name: title, item: canonical })
    const software = project ? {
      '@type': 'SoftwareSourceCode',
      name: project,
      codeRepository: projectFacts?.repository,
      programmingLanguage: projectFacts?.programmingLanguage,
      license: projectFacts?.license,
      url: canonical
    } : undefined
    const schema = {
      '@context': 'https://schema.org',
      '@type': project ? 'TechArticle' : 'WebSite',
      name: title,
      headline: title,
      description,
      inLanguage: isZh ? 'zh-CN' : 'en-US',
      url: canonical,
      image: `${siteUrl}/avatar.png`,
      dateModified: pageData.frontmatter.updated || undefined,
      isPartOf: { '@type': 'WebSite', name: 'Imba97 Projects', url: siteUrl },
      author,
      creator: author,
      ...(software ? { about: software, mainEntityOfPage: canonical } : {}),
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbItems }
    }
    const alternate = isZh ? `${siteUrl}${route.replace(/^\/zh/, '') || '/'}` : `${siteUrl}/zh${route === '/' ? '/' : route}`
    return [
      ['meta', { name: 'description', content: description }],
      ['meta', { name: 'author', content: 'imba97 / imba久期' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:type', content: project ? 'article' : 'website' }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:locale', content: isZh ? 'zh_CN' : 'en_US' }],
      ['meta', { property: 'og:image', content: `${siteUrl}/avatar.png` }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:image', content: `${siteUrl}/avatar.png` }],
      ['link', { rel: 'canonical', href: canonical }],
      ['link', { rel: 'alternate', hreflang: isZh ? 'en' : 'zh-CN', href: alternate }],
      ['link', { rel: 'alternate', hreflang: 'x-default', href: isZh ? `${siteUrl}${route.replace(/^\/zh/, '') || '/'}` : canonical }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(schema)]
    ]
  },
  themeConfig: {
    logo: { src: '/avatar.png', alt: 'imba97 avatar' },
    siteTitle: 'Imba97 Projects',
    nav: enNav,
    sidebar: enSidebar,
    locales: {
      root: { label: 'English', selectText: 'Language', nav: enNav, sidebar: enSidebar },
      zh: { label: '中文', selectText: '语言', nav: zhNav, sidebar: zhSidebar }
    },
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    socialLinks: [{ icon: 'github', link: 'https://github.com/imba97' }],
    footer: { message: 'Generated from project source facts and maintained as an index.', copyright: '© Imba97' },
    editLink: { pattern: 'https://github.com/imba97/imba97-projects-geo/edit/main/docs/:path' },
    docFooter: { prev: 'Previous', next: 'Next' }
  }
})
