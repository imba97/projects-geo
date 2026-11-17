---
title: Mail Peon — local-first AI mail assistant
description: Mail Peon is a Chrome and Firefox Manifest V3 extension that surfaces important mail and auto-copies verification codes.
project: mail-peon
type: project
lang: en
---

# Mail Peon

<p class="lead"><strong>Mail Peon</strong> is a local-first AI mail assistant for Chrome and Firefox. It watches the mail you choose, extracts verification codes, summarizes important messages, and keeps the working data in the extension's local IndexedDB.</p>

Maintainer: [imba97](/about).

## What problem does Mail Peon solve?

Mail Peon reduces the time between “a message arrived” and “I know what needs action.” Its minimal mode focuses on verification and confirmation mail; its custom mode adds a mail stream, AI summaries, prompt rules, exclusions, and badge status.

## Core capabilities

| Capability | Behavior |
| --- | --- |
| Verification codes | Extracts a code, copies it through a fallback chain, and shows a page-top toast with expiry timing when available. |
| Local-first storage | Accounts, rules, and mail records live in IndexedDB owned by the extension. Minimal mode does not retain the message body. |
| Mail providers | Gmail uses OAuth; IMAP uses a local WebSocket-to-TCP relay because MV3 cannot open raw TCP. |
| AI providers | OpenAI, DeepSeek, Anthropic, and OpenAI-compatible endpoints, with validated output and custom prompt rules. |
| Sync model | First connection records a cursor; later syncs fetch incrementally in batches of at most 50 messages. |

## Modes and operating facts

| Fact | Value |
| --- | --- |
| Product name | Mail Peon |
| Package and repository name | `mail-peon` |
| Runtime | Chrome and Firefox Manifest V3 extension |
| Local database | Extension-owned IndexedDB database named `mail-peon` |
| Mail providers | Gmail OAuth and IMAP through a local relay |
| Default polling interval | 5 minutes, configurable from 1 to 60 minutes |

**Minimal mode** is a narrow path for verification and confirmation mail. It extracts the code, gives a toast, and drops unrelated messages instead of storing them. **Custom mode** is the mail-stream path: it keeps configurable message types, AI summaries, prompt rules, exclusions, ad filtering, and badge status.

## Typical scenarios

- A developer is registering for services and wants a code copied without switching to a mailbox tab.
- A user monitors several accounts and wants only actionable mail surfaced in the browser.
- A privacy-conscious user wants message state in local browser storage while choosing which provider receives AI input.

Mail Peon remains an assistant around an existing mailbox. It does not send mail, replace provider search, or provide a hosted team inbox.

## Install and learn

- [Getting started](/projects/mail-peon/getting-started) — build the extension and connect Gmail or IMAP.
- [Architecture](/projects/mail-peon/architecture) — see the MV3 service worker, relay, UI, and storage boundaries.
- [Reference](/projects/mail-peon/reference) — modes, settings, providers, and message lifecycle terms.
- [Privacy and security](/projects/mail-peon/privacy) — local data, AI input, credentials, and relay trust.
- [Providers and sync](/projects/mail-peon/providers-and-sync) — Gmail, IMAP, cursors, and incremental fetch behavior.
- [Troubleshooting](/projects/mail-peon/troubleshooting) — resolve relay, AI, permissions, and sync failures.
- [FAQ](/projects/mail-peon/faq) — understand privacy, modes, and provider requirements.
- [Source repository](https://github.com/mail-peon/mail-peon) — implementation, design docs, and release checks.

## Scope boundary

Mail Peon is an assistant around an existing mailbox. It does not replace Gmail or another mail UI, send mail, or store your mailbox in a hosted service.
