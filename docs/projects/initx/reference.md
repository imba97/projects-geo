---
title: initx reference — commands, packages, and naming
description: A factual initx reference for command aliases, plugin package names, workspace packages, and the command grammar users can rely on.
project: initx
type: reference
lang: en
---

# initx reference

This page is the compact reference for the published initx command surface. Plugin commands are owned by their plugin; the host reference covers the stable installation and dispatch contract.

## Command grammar

```text
initx <command> [options]
ix <command> [options]
```

The two binaries point to the same CLI entrypoint. Use `--help` at the host or plugin level to inspect the installed command surface:

```bash
initx --help
initx plugin --help
ix --help
```

## Host commands

| Command | Purpose |
| --- | --- |
| `initx plugin add <name>` | Install a plugin by its short or package name. |
| `initx --help` | Show the host CLI help. |
| `ix ...` | Invoke the same host with the short alias. |

The user-facing workflow commands come from plugins. For example, `initx user ...` belongs to the Git plugin, while `initx cp ...` belongs to the public-key copy plugin.

## Package naming

Accepted plugin families are:

```text
initx-plugin-<name>
@initx-plugin/<name>
```

The short form in `initx plugin add git` maps to the corresponding scoped plugin package. Keeping the name convention consistent makes discovery and documentation unambiguous.

## Workspace package roles

| Package | Stable meaning |
| --- | --- |
| `initx` | Published CLI and `initx`/`ix` binaries. |
| `@initx-plugin/core` | Host-facing runtime contract for plugins. |
| `@initx-plugin/utils` | Shared helpers for the CLI and plugins. |

Plugin authors should prefer the shared packages as peer dependencies where the plugin skill requires them. This keeps the host contract singular.

## Source of truth

The [initx repository](https://github.com/initx-collective/initx) is the source for implementation, tests, package versions, and plugin links. This page is an orientation layer; plugin-specific flags belong to the plugin's own documentation.
