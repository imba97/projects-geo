---
title: cargo-bumpp 参考手册 — 升级级别、flags 与退出码
description: cargo-bumpp 的命令、升级级别、flags、配置优先级和进程退出码参考。
project: cargo-bumpp
type: reference
lang: zh-CN
---

# cargo-bumpp 参考手册

## 调用方式

```bash
cargo bumpp [release]
bumpp [release]
```

Cargo 子命令和直接二进制使用同一个 release engine。版本可以交互选择、使用级别名称，或直接给出明确版本。

## 升级值

支持 `major`、`minor`、`patch`、`next`、`conventional`、`conventional-prerelease`、`premajor`、`preminor`、`prepatch`、`prerelease`、`as-is`、`prompt`，以及 `1.2.3` 这样的明确版本。版本允许带 `v` 前缀。

## 常用 flags

| Flag | 含义 |
| --- | --- |
| `--release <level>` | 明确升级级别或版本。 |
| `--retag [tag]` | 重建已有 tag 并强推。 |
| `--preid <id>` | 设置预发布标识，默认 `beta`。 |
| `-y, --yes` | 跳过最终确认。 |
| `-p, --push` / `--no-push` | 开启或关闭远端推送。 |
| `-t, --tag [name]` / `--no-tag` | 创建或跳过 tag，可使用模板。 |
| `-c, --commit [message]` / `--no-commit` | 创建或跳过 release commit。 |
| `-r, --recursive` | 分别升级独立 workspace 成员。 |
| `--no-sign` | 覆盖 Git 的提交和 tag 签名配置。 |
| `-x, --execute <command>` | 写版本后、提交前执行命令。 |
| `--current-version <version>` | 覆盖自动探测的当前版本。 |
| `--print-commits` / `--no-print-commits` | 显示或隐藏 `conventional` 使用的提交。 |
| `--lockfile` / `--no-lockfile` | 执行或跳过 `cargo update --workspace`。 |
| `--commit-window <n>` | 限制 `conventional` 读取的提交数，默认 100。 |
| `--configFilePath <path>` | 使用其他 `bumpp.toml` 路径。 |
| `-q, --quiet` | 只输出警告和错误。 |

短选项遵循 `bumpp` 习惯：`-r` 是 recursive，`-p` 是 push。

## 配置优先级

支持的设置按命令行、环境变量、`bumpp.toml`、内置默认值排序。`--execute` 等执行命令的选项必须放在命令行。

## 退出码

| 代码 | 含义 |
| --- | --- |
| `0` | 成功完成。 |
| `1` | 检查或发布步骤失败，能回滚时已恢复本地状态。 |
| `2` | 用法或配置错误。 |
| `130` | 用户在提示处取消。 |
