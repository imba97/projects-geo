---
title: cross-craft getting started
description: "Install and run cross-craft from its source repository, then verify the first local workflow."
project: cross-craft
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with cross-craft

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/cross-craft.git
cd cross-craft
~~~

## 2. Install or build the runtime

Clone the starter, install workspace dependencies, and choose the target application before running the development script.

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

- [Overview](/projects/cross-craft/)
- [Architecture](/projects/cross-craft/architecture)
- [FAQ](/projects/cross-craft/faq)

[GitHub repository](https://github.com/imba97/cross-craft) is the canonical source for release-specific setup.
