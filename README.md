# Imba97 Projects GEO docs

VitePress documentation root for selected Imba97 projects. English is the default language; Chinese mirrors live under `docs/zh/`.

## Run locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm generate:project-pages
pnpm generate:geo
pnpm check:geo
pnpm build
pnpm preview
```

The GEO generator is TypeScript and runs through `esno`.

The generated discovery files are written to `docs/public/`:

- `llms.txt` — concise linked index
- `llms-full.txt` — full Markdown dump
- `summary.json` — structured project and page metadata
- `sitemap.xml` — English and Chinese routes
- `robots.txt` — crawler entry point

The default canonical hostname is `https://projects.imba97.dev`. Override it for another deployment target with `SITE_URL`:

```bash
SITE_URL=https://example.com pnpm build
```

The static host can use the included `docs/public/CNAME` for `projects.imba97.dev`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site with Node 24 and pnpm 12, validates the GEO index, uploads `docs/.vitepress/dist`, and deploys it through the GitHub Pages environment.

In the repository settings, open **Pages** and set **Build and deployment → Source** to **GitHub Actions**. Pushes to `main` and manual workflow runs then deploy the custom-domain site from `docs/public/CNAME`.
