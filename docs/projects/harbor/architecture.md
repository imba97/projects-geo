---
title: harbor architecture
description: "Runtime boundaries, package roles, and design facts for harbor."
project: harbor
type: architecture
lang: en
updated: 2026-11-17
---

# harbor architecture

Harbor treats a workspace release as a graph and policy problem: inspect members, calculate an order, preflight the tag, then execute the allowed release actions.

## Boundary map

~~~text
Cargo workspace manifests, package graph, and release policy
        │
        ▼
harbor: release ordering, tag preflight, and registry orchestration
        │
        ▼
published crates, tags, and release metadata
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

- [Getting started](/projects/harbor/getting-started)
- [FAQ](/projects/harbor/faq)
- [Source repository](https://github.com/imba97/harbor)
