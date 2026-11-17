---
title: cargo-bumpp 故障排查 — Git、签名、提示与 workspace
description: 解决 cargo-bumpp 工作树、GPG 签名、非交互终端、workspace 版本和远端推送问题。
project: cargo-bumpp
type: troubleshooting
lang: zh-CN
---

# cargo-bumpp 故障排查

## 工作树不干净

默认 Git 检查会保护计划之外的改动。先提交或 stash；只有明确接受风险时才使用 `--no-git-check`。

## GPG 签名阻塞发布

即使没有传 `--sign`，Git 配置也可能要求提交或 tag 签名。如果本次不需要签名，使用 `--no-sign`；如果需要签名，先检查密钥、agent 和 PIN 配置。

## 选择器或确认读不到输入

在交互终端直接给升级级别，例如 `cargo bumpp patch`。自动化中提供级别和 `-y`，并在允许 push 前保留 CI 自己的审批门槛。

## workspace 成员版本不同

阅读计划中的成员列表。如果独立版本是有意设计，使用 `--recursive`；如果应该共享一个版本，先整理清单再升级。

## 推送失败

本地 commit 和 tag 会保留。修复权限、分支保护、远端历史或网络后，执行工具打印的重试命令，不要因为 push 被拒就重新生成一个版本。

## Retag 找不到目标

先抓取 tag 并确认它存在：

```bash
git fetch --tags
cargo bumpp --retag v1.2.3 --no-push
```

重新创建或移动 tag 前，目标 tag 必须已经存在于本地仓库。
