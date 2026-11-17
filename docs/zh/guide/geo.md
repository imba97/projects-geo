---
title: 这套 GEO 索引如何工作
description: 了解 VitePress 文档站如何通过双语页面、结构化元数据和自动生成文件服务搜索引擎与语言模型。
type: guide
lang: zh-CN
---

# 这套 GEO 索引如何工作

这是一个以 VitePress 为根站点的文档索引，英文默认，中文统一放在 `/zh/`。页面围绕可回答的搜索意图组织：项目是什么、如何开始、如何运行、边界在哪里。

## 页面信号

- 每页 frontmatter 都有简洁的 `title` 与 `description`。
- 构建时注入 canonical、`hreflang`、Open Graph 和 JSON-LD；项目页使用 `TechArticle`，站点页使用 `WebSite`。
- 项目页面写明可复制命令、版本要求、运行边界、隐私与明确不做的事情。
- 中英文保持相同信息架构，爬虫可以稳定匹配翻译页。

## 自动生成入口

执行 `pnpm generate:geo` 会通过 `esno` 运行 TypeScript 生成器，扫描 Markdown 并写入 `docs/public/`：

| 文件 | 用途 |
| --- | --- |
| `llms.txt` | 项目与页面的短索引。 |
| `/projects/<id>/llms.txt` | 单个项目的独立机器索引，包含该项目的中英文页面。 |
| `llms-full.txt` | 带 URL、语言、项目和描述的完整 Markdown。 |
| `summary.json` | 结构化站点、项目、页面和 feed 元数据。 |
| `sitemap.xml` | 全部中英文路由。 |
| `robots.txt` | 允许抓取并指向 sitemap。 |

两个纯文本 LLM 文件会以带 BOM 的 UTF-8 写入，并通过显式的 `charset=utf-8` 响应头提供，避免浏览器或文本查看器误用旧编码。

部署时可以设置 `SITE_URL` 覆盖 canonical 域名，默认是 `https://projects.imba97.dev`。

CI 中可以执行 `pnpm check:geo`，校验现有 `summary.json` 和 `llms.txt` 是否覆盖所有源页面，且不会改写生成文件。

## 新增项目的内容约定

中英文各增加项目总览、快速开始、架构、参考手册、约束/安全、故障排查和 FAQ；如果源仓库有足够事实，再增加项目自己的设计决策、集成或运维页面。每页首段直接回答一个主要问题，给出稳定 canonical 路由，并链接到源仓库。完成后执行 `pnpm generate:geo` 与 `pnpm build`。
