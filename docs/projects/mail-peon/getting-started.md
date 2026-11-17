---
title: Mail Peon getting started — build, connect, and configure
description: Build the Mail Peon browser extension, connect Gmail with OAuth or IMAP through a local relay, then configure an AI provider.
project: mail-peon
type: getting-started
lang: en
---

# Get started with Mail Peon

Mail Peon is loaded as an unpacked browser extension during development. The first setup has three parts: build the extension, connect a mailbox, and configure an AI key.

## 1. Build the extension

```bash
pnpm i
pnpm build
```

Then open the browser extension page (`chrome://extensions` in Chrome), enable developer mode, and load the generated `extension/` directory.

For development with hot rebuilds:

```bash
pnpm dev
```

## 2. Connect a mailbox

### Gmail

Create a Google Cloud OAuth client for a Chrome extension, then enter the client details in **Settings → Accounts**. Gmail uses OAuth and does not require the relay.

### IMAP

Run the included relay locally:

```bash
pnpm relay
pnpm relay --port 9000 --token xxx --allow-hosts imap.example.com
```

Use `ws://127.0.0.1:41316/` in the extension, then enter the IMAP host, username, and password. The relay is required because browser MV3 contexts expose `fetch` and WebSocket, not raw TCP.

## 3. Configure AI

Open **Settings → AI configuration**, select OpenAI, DeepSeek, Anthropic, or an OpenAI-compatible endpoint, enter an API key, and use **Test connection**. Minimal mode also needs AI because it uses a short extraction prompt for verification codes.

## 4. Pick a mode

- **Minimal mode** keeps only the information needed for verification and confirmation mail. Other mail is discarded instead of being stored or displayed.
- **Custom mode** adds the mail stream, AI summaries, ad filtering, prompt rules, exclusions, and badge updates.

The interval checker defaults to five minutes. Opening the popup also triggers an immediate check, and **Sync now** starts an incremental sync manually.
