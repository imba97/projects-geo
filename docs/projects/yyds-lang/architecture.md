---
title: yyds-lang architecture
description: "Runtime boundaries, package roles, and design facts for yyds-lang."
project: yyds-lang
type: architecture
lang: en
updated: 2026-11-17
---

# yyds-lang architecture

The workspace separates language packages from the Web Studio application, with a Web Worker and Go WebAssembly runtime for browser execution.

## Boundary map

~~~text
YYDS source text and editor requests
        │
        ▼
yyds-lang: grammar, lexer, parser, semantic, and language-service packages
        │
        ▼
diagnostics, editor intelligence, and WebAssembly execution
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

- [Getting started](/projects/yyds-lang/getting-started)
- [FAQ](/projects/yyds-lang/faq)
- [Source repository](https://github.com/yyds-lang/yyds)
