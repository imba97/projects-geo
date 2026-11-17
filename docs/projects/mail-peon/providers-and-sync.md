---
title: Mail Peon providers and sync — Gmail, IMAP, cursors, and batches
description: Compare Mail Peon Gmail and IMAP connection paths and understand first sync, cursors, batching, and UIDVALIDITY behavior.
project: mail-peon
type: operations
lang: en
---

# Mail Peon providers and sync

## Provider comparison

| Provider | Authentication | Transport | Extra process |
| --- | --- | --- | --- |
| Gmail | Google OAuth client and token | Gmail REST API | None |
| IMAP | Host, port, TLS, username, password | IMAP over a local WebSocket-to-TCP relay | Relay required |

Gmail is the shorter setup path. IMAP supports a broader set of mail servers but needs the relay because browser MV3 contexts do not expose raw TCP sockets.

## First connection

The first connection records the current cursor instead of downloading a mailbox history. This prevents a new installation from flooding the local store with old messages and gives the user a predictable starting point.

## Incremental sync

Later checks fetch only messages after the provider cursor. Each batch is capped at 50 messages. The background worker parses and classifies messages before writing local records and updating UI signals.

## Polling and manual sync

The general setting defaults to a five-minute check and accepts an interval from one to 60 minutes. Opening the popup checks immediately, and the options page can trigger an incremental sync manually.

## IMAP UIDVALIDITY changes

IMAP uses `UIDVALIDITY` to identify the meaning of message UIDs in a mailbox. If it changes, Mail Peon resets the cursor to the newest position and warns the user rather than pretending that the old cursor is still valid.

## What the relay does not do

The relay holds a long-lived IMAP `IDLE` connection and moves bytes between WebSocket and TCP. It does not own the UI, classify messages, call AI, or persist a hosted mailbox.
