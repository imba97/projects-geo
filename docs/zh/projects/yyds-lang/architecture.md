---
title: yyds-lang 架构
description: "yyds-lang 的运行边界、包职责和设计事实。"
project: yyds-lang
type: architecture
lang: zh-CN
updated: 2026-11-17
---

# yyds-lang 架构

The workspace separates language packages from the Web Studio application, with a Web Worker and Go WebAssembly runtime for browser execution.

## 边界图

~~~text
YYDS source text and editor requests
        │
        ▼
yyds-lang: grammar, lexer, parser, semantic, and language-service packages
        │
        ▼
diagnostics, editor intelligence, and WebAssembly execution
~~~

具体模块名和包图以当前仓库版本为准。先从 README 和源码入口开始，再沿 import 进入实现边界。

## 应该检查什么？

| 区域 | 问题 |
| --- | --- |
| 入口 | 哪个命令、包、应用或 API 启动项目？ |
| 数据边界 | 哪些输入进入项目，哪些输出离开项目？ |
| 运行边界 | 哪些工作发生在浏览器、CLI、本机进程或服务中？ |
| 失败边界 | 哪些错误返回调用方，哪些会重试或记录？ |
| 发布边界 | 哪些产物会构建、发布或交给后续流程？ |

## 相关页面

- [快速开始](/zh/projects/yyds-lang/getting-started)
- [FAQ](/zh/projects/yyds-lang/faq)
- [源仓库](https://github.com/yyds-lang/yyds)
