---
title: cargo-bumpp 快速开始 — 安装并完成第一次升级
description: 安装 cargo-bumpp，运行交互式或明确版本升级，查看计划并控制提交、tag 与推送。
project: cargo-bumpp
type: getting-started
lang: zh-CN
---

# cargo-bumpp 快速开始

默认流程会显示选择、打印计划、等待一次确认，然后创建提交、tag 与定向推送。

## 1. 安装

```bash
cargo install cargo-bumpp
cargo bumpp --help
bumpp --help
```

需要 Rust 1.74+，并且 `cargo` 与 `git` 在 `PATH` 中。支持 Linux、macOS 和 Windows。

## 2. 第一次升级

交互选择：

```bash
cargo bumpp
```

明确升级 patch：

```bash
cargo bumpp patch
```

指定版本并暂不推送：

```bash
cargo bumpp 1.0.0 --no-push
```

在已有自动化确认的场景跳过最终确认：

```bash
cargo bumpp minor -y
```

## 3. 控制边界

只改版本号：

```bash
cargo bumpp --no-tag --no-push
```

重新创建最近的 tag 并强推：

```bash
cargo bumpp --retag
```

第一次使用建议加 `--no-push`，先检查本地提交和 tag。

## 4. 失败时会怎样？

清单、lockfile、提交和 tag 被视为一个本地事务。推送前失败会回滚；推送失败会保留本地提交和 tag，并打印重试命令。
