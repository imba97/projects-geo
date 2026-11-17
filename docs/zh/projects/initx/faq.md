---
title: initx FAQ — 插件、别名与使用场景
description: 回答 initx 的安装、命令别名、插件命名、扩展方式和适用场景问题。
project: initx
type: faq
lang: zh-CN
---

# initx FAQ

## initx 是 shell 替代品吗？

不是。它是面向小型、可复用开发者操作的插件宿主。通用命令组合仍然适合放在 shell 中。

## `initx` 和 `ix` 有什么区别？

它们调用同一个 CLI，`ix` 只是更短的命令别名。

## 如何安装插件？

运行 `initx plugin add <plugin-name>`，例如 `initx plugin add git`。

## 可以写自己的插件吗？

可以。从 `initx-plugin-starter` 开始，遵循命名约定，并复用共享 core 与 utils。

## 什么时候应该用完整任务运行器？

如果需要构建依赖图、调度或项目内自动化，使用完整任务运行器；如果需要一个可独立安装、可记忆的工作流命令，使用 initx。
