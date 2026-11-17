---
title: cargo-bumpp — 交互式 Cargo 版本发布工具
description: cargo-bumpp 是一个零依赖 Rust CLI，用于升级 Cargo 版本、更新 lockfile、提交、打 tag 和推送。
project: cargo-bumpp
type: project
lang: zh-CN
---

# cargo-bumpp

<p class="lead"><code>cargo-bumpp</code> 是一个面向 Cargo 项目的交互式、零依赖发布辅助工具。它选择或接收升级级别，更新清单与 <code>Cargo.lock</code>，展示计划，并在一次确认后提交、打 tag 和推送。</p>

维护者：[imba97](/zh/about)。

## 它解决什么问题？

它把常见的“升级 → 提交 → annotated tag → 推送”路径变成可见、可审阅的流程。工具止步于 tag，之后由 CI 负责发布 registry。

## 关键行为

| 行为 | 说明 |
| --- | --- |
| 安装成本 | `cargo install cargo-bumpp`，没有运行期依赖。 |
| 版本输入 | 交互选择器、`major`、`minor`、`patch`、`conventional`、预发布级别或明确版本号。 |
| Workspace | 用 `cargo metadata` 识别共享版本和 path dependency，`--recursive` 才会分别升级成员。 |
| 安全边界 | 先展示改动，步骤 3–5 失败时回滚本地状态，推送失败时保留本地提交与 tag。 |
| 发布边界 | 只创建发布点，不发布 crates.io，也不创建 PR 流程。 |

## 发布模型

默认流程包含一次可见决策和六个阶段：

1. 选择升级级别或明确版本号。
2. 按模式读取 Cargo metadata 和 Git 历史。
3. 打印所有版本变化，包括清单路径和行号。
4. 一次确认后写入清单和 `Cargo.lock`。
5. 创建 release commit 和 annotated tag。
6. 推送分支与明确的 tag，除非使用 `--no-push`。

推送前的本地修改具备回滚能力。推送前失败会恢复工作树、提交和 tag；远端推送失败则保留本地发布点，并打印重试命令。

## 身份与要求

| 事实 | 值 |
| --- | --- |
| crate | `cargo-bumpp` |
| 直接二进制 | `bumpp` |
| Cargo 子命令 | `cargo bumpp` |
| 最低 Rust 版本 | 1.74 |
| 运行期工具 | `cargo`、`git` |
| 依赖 | 发布 crate 没有依赖 |
| 许可证 | MIT |

它适合把本地 commit 和 tag 作为发布单元的项目；registry 发布、changelog、凭据和 CI 编排仍由外部流程负责。

## 继续阅读

- [快速开始](/zh/projects/cargo-bumpp/getting-started)
- [架构](/zh/projects/cargo-bumpp/architecture)
- [参考手册](/zh/projects/cargo-bumpp/reference)
- [workspace 与回滚](/zh/projects/cargo-bumpp/workspace-and-rollback)
- [CI 与发布](/zh/projects/cargo-bumpp/ci-and-release)
- [故障排查](/zh/projects/cargo-bumpp/troubleshooting)
- [FAQ](/zh/projects/cargo-bumpp/faq)
- [源仓库](https://github.com/imba97/cargo-bumpp)
