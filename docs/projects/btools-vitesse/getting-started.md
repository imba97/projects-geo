---
title: btools-vitesse getting started
description: "Install and run btools-vitesse from its source repository, then verify the first local workflow."
project: btools-vitesse
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with btools-vitesse

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/btools-vitesse.git
cd btools-vitesse
~~~

## 2. Install or build the runtime

Clone the extension, install dependencies, build it, and load the generated extension directory in a browser.

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

- [Overview](/projects/btools-vitesse/)
- [Architecture](/projects/btools-vitesse/architecture)
- [FAQ](/projects/btools-vitesse/faq)

[GitHub repository](https://github.com/imba97/btools-vitesse) is the canonical source for release-specific setup.
