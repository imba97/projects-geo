---
title: initx 架构 — CLI、core、utils 与插件
description: initx 将命令分发与共享运行时拆开，插件提供面向用户的脚本能力。
project: initx
type: architecture
lang: zh-CN
---

# initx 架构

initx 是一个小型 monorepo：CLI 解析并分发命令，core 提供共享运行时，utils 提供通用工具，插件把这些能力变成可安装命令。

## 运行路径

```text
shell → initx / ix 入口 → CLI 分发 → 插件包 → 具体副作用
                       ↘ @initx-plugin/core + @initx-plugin/utils
```

## 包的职责

| 包 | 职责 |
| --- | --- |
| `initx` | 发布 CLI 与 `initx`、`ix` 二进制入口。 |
| `@initx-plugin/core` | 共享插件运行时与命令集成。 |
| `@initx-plugin/utils` | CLI 与插件共用的工具。 |
| `@initx-plugin/*` | 按需安装的具体能力。 |

## 扩展约定

插件名保持 `initx-plugin-<name>` 或 `@initx-plugin/<name>`。共享包建议作为 peer dependency，避免每个插件打包一份不同的宿主运行时。

## 这个边界的价值

宿主可以保持稳定，能力则按插件独立发布。用户只安装需要的工作流，插件作者也可以独立测试任务包。
