---
title: flash-dns getting started
description: "Install and run flash-dns from its source repository, then verify the first local workflow."
project: flash-dns
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with flash-dns

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/flash-tunnel/flash-dns.git
cd flash-dns
~~~

## 2. Install or build the runtime

Clone the repository, install dependencies, and follow the root README for provider and environment requirements.

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

- [Overview](/projects/flash-dns/)
- [Architecture](/projects/flash-dns/architecture)
- [FAQ](/projects/flash-dns/faq)

[GitHub repository](https://github.com/flash-tunnel/flash-dns) is the canonical source for release-specific setup.
