---
title: cross-craft architecture
description: "Runtime boundaries, package roles, and design facts for cross-craft."
project: cross-craft
type: architecture
lang: en
updated: 2026-11-17
---

# cross-craft architecture

The starter separates shared packages from platform applications so web and desktop targets can reuse the same product code.

## Boundary map

~~~text
shared product packages and platform-specific app code
        │
        ▼
cross-craft: Vite+ workspace and cross-platform application shell
        │
        ▼
Web, Capacitor, and Electron application builds
~~~

The exact module names and package graph belong to the repository version being used. Start with the README and source entrypoints, then follow imports into the implementation boundary.

## What to inspect

| Area | Question |
| --- | --- |
| Entry point | Which command, package, app, or API starts the project? |
| Data boundary | What inputs enter the project and what outputs leave it? |
| Runtime boundary | Which work happens in the browser, CLI, native process, or service? |
| Failure boundary | Which errors are returned to the caller and which are retried or logged? |
| Release boundary | Which artifacts are built, published, or handed to another workflow? |

## Related pages

- [Getting started](/projects/cross-craft/getting-started)
- [FAQ](/projects/cross-craft/faq)
- [Source repository](https://github.com/imba97/cross-craft)
