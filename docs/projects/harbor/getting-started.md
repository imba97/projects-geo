---
title: harbor getting started
description: "Install and run harbor from its source repository, then verify the first local workflow."
project: harbor
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with harbor

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/harbor.git
cd harbor
~~~

## 2. Install or build the runtime

Clone the Rust repository and build the workspace with Cargo before trying a release workflow.

~~~bash
cargo build --workspace
~~~

If the repository uses a different package manager, toolchain, or platform SDK, use its README as the version-specific authority before changing the command.

## 3. Verify locally

- Read the root README and package metadata.
- Run the smallest test, build, or help command available.
- Keep generated output separate from source files.
- Record the runtime version when reproducing a problem.

## Next pages

- [Overview](/projects/harbor/)
- [Architecture](/projects/harbor/architecture)
- [FAQ](/projects/harbor/faq)

[GitHub repository](https://github.com/imba97/harbor) is the canonical source for release-specific setup.
