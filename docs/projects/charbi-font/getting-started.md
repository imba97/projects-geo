---
title: charbi-font getting started
description: "Install and run charbi-font from its source repository, then verify the first local workflow."
project: charbi-font
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with charbi-font

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/charbi-font.git
cd charbi-font
~~~

## 2. Install or build the runtime

Clone the tool, install dependencies, and run it against a small fixture before using it in a production build.

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

- [Overview](/projects/charbi-font/)
- [Architecture](/projects/charbi-font/architecture)
- [FAQ](/projects/charbi-font/faq)

[GitHub repository](https://github.com/imba97/charbi-font) is the canonical source for release-specific setup.
