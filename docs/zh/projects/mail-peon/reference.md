---
title: Mail Peon 参考手册 — 模式、设置与邮件生命周期
description: Mail Peon 的模式、账号、AI 提供商、提示词规则、邮件状态和浏览器 UI 上下文参考。
project: mail-peon
type: reference
lang: zh-CN
---

# Mail Peon 参考手册

## 产品名与包名

| 名称 | 含义 |
| --- | --- |
| Mail Peon | 扩展 UI 和 manifest 中的产品名。 |
| `mail-peon` | 仓库、包、IndexedDB、日志和消息通道名称。 |

## 模式

| 模式 | 邮件存储行为 | 主要输出 |
| --- | --- | --- |
| 极简 | 无关邮件丢弃，不保存正文。 | 验证码、确认动作、顶部 toast。 |
| 自定义 | 本地保存可配置邮件记录和摘要。 | 邮件流、AI 摘要、badge、过滤器、提示词规则。 |

模式切换不需要重新安装，也不会自动清空已有本地数据。

## 账号字段

账号包含 provider 和连接状态。Gmail 使用 OAuth client 与 token；IMAP 使用 host、port、TLS、用户名、密码、relay URL 和增量游标。

## 提示词规则

规则可以匹配发件人地址、域名或正则，并为该来源提供专属指令。规则按 priority 排序，数值越小越先执行；排除项可以阻止来源进入扩展。

## 邮件生命周期

```text
provider → 拉取 → 解析 → 分类 → AI 提取/摘要 → 本地存储 → UI/toast
```

极简模式可能在提取和 toast 后结束；自定义模式可以保存本地记录、将删除邮件放入可恢复回收站，再按需要彻底删除。

## UI 上下文

| 上下文 | 主要职责 |
| --- | --- |
| Popup | 最近的重要邮件。 |
| Sidepanel | 展开邮件流和过滤。 |
| Options | 账号、AI、规则、排除和通用设置。 |
| Content script | 隔离 toast 和剪贴板 fallback。 |
