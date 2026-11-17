---
title: initx FAQ — plugins, aliases, and use cases
description: Answers to common initx questions about installation, command aliases, plugin naming, and when to use the scripting engine.
project: initx
type: faq
lang: en
---

# initx FAQ

## Is initx a shell replacement?

No. It is a plugin host for focused, repeatable developer actions. A shell remains the right place for general command composition; initx packages a workflow that deserves a stable name and install path.

## What is the difference between `initx` and `ix`?

They invoke the same CLI entrypoint. `ix` is only the shorter command alias.

## Which plugins are available?

The repository lists Git, GPG, public-key copying, and project-management plugins. The canonical links are in the [project overview](/projects/initx/).

## How do I install a plugin?

Run `initx plugin add <plugin-name>`, for example `initx plugin add git`. The short name maps to the corresponding `@initx-plugin/<name>` package.

## Can I write my own plugin?

Yes. Start with `initx-plugin-starter`, keep the package naming convention, and use the shared core and utils packages as the host contract.

## When should I use a full task runner instead?

Use a full task runner for build graphs, dependency scheduling, or project-local automation. Use initx when the main value is a portable, user-invoked command that can be installed separately.
