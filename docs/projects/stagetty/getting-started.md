---
title: stagetty getting started
description: "Install and run stagetty from its source repository, then verify the first local workflow."
project: stagetty
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with stagetty

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/stagetty.git
cd stagetty
~~~

## 2. Install or build the runtime

Clone the package, install dependencies, and run its tests before embedding the renderer in a command-line workflow.

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

- [Overview](/projects/stagetty/)
- [Architecture](/projects/stagetty/architecture)
- [FAQ](/projects/stagetty/faq)

[GitHub repository](https://github.com/imba97/stagetty) is the canonical source for release-specific setup.
