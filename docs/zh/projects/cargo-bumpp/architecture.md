---
title: cargo-bumpp 架构 — 计划、回滚、workspace 与 Git
description: cargo-bumpp 从 Cargo metadata 生成发布计划，应用版本改动，回滚本地失败，并推送一个明确的 tag。
project: cargo-bumpp
type: architecture
lang: zh-CN
---

# cargo-bumpp 架构

这是一个无依赖 Rust CLI，把发现与计划阶段和修改阶段分开，让用户在创建发布点前看到所有变化。

## 发布流水线

```text
参数 / 选择器 → cargo metadata + git history → release plan
                                               ↓ 一次确认
                         清单 + Cargo.lock ← 写入
                               ↓
                     git commit → annotated tag → 推送分支与 tag
```

## Workspace 规则

工具通过 `cargo metadata --no-deps --format-version 1` 识别 package、共享 workspace 版本和 path dependency。共享版本可一起升级；独立版本会被报告，只有 `--recursive` 才会分别升级。

## 回滚边界

清单写入、提交或 tag 创建失败时，工具删除本地 tag、撤销 release commit 并恢复文件快照。推送是第一个不可逆的远端动作，失败后保留本地结果并输出重试命令。

## 为什么不负责 publish？

tag 是 CI 的稳定交接点。crates.io 版本不能删除或覆盖，因此发布凭据与策略应由 CI 管理。
