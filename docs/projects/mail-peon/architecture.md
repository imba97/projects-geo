---
title: Mail Peon architecture — MV3, relay, AI, and IndexedDB
description: Mail Peon separates the MV3 background service worker, browser UI, local relay, content script, AI providers, and IndexedDB storage.
project: mail-peon
type: architecture
lang: en
---

# Mail Peon architecture

Mail Peon keeps privileged work in the background service worker and keeps UI contexts focused on rendering and messaging. A local relay exists only for IMAP transport; it does not become a hosted mail service.

## Runtime topology

```text
Gmail OAuth ───────────────┐
IMAP server ← TLS ← relay ←┼─ WebSocket ─ Background service worker
                            │                         │
                     Popup / Options / Sidepanel ←──┤
                                                     ├─ IndexedDB
                                                     ├─ AI provider
                                                     └─ Content-script toast + clipboard fallback
```

## Responsibility by context

| Context | Responsibility |
| --- | --- |
| Background service worker | Connects providers, parses mail, calls AI, writes IndexedDB, updates badge, and sends toast events. |
| Local IMAP relay | Holds the long-lived IMAP `IDLE` connection and moves bytes between WebSocket and TCP. It does not parse message content. |
| Popup | Shows the recent important mail list. |
| Sidepanel | Shows the expanded mail stream and filters. |
| Options | Edits accounts, AI providers, prompt rules, exclusions, and general settings. |
| Content script | Renders an isolated top-page toast and retries clipboard writes in the page focus context. |

## Data and privacy boundary

Accounts, rules, and messages are stored in the extension's IndexedDB. Minimal mode does not store message bodies. When AI is enabled, the configured provider receives only the text needed for its task. IMAP credentials are stored locally, and the relay can see decrypted IMAP bytes because it terminates the TLS connection; keep it bound to localhost and protect any token.

## Sync semantics

The first connection records a cursor instead of downloading history. Later runs fetch incrementally, with each batch capped at 50 messages. A changed IMAP `UIDVALIDITY` resets the cursor to the newest position and warns the user instead of guessing how to recover old state.
