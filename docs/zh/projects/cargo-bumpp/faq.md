---
title: cargo-bumpp FAQ — 发布流程、Cargo workspace 与对比
description: 回答 cargo-bumpp 关于发布、changelog、回滚、workspace、retag 以及相似工具的问题。
project: cargo-bumpp
type: faq
lang: zh-CN
---

# cargo-bumpp FAQ

## cargo-bumpp 会发布到 crates.io 吗？

不会。它止步于提交与 tag，CI 可以以 tag 作为发布触发点。

## 会生成 changelog 吗？

不会。changelog 不属于核心的升级、提交、tag、推送路径。

## 和 cargo-release 有什么区别？

`cargo-release` 覆盖更完整的发布工作流，依赖更多；`cargo-bumpp` 聚焦零依赖的交互式发布点，不负责 registry publish。

## 和 cargo-bump 有什么区别？

`cargo-bumpp` 还提供交互选择器、workspace 与 path dependency 处理、计划展示、推送前回滚、提交和 tag，以及 retag 流程。

## `conventional` 做什么？

它读取上一个可达 tag 之后的提交历史，判断 major、minor 或 patch；默认最多查看 100 条提交。

## 推送失败会怎样？

本地提交与 tag 会保留，工具会打印 Git 错误和重试命令。

## 可以在 cargo-bumpp 仓库里运行吗？

可以。仓库提供开发用 Cargo alias，能直接运行工作树版本；其他目录可安装发布 crate，或执行 `cargo install --path .`。
