---
title: cargo-bumpp CI 与发布 — 把 tag 交给自动化
description: 说明 cargo-bumpp 如何接入 CI 发布流程、它在哪一步停止，以及远端推送失败如何重试。
project: cargo-bumpp
type: integration
lang: zh-CN
---

# cargo-bumpp CI 与发布

`cargo-bumpp` 创建本地发布点。后续 CI 可以把 annotated tag 作为检查、打包和 registry 发布的交接事件。

## 推荐交接路径

```text
开发者或 release job
  └─ cargo bumpp --no-push  （需要时先本地检查）
       └─ commit + annotated tag
            └─ 推送分支与明确 tag
                 └─ CI 按仓库策略检查并发布
```

工具推送分支和明确 tag，而不是所有本地 tag，避免同一仓库中的无关 tag 触发发布流水线。

## CI 应负责什么？

- 测试、lint 和构建发布产物。
- crates.io 或其他 registry 的认证。
- 按策略发布包和生成 release notes。
- 记录 provenance 与部署状态。

## cargo-bumpp 明确不负责什么？

它不发布 registry、不生成 changelog，也不创建 PR 发布流程。这些行为需要仓库凭据与团队策略，不属于本地版本事务。

## 推送失败恢复

远端拒绝时保留本地 commit 和 tag。修复权限、分支保护、远端历史或网络后，执行工具打印的重试命令；如果需要重新触发流水线，再使用 `cargo bumpp --retag [tag]`。
