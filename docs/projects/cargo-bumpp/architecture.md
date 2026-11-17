---
title: cargo-bumpp architecture — plan, rollback, workspace, and git
description: cargo-bumpp builds a release plan from Cargo metadata, applies version changes, rolls back local failures, and pushes one explicit tag.
project: cargo-bumpp
type: architecture
lang: en
---

# cargo-bumpp architecture

The implementation is a small Rust CLI with no dependencies. It separates discovery and planning from mutation so the user can see what will change before the release point is created.

## Release pipeline

```text
arguments / selector
        │
        ▼
cargo metadata + git history ──► release plan
        │                              │
        │                         one confirmation
        ▼                              │
rewrite manifests + Cargo.lock ◄──────┘
        │
        ├─ git commit
        ├─ annotated tag
        └─ push branch + exact tag
```

## Workspace rules

The tool uses `cargo metadata --no-deps --format-version 1` to identify packages, shared workspace versions, and path dependencies. A workspace with one shared version can be bumped together. Independent member versions are reported rather than silently skipped; `--recursive` opts into bumping each member.

## Rollback boundary

If manifest writes, the commit, or tag creation fails, cargo-bumpp deletes the local tag, resets the release commit, and restores the file snapshot. A push is the first irreversible remote action. If it fails, the local commit and tag remain and the tool prints the exact retry command.

## Why no publish step?

The tag is a stable handoff point for CI. crates.io versions cannot be deleted or overwritten, so publishing is intentionally outside the one-command local transaction.
