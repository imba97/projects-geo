---
title: initx plugin authoring — package contract and development path
description: How to create an initx plugin with the required package naming, shared dependencies, command entrypoint, and local verification flow.
project: initx
type: extension
lang: en
---

# Author an initx plugin

An initx plugin is a separately installable package that adds a focused command to the host. Start from [initx-plugin-starter](https://github.com/initx-collective/initx-plugin-starter) when possible; it preserves the package shape expected by the ecosystem.

## Package contract

Use one of these names:

```text
initx-plugin-<name>
@initx-plugin/<name>
```

The plugin package should describe the workflow it adds and should expose the host integration through the shared core and utils packages. The repository skill recommends `@initx-plugin/core` and `@initx-plugin/utils` as peer dependencies so a plugin does not bundle a competing host runtime.

## Development path

1. Choose a command name that describes one focused workflow.
2. Create the package from the starter template.
3. Implement the command and keep side effects inside the plugin boundary.
4. Add tests for parsing, success output, and the failure path.
5. Run the plugin through the local initx CLI before publishing.

The initx monorepo uses workspace packages for local development. A plugin maintained elsewhere should consume the published host packages rather than reaching into private source files.

## What belongs in a plugin?

- Task-specific arguments and options.
- User-facing output and actionable errors.
- The external side effect that the command exists to perform.
- Tests that do not require the full initx monorepo when the host contract can be mocked.

## What belongs in the host?

Argument parsing conventions, plugin discovery, shared runtime behavior, and reusable utilities belong in the host packages. Keeping those concerns separate lets users install only the capabilities they need.

## Local verification

From the initx checkout, the repository exposes a local CLI script:

```bash
pnpm ix <command>
pnpm test
pnpm build
```

Use the same command shape after packaging to verify that the published plugin behaves like the workspace version.
