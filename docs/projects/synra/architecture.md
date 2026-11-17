---
title: Synra architecture
description: "Runtime boundaries, package roles, and design facts for Synra."
project: synra
type: architecture
lang: en
updated: 2026-11-17
---

# Synra architecture

The monorepo separates product applications, shared packages, and runtime integrations so the platform can evolve without putting every concern in one frontend.

## Boundary map

~~~text
web product interactions and platform requests
        │
        ▼
Synra: Synra application and AI platform runtime
        │
        ▼
web UI state and AI-assisted results
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

- [Getting started](/projects/synra/getting-started)
- [FAQ](/projects/synra/faq)
- [Source repository](https://github.com/synra-app/synra)
