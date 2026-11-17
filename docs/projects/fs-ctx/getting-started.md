---
title: fs-ctx getting started
description: "Install and run fs-ctx from its source repository, then verify the first local workflow."
project: fs-ctx
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with fs-ctx

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/fs-ctx.git
cd fs-ctx
~~~

## 2. Install or build the runtime

Clone the library, install dependencies, and run its tests before using the context adapter in another process.

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

- [Overview](/projects/fs-ctx/)
- [Architecture](/projects/fs-ctx/architecture)
- [FAQ](/projects/fs-ctx/faq)

[GitHub repository](https://github.com/imba97/fs-ctx) is the canonical source for release-specific setup.
