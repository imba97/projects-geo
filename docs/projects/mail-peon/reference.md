---
title: Mail Peon reference — modes, settings, and message lifecycle
description: A factual Mail Peon reference for modes, accounts, AI providers, prompt rules, message states, and browser UI contexts.
project: mail-peon
type: reference
lang: en
---

# Mail Peon reference

## Product and package names

| Name | Meaning |
| --- | --- |
| Mail Peon | Product name shown in the extension UI and manifest. |
| `mail-peon` | Repository, package, IndexedDB, log, and message-channel name. |

Keeping those names separate avoids confusing a user-facing label with an implementation identifier.

## Modes

| Mode | Stored message behavior | Main output |
| --- | --- | --- |
| Minimal | Unrelated messages are discarded; message bodies are not retained. | Verification code, confirmation action, page-top toast. |
| Custom | Configurable mail records and summaries are kept locally. | Mail stream, AI summary, badge, filters, and prompt rules. |

The mode switch does not require a separate account or a new installation, and switching modes does not clear the existing local data.

## Account fields

An account identifies a provider and its connection state. Gmail uses OAuth client data and a token. IMAP uses host, port, TLS, username, password, relay URL, and an incremental cursor.

## Prompt rules

A prompt rule matches a sender address, domain, or regular expression and supplies a provider-specific instruction. Rules have priority ordering; smaller priority values run first. Exclusion entries can prevent a sender from entering the extension at all.

## Message lifecycle

```text
provider → fetch → parse → classify → AI extraction/summary → local store → UI/toast
```

Minimal mode may stop after extraction and toast delivery. Custom mode can retain the local message record, move deleted messages to a recoverable trash state, and later remove them permanently.

## UI contexts

| Context | Primary job |
| --- | --- |
| Popup | Recent important messages. |
| Sidepanel | Expanded mail stream and filters. |
| Options | Accounts, AI, rules, exclusions, and general settings. |
| Content script | Isolated toast rendering and clipboard fallback. |
