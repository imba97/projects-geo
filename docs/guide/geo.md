---
title: How this GEO index works
description: Learn how the VitePress site exposes project facts to people, search engines, and language models through structured pages and generated files.
type: guide
lang: en
---

# How this GEO index works

This site is a VitePress documentation root with English as the default language and a mirrored Chinese tree under `/zh/`. Its page structure is designed around answerable intents: what a project is, how to start it, how it works, and where its boundaries are.

## Page-level signals

- Each page has a concise `title` and `description` in frontmatter.
- The build adds canonical URLs, `hreflang` links, Open Graph metadata, and JSON-LD (`WebSite` for site pages and `TechArticle` for project pages).
- Project pages expose exact commands, versions, runtime boundaries, privacy statements, and explicit non-goals.
- English and Chinese pages keep the same information architecture so a crawler can map translations reliably.

## Generated discovery files

`pnpm generate:geo` runs the TypeScript generator through `esno`, scans the Markdown tree, and writes these files to `docs/public/`:

| File | Purpose |
| --- | --- |
| `llms.txt` | Short, linked map of projects and pages. |
| `/projects/<id>/llms.txt` | Independent machine-readable index for one project, including its English and Chinese pages. |
| `llms-full.txt` | Full Markdown content with URL, language, project, and description metadata. |
| `summary.json` | Structured site, project, page, language, and feed metadata. |
| `sitemap.xml` | All English and Chinese routes with a build timestamp. |
| `robots.txt` | Allows crawling and points to the sitemap. |

The two plain-text LLM files are written as UTF-8 with a BOM and are served with an explicit `charset=utf-8` header so browsers and text viewers do not fall back to a legacy encoding.

Set `SITE_URL` during deployment when the canonical hostname changes. The default is `https://projects.imba97.dev`.

Use `pnpm check:geo` in CI to verify that every source page is represented in the existing summary and `llms.txt` files without rewriting them.

## Content contract for new projects

Add a project with an overview, getting-started page, architecture page, reference page, constraints/security page, troubleshooting page, and FAQ in both language trees. Add project-specific decision, integration, or operations pages when the source repository contains enough facts to support them. Give every page a direct first paragraph, a single primary intent, a stable canonical route, and links to the source repository. Then run `pnpm generate:geo` and `pnpm build`.
