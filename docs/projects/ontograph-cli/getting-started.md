---
title: ontograph-cli getting started
description: "Install and run ontograph-cli from its source repository, then verify the first local workflow."
project: ontograph-cli
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with ontograph-cli

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/ontograph-cli.git
cd ontograph-cli
~~~

## 2. Install or build the runtime

Clone the repository, install dependencies, and use the CLI help output to learn the graph storage and query commands.

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

- [Overview](/projects/ontograph-cli/)
- [Architecture](/projects/ontograph-cli/architecture)
- [FAQ](/projects/ontograph-cli/faq)

[GitHub repository](https://github.com/imba97/ontograph-cli) is the canonical source for release-specific setup.
