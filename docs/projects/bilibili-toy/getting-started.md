---
title: bilibili-toy getting started
description: "Install and run bilibili-toy from its source repository, then verify the first local workflow."
project: bilibili-toy
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with bilibili-toy

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/bilibili-toy.git
cd bilibili-toy
~~~

## 2. Install or build the runtime

Clone the SDK, install dependencies, and run its examples before connecting it to a creator application.

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

- [Overview](/projects/bilibili-toy/)
- [Architecture](/projects/bilibili-toy/architecture)
- [FAQ](/projects/bilibili-toy/faq)

[GitHub repository](https://github.com/imba97/bilibili-toy) is the canonical source for release-specific setup.
