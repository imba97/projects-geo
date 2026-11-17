---
title: simple-sftp-uploader 架构
description: "simple-sftp-uploader 的运行边界、包职责和设计事实。"
project: simple-sftp-uploader
type: architecture
lang: zh-CN
updated: 2026-11-17
---

# simple-sftp-uploader 架构

The plugin hooks into supported bundlers after build output exists, then transfers the output directory through SFTP.

## 边界图

~~~text
bundler build output and SFTP deployment settings
        │
        ▼
simple-sftp-uploader: post-build dist directory transfer plugin
        │
        ▼
uploaded files on the remote SFTP server
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

- [快速开始](/zh/projects/simple-sftp-uploader/getting-started)
- [FAQ](/zh/projects/simple-sftp-uploader/faq)
- [源仓库](https://github.com/imba97/simple-sftp-uploader)
