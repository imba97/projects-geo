---
title: cargo-bumpp getting started — install and run a release bump
description: Install cargo-bumpp, run an interactive or explicit version bump, inspect the plan, and control commit, tag, and push behavior.
project: cargo-bumpp
type: getting-started
lang: en
---

# Get started with cargo-bumpp

The default flow is intentionally visible: choose a version bump, inspect the plan, confirm once, and let the tool create the commit, tag, and targeted push.

## 1. Install

```bash
cargo install cargo-bumpp
```

This installs both `cargo bumpp` and the direct `bumpp` binary:

```bash
cargo bumpp --help
bumpp --help
```

Requirements are Rust 1.74 or newer, `cargo`, and `git` on `PATH`. Linux, macOS, and Windows are supported.

## 2. Run the first bump

Interactive selection:

```bash
cargo bumpp
```

Explicit patch release:

```bash
cargo bumpp patch
```

Preview a concrete version without pushing:

```bash
cargo bumpp 1.0.0 --no-push
```

Skip the final confirmation only when the surrounding automation already provides that guard:

```bash
cargo bumpp minor -y
```

## 3. Control the release boundary

Only update versions:

```bash
cargo bumpp --no-tag --no-push
```

Re-create and force-push the most recent tag when a downstream release workflow needs to run again:

```bash
cargo bumpp --retag
```

Use `--no-push` on a first run when you want to inspect the local commit and tag before any remote operation.

## 4. Know what happens on failure

Manifest and lockfile writes, the commit, and the tag are treated as one local transaction. A failure before push rolls the local state back. A push failure leaves the commit and tag in place and prints a retry command because the remote operation cannot be undone safely by the tool.
