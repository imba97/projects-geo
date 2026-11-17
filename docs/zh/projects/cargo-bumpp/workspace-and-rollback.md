---
title: cargo-bumpp workspace 与回滚 — 版本、metadata 和恢复
description: 说明 cargo-bumpp 如何发现 Cargo workspace 版本、处理 path dependency，并在发布步骤失败时恢复本地状态。
project: cargo-bumpp
type: operations
lang: zh-CN
---

# cargo-bumpp workspace 与回滚

## metadata 发现

工具读取 `cargo metadata --no-deps --format-version 1` 获取 package 成员、workspace 版本和 path dependency，不只根据文件名猜项目图。

## 共享 workspace 版本

成员使用共享 workspace 版本时，一次升级可以同步修改共享 package 和依赖声明。计划会打印每个清单位置，方便检查具体变化。

## 独立成员版本

多个成员有不同版本且未使用 recursive 时，cargo-bumpp 会报告不一致，而不是静默跳过。使用 `--recursive` 才会按成员自己的版本分别升级。

## path dependency 版本

path dependency 可能带有需要随 workspace 一起变化的版本要求。计划会包含这些变化，因此发布前必须读取 Cargo metadata。

## 本地事务

```text
快照 → 写清单/lockfile → commit → tag
  └─ push 前失败 → 删除 tag、撤销 commit、恢复文件
```

推送在回滚边界之外。远端拒绝不会删除本地发布点，工具会给出准确的重试命令。

## Retag

`--retag` 是独立操作：把已有 tag 重新创建到目标 commit 并强推，不升级版本、不写文件、不创建新 commit。
