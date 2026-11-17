---
title: Mail Peon 快速开始 — 构建、接入邮箱与配置 AI
description: 构建 Mail Peon 扩展，通过 OAuth 接入 Gmail 或通过本机中继接入 IMAP，再配置 AI 提供商。
project: mail-peon
type: getting-started
lang: zh-CN
---

# Mail Peon 快速开始

开发阶段以未打包扩展运行。第一次使用包含三步：构建扩展、接入邮箱、配置 AI Key。

## 1. 构建扩展

```bash
pnpm i
pnpm build
```

在 Chrome 的 `chrome://extensions` 打开开发者模式，加载生成的 `extension/` 目录。开发时可以使用：

```bash
pnpm dev
```

## 2. 接入邮箱

### Gmail

创建类型为 Chrome 扩展的 Google Cloud OAuth 客户端，在“设置 · 账号”中填写。Gmail 不需要中继。

### IMAP

```bash
pnpm relay
pnpm relay --port 9000 --token xxx --allow-hosts imap.example.com
```

在扩展中填写 `ws://127.0.0.1:41316/`，再填写 IMAP 主机、用户名和密码。MV3 没有裸 TCP，所以 IMAP 必须经过中继。

## 3. 配置 AI

进入“设置 · AI 配置”，选择 OpenAI、DeepSeek、Anthropic 或 OpenAI 兼容服务，填写 API Key 并测试连接。极简模式提取验证码同样需要 AI。

## 4. 选择模式

- **极简模式**：只保留验证码和确认邮件相关信息，其它邮件不入库、不展示。
- **自定义模式**：增加邮件流、AI 摘要、广告过滤、提示词规则、排除列表和 badge。

默认每 5 分钟检查一次；打开 Popup 会立即检查，也可以手动执行增量同步。
