---
title: bigseek architecture
description: "Runtime boundaries, package roles, and design facts for bigseek."
project: bigseek
type: architecture
lang: en
updated: 2026-11-17
---

# bigseek architecture

The native side builds a compact binary index; the runtime reads that index for fast queries without requiring a server-side database.

## Boundary map

~~~text
documents and searchable text
        │
        ▼
bigseek: native CJK-aware bigram index builder
        │
        ▼
compact binary index consumed by the query runtime
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

- [Getting started](/projects/bigseek/getting-started)
- [FAQ](/projects/bigseek/faq)
- [Source repository](https://github.com/imba97/bigseek)
