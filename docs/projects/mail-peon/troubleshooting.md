---
title: Mail Peon troubleshooting — extension, relay, AI, and sync failures
description: Resolve common Mail Peon failures involving unpacked extension loading, OAuth, the IMAP relay, AI providers, clipboard, and incremental sync.
project: mail-peon
type: troubleshooting
lang: en
---

# Mail Peon troubleshooting

## The extension does not appear

Run `pnpm build`, open the browser extension management page, enable developer mode, and load the generated `extension/` directory. If an old build is still loaded, remove it before loading the new directory.

## Gmail authentication does not finish

Confirm that the OAuth client is created for a Chrome extension and that the client ID in the extension matches the one in the Google Cloud project. Check the background service worker console for the provider error before changing account settings.

## IMAP connection fails immediately

Start the relay and verify the exact WebSocket URL:

```bash
pnpm relay
```

The default is `ws://127.0.0.1:41316/`. If a custom port or token is used, copy the same values into the account settings. Keep the relay bound to localhost while diagnosing it.

## The relay starts but no mail arrives

Check the IMAP host, port, TLS mode, username, and mailbox selection. Confirm that the relay can reach the server and that the extension's background worker is still active. A first connection records a cursor and intentionally does not download history.

## AI summaries or code extraction fail

Test the selected provider from **Settings → AI configuration**. Verify the API key, endpoint, model, and provider compatibility. Custom mode can show basic message data after an AI failure; Minimal mode drops a message if the code cannot be extracted.

## The code was found but not copied

The copy path falls back from the background context to the content-script toast and then to a user-click action. Focus a normal web page, allow clipboard access, and use the toast's copy button if the automatic attempt was blocked.

## A message seems to be missing

Check the mode, exclusion list, sender prompt rules, and the selected account. In Minimal mode, unrelated mail is intentionally discarded. In Custom mode, inspect the background logs and the local trash state before assuming permanent deletion.
