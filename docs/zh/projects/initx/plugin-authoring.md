---
title: initx 插件开发 — 包契约与开发路径
description: 介绍 initx 插件的包命名、共享依赖、命令入口、本地验证和发布前检查。
project: initx
type: extension
lang: zh-CN
---

# initx 插件开发

initx 插件是一个独立安装的包，为宿主增加一个聚焦的命令。优先从 [initx-plugin-starter](https://github.com/initx-collective/initx-plugin-starter) 开始。

## 包契约

使用以下名称之一：

```text
initx-plugin-<name>
@initx-plugin/<name>
```

插件应描述自己增加的工作流，并通过共享 core 与 utils 接入宿主。项目 skill 建议把 `@initx-plugin/core` 与 `@initx-plugin/utils` 作为 peer dependency，避免插件打包另一份宿主运行时。

## 开发路径

1. 选择一个描述单一工作流的命令名。
2. 从 starter 模板创建包。
3. 实现命令，把副作用留在插件边界内。
4. 为解析、成功输出和失败路径增加测试。
5. 在发布前通过本地 initx CLI 运行插件。

initx monorepo 用 workspace 包做本地开发；独立维护的插件应依赖已发布的宿主包，不要依赖私有源码路径。

## 插件应该包含什么？

- 工作流专属的参数和选项。
- 面向用户的输出与可执行错误信息。
- 这个命令存在的具体外部副作用。
- 可以独立运行的解析和行为测试。

宿主负责插件发现、共享运行时和通用工具；插件负责具体能力。

## 本地验证

在 initx checkout 中可以使用：

```bash
pnpm ix <command>
pnpm test
pnpm build
```

打包后再用同一组命令验证发布插件与 workspace 版本的行为一致。
