---
title: charbi-font 架构
description: "charbi-font 的运行边界、包职责和设计事实。"
project: charbi-font
type: architecture
lang: zh-CN
updated: 2026-11-17
---

# charbi-font 架构

The tool derives a character set from project inputs, then runs a font subsetting step to reduce shipped font data.

## 边界图

~~~text
source code and the project character set
        │
        ▼
charbi-font: character scan and font subsetting pipeline
        │
        ▼
a smaller font package containing required glyphs
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

- [快速开始](/zh/projects/charbi-font/getting-started)
- [FAQ](/zh/projects/charbi-font/faq)
- [源仓库](https://github.com/imba97/charbi-font)
