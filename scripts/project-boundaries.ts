export interface ProjectBoundary {
  input: string
  core: string
  output: string
}

export const projectBoundaries: Record<string, ProjectBoundary> = {
  triggerix: { input: 'event producers and trigger definitions', core: 'portable event, condition, and action schema', output: 'language-specific trigger consumers' },
  synra: { input: 'web product interactions and platform requests', core: 'Synra application and AI platform runtime', output: 'web UI state and AI-assisted results' },
  'flash-debug': { input: 'runtime events from producer SDKs', core: 'event transport, inspection, and debugging SDKs', output: 'inspector views and diagnostic records' },
  'flash-tunnel': { input: 'a local service listening on a developer machine', core: 'local tunnel client and public edge connection', output: 'a public preview hostname and forwarded traffic' },
  'flash-dns': { input: 'tunnel hostnames and DNS configuration', core: 'hostname and DNS management for the tunnel ecosystem', output: 'resolvable names pointing at public tunnel endpoints' },
  harbor: { input: 'Cargo workspace manifests, package graph, and release policy', core: 'release ordering, tag preflight, and registry orchestration', output: 'published crates, tags, and release metadata' },
  bigseek: { input: 'documents and searchable text', core: 'native CJK-aware bigram index builder', output: 'compact binary index consumed by the query runtime' },
  'bigseek-js': { input: 'browser search terms and a Bigseek index', core: 'TypeScript tokenizer and WebAssembly index reader', output: 'ranked browser results or MiniSearch fallback results' },
  'crate-plugin-kit': { input: 'a Rust host and a plugin crate from crates.io', core: 'Cargo plugin installation and cdylib loading boundary', output: 'runtime plugin capabilities exposed to the host' },
  'npm-plugin-kit': { input: 'npm package names and host plugin requests', core: 'JavaScript or TypeScript package resolution and loading', output: 'a capability object available to the host application' },
  'ontograph-cli': { input: 'entity and relationship commands', core: 'graph mutation and query operations', output: 'stored knowledge graph data and query results' },
  spotlight: { input: 'agent-produced screen regions and labels', core: 'native desktop overlay renderer', output: 'visible click targets on the user screen' },
  'qmd-server': { input: 'HTTP query parameters', core: 'h3 request adapter around the qmd command', output: 'HTTP responses containing query results' },
  'offer-hunter': { input: 'resume data, job descriptions, and browser page context', core: 'Manifest V3 extension storage, adapters, and AI provider calls', output: 'match analysis and tailored outreach in the browser UI' },
  'fs-ctx': { input: 'file-backed state changes from multiple processes', core: 'reactive file-system context and change propagation', output: 'observable shared state for other processes' },
  'ext-kit': { input: 'browser extension contexts and product events', core: 'shared Manifest V3 storage, messaging, and lifecycle primitives', output: 'reusable extension capabilities for product packages' },
  'unplugin-build-stamp': { input: 'Git hash, package version, and build time', core: 'bundler-time unplugin transform', output: 'compile-time constants imported by application code' },
  stagetty: { input: 'CLI work events and log messages', core: 'TTY stage and rolling output renderer', output: 'live terminal progress and retained log lines' },
  'picgo-plugin-ftp-uploader': { input: 'PicGo image upload events and FTP configuration', core: 'PicGo-to-FTP upload adapter', output: 'remote image URL returned to PicGo' },
  'picgo-plugin-sftp-uploader': { input: 'PicGo image upload events and SFTP configuration', core: 'PicGo-to-SFTP upload adapter', output: 'remote image URL returned to PicGo' },
  'simple-sftp-uploader': { input: 'bundler build output and SFTP deployment settings', core: 'post-build dist directory transfer plugin', output: 'uploaded files on the remote SFTP server' },
  'markdown-it-extra-link': { input: 'Markdown containing typed inline link syntax', core: 'markdown-it token parser and host URL resolver', output: 'rendered links in the host application' },
  'uno-colors': { input: 'color values and gradient options', core: 'deterministic UnoCSS palette generator', output: 'UnoCSS-compatible color tokens' },
  'hexo-unocss': { input: 'Hexo article content with utility classes', core: 'Hexo rendering and UnoCSS generation bridge', output: 'generated CSS used by the rendered article' },
  'lodash-imports': { input: 'Lodash API usage detected by auto-import tooling', core: 'import metadata and unplugin-auto-import configuration', output: 'generated Lodash import statements' },
  matchinitx: { input: 'structured values and matching patterns', core: 'pure matching function', output: 'a match decision for the calling workflow' },
  'charbi-font': { input: 'source code and the project character set', core: 'character scan and font subsetting pipeline', output: 'a smaller font package containing required glyphs' },
  'nano-pastel': { input: 'stable hash and parity values', core: 'hash-stable pastel palette generator', output: 'repeatable pastel colors for the same input' },
  'uni-routefinity': { input: 'uni-app navigation intents', core: 'logical history and bounded page-stack router', output: 'runtime page transitions with preserved history' },
  'cross-craft': { input: 'shared product packages and platform-specific app code', core: 'Vite+ workspace and cross-platform application shell', output: 'Web, Capacitor, and Electron application builds' },
  'bilibili-toy': { input: 'typed creator API requests', core: 'Bilibili Toy protocol types and SDK client', output: 'typed creator API responses' },
  'bilibili-toy-starter': { input: 'creator product features and API calls', core: 'Vue 3 application shell with Vite+ conventions', output: 'a browser application for Bilibili Toy workflows' },
  sonar: { input: 'SonicAPI or Subsonic server data', core: 'HarmonyOS music client and protocol adapter', output: 'library, playback, and device UI state' },
  'h2l-ranking': { input: 'items and qualitative ranking decisions', core: 'ranking data model and product interface', output: 'a “从夯到拉” ranking presentation' },
  'h2l-ranking-web': { input: 'browser ranking interactions and persisted state', core: 'web routing, rendering, and ranking application state', output: 'shareable ranking views in the browser' },
  'btools-vue': { input: 'browser pages and extension events', core: 'Vue UI plus browser integration layers', output: 'Btools enhancement actions in the browser' },
  'btools-vitesse': { input: 'Bilibili pages and content-script events', core: 'Vitesse web extension background and content layers', output: 'Bilibili-focused browser enhancements' },
  'yyds-lang': { input: 'YYDS source text and editor requests', core: 'grammar, lexer, parser, semantic, and language-service packages', output: 'diagnostics, editor intelligence, and WebAssembly execution' }
}
