---
title: initx getting started — install, add plugins, run commands
description: Install initx globally, use the initx or ix alias, add a plugin, and run a first workflow command.
project: initx
type: getting-started
lang: en
---

# Get started with initx

The shortest path is: install the CLI, add a plugin, then run the plugin command. A global install removes the need to prefix every call with `npx`.

## 1. Install the CLI

```bash
npm i -g initx
```

You can use either command name:

```bash
initx <command> [options]
ix <command> [options]
```

## 2. Add a plugin

```bash
initx plugin add git
```

The short name resolves to the published `@initx-plugin/git` package. The same form works for the other official plugins:

```bash
initx plugin add gpg
initx plugin add cp
initx plugin add pm
```

## 3. Run a real workflow

Set a global Git identity:

```bash
initx user foo foo@example.com
```

Copy a public key without opening the key file:

```bash
initx cp ssh
initx cp gpg
```

Register a projects directory once, then create a repository checkout through the project manager plugin:

```bash
initx pm add ~/projects
initx create user/repo
```

## 4. Build a plugin

Use [initx-plugin-starter](https://github.com/initx-collective/initx-plugin-starter) as the starting point. Plugin names follow `initx-plugin-<name>` or `@initx-plugin/<name>` so the CLI and users can recognize them consistently.

## Verify the installation

```bash
initx --help
ix --help
```

If the command is not found, check that the npm global bin directory is on `PATH` and rerun the installation in the same Node.js environment that owns your shell.
