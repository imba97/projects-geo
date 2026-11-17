---
title: qmd-server 快速开始
description: "从源仓库安装并运行 qmd-server，完成第一次本地验证。"
project: qmd-server
type: getting-started
lang: zh-CN
updated: 2026-11-17
---

# qmd-server 快速开始

第一次运行应从 canonical 仓库开始，并按照项目自己的 package 或 workspace 脚本执行。

## 1. 克隆仓库

~~~bash
git clone https://github.com/imba97/qmd-server.git
cd qmd-server
~~~

## 2. 安装或构建运行环境

Clone the repository, install dependencies, and inspect the server entrypoint and environment variables before starting it.

~~~bash
pnpm install
~~~

如果仓库声明了其他包管理器、工具链或平台 SDK，应以 README 中的版本要求为准。

## 3. 本地验证

- 阅读根目录 README 和包元数据。
- 先运行最小的测试、构建或 help 命令。
- 把生成物与源码分开。
- 复现问题时记录运行时版本。

## 继续阅读

- [项目总览](/zh/projects/qmd-server/)
- [架构](/zh/projects/qmd-server/architecture)
- [FAQ](/zh/projects/qmd-server/faq)

[GitHub 仓库](https://github.com/imba97/qmd-server) 是版本相关安装说明的来源。
