---
title: initx — plugin-powered scripting engine
description: initx is a Node.js CLI that turns repeatable developer tasks into installable plugins, with initx and ix command aliases.
project: initx
type: project
lang: en
---

# initx

<p class="lead"><code>initx</code> is a plugin-powered scripting engine for developer workflows. Install the CLI, add a plugin, and replace a multi-step shell recipe with a short command. The package also exposes <code>ix</code> as a compact alias.</p>

Maintainer: [imba97](/about).

## What problem does initx solve?

initx keeps small operational scripts discoverable and composable. The core CLI handles command dispatch and plugin installation; plugins own the task-specific behavior. This lets a workflow such as setting Git identity, copying a public key, or creating a project stay behind a memorable command instead of a private shell history entry.

## What can it do today?

| Capability | Example |
| --- | --- |
| Git identity | `initx user foo foo@example.com` via `@initx-plugin/git` |
| Copy public keys | `initx cp ssh` or `initx cp gpg` via `@initx-plugin/cp` |
| Project management | `initx pm add ~/projects` and `initx create user/repo` via `@initx-plugin/pm` |
| Plugin extension | Start from `initx-plugin-starter` and publish a package matching the plugin convention |

## Identity and runtime facts

| Fact | Value |
| --- | --- |
| Canonical CLI package | `initx` |
| Command aliases | `initx`, `ix` |
| Repository | [initx-collective/initx](https://github.com/initx-collective/initx) |
| License | MIT |
| Workspace packages | `initx`, `@initx-plugin/core`, `@initx-plugin/utils` |
| Extension unit | A separately installable `initx-plugin-*` or `@initx-plugin/*` package |

The CLI is the stable host. A plugin owns the user-facing command and its side effects; core and utils provide the shared contract. This means an installed plugin can evolve without turning every workflow into a change to the host CLI.

## Typical scenarios

- A developer wants one command for a setup action used across machines.
- A team wants a small operational workflow to be installed and versioned like a package.
- A plugin author wants to expose a focused capability without implementing argument parsing and host integration from scratch.

Use a project-local task runner when the workflow is tied to one repository's build graph. Use initx when the workflow is a reusable command that should be available independently of a particular checkout.

## Install and learn

- [Getting started](/projects/initx/getting-started) — install the CLI and run the first plugin command.
- [Architecture](/projects/initx/architecture) — understand the CLI, core, utils, and plugin boundary.
- [Reference](/projects/initx/reference) — commands, package names, and runtime terms.
- [Plugin authoring](/projects/initx/plugin-authoring) — create a compatible plugin package.
- [Design decisions](/projects/initx/design-decisions) — why the host/plugin boundary exists.
- [Troubleshooting](/projects/initx/troubleshooting) — resolve install, PATH, and plugin issues.
- [FAQ](/projects/initx/faq) — choose plugins, aliases, and extension paths.
- [Source repository](https://github.com/initx-collective/initx) — package source, tests, and release history.

## Scope boundary

initx is a local command runner and plugin host. It does not prescribe one deployment platform or replace a full task runner; the plugin is the unit of capability and distribution.
