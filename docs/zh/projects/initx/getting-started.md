---
title: initx 快速开始 — 安装、添加插件、运行命令
description: 全局安装 initx，使用 initx 或 ix 别名，添加插件并运行第一个工作流命令。
project: initx
type: getting-started
lang: zh-CN
---

# initx 快速开始

最短路径是：安装 CLI、添加插件、运行插件命令。全局安装后不需要每次都写 `npx`。

## 1. 安装 CLI

```bash
npm i -g initx
```

```bash
initx <command> [options]
ix <command> [options]
```

## 2. 添加插件

```bash
initx plugin add git
initx plugin add gpg
initx plugin add cp
initx plugin add pm
```

短名称会映射到对应的 `@initx-plugin/<name>` 包。

## 3. 运行工作流

```bash
initx user foo foo@example.com
initx cp ssh
initx cp gpg
initx pm add ~/projects
initx create user/repo
```

## 4. 创建插件

从 [initx-plugin-starter](https://github.com/initx-collective/initx-plugin-starter) 开始。插件名遵循 `initx-plugin-<name>` 或 `@initx-plugin/<name>`，并建议复用 `@initx-plugin/core` 与 `@initx-plugin/utils`。

## 验证

```bash
initx --help
ix --help
```
