---
title: ontograph-cli architecture
description: "Runtime boundaries, package roles, and design facts for ontograph-cli."
project: ontograph-cli
type: architecture
lang: en
updated: 2026-11-17
---

# ontograph-cli architecture

The CLI separates entity creation, relation updates, and graph queries so the same graph can be used from scripts and interactive commands.

## Boundary map

~~~text
entity and relationship commands
        │
        ▼
ontograph-cli: graph mutation and query operations
        │
        ▼
stored knowledge graph data and query results
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

- [Getting started](/projects/ontograph-cli/getting-started)
- [FAQ](/projects/ontograph-cli/faq)
- [Source repository](https://github.com/imba97/ontograph-cli)
