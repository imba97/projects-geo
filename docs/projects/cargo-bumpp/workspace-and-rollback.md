---
title: cargo-bumpp workspace and rollback — versions, metadata, and recovery
description: How cargo-bumpp discovers Cargo workspace versions, handles path dependencies, and restores local state when a release step fails.
project: cargo-bumpp
type: operations
lang: en
---

# cargo-bumpp workspace and rollback

## Metadata discovery

The tool reads `cargo metadata --no-deps --format-version 1` to learn package members, workspace versions, and path dependencies. It does not guess the project graph from filenames alone.

## Shared workspace versions

When members use a shared workspace version, one release level can update the shared package and dependency declarations together. The plan prints every affected manifest location so the user can inspect the exact change.

## Independent member versions

If several members carry different versions and the command is not recursive, cargo-bumpp reports the mismatch instead of silently skipping a member. `--recursive` opts into bumping members independently according to their own versions.

## Path dependency versions

Path dependencies can carry a version requirement that needs to move with the workspace release. The plan includes those changes, which is why reading Cargo metadata is part of the release design.

## Local transaction

The local stages are treated as one transaction:

```text
snapshot → write manifests/lockfile → commit → tag
    └─ failure before push → delete tag, reset commit, restore files
```

The push is outside the rollback boundary. A remote rejection does not erase the local release point; the user receives the exact retry command instead.

## Retagging

`--retag` is a separate operation. It re-creates an existing tag at the chosen commit and force-pushes that tag. It does not bump versions, write files, or create a new commit.
