---
title: picgo-plugin-sftp-uploader architecture
description: "Runtime boundaries, package roles, and design facts for picgo-plugin-sftp-uploader."
project: picgo-plugin-sftp-uploader
type: architecture
lang: en
updated: 2026-11-17
---

# picgo-plugin-sftp-uploader architecture

The plugin maps PicGo upload inputs to an SFTP connection and returns the remote asset address to the host.

## Boundary map

~~~text
user or calling application
        │
        ▼
picgo-plugin-sftp-uploader runtime boundary
        │
        ├─ project-specific implementation
        ├─ tests and fixtures
        └─ build or release artifacts
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

- [Getting started](/projects/picgo-plugin-sftp-uploader/getting-started)
- [FAQ](/projects/picgo-plugin-sftp-uploader/faq)
- [Source repository](https://github.com/imba97/picgo-plugin-sftp-uploader)
