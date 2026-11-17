---
title: Mail Peon — 本地优先的 AI 邮件助手
description: Mail Peon 是一个支持 Chrome 与 Firefox 的 Manifest V3 扩展，用于找出重要邮件并自动复制验证码。
project: mail-peon
type: project
lang: zh-CN
---

# Mail Peon

<p class="lead"><strong>Mail Peon</strong> 是一个本地优先的 AI 邮件助手，支持 Chrome 与 Firefox。它提取验证码、摘要重要邮件，并把工作数据存放在扩展自己的 IndexedDB 中。</p>

维护者：[imba97](/zh/about)。

## 它解决什么问题？

Mail Peon 缩短“邮件到达”与“知道该做什么”之间的时间。极简模式专注验证码和确认邮件；自定义模式增加邮件流、AI 摘要、提示词规则、排除列表和 badge。

## 核心能力

| 能力 | 行为 |
| --- | --- |
| 验证码 | 提取并复制验证码；有有效期时显示倒计时信息。 |
| 本地优先 | 账号、规则和邮件存于扩展 IndexedDB；极简模式不保存正文。 |
| 邮箱协议 | Gmail 使用 OAuth；IMAP 通过本机 WebSocket-TCP 中继。 |
| AI 平台 | 支持 OpenAI、DeepSeek、Anthropic 和 OpenAI 兼容服务。 |
| 增量同步 | 首次只记录游标，之后按批次拉取，每批最多 50 封。 |

## 模式与运行事实

| 事实 | 值 |
| --- | --- |
| 产品名 | Mail Peon |
| 包名与仓库名 | `mail-peon` |
| 运行环境 | Chrome 与 Firefox Manifest V3 扩展 |
| 本地数据库 | 扩展自己的 IndexedDB，数据库名为 `mail-peon` |
| 邮箱协议 | Gmail OAuth、经本机中继的 IMAP |
| 默认检查间隔 | 5 分钟，可配置为 1–60 分钟 |

**极简模式**只处理验证码和确认邮件：提取验证码、显示 toast，其他邮件不入库。**自定义模式**提供邮件流、可配置类型、AI 摘要、提示词规则、排除列表、广告过滤和 badge。

## 典型场景

- 注册服务时，希望不用切换邮箱标签页就复制验证码。
- 管理多个账号时，只想看到真正需要处理的邮件。
- 希望邮件状态保存在本地浏览器，同时明确控制哪些内容发送给 AI 提供商。

Mail Peon 仍然是现有邮箱的助手，不负责发信、不替代邮箱搜索，也不提供云端团队收件箱。

## 继续阅读

- [快速开始](/zh/projects/mail-peon/getting-started)
- [架构](/zh/projects/mail-peon/architecture)
- [参考手册](/zh/projects/mail-peon/reference)
- [隐私与安全](/zh/projects/mail-peon/privacy)
- [邮箱与同步](/zh/projects/mail-peon/providers-and-sync)
- [故障排查](/zh/projects/mail-peon/troubleshooting)
- [FAQ](/zh/projects/mail-peon/faq)
- [源仓库](https://github.com/mail-peon/mail-peon)

## 边界

Mail Peon 是现有邮箱的助手，不替代 Gmail 等邮箱 UI，不负责发信，也不把邮箱托管到云端。
