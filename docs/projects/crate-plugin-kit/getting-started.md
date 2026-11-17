---
title: crate-plugin-kit getting started
description: "Install and run crate-plugin-kit from its source repository, then verify the first local workflow."
project: crate-plugin-kit
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with crate-plugin-kit

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/crate-plugin-kit.git
cd crate-plugin-kit
~~~

## 2. Install or build the runtime

Clone the Rust workspace and run its tests before building a host or a plugin package.

~~~bash
cargo test --workspace
~~~

If the repository uses a different package manager, toolchain, or platform SDK, use its README as the version-specific authority before changing the command.

## 3. Verify locally

- Read the root README and package metadata.
- Run the smallest test, build, or help command available.
- Keep generated output separate from source files.
- Record the runtime version when reproducing a problem.

## Next pages

- [Overview](/projects/crate-plugin-kit/)
- [Architecture](/projects/crate-plugin-kit/architecture)
- [FAQ](/projects/crate-plugin-kit/faq)

[GitHub repository](https://github.com/imba97/crate-plugin-kit) is the canonical source for release-specific setup.
