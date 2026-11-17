---
title: initx design decisions — why the host is plugin-based
description: "The design decisions behind initx: a small host CLI, install-on-demand plugins, shared core and utils packages, and the ix alias."
project: initx
type: decisions
lang: en
---

# initx design decisions

## Why make the plugin the unit of capability?

Developer workflows grow at different speeds and have different side effects. Keeping a capability in a plugin means the host can stay small while a user installs only the workflows they recognize and trust.

## Why keep core and utils separate?

The CLI and plugins need shared behavior, but that behavior should have one host contract. `@initx-plugin/core` and `@initx-plugin/utils` provide that contract without forcing every plugin to copy helpers or couple itself to private CLI files.

## Why provide `ix`?

The full `initx` name is useful in documentation and discovery. `ix` is a short alias for repeated terminal use. It is not a second implementation and does not change plugin behavior.

## Why install plugins on demand?

Most users need only a subset of workflows. On-demand installation keeps the default command surface smaller and makes the dependency and permission story visible at the point where a capability is added.

## Why is initx not a full task runner?

Build graphs, project-local pipelines, and dependency scheduling need a different execution model. initx optimizes for portable, user-invoked commands that can be distributed independently of one repository.

## Decision boundary

If a behavior must be shared by every plugin, it belongs in the host packages. If it exists to perform one user workflow, it belongs in the plugin. This boundary is the main architectural invariant.
