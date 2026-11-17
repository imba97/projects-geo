---
title: Sonar getting started
description: "Install and run Sonar from its source repository, then verify the first local workflow."
project: sonar
type: getting-started
lang: en
updated: 2026-11-17
---

# Get started with Sonar

The safest first run starts from the canonical repository and follows the project's own package or workspace scripts.

## 1. Clone the repository

~~~bash
git clone https://github.com/imba97/sonar.git
cd sonar
~~~

## 2. Install or build the runtime

Open the project in the HarmonyOS toolchain and follow the repository setup instructions for the target SDK.

~~~bash
Read the repository README first
~~~

If the repository uses a different package manager, toolchain, or platform SDK, use its README as the version-specific authority before changing the command.

## 3. Verify locally

- Read the root README and package metadata.
- Run the smallest test, build, or help command available.
- Keep generated output separate from source files.
- Record the runtime version when reproducing a problem.

## Next pages

- [Overview](/projects/sonar/)
- [Architecture](/projects/sonar/architecture)
- [FAQ](/projects/sonar/faq)

[GitHub repository](https://github.com/imba97/sonar) is the canonical source for release-specific setup.
