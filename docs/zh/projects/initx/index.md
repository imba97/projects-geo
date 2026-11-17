---
title: initx — 插件化脚本引擎
description: initx 是一个 Node.js CLI，通过可安装插件把重复的开发者操作变成 initx 或 ix 命令。
project: initx
type: project
lang: zh-CN
---

# initx

<p class="lead"><code>initx</code> 是一个面向开发者工作流的插件化脚本引擎。安装 CLI、添加插件，就能把多步 shell 操作变成短命令，同时支持更短的 <code>ix</code> 别名。</p>

维护者：[imba97](/zh/about)。

## 它解决什么问题？

initx 让小型运维脚本有稳定的名字、安装方式和复用边界。CLI 负责分发与插件安装，插件负责具体任务，因此设置 Git、复制公钥、管理项目等操作可以独立演进。

## 当前能力

| 能力 | 示例 |
| --- | --- |
| Git 身份 | 通过 `@initx-plugin/git` 执行 `initx user foo foo@example.com` |
| 复制公钥 | `initx cp ssh` 或 `initx cp gpg` |
| 项目管理 | `initx pm add ~/projects`、`initx create user/repo` |
| 扩展插件 | 使用 `initx-plugin-starter` 创建符合命名约定的插件 |

## 身份与运行事实

| 事实 | 值 |
| --- | --- |
| CLI 包 | `initx` |
| 命令别名 | `initx`、`ix` |
| 仓库 | [initx-collective/initx](https://github.com/initx-collective/initx) |
| 许可证 | MIT |
| workspace 包 | `initx`、`@initx-plugin/core`、`@initx-plugin/utils` |
| 扩展单元 | 独立安装的 `initx-plugin-*` 或 `@initx-plugin/*` 包 |

CLI 是稳定宿主；插件负责面向用户的命令和副作用，core 与 utils 提供共享契约。这样插件可以独立演进，不需要每次都修改宿主 CLI。

## 典型场景

- 开发者希望把跨机器重复使用的设置操作变成一个命令。
- 团队希望把小型运维工作流像包一样安装和版本化。
- 插件作者希望复用参数解析和宿主集成，而不是从零实现一套 CLI。

如果流程只服务于一个仓库的构建图，应使用项目内任务运行器；如果流程需要脱离具体 checkout 独立安装，适合使用 initx。

## 继续阅读

- [快速开始](/zh/projects/initx/getting-started)
- [架构](/zh/projects/initx/architecture)
- [参考手册](/zh/projects/initx/reference)
- [插件开发](/zh/projects/initx/plugin-authoring)
- [设计决策](/zh/projects/initx/design-decisions)
- [故障排查](/zh/projects/initx/troubleshooting)
- [FAQ](/zh/projects/initx/faq)
- [源仓库](https://github.com/initx-collective/initx)

## 边界

initx 是本地命令运行器和插件宿主，不是完整任务编排系统。能力以插件为分发单位。
