---
title: Mail Peon 故障排查 — 扩展、中继、AI 与同步
description: 解决 Mail Peon 未打包扩展、OAuth、IMAP 中继、AI、剪贴板和增量同步问题。
project: mail-peon
type: troubleshooting
lang: zh-CN
---

# Mail Peon 故障排查

## 扩展没有出现

执行 `pnpm build`，打开浏览器扩展管理页，启用开发者模式并加载生成的 `extension/` 目录。旧版本仍在运行时，先移除再加载新目录。

## Gmail OAuth 无法完成

确认 OAuth client 类型是 Chrome 扩展，且扩展中的 client ID 与 Google Cloud 项目一致。先查看 background service worker 控制台中的 provider 错误，再修改账号设置。

## IMAP 一启动就失败

先启动中继并确认 WebSocket 地址：

```bash
pnpm relay
```

默认地址是 `ws://127.0.0.1:41316/`。如果使用了自定义端口或 token，扩展账号设置必须使用相同值。

## 中继运行但没有邮件

检查 IMAP host、port、TLS、用户名和 mailbox。确认中继能连接服务器，且 background 仍在运行。首次连接只记录游标，不下载历史邮件。

## AI 摘要或验证码提取失败

在“设置 · AI 配置”测试选中的 provider，检查 API key、endpoint、model 和兼容性。自定义模式可以退化到基础邮件信息；极简模式提取失败时会丢弃该邮件。

## 找到验证码但没有复制

复制流程会从 background fallback 到 content script toast，最后允许用户点击复制。聚焦普通网页、允许剪贴板权限，并使用 toast 上的复制按钮。

## 邮件似乎丢失

检查模式、排除列表、发件人规则和账号。极简模式会有意丢弃无关邮件；自定义模式应查看 background 日志和本地回收站状态。
