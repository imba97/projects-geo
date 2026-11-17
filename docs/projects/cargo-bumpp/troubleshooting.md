---
title: cargo-bumpp troubleshooting — Git, signing, prompts, and workspaces
description: Resolve cargo-bumpp failures involving dirty worktrees, GPG signing, non-interactive terminals, workspace versions, and remote pushes.
project: cargo-bumpp
type: troubleshooting
lang: en
---

# cargo-bumpp troubleshooting

## The working tree is not clean

The default Git check protects changes that are outside the planned release. Commit or stash first, or pass `--no-git-check` only when you accept that the release command is running with unrelated changes present.

## GPG signing blocks the release

Git configuration can enable commit or tag signing even when cargo-bumpp was not given `--sign`. If signing is not required for this release, pass `--no-sign`; if it is required, verify the key, agent, and PIN setup before retrying.

## The selector or confirmation cannot read input

Use an explicit release level in an interactive terminal, for example `cargo bumpp patch`. In automation, provide the level and `-y`, then keep the workflow's own approval gate before allowing a push.

## The workspace has different member versions

Read the plan's member list. If independent versions are intentional, use `--recursive`; if the workspace should share one version, normalize the manifests before running the bump.

## A push failed

The local commit and tag remain by design. Fix permissions, branch protection, remote history, or network access, then run the retry command printed by cargo-bumpp. Do not create a second bump just because the first push was rejected.

## A retag target is missing

Fetch tags first and verify the tag is reachable from the local repository:

```bash
git fetch --tags
cargo bumpp --retag v1.2.3 --no-push
```

The command must identify an existing tag before it can re-create or move it.
