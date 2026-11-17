export interface ProjectCandidate {
  id: string
  name: string
  category: string
  runtime: string
  description: string
  descriptionZh: string
  repo: string
  docsUrl?: string
  architecture: string
  installHint: string
  firstCommand: string
}

export const projectCandidates: ProjectCandidate[] = [
  {
    id: 'triggerix', name: 'triggerix', category: 'Event schema', runtime: 'TypeScript',
    description: 'A language-agnostic trigger schema for defining events, conditions, and actions.',
    descriptionZh: '用于定义事件、条件和动作的语言无关 trigger schema。',
    repo: 'https://github.com/triggerix-collective/triggerix',
    architecture: 'The project defines a portable schema boundary so producers can describe triggers without binding the event model to one runtime or language.',
    installHint: 'Clone the repository, install its workspace dependencies, and read the root README before choosing a package to build.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'synra', name: 'Synra', category: 'AI application platform', runtime: 'TypeScript',
    description: 'A Synra application and AI platform repository with a web-facing product surface.',
    descriptionZh: 'Synra 应用与 AI 平台仓库，包含面向 Web 的产品界面。',
    repo: 'https://github.com/synra-app/synra',
    architecture: 'The monorepo separates product applications, shared packages, and runtime integrations so the platform can evolve without putting every concern in one frontend.',
    installHint: 'Clone the repository, install workspace dependencies, and use the repository scripts to select the application you want to run.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'flash-debug', name: 'Flash Debug', category: 'Debugging SDK', runtime: 'TypeScript',
    description: 'A debugging SDK and inspector ecosystem for sending, viewing, and investigating runtime events.',
    descriptionZh: '用于发送、查看和分析运行时事件的调试 SDK 与 Inspector 生态。',
    repo: 'https://github.com/flash-debug-js/flash-debug',
    architecture: 'The repository combines producer-facing packages with an inspector surface, keeping event transport and visual inspection as separate runtime concerns.',
    installHint: 'Clone the monorepo, install dependencies, and inspect the package list before building an SDK or the inspector.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'flash-tunnel', name: 'flash-tunnel', category: 'Developer networking', runtime: 'TypeScript',
    description: 'A developer tool for exposing local services through a public preview tunnel.',
    descriptionZh: '用于把本地服务暴露为公网预览地址的开发者工具。',
    repo: 'https://github.com/flash-tunnel/flash-tunnel', docsUrl: 'https://flash-tunnel.imba97.dev',
    architecture: 'The tunnel separates the local client, public edge, and hostname/DNS support so a development server can be previewed without changing the application itself.',
    installHint: 'Clone the repository or read the project documentation site, then install the CLI workspace before running a local tunnel.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'flash-dns', name: 'flash-dns', category: 'DNS tooling', runtime: 'TypeScript',
    description: 'DNS and hostname support for the flash-tunnel development preview ecosystem.',
    descriptionZh: '为 flash-tunnel 开发预览生态提供 DNS 与 hostname 支持。',
    repo: 'https://github.com/flash-tunnel/flash-dns',
    architecture: 'The project owns hostname and DNS-facing behavior, keeping public naming concerns separate from the local tunnel client.',
    installHint: 'Clone the repository, install dependencies, and follow the root README for provider and environment requirements.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'harbor', name: 'harbor', category: 'Cargo release orchestration', runtime: 'Rust',
    description: 'Release orchestration for Cargo workspaces: compute what publishes in what order, preflight a tag, and drive the registry.',
    descriptionZh: '面向 Cargo workspace 的发布编排工具，用于计算发布顺序、预检 tag 并驱动 registry。',
    repo: 'https://github.com/imba97/harbor',
    architecture: 'Harbor treats a workspace release as a graph and policy problem: inspect members, calculate an order, preflight the tag, then execute the allowed release actions.',
    installHint: 'Clone the Rust repository and build the workspace with Cargo before trying a release workflow.',
    firstCommand: 'cargo build --workspace'
  },
  {
    id: 'bigseek', name: 'bigseek', category: 'Full-text search', runtime: 'Rust + WebAssembly',
    description: 'A CJK-aware bigram full-text index with a native builder and WebAssembly query runtime.',
    descriptionZh: '支持 CJK 的 bigram 全文索引，包含原生构建器和 WebAssembly 查询运行时。',
    repo: 'https://github.com/imba97/bigseek',
    architecture: 'The native side builds a compact binary index; the runtime reads that index for fast queries without requiring a server-side database.',
    installHint: 'Clone the Rust repository, build the workspace, and inspect the sample index flow before integrating it into another application.',
    firstCommand: 'cargo test --workspace'
  },
  {
    id: 'bigseek-js', name: 'bigseek-js', category: 'Browser search client', runtime: 'TypeScript + WebAssembly',
    description: 'A browser client for Bigseek indexes with a CJK bigram tokenizer and optional MiniSearch fallback.',
    descriptionZh: 'Bigseek 索引的浏览器客户端，提供 CJK bigram 分词和可选 MiniSearch fallback。',
    repo: 'https://github.com/imba97/bigseek-js',
    architecture: 'The client loads a compact index in the browser, uses the WebAssembly query engine when available, and can fall back to a JavaScript search path.',
    installHint: 'Clone the package, install dependencies, and run its tests before importing the browser client into an application.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'crate-plugin-kit', name: 'crate-plugin-kit', category: 'Rust plugin system', runtime: 'Rust',
    description: 'A Cargo-based plugin system that installs cdylib plugins from crates.io and loads them at runtime.',
    descriptionZh: '基于 Cargo 的插件系统，可从 crates.io 安装 cdylib 插件并在运行时加载。',
    repo: 'https://github.com/imba97/crate-plugin-kit',
    architecture: 'The host defines a runtime loading boundary while plugins are distributed as Rust packages with a dynamic-library artifact.',
    installHint: 'Clone the Rust workspace and run its tests before building a host or a plugin package.',
    firstCommand: 'cargo test --workspace'
  },
  {
    id: 'npm-plugin-kit', name: 'npm-plugin-kit', category: 'npm plugin system', runtime: 'TypeScript',
    description: 'A simple npm-based plugin system for installing and loading JavaScript or TypeScript capabilities.',
    descriptionZh: '简单的 npm 插件系统，用于安装和加载 JavaScript 或 TypeScript 能力。',
    repo: 'https://github.com/imba97/npm-plugin-kit',
    architecture: 'The package manager is the distribution boundary: a host resolves plugin packages and loads the exported capability through a stable contract.',
    installHint: 'Clone the repository, install workspace dependencies, and read the Quick Start before creating a plugin package.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'ontograph-cli', name: 'ontograph-cli', category: 'Knowledge graph CLI', runtime: 'TypeScript',
    description: 'An entity-relationship knowledge graph CLI for adding entities, relating them, and querying the graph.',
    descriptionZh: '实体关系知识图谱 CLI，用于添加实体、建立关系并查询图谱。',
    repo: 'https://github.com/imba97/ontograph-cli',
    architecture: 'The CLI separates entity creation, relation updates, and graph queries so the same graph can be used from scripts and interactive commands.',
    installHint: 'Clone the repository, install dependencies, and use the CLI help output to learn the graph storage and query commands.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'spotlight', name: 'spotlight', category: 'AI interaction tooling', runtime: 'Rust',
    description: 'A tiny Rust overlay that lets AI agents mark screen regions with labels so users know where to click.',
    descriptionZh: '一个 Rust overlay，让 AI agent 标记屏幕区域并告诉用户点击位置。',
    repo: 'https://github.com/imba97/spotlight',
    architecture: 'The tool bridges an agent-produced region description and a visible desktop overlay, keeping screen annotation separate from the agent that generated it.',
    installHint: 'Clone the Rust workspace, build the overlay, and inspect the example flow before connecting an agent.',
    firstCommand: 'cargo build --workspace'
  },
  {
    id: 'qmd-server', name: 'qmd-server', category: 'Query service', runtime: 'TypeScript + h3',
    description: 'A lightweight QMD query service that exposes the qmd CLI through a simple HTTP API.',
    descriptionZh: '轻量的 QMD 查询服务，通过简单 HTTP API 暴露 qmd CLI。',
    repo: 'https://github.com/imba97/qmd-server',
    architecture: 'The HTTP layer translates request parameters into qmd operations and returns a service-friendly result instead of requiring callers to manage a local CLI process directly.',
    installHint: 'Clone the repository, install dependencies, and inspect the server entrypoint and environment variables before starting it.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'offer-hunter', name: 'Offer Hunter', category: 'AI browser extension', runtime: 'TypeScript + Manifest V3',
    description: 'An AI browser extension that matches resumes to job descriptions and generates tailored outreach when the fit is high.',
    descriptionZh: 'AI 浏览器扩展，用于分析简历与岗位 JD 的匹配度，并在匹配度高时生成定制打招呼语。',
    repo: 'https://github.com/imba97/offer-hunter', docsUrl: 'https://github.com/imba97/offer-hunter/tree/main/docs',
    architecture: 'The extension separates site adapters, local IndexedDB storage, AI providers, background work, and browser-facing UI contexts.',
    installHint: 'Clone the repository, install dependencies, build the unpacked extension, and read the privacy policy before connecting an AI provider.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'fs-ctx', name: 'fs-ctx', category: 'Cross-process state', runtime: 'TypeScript',
    description: 'A reactive file-system context library for seamless cross-process data sharing.',
    descriptionZh: '用于跨进程共享数据的响应式文件系统上下文库。',
    repo: 'https://github.com/imba97/fs-ctx',
    architecture: 'The library turns file-backed state into a reactive context so separate processes can observe and exchange changes without a bespoke message protocol.',
    installHint: 'Clone the library, install dependencies, and run its tests before using the context adapter in another process.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'ext-kit', name: 'ext-kit', category: 'Browser extension toolkit', runtime: 'TypeScript + Manifest V3',
    description: 'Shared building blocks for Manifest V3 browser extension projects.',
    descriptionZh: '面向 Manifest V3 浏览器扩展项目的共享基础组件。',
    repo: 'https://github.com/imba97/ext-kit',
    architecture: 'The toolkit packages repeatable extension concerns such as storage, messaging, and context boundaries so product extensions can share tested primitives.',
    installHint: 'Clone the package workspace, install dependencies, and inspect the package boundaries before selecting a building block.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'unplugin-build-stamp', name: 'unplugin-build-stamp', category: 'Build tooling', runtime: 'TypeScript + unplugin',
    description: 'Inject Git hash, package version, and build time into an application as constants through unplugin.',
    descriptionZh: '通过 unplugin 将 Git hash、包版本和构建时间注入应用常量。',
    repo: 'https://github.com/imba97/unplugin-build-stamp',
    architecture: 'The plugin reads build metadata at bundler time and exposes stable constants to application code without making runtime Git calls.',
    installHint: 'Clone the package, install dependencies, and run the test suite before adding the plugin to a bundler configuration.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'stagetty', name: 'stagetty', category: 'CLI terminal UI', runtime: 'TypeScript',
    description: 'A TTY stage renderer with rolling log output for CLI tools.',
    descriptionZh: '为 CLI 工具提供滚动日志输出的 TTY stage renderer。',
    repo: 'https://github.com/imba97/stagetty',
    architecture: 'The renderer owns terminal presentation and rolling output while the calling CLI owns the work and event stream.',
    installHint: 'Clone the package, install dependencies, and run its tests before embedding the renderer in a command-line workflow.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'picgo-plugin-ftp-uploader', name: 'picgo-plugin-ftp-uploader', category: 'PicGo plugin', runtime: 'TypeScript',
    description: 'A PicGo uploader plugin for sending images through FTP.',
    descriptionZh: '通过 FTP 上传图片的 PicGo 插件。',
    repo: 'https://github.com/imba97/picgo-plugin-ftp-uploader',
    architecture: 'The plugin adapts PicGo upload events to an FTP destination and returns the uploaded asset URL to the host.',
    installHint: 'Clone the plugin, install dependencies, and read the configuration keys in the README before registering it with PicGo.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'picgo-plugin-sftp-uploader', name: 'picgo-plugin-sftp-uploader', category: 'PicGo plugin', runtime: 'TypeScript',
    description: 'A PicGo uploader plugin for sending images through SFTP.',
    descriptionZh: '通过 SFTP 上传图片的 PicGo 插件。',
    repo: 'https://github.com/imba97/picgo-plugin-sftp-uploader',
    architecture: 'The plugin maps PicGo upload inputs to an SFTP connection and returns the remote asset address to the host.',
    installHint: 'Clone the plugin, install dependencies, and configure the SFTP host, user, key, and remote path from the README.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'simple-sftp-uploader', name: 'simple-sftp-uploader', category: 'Build upload plugin', runtime: 'TypeScript + unplugin',
    description: 'A bundler-agnostic plugin for uploading a project dist directory to a remote server over SFTP.',
    descriptionZh: '与 bundler 无关的插件，用于通过 SFTP 把项目 dist 上传到远端服务器。',
    repo: 'https://github.com/imba97/simple-sftp-uploader',
    architecture: 'The plugin hooks into supported bundlers after build output exists, then transfers the output directory through SFTP.',
    installHint: 'Clone the plugin, install dependencies, and add it to the bundler used by the project you want to deploy.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'markdown-it-extra-link', name: 'markdown-it-extra-link', category: 'Markdown plugin', runtime: 'TypeScript',
    description: 'A markdown-it extension for typed inline links such as {link:post:123}.',
    descriptionZh: '为 markdown-it 增加 `{link:post:123}` 这类类型化行内链接。',
    repo: 'https://github.com/imba97/markdown-it-extra-link',
    architecture: 'The parser extension recognizes typed link syntax and delegates the final URL resolution to the host application.',
    installHint: 'Clone the package, install dependencies, and read the parser examples before adding the plugin to a Markdown pipeline.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'uno-colors', name: 'uno-colors', category: 'CSS tooling', runtime: 'TypeScript',
    description: 'A generator for UnoCSS color gradients.',
    descriptionZh: 'UnoCSS 颜色渐变生成器。',
    repo: 'https://github.com/imba97/uno-colors',
    architecture: 'The package converts color inputs into a deterministic UnoCSS-compatible palette rather than owning a full design system.',
    installHint: 'Clone the package, install dependencies, and run the examples or tests to see the generated palette shape.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'hexo-unocss', name: 'hexo-unocss', category: 'Hexo plugin', runtime: 'TypeScript',
    description: 'UnoCSS support for writing Hexo articles with utility classes.',
    descriptionZh: '让 Hexo 文章可以使用 UnoCSS 工具类。',
    repo: 'https://github.com/imba97/hexo-unocss',
    architecture: 'The plugin connects Hexo rendering with UnoCSS generation so article content can use utility classes without moving to a different site generator.',
    installHint: 'Clone the package, install dependencies, and follow the README integration steps in a test Hexo site.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'lodash-imports', name: 'lodash-imports', category: 'Vite tooling', runtime: 'TypeScript',
    description: 'Options for automatically importing Lodash APIs in an unplugin-auto-import setup.',
    descriptionZh: '为 unplugin-auto-import 提供 Lodash 自动导入配置。',
    repo: 'https://github.com/imba97/lodash-imports',
    architecture: 'The package provides import metadata and transform configuration while leaving module resolution to the host auto-import plugin.',
    installHint: 'Clone the package, install dependencies, and inspect the generated import behavior in the test fixture.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'matchinitx', name: 'matchinitx', category: 'Matching utility', runtime: 'TypeScript',
    description: 'A small matching utility for comparing structured values and patterns.',
    descriptionZh: '用于比较结构化值和模式的小型匹配工具。',
    repo: 'https://github.com/imba97/matchinitx',
    architecture: 'The library keeps matching as a pure function boundary so callers can compose it into command parsing or data selection without shared state.',
    installHint: 'Clone the package, install dependencies, and run the tests to understand supported pattern shapes.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'charbi-font', name: 'charbi-font', category: 'Font tooling', runtime: 'TypeScript',
    description: 'A Chinese font subsetting tool that scans source code and produces a smaller font package.',
    descriptionZh: '扫描源代码字符并生成精简中文字体包的工具。',
    repo: 'https://github.com/imba97/charbi-font',
    architecture: 'The tool derives a character set from project inputs, then runs a font subsetting step to reduce shipped font data.',
    installHint: 'Clone the tool, install dependencies, and run it against a small fixture before using it in a production build.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'nano-pastel', name: 'nano-pastel', category: 'Color utility', runtime: 'TypeScript',
    description: 'A parity-alternating pastel palette generator with hash-stable colors.',
    descriptionZh: '根据 parity 和 hash 生成稳定 pastel 调色板的工具。',
    repo: 'https://github.com/imba97/nano-pastel',
    architecture: 'The generator maps stable input values to palette groups while keeping adjacent groups visually separated.',
    installHint: 'Clone the package, install dependencies, and run the examples to inspect stable output for repeated inputs.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'uni-routefinity', name: 'uni-routefinity', category: 'uni-app routing', runtime: 'TypeScript',
    description: 'Infinite logical history with a bounded page stack for uni-app routing.',
    descriptionZh: '为 uni-app 提供无限逻辑历史与有界页面栈的路由工具。',
    repo: 'https://github.com/imba97/uni-routefinity',
    architecture: 'The router separates logical navigation history from the finite number of pages retained by the runtime.',
    installHint: 'Clone the package, install dependencies, and run the route examples in a uni-app test project.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'cross-craft', name: 'cross-craft', category: 'Cross-platform starter', runtime: 'TypeScript + Vite+',
    description: 'A Vite+ monorepo starter for Web, Capacitor, and Electron applications.',
    descriptionZh: '基于 Vite+ 的 Web、Capacitor、Electron 跨端 monorepo starter。',
    repo: 'https://github.com/imba97/cross-craft',
    architecture: 'The starter separates shared packages from platform applications so web and desktop targets can reuse the same product code.',
    installHint: 'Clone the starter, install workspace dependencies, and choose the target application before running the development script.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'bilibili-toy', name: 'bilibili-toy', category: 'Platform SDK', runtime: 'TypeScript',
    description: 'A typed SDK for the Bilibili Toy platform creator APIs.',
    descriptionZh: 'Bilibili Toy 平台 creator API 的类型化 SDK。',
    repo: 'https://github.com/imba97/bilibili-toy',
    architecture: 'The SDK keeps API request types and response models in a reusable package so creator tools do not duplicate protocol definitions.',
    installHint: 'Clone the SDK, install dependencies, and run its examples before connecting it to a creator application.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'bilibili-toy-starter', name: 'bilibili-toy-starter', category: 'Platform starter', runtime: 'Vue 3 + Vite+',
    description: 'A Vue 3 and Vite+ starter for building Bilibili Toy creator tools.',
    descriptionZh: '用于构建 Bilibili Toy creator 工具的 Vue 3 与 Vite+ starter。',
    repo: 'https://github.com/imba97/bilibili-toy-starter',
    architecture: 'The starter supplies the application shell and build conventions while the creator feature is added in the app layer.',
    installHint: 'Clone the starter, install dependencies, and start the development app before adding creator API calls.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'sonar', name: 'Sonar', category: 'HarmonyOS music client', runtime: 'HarmonyOS',
    description: 'A HarmonyOS music client compatible with SonicAPI and Subsonic servers such as Navidrome.',
    descriptionZh: '兼容 SonicAPI/Subsonic 服务器（如 Navidrome）的 HarmonyOS 音乐客户端。',
    repo: 'https://github.com/imba97/sonar',
    architecture: 'The client separates server protocol access from HarmonyOS presentation so self-hosted music services can be used from the device UI.',
    installHint: 'Open the project in the HarmonyOS toolchain and follow the repository setup instructions for the target SDK.',
    firstCommand: 'Read the repository README first'
  },
  {
    id: 'h2l-ranking', name: 'h2l-ranking', category: 'Ranking product', runtime: 'Vue',
    description: 'A “从夯到拉” ranking product for organizing items on a qualitative scale.',
    descriptionZh: '“从夯到拉”分级排行榜产品。',
    repo: 'https://github.com/imba97/h2l-ranking',
    architecture: 'The product keeps ranking data and presentation separate so the scoring model can be changed without rewriting the interface.',
    installHint: 'Clone the app, install dependencies, and run the local development server to inspect the ranking workflow.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'h2l-ranking-web', name: 'h2l-ranking-web', category: 'Ranking web app', runtime: 'Vue',
    description: 'The web version of the h2l-ranking product.',
    descriptionZh: 'h2l-ranking 的网页版。',
    repo: 'https://github.com/imba97/h2l-ranking-web',
    architecture: 'The web application owns browser-facing routing, rendering, and persisted ranking state for the ranking product.',
    installHint: 'Clone the web application, install dependencies, and run the local development script.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'btools-vue', name: 'Btools-vue', category: 'Browser extension', runtime: 'TypeScript + Vue',
    description: 'A Vue-based rewrite of the Btools browser extension.',
    descriptionZh: 'Btools 浏览器扩展的 Vue 重构版本。',
    repo: 'https://github.com/imba97/Btools-vue',
    architecture: 'The extension separates browser integration from Vue UI components so site-specific actions can evolve without coupling all screens together.',
    installHint: 'Clone the extension, install dependencies, and load the development build as an unpacked browser extension.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'btools-vitesse', name: 'btools-vitesse', category: 'Browser extension', runtime: 'TypeScript + Vue',
    description: 'A Bilibili-focused browser enhancement extension built around the Vitesse web extension stack.',
    descriptionZh: '基于 Vitesse WebExtension 技术栈、面向 Bilibili 的浏览器增强扩展。',
    repo: 'https://github.com/imba97/btools-vitesse',
    architecture: 'The extension combines content scripts, background logic, and a Vue interface to keep site enhancements isolated from browser lifecycle code.',
    installHint: 'Clone the extension, install dependencies, build it, and load the generated extension directory in a browser.',
    firstCommand: 'pnpm install'
  },
  {
    id: 'yyds-lang', name: 'yyds-lang', category: 'Programming language', runtime: 'TypeScript + Go WebAssembly',
    description: 'A YYDS language monorepo with grammar, AST, lexer, parser, semantic analysis, language service, and editor tooling.',
    descriptionZh: 'YYDS 语言 monorepo，包含 grammar、AST、lexer、parser、semantic、language service 和编辑器工具链。',
    repo: 'https://github.com/yyds-lang/yyds', docsUrl: 'https://github.com/yyds-lang/yyds/tree/main/docs',
    architecture: 'The workspace separates language packages from the Web Studio application, with a Web Worker and Go WebAssembly runtime for browser execution.',
    installHint: 'Clone the workspace, install dependencies, and use the website app or package-level scripts described in the README.',
    firstCommand: 'vp run website#dev'
  }
]
