---
title: charbi-font architecture
description: "Runtime boundaries, package roles, and design facts for charbi-font."
project: charbi-font
type: architecture
lang: en
updated: 2026-11-17
---

# charbi-font architecture

The tool derives a character set from project inputs, then runs a font subsetting step to reduce shipped font data.

## Boundary map

~~~text
source code and the project character set
        │
        ▼
charbi-font: character scan and font subsetting pipeline
        │
        ▼
a smaller font package containing required glyphs
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

- [Getting started](/projects/charbi-font/getting-started)
- [FAQ](/projects/charbi-font/faq)
- [Source repository](https://github.com/imba97/charbi-font)
