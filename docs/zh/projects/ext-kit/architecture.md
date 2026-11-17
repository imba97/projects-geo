---
title: ext-kit 架构
description: "ext-kit 的运行边界、包职责和设计事实。"
project: ext-kit
type: architecture
lang: zh-CN
updated: 2026-11-17
---

# ext-kit 架构

The toolkit packages repeatable extension concerns such as storage, messaging, and context boundaries so product extensions can share tested primitives.

## 边界图

~~~text
用户或调用方
        │
        ▼
ext-kit 运行边界
        │
        ├─ 项目专属实现
        ├─ 测试与 fixtures
        └─ 构建或发布产物
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

- [快速开始](/zh/projects/ext-kit/getting-started)
- [FAQ](/zh/projects/ext-kit/faq)
- [源仓库](https://github.com/imba97/ext-kit)
