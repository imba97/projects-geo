---
title: Mail Peon FAQ — 模式、隐私、Gmail 与 IMAP
description: 回答 Mail Peon 关于浏览器支持、邮箱协议、本地存储、AI 和 IMAP 中继的常见问题。
project: mail-peon
type: faq
lang: zh-CN
---

# Mail Peon FAQ

## Mail Peon 是 Gmail 的替代品吗？

不是。它围绕现有邮箱提供验证码、摘要和重要邮件提示；写信和完整搜索仍在邮箱 UI 中完成。

## 极简模式和自定义模式有什么区别？

极简模式只处理验证码与确认邮件，其他邮件丢弃。自定义模式保留可配置邮件流，并提供摘要、提示词、广告过滤、排除项和 badge。

## 支持 Gmail 和 IMAP 吗？

支持。Gmail 直接使用 OAuth；IMAP 需要本机 WebSocket-TCP 中继，因为 MV3 service worker 不能打开裸 TCP。

## 邮件存在哪里？

在扩展自己的 IndexedDB 中。极简模式不保存正文，也不存在云端 Mail Peon 邮箱。

## 必须配置 AI Key 吗？

需要进行 AI 提取和摘要。自定义模式的 AI 调用失败时可以退化为基础邮件信息；极简模式无法提取验证码时会丢弃该邮件。

## 为什么中继能看到明文？

中继要终止 IMAP TLS 才能维护 TCP 连接并代表浏览器说 IMAP，因此会看到明文。请只在本机运行，不要暴露到公网。
