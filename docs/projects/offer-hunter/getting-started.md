---
title: Offer Hunter getting started
description: "Install and run Offer Hunter from its source repository, then verify the first local workflow."
project: offer-hunter
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with Offer Hunter

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/offer-hunter.git
cd offer-hunter
~~~

## 2. Install or build the runtime

Clone the repository, install dependencies, build the unpacked extension, and read the privacy policy before connecting an AI provider.

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

- [Overview](/projects/offer-hunter/)
- [Architecture](/projects/offer-hunter/architecture)
- [FAQ](/projects/offer-hunter/faq)

[GitHub repository](https://github.com/imba97/offer-hunter) is the canonical source for release-specific setup.
