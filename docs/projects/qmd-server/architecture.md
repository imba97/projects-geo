---
title: qmd-server architecture
description: "Runtime boundaries, package roles, and design facts for qmd-server."
project: qmd-server
type: architecture
lang: en
updated: 2026-11-17
---

# qmd-server architecture

The HTTP layer translates request parameters into qmd operations and returns a service-friendly result instead of requiring callers to manage a local CLI process directly.

## Boundary map

~~~text
HTTP query parameters
        │
        ▼
qmd-server: h3 request adapter around the qmd command
        │
        ▼
HTTP responses containing query results
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

- [Getting started](/projects/qmd-server/getting-started)
- [FAQ](/projects/qmd-server/faq)
- [Source repository](https://github.com/imba97/qmd-server)
