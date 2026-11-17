---
title: Flash Debug getting started
description: "Install and run Flash Debug from its source repository, then verify the first local workflow."
project: flash-debug
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with Flash Debug

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/flash-debug-js/flash-debug.git
cd flash-debug
~~~

## 2. Install or build the runtime

Clone the monorepo, install dependencies, and inspect the package list before building an SDK or the inspector.

~~~bash
pnpm install
~~~

If the repository uses a different package manager, toolchain, or platform SDK, use its README as the version-specific authority before changing the command.

## 3. Verify locally

- Read the root README and package metadata.
- Run the smallest test, build, or help command available.
- Keep generated output separate from source files.
- Record the runtime version when reproducing a problem.

## Next pages

- [Overview](/projects/flash-debug/)
- [Architecture](/projects/flash-debug/architecture)
- [FAQ](/projects/flash-debug/faq)

[GitHub repository](https://github.com/flash-debug-js/flash-debug) is the canonical source for release-specific setup.
