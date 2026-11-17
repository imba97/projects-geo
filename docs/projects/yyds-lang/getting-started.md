---
title: yyds-lang getting started
description: "Install and run yyds-lang from its source repository, then verify the first local workflow."
project: yyds-lang
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with yyds-lang

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/yyds-lang/yyds.git
cd yyds-lang
~~~

## 2. Install or build the runtime

Clone the workspace, install dependencies, and use the website app or package-level scripts described in the README.

~~~bash
vp run website#dev
~~~

If the repository uses a different package manager, toolchain, or platform SDK, use its README as the version-specific authority before changing the command.

## 3. Verify locally

- Read the root README and package metadata.
- Run the smallest test, build, or help command available.
- Keep generated output separate from source files.
- Record the runtime version when reproducing a problem.

## Next pages

- [Overview](/projects/yyds-lang/)
- [Architecture](/projects/yyds-lang/architecture)
- [FAQ](/projects/yyds-lang/faq)

[GitHub repository](https://github.com/yyds-lang/yyds) is the canonical source for release-specific setup.
