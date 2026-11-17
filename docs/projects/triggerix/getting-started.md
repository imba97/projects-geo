---
title: triggerix getting started
description: "Install and run triggerix from its source repository, then verify the first local workflow."
project: triggerix
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with triggerix

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/triggerix-collective/triggerix.git
cd triggerix
~~~

## 2. Install or build the runtime

Clone the repository, install its workspace dependencies, and read the root README before choosing a package to build.

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

- [Overview](/projects/triggerix/)
- [Architecture](/projects/triggerix/architecture)
- [FAQ](/projects/triggerix/faq)

[GitHub repository](https://github.com/triggerix-collective/triggerix) is the canonical source for release-specific setup.
