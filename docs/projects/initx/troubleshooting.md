---
title: initx troubleshooting — PATH, plugins, and local development
description: Resolve common initx failures involving global installation, PATH, plugin discovery, workspace packages, and local verification.
project: initx
type: troubleshooting
lang: en
---

# initx troubleshooting

## `initx` or `ix` is not found

Check that the npm global bin directory belongs to the same Node.js installation that ran `npm i -g initx`, then open a new shell and run:

```bash
node --version
npm prefix -g
initx --help
```

If `npx initx --help` works but the global command does not, the problem is the shell `PATH`, not the package itself.

## A plugin cannot be found

Use the short name or the full published package name:

```bash
initx plugin add git
initx plugin add @initx-plugin/git
```

Check the package spelling and the registry configured for the current npm environment. Plugin names must follow the initx naming convention.

## A command exists but its options are unknown

The host owns plugin installation, but the plugin owns its workflow flags. Run the plugin command with `--help` and check that the installed plugin version matches the documentation you are reading.

## A workspace plugin behaves differently after publishing

Check whether the plugin is resolving workspace copies of `@initx-plugin/core` or `@initx-plugin/utils`. Test once with the published versions, then compare the package lockfile and peer dependency range.

## Local development fails before the command runs

From the initx checkout, use the repository's own scripts:

```bash
pnpm i
pnpm build
pnpm test
pnpm ix --help
```

This separates a repository setup problem from a published CLI or plugin problem.
