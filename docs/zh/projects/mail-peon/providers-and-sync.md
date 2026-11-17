---
title: Mail Peon 邮箱与同步 — Gmail、IMAP、游标与批次
description: 对比 Mail Peon 的 Gmail 和 IMAP 连接路径，说明首次同步、游标、批量拉取和 UIDVALIDITY 行为。
project: mail-peon
type: operations
lang: zh-CN
---

# Mail Peon 邮箱与同步

## 协议对比

| 提供商 | 认证 | 传输 | 额外进程 |
| --- | --- | --- | --- |
| Gmail | Google OAuth client 与 token | Gmail REST API | 无 |
| IMAP | host、port、TLS、用户名、密码 | 经本机 WebSocket-TCP 中继的 IMAP | 需要中继 |

Gmail 配置更短；IMAP 覆盖更多邮件服务器，但浏览器 MV3 没有裸 TCP，所以需要中继。

## 首次连接

首次连接只记录当前位置的游标，不下载历史邮件。这样新安装不会把旧邮箱一次性灌入本地存储，也能让起始状态可预测。

## 增量同步

后续检查只拉取游标之后的新邮件，每批最多 50 封。background 会在写入本地记录和更新 UI 信号前解析、分类邮件。

## 轮询与手动同步

通用设置默认每 5 分钟检查一次，可设为 1–60 分钟。打开 Popup 会立即检查，Options 也可以手动触发增量同步。

## IMAP UIDVALIDITY 变化

`UIDVALIDITY` 变化意味着原有 UID 的含义不再可靠。Mail Peon 会重置到最新位置并提醒用户，不会假设旧游标仍然有效。

## 中继不负责什么？

中继只维护 IMAP `IDLE` 长连接并搬运 WebSocket/TCP 字节，不负责 UI、分类、AI 或云端邮箱存储。
