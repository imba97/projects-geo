---
title: Flash Debug architecture
description: "Runtime boundaries, package roles, and design facts for Flash Debug."
project: flash-debug
type: architecture
lang: en
updated: 2026-11-17
---

# Flash Debug architecture

The repository combines producer-facing packages with an inspector surface, keeping event transport and visual inspection as separate runtime concerns.

## Boundary map

~~~text
runtime events from producer SDKs
        │
        ▼
Flash Debug: event transport, inspection, and debugging SDKs
        │
        ▼
inspector views and diagnostic records
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

- [Getting started](/projects/flash-debug/getting-started)
- [FAQ](/projects/flash-debug/faq)
- [Source repository](https://github.com/flash-debug-js/flash-debug)
