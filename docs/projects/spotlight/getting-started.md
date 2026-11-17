---
title: spotlight getting started
description: "Install and run spotlight from its source repository, then verify the first local workflow."
project: spotlight
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with spotlight

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/spotlight.git
cd spotlight
~~~

## 2. Install or build the runtime

Clone the Rust workspace, build the overlay, and inspect the example flow before connecting an agent.

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

- [Overview](/projects/spotlight/)
- [Architecture](/projects/spotlight/architecture)
- [FAQ](/projects/spotlight/faq)

[GitHub repository](https://github.com/imba97/spotlight) is the canonical source for release-specific setup.
