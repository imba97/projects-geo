---
title: cargo-bumpp FAQ — release flow, Cargo workspaces, and comparisons
description: Answers to cargo-bumpp questions about publishing, changelogs, rollback, workspaces, retagging, and similar Cargo tools.
project: cargo-bumpp
type: faq
lang: en
---

# cargo-bumpp FAQ

## Does cargo-bumpp publish to crates.io?

No. It stops at the commit and tag. CI can use that tag as the release trigger and own the registry credentials and publishing policy.

## Does it generate a changelog?

No. Changelog generation is deliberately outside the core bump → commit → tag → push path.

## How is it different from cargo-release?

`cargo-release` covers a broader publishing workflow and has more dependencies. `cargo-bumpp` focuses on a quick, interactive release point with zero dependencies and no registry publish step.

## How is it different from cargo-bump?

`cargo-bumpp` includes an interactive selector, shared workspace and path-dependency handling, a visible plan, rollback before push, commit and tag creation, and a retag flow.

## What does `conventional` do?

It reads the commit history since the previous reachable tag and chooses a major, minor, or patch level. The history window is capped by `--commit-window` (100 by default), and the command reports when it is truncated.

## What happens if push fails?

The local commit and tag remain. The tool prints git's error and a retry command because deleting local release state after a remote rejection would make recovery harder.

## Can I use it inside the cargo-bumpp repository?

Yes. The repository includes a dev-only Cargo alias so `cargo bumpp` can run the working tree. Outside a checkout, install the published crate or use `cargo install --path .`.
