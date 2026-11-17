---
title: Mail Peon 架构 — MV3、中继、AI 与 IndexedDB
description: Mail Peon 将 MV3 后台、浏览器 UI、本机中继、content script、AI 提供商和 IndexedDB 分开。
project: mail-peon
type: architecture
lang: zh-CN
---

# Mail Peon 架构

Mail Peon 将需要权限的工作放在后台 service worker，UI 只负责渲染与通信。本机中继只承担 IMAP 传输，不是云端邮件服务。

## 运行拓扑

```text
Gmail OAuth ───────────────┐
IMAP ← TLS ← 本机中继 ←───┼─ WebSocket ─ 后台 service worker
                           │                         │
                    Popup / Options / Sidepanel ←──┤
                                                     ├─ IndexedDB
                                                     ├─ AI 提供商
                                                     └─ toast + clipboard fallback
```

## 上下文职责

| 上下文 | 职责 |
| --- | --- |
| Background service worker | 连接邮箱、解析邮件、调用 AI、写 IndexedDB、更新 badge、发送 toast。 |
| 本机 IMAP 中继 | 维护 `IDLE` 长连接并搬运 WebSocket/TCP 字节，不解析正文。 |
| Popup | 展示最近的重要邮件。 |
| Sidepanel | 展开展示邮件流和过滤项。 |
| Options | 编辑账号、AI、提示词、排除项和通用设置。 |
| Content script | 用隔离的顶部 toast 反馈，并在页面焦点上下文重试复制。 |

## 数据与隐私边界

账号、规则和邮件存储在扩展 IndexedDB。极简模式不保存正文。启用 AI 时只向用户配置的提供商发送任务所需文本。IMAP 中继因为要终止 TLS 能看到解密字节，应绑定 localhost 并保护 token。

## 同步语义

首次连接只记录游标，不下载历史；之后增量同步，每批最多 50 封。IMAP `UIDVALIDITY` 变化时会重置到最新位置并提醒用户。
