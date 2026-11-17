---
title: Mail Peon 隐私与安全 — 本地数据、AI 输入与中继信任
description: 说明 Mail Peon 如何本地存储凭据和邮件、AI 提供商收到什么，以及 IMAP 中继为什么是本地信任边界。
project: mail-peon
type: security
lang: zh-CN
---

# Mail Peon 隐私与安全

Mail Peon 是本地优先，但这不等于没有数据离开浏览器。需要区分哪些数据只在本地、哪些数据会发送给 AI 提供商，以及哪个进程能够看到 IMAP 明文。

## 数据分类

| 数据 | 位置 | 说明 |
| --- | --- | --- |
| IMAP 密码、OAuth token、AI key | 扩展 IndexedDB | 存在本地，浏览器 profile 应被视为凭据存储。 |
| 账号与提示词规则 | 扩展 IndexedDB | 由 background 和 options 使用。 |
| 邮件记录 | 自定义模式的扩展 IndexedDB | 受本地保留与回收站逻辑影响。 |
| 邮件正文 | 极简模式不保留 | 极简模式只保留窄工作流所需信息。 |
| AI 输入 | 用户配置的 AI 提供商 | 仅在启用并触发 AI 操作时发送。 |

## AI 边界

用户选择提供商并填写 key，AI 输出会先经过校验。自定义模式调用失败时仍可展示基础邮件信息；极简模式无法提取验证码时不保留该邮件。

## IMAP 中继边界

MV3 service worker 不能打开裸 TCP，所以 IMAP 通过本机 WebSocket-TCP 中继。中继要终止邮件服务器 TLS，因此能看到包括凭据在内的解密字节。应绑定 `127.0.0.1`、保护 token，不要暴露到公网。

## 用户控制

background 负责网络和存储，options 暴露 provider、账号、规则、保留、模式等设置。共享浏览器 profile 或开发环境前，应先移除凭据。

## 威胁模型

Mail Peon 减少云端托管数据，但不能保护被入侵的浏览器 profile、恶意本机进程，或用户明确配置后接收内容的 AI 提供商。最重要的控制是选择提供商并保持中继在本机。
