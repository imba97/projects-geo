---
title: Mail Peon FAQ — modes, privacy, Gmail, and IMAP
description: Answers to common Mail Peon questions about browser support, mailbox providers, local storage, AI, and the IMAP relay.
project: mail-peon
type: faq
lang: en
---

# Mail Peon FAQ

## Is Mail Peon a replacement for Gmail?

No. It is a browser-side assistant around an existing mailbox. It surfaces important messages and helps with codes and summaries; writing and full mailbox search remain in the mail provider's UI.

## What is the difference between Minimal and Custom mode?

Minimal mode is for verification and confirmation mail and discards unrelated mail. Custom mode keeps a configurable mail stream and adds AI summaries, prompt rules, ad filtering, exclusions, and badge status.

## Does it support Gmail and IMAP?

Yes. Gmail uses OAuth directly. IMAP requires the included local WebSocket-to-TCP relay because a browser MV3 service worker cannot open a raw TCP socket.

## Where is mail stored?

In the extension's own IndexedDB. Minimal mode intentionally does not keep the message body. There is no hosted Mail Peon mailbox.

## Is an AI key required?

Yes for AI extraction and summaries. Configure a supported provider in the options page. Custom mode can fall back to basic message information when an AI call fails; Minimal mode drops a message if it cannot extract the needed code.

## Why does the relay see plaintext?

The relay terminates IMAP TLS so it can maintain a TCP connection and speak IMAP on behalf of the browser. Run it locally, use a token when needed, and do not expose it to the public internet.
