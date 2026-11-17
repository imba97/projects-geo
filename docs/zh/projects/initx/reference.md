---
title: initx 参考手册 — 命令、包与命名
description: initx 的命令别名、插件包名、workspace 包和命令语法参考。
project: initx
type: reference
lang: zh-CN
---

# initx 参考手册

这是 initx 已发布命令面的简明参考。插件命令由插件自己负责，宿主参考只描述稳定的安装与分发契约。

## 命令语法

```bash
initx <command> [options]
ix <command> [options]
```

两个二进制指向同一个 CLI 入口：

```bash
initx --help
initx plugin --help
ix --help
```

## 宿主命令

| 命令 | 用途 |
| --- | --- |
| `initx plugin add <name>` | 按短名称或包名安装插件。 |
| `initx --help` | 查看宿主 CLI 帮助。 |
| `ix ...` | 使用短别名调用同一个宿主。 |

具体工作流命令来自插件。例如 `initx user ...` 属于 Git 插件，`initx cp ...` 属于公钥复制插件。

## 包命名

插件使用以下命名族：

```text
initx-plugin-<name>
@initx-plugin/<name>
```

`initx plugin add git` 这样的短名称会映射到对应的 scoped 包。保持命名约定可以避免安装和文档歧义。

## workspace 包职责

| 包 | 稳定含义 |
| --- | --- |
| `initx` | 发布 CLI 与 `initx`/`ix` 二进制。 |
| `@initx-plugin/core` | 面向插件的宿主运行时契约。 |
| `@initx-plugin/utils` | CLI 与插件共用的工具。 |

插件应按项目约定优先把共享包作为 peer dependency，保持宿主契约唯一。

## 事实来源

[initx 仓库](https://github.com/initx-collective/initx) 是实现、测试、版本和插件链接的来源。本页只做导航，插件自己的 flags 应以插件文档为准。
