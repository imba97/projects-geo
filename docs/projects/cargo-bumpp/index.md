---
title: cargo-bumpp — interactive Cargo release versioning
description: cargo-bumpp is a zero-dependency Rust CLI that bumps Cargo versions, updates the lockfile, commits, tags, and pushes.
project: cargo-bumpp
type: project
lang: en
---

# cargo-bumpp

<p class="lead"><code>cargo-bumpp</code> is an interactive, zero-dependency release helper for Cargo projects. It selects or receives a release level, updates manifests and <code>Cargo.lock</code>, shows a plan, then commits, tags, and pushes after one confirmation.</p>

Maintainer: [imba97](/about).

## What problem does cargo-bumpp solve?

It makes the common “bump → commit → annotated tag → push” path explicit and reviewable. The tool stops at the tag; a CI workflow remains responsible for publishing to a registry.

## Key behavior

| Behavior | Detail |
| --- | --- |
| Install cost | `cargo install cargo-bumpp`; the crate has no runtime dependencies. |
| Version inputs | Interactive selector, `major`, `minor`, `patch`, `conventional`, prerelease levels, or an explicit version. |
| Workspace handling | Uses `cargo metadata` to understand shared versions and path dependencies; `--recursive` opts into independent member bumps. |
| Safety | Shows changed files and line numbers, confirms once, rolls back local changes if steps 3–5 fail, and does not roll back after a push failure. |
| Release boundary | Creates the release point but deliberately does not publish to crates.io or create a PR flow. |

## Release model

The default run has one visible decision and six operational stages:

1. Select a release level or explicit version.
2. Read Cargo metadata and Git history when the mode needs them.
3. Print every version change, including manifest paths and line numbers.
4. Ask for one confirmation, then write manifests and `Cargo.lock`.
5. Create the release commit and annotated tag.
6. Push the branch and the exact tag, unless a `--no-push` option is used.

The local mutation stages are rollback-aware. A failure before push restores the working tree, commit, and tag. A remote push failure leaves the local release point intact and prints a retry command.

## Identity and requirements

| Fact | Value |
| --- | --- |
| Crate | `cargo-bumpp` |
| Direct binary | `bumpp` |
| Cargo subcommand | `cargo bumpp` |
| Minimum Rust version | 1.74 |
| Runtime tools | `cargo`, `git` |
| Dependencies | None in the published crate |
| License | MIT |

The tool is useful when the release unit is a local commit and tag. Registry publishing, changelog policy, credentials, and CI orchestration stay outside that unit.

## Install and learn

- [Getting started](/projects/cargo-bumpp/getting-started) — install and run safe first-release commands.
- [Architecture](/projects/cargo-bumpp/architecture) — follow the plan, rollback, git, and workspace stages.
- [Reference](/projects/cargo-bumpp/reference) — flags, release levels, exit codes, and configuration.
- [Workspace and rollback](/projects/cargo-bumpp/workspace-and-rollback) — shared versions, member versions, and failure recovery.
- [CI and release](/projects/cargo-bumpp/ci-and-release) — hand the tag to downstream automation.
- [Troubleshooting](/projects/cargo-bumpp/troubleshooting) — diagnose Git, signing, prompt, and workspace errors.
- [FAQ](/projects/cargo-bumpp/faq) — compare it with cargo-release and cargo-bump.
- [Source repository](https://github.com/imba97/cargo-bumpp) — Rust source, tests, and release workflow.

## Scope boundary

`cargo-bumpp` is a release preparation tool. It does not publish packages, generate changelogs, or provide a pull-request release workflow.
