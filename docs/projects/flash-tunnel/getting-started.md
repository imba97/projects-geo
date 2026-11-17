---
title: flash-tunnel getting started
description: "Install and run flash-tunnel from its source repository, then verify the first local workflow."
project: flash-tunnel
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with flash-tunnel

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/flash-tunnel/flash-tunnel.git
cd flash-tunnel
~~~

## 2. Install or build the runtime

Clone the repository or read the project documentation site, then install the CLI workspace before running a local tunnel.

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

- [Overview](/projects/flash-tunnel/)
- [Architecture](/projects/flash-tunnel/architecture)
- [FAQ](/projects/flash-tunnel/faq)

[GitHub repository](https://github.com/flash-tunnel/flash-tunnel) is the canonical source for release-specific setup.
