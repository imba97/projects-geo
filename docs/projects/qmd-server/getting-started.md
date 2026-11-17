---
title: qmd-server getting started
description: "Install and run qmd-server from its source repository, then verify the first local workflow."
project: qmd-server
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with qmd-server

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/qmd-server.git
cd qmd-server
~~~

## 2. Install or build the runtime

Clone the repository, install dependencies, and inspect the server entrypoint and environment variables before starting it.

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

- [Overview](/projects/qmd-server/)
- [Architecture](/projects/qmd-server/architecture)
- [FAQ](/projects/qmd-server/faq)

[GitHub repository](https://github.com/imba97/qmd-server) is the canonical source for release-specific setup.
