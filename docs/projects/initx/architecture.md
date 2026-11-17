---
title: initx architecture — CLI, core, utils, and plugins
description: initx separates command dispatch from reusable core and utility packages, while plugins provide user-facing scripting capabilities.
project: initx
type: architecture
lang: en
---

# initx architecture

initx is a small monorepo with a clear extension seam: the CLI parses and dispatches commands, core provides shared runtime behavior, utils provides reusable helpers, and plugins turn that foundation into commands users can install.

## Runtime path

```text
shell
  │
  ├─ initx / ix entrypoint
  │    └─ CLI parser and command dispatch
  │         └─ plugin package
  │              └─ task-specific side effects
  │
  └─ shared @initx-plugin/core + @initx-plugin/utils
```

The CLI package publishes the `initx` and `ix` binaries. Its runtime dependencies include `cac` for argument parsing and the workspace core and utils packages for shared behavior.

## Package roles

| Package | Role |
| --- | --- |
| `initx` | Published CLI package and binary entrypoint. |
| `@initx-plugin/core` | Shared plugin runtime and command integration. |
| `@initx-plugin/utils` | Shared helpers used by plugins and the CLI. |
| `@initx-plugin/*` | Optional capabilities installed on demand. |

## Extension contract

A plugin should keep its package name in the `initx-plugin-<name>` or `@initx-plugin/<name>` family. The repository's plugin skill recommends using `@initx-plugin/core` and `@initx-plugin/utils` as peer dependencies so plugins share the host runtime instead of bundling competing copies.

## Why the boundary matters

The host can remain stable while capabilities evolve independently. Users install only the workflows they need, and plugin authors can test the task package without changing the command runner itself.
