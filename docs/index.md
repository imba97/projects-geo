---
title: Imba97 Projects — high-context project documentation
description: English-first documentation for selected Imba97 projects, with machine-readable indexes for search and AI systems.
type: landing
lang: en
---

<script setup>
import { VPButton } from 'vitepress/theme'
</script>

<div class="home-intro">

# Imba97 Projects

<p class="lead">A searchable, citation-friendly index of open-source tools built by Imba97. Start with a project, find the shortest path to a working command, then follow the architecture and boundary notes when you need implementation context.</p>

<div class="actions">
  <VPButton theme="brand" text="Browse projects" href="/projects/" />
  <VPButton theme="alt" text="Read the GEO index" href="/guide/geo" />
</div>

</div>

## Independent project entries

| Project | What it does | Best starting point |
| --- | --- | --- |
| [initx](/projects/initx/) | Runs developer scripts through installable plugins. | [Install and run a plugin](/projects/initx/getting-started) |
| [Mail Peon](/projects/mail-peon/) | Surfaces important mail and copies verification codes in a browser. | [Connect a mailbox](/projects/mail-peon/getting-started) |
| [cargo-bumpp](/projects/cargo-bumpp/) | Bumps Cargo versions, commits, tags, and pushes with one confirmed flow. | [Run the first bump](/projects/cargo-bumpp/getting-started) |

## How to use this site

Each project is documented independently. Its pages cover the overview, setup, architecture, reference, constraints, and troubleshooting:

1. **Overview** gives the direct answer: what the project is, who it is for, and what it intentionally does not do.
2. **Getting started** contains copyable install and first-run commands.
3. **Architecture** explains the runtime boundary and the important design decisions.
4. **Reference** records commands, flags, inputs, outputs, and compatibility facts.
5. **Constraints and troubleshooting** explain security, failure paths, and recovery steps.
6. **FAQ** resolves common intent and edge cases in short, quotable answers.

The default language is English. Chinese translations live under [`/zh/`](/zh/), with the same route structure. Machine readers can use [`llms.txt`](/llms.txt), [`llms-full.txt`](/llms-full.txt), [`summary.json`](/summary.json), and [`sitemap.xml`](/sitemap.xml).

<p class="source-note">Project facts are derived from the local repositories and their public package metadata. Exact commands belong to the project repositories linked from each page.</p>

The person behind these projects is described on the [author page](/about).
