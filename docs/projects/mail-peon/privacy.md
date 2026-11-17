---
title: Mail Peon privacy and security — local data, AI input, and relay trust
description: How Mail Peon stores credentials and mail locally, what an AI provider receives, and why the IMAP relay is a local trust boundary.
project: mail-peon
type: security
lang: en
---

# Mail Peon privacy and security

Mail Peon is local-first, but local-first does not mean no data leaves the browser. The relevant question is which data is stored locally, which data is sent to the configured AI provider, and which process can see IMAP plaintext.

## Storage classification

| Data | Location | Notes |
| --- | --- | --- |
| IMAP password, OAuth token, AI key | Extension IndexedDB | Stored locally by the extension; treat the browser profile as a credential store. |
| Accounts and prompt rules | Extension IndexedDB | Used by the background worker and options UI. |
| Message records | Extension IndexedDB in Custom mode | Retention and trash behavior are local settings and code paths. |
| Message body | Not retained in Minimal mode | Minimal mode keeps only the information needed for its narrow workflow. |
| AI input | Configured AI provider | Only sent when an AI operation is enabled and invoked. |

## AI boundary

The user chooses the provider and supplies its key. AI output is validated before the extension uses it. Custom mode can fall back to basic message information when AI fails; Minimal mode does not retain a message when it cannot extract the code it needs.

## IMAP relay boundary

The browser cannot open raw TCP from an MV3 service worker, so IMAP uses a local WebSocket-to-TCP relay. The relay terminates the mail server's TLS connection and can therefore see decrypted bytes, including credentials. Keep it bound to `127.0.0.1`, protect the optional token, and do not expose it publicly.

## Browser permissions and user controls

The extension's background context owns network and storage work. The options UI exposes provider, account, rule, retention, and mode controls. Users should remove credentials from the extension before sharing a browser profile or an exported development environment.

## Threat model

Mail Peon reduces hosted data collection; it does not protect a compromised browser profile, a malicious local process, or an AI provider that receives content by explicit configuration. The most important control is choosing the provider and keeping the relay local.
