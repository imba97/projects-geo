---
title: cargo-bumpp reference — release levels, flags, and exit codes
description: A factual cargo-bumpp reference for commands, release levels, flags, configuration precedence, and process exit codes.
project: cargo-bumpp
type: reference
lang: en
---

# cargo-bumpp reference

## Invocation forms

```bash
cargo bumpp [release]
bumpp [release]
```

The Cargo subcommand and direct binary use the same release engine. A release can be selected interactively, named by level, or provided as an explicit version.

## Release values

`major`, `minor`, `patch`, `next`, `conventional`, `conventional-prerelease`, `premajor`, `preminor`, `prepatch`, `prerelease`, `as-is`, `prompt`, and concrete versions such as `1.2.3` are accepted. A version may be written with a leading `v`.

## High-value flags

| Flag | Meaning |
| --- | --- |
| `--release <level>` | Set the release level or version explicitly. |
| `--retag [tag]` | Re-create an existing tag and force-push it. |
| `--preid <id>` | Set the prerelease identifier; default is `beta`. |
| `-y, --yes` | Skip the final confirmation. |
| `-p, --push` / `--no-push` | Enable or disable the remote push. |
| `-t, --tag [name]` / `--no-tag` | Create or skip the tag, optionally using a template. |
| `-c, --commit [message]` / `--no-commit` | Create or skip the release commit. |
| `-r, --recursive` | Bump independent workspace members too. |
| `--no-sign` | Override Git signing configuration for commit and tag. |
| `-x, --execute <command>` | Run a command after version writes and before commit. |
| `--current-version <version>` | Override automatic current-version detection. |
| `--print-commits` / `--no-print-commits` | Show or hide commits used by `conventional`. |
| `--lockfile` / `--no-lockfile` | Run or skip `cargo update --workspace`. |
| `--commit-window <n>` | Limit commits read by `conventional`; default 100. |
| `--configFilePath <path>` | Use another `bumpp.toml` path. |
| `-q, --quiet` | Print warnings and errors only. |

The short options intentionally follow the `bumpp` family: `-r` means recursive and `-p` means push.

## Configuration precedence

For supported settings, the effective order is command line, environment, `bumpp.toml`, then built-in defaults. Options that execute a command, such as `--execute`, must be supplied on the command line.

## Exit codes

| Code | Meaning |
| --- | --- |
| `0` | Completed successfully. |
| `1` | A check or release step failed; local state was restored where possible. |
| `2` | Usage or configuration error. |
| `130` | User cancelled at a prompt. |
