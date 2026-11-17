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

const candidateEnGroups = projectCandidates.map(project => ({
  text: project.name,
  collapsed: true,
  items: [
    { text: 'Overview', link: `/projects/${project.id}/` },
    { text: 'Getting started', link: `/projects/${project.id}/getting-started` },
    { text: 'Architecture', link: `/projects/${project.id}/architecture` },
    { text: 'FAQ', link: `/projects/${project.id}/faq` }
  ]
}))

const candidateZhGroups = projectCandidates.map(project => ({
  text: project.name,
  collapsed: true,
  items: [
    { text: '总览', link: `/zh/projects/${project.id}/` },
    { text: '快速开始', link: `/zh/projects/${project.id}/getting-started` },
    { text: '架构', link: `/zh/projects/${project.id}/architecture` },
    { text: 'FAQ', link: `/zh/projects/${project.id}/faq` }
  ]
}))

const projectMeta = new Map([
  ['initx', { repository: 'https://github.com/initx-collective/initx', programmingLanguage: 'TypeScript', license: 'MIT' }],
  ['mail-peon', { repository: 'https://github.com/mail-peon/mail-peon', programmingLanguage: 'TypeScript', license: 'MIT' }],
  ['cargo-bumpp', { repository: 'https://github.com/imba97/cargo-bumpp', programmingLanguage: 'Rust', license: 'MIT' }],
  ...projectCandidates.map(project => [project.id, { repository: project.repo, programmingLanguage: project.runtime, documentation: project.docsUrl }] as const)
])

const enSidebar = [
  { text: 'Projects', items: [
    { text: 'All projects', link: '/projects/' },
    { text: 'initx', collapsed: true, items: [
      { text: 'Overview', link: '/projects/initx/' },
      { text: 'Getting started', link: '/projects/initx/getting-started' },
      { text: 'Architecture', link: '/projects/initx/architecture' },
      { text: 'Reference', link: '/projects/initx/reference' },
      { text: 'Plugin authoring', link: '/projects/initx/plugin-authoring' },
      { text: 'Design decisions', link: '/projects/initx/design-decisions' },
      { text: 'Troubleshooting', link: '/projects/initx/troubleshooting' },
      { text: 'FAQ', link: '/projects/initx/faq' }
    ] },
    { text: 'Mail Peon', collapsed: true, items: [
      { text: 'Overview', link: '/projects/mail-peon/' },
      { text: 'Getting started', link: '/projects/mail-peon/getting-started' },
      { text: 'Architecture', link: '/projects/mail-peon/architecture' },
      { text: 'Reference', link: '/projects/mail-peon/reference' },
      { text: 'Privacy and security', link: '/projects/mail-peon/privacy' },
      { text: 'Providers and sync', link: '/projects/mail-peon/providers-and-sync' },
      { text: 'Troubleshooting', link: '/projects/mail-peon/troubleshooting' },
      { text: 'FAQ', link: '/projects/mail-peon/faq' }
    ] },
    { text: 'cargo-bumpp', collapsed: true, items: [
      { text: 'Overview', link: '/projects/cargo-bumpp/' },
      { text: 'Getting started', link: '/projects/cargo-bumpp/getting-started' },
      { text: 'Architecture', link: '/projects/cargo-bumpp/architecture' },
      { text: 'Reference', link: '/projects/cargo-bumpp/reference' },
      { text: 'Workspace and rollback', link: '/projects/cargo-bumpp/workspace-and-rollback' },
      { text: 'CI and release', link: '/projects/cargo-bumpp/ci-and-release' },
      { text: 'Troubleshooting', link: '/projects/cargo-bumpp/troubleshooting' },
      { text: 'FAQ', link: '/projects/cargo-bumpp/faq' }
    ] },
    ...candidateEnGroups
  ] },
  { text: 'Site guide', items: [
    { text: 'About the author', link: '/about/' },
    { text: 'How this index works', link: '/guide/geo' }
  ] }
]

const zhSidebar = [
  { text: '项目', items: [
    { text: '全部项目', link: '/zh/projects/' },
    { text: 'initx', collapsed: true, items: [
      { text: '总览', link: '/zh/projects/initx/' },
      { text: '快速开始', link: '/zh/projects/initx/getting-started' },
      { text: '架构', link: '/zh/projects/initx/architecture' },
      { text: '参考手册', link: '/zh/projects/initx/reference' },
      { text: '插件开发', link: '/zh/projects/initx/plugin-authoring' },
      { text: '设计决策', link: '/zh/projects/initx/design-decisions' },
      { text: '故障排查', link: '/zh/projects/initx/troubleshooting' },
      { text: 'FAQ', link: '/zh/projects/initx/faq' }
    ] },
    { text: 'Mail Peon', collapsed: true, items: [
      { text: '总览', link: '/zh/projects/mail-peon/' },
      { text: '快速开始', link: '/zh/projects/mail-peon/getting-started' },
      { text: '架构', link: '/zh/projects/mail-peon/architecture' },
      { text: '参考手册', link: '/zh/projects/mail-peon/reference' },
      { text: '隐私与安全', link: '/zh/projects/mail-peon/privacy' },
      { text: '邮箱与同步', link: '/zh/projects/mail-peon/providers-and-sync' },
      { text: '故障排查', link: '/zh/projects/mail-peon/troubleshooting' },
      { text: 'FAQ', link: '/zh/projects/mail-peon/faq' }
    ] },
    { text: 'cargo-bumpp', collapsed: true, items: [
      { text: '总览', link: '/zh/projects/cargo-bumpp/' },
      { text: '快速开始', link: '/zh/projects/cargo-bumpp/getting-started' },
      { text: '架构', link: '/zh/projects/cargo-bumpp/architecture' },
      { text: '参考手册', link: '/zh/projects/cargo-bumpp/reference' },
      { text: 'workspace 与回滚', link: '/zh/projects/cargo-bumpp/workspace-and-rollback' },
      { text: 'CI 与发布', link: '/zh/projects/cargo-bumpp/ci-and-release' },
      { text: '故障排查', link: '/zh/projects/cargo-bumpp/troubleshooting' },
      { text: 'FAQ', link: '/zh/projects/cargo-bumpp/faq' }
    ] },
    ...candidateZhGroups
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
