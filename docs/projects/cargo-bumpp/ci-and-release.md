---
title: cargo-bumpp CI and release — handing a tag to automation
description: How cargo-bumpp fits into a CI release pipeline, what it intentionally stops before, and how to retry a failed remote push.
project: cargo-bumpp
type: integration
lang: en
---

# cargo-bumpp CI and release

`cargo-bumpp` creates a local release point. A downstream CI workflow can treat the annotated tag as the handoff event for checks, packaging, and registry publication.

## Recommended handoff

```text
developer or release job
  └─ cargo bumpp --no-push   (inspect locally when needed)
       └─ commit + annotated tag
            └─ push branch + exact tag
                 └─ CI validates and publishes according to repository policy
```

The tool pushes the branch and the exact tag rather than every local tag. This avoids triggering a release workflow for unrelated tags in the same repository.

## What CI should own

- Running the project's tests and lint checks.
- Building release artifacts.
- Authenticating to crates.io or another registry.
- Publishing packages and creating release notes according to policy.
- Recording provenance and deployment status.

## What cargo-bumpp deliberately does not own

It does not publish to a registry, generate a changelog, or create a pull-request release flow. Those decisions require repository credentials and team policy that do not belong in a local version transaction.

## Push failure recovery

If the remote rejects the push, keep the local commit and tag. Read the printed Git error, fix the remote condition, and rerun the exact push command. If a tag must be moved to rerun a downstream workflow, use `cargo bumpp --retag [tag]` after inspecting the new target.
