<!-- deskcrew-header:start -->
<p align="center">
  <a href="https://deskcrew.io"><img src="https://deskcrew.io/logo.png" alt="DeskCrew" width="96" height="96"></a>
</p>

<h1 align="center">@deskcrew/astro</h1>

<p align="center"><b>Astro integration for AI live chat, help center and ticketing. Add the DeskCrew support widget to any Astro site with one line in astro.config.mjs. Free plan, no card required.</b></p>

<p align="center">
  <a href="https://deskcrew.io"><b>Website</b></a> •
  <a href="https://deskcrew.io/integrations"><b>Integrations</b></a> •
  <a href="https://deskcrew.io/agents"><b>For agents</b></a> •
  <a href="https://deskcrew.io/signup"><b>Sign up</b></a>
</p>

<p align="center">
  <a href="https://github.com/webmilmind1/astro-deskcrew/stargazers"><img src="https://img.shields.io/github/stars/webmilmind1/astro-deskcrew?style=flat&logo=github&label=Stars&color=ffd33d" alt="GitHub stars"></a>
  <a href="https://github.com/webmilmind1/astro-deskcrew"><img src="https://img.shields.io/github/license/webmilmind1/astro-deskcrew?style=flat&label=License&color=e3a82b" alt="License"></a>
</p>

<p align="center">
  <a href="https://deskcrew.io"><img src="https://img.shields.io/badge/Visit_our_website-6366F1?style=for-the-badge&logoColor=white" alt="Visit our website"></a>
  <a href="https://discord.gg/hdWZgrYDqB"><img src="https://img.shields.io/badge/Join_our_Discord-5865F2?style=for-the-badge&logoColor=white&logo=discord" alt="Join our Discord"></a>
  <a href="https://x.com/getdeskcrew"><img src="https://img.shields.io/badge/Follow_%40getdeskcrew-000000?style=for-the-badge&logoColor=white&logo=x" alt="Follow @getdeskcrew"></a>
  <a href="https://www.instagram.com/getdeskcrew"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logoColor=white&logo=instagram" alt="Instagram"></a>
  <a href="https://mastodon.social/@deskcrew"><img src="https://img.shields.io/badge/Mastodon-6364FF?style=for-the-badge&logoColor=white&logo=mastodon" alt="Mastodon"></a>
  <a href="https://www.youtube.com/channel/UCW7g7TLiUbnK8zWF513ckFA"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logoColor=white&logo=youtube" alt="YouTube"></a>
  <a href="https://www.tiktok.com/@deskcrewhq"><img src="https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logoColor=white&logo=tiktok" alt="TikTok"></a>
</p>

<p align="center"><i>⭐ Help more people find DeskCrew. Star this repo!</i></p>
<!-- deskcrew-header:end -->

[![npm](https://img.shields.io/npm/v/@deskcrew/astro?color=4f46e5&label=npm)](https://www.npmjs.com/package/@deskcrew/astro)
[![license](https://img.shields.io/npm/l/@deskcrew/astro?color=4f46e5)](./LICENSE)

<a href="https://www.producthunt.com/products/deskcrew?utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-deskcrew"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1197215&theme=dark" alt="DeskCrew on Product Hunt" width="250" height="54" /></a>

**Add AI live chat, a help center and ticketing to any Astro site in about two minutes, free, with no credit card.** `@deskcrew/astro` is the official [DeskCrew](https://deskcrew.io) integration: one line in `astro.config.mjs` puts a support widget on every page, answers visitor questions from your own help articles, and turns anything it cannot answer into a real support ticket.

[![The DeskCrew AI support widget opening on an Astro documentation site and answering a visitor question about adding live chat](https://deskcrew.b-cdn.net/plugins/astro-demo.gif)](https://deskcrew.b-cdn.net/plugins/astro-demo.mp4)

<sub>The widget running on an Astro site. <a href="https://deskcrew.b-cdn.net/plugins/astro-demo.mp4">Watch the full quality video</a>.</sub>

## Install

```bash
npm install @deskcrew/astro
```

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'
import deskcrew from '@deskcrew/astro'

export default defineConfig({
  integrations: [
    deskcrew({
      widgetKey: 'pub_xxxxxxxx', // required, from Dashboard → Install
      // board: 'your-workspace', // optional
      // color: '#4f46e5',        // optional accent colour
      // position: 'right',       // optional: 'left' | 'right'
      // greeting: 'Hi! How can we help?', // optional
    }),
  ],
})
```

Build or run your site and the chat launcher appears on every page. No account yet? [Create one free](https://deskcrew.io/signup), then copy your key from [Dashboard → Install](https://deskcrew.io/dashboard/install).

## What you get

- **AI answers grounded in your own help articles.** The assistant only answers from the knowledge base you publish, so it cannot invent product facts.
- **A human approves before anything sends.** Every AI draft waits in an approval queue. Nothing reaches a customer unreviewed.
- **Every conversation becomes a ticket.** Widget chats, emails and board posts land in one dashboard with full history.
- **Visitors who leave still get answered.** Leave an email address and the reply arrives by email.
- **Free plan, no card.** Chat widget, public knowledge base and ticketing are included on the free plan.

## Options

| Option      | Type                | Required | Description                                           |
| ----------- | ------------------- | -------- | ----------------------------------------------------- |
| `widgetKey` | `string`            | yes      | Your public key (`pub_…`).                            |
| `board`     | `string`            | no       | Board slug (lowercase letters, numbers, dashes).      |
| `color`     | `string`            | no       | Accent colour as a 6-digit hex value, e.g. `#4f46e5`. |
| `position`  | `'left' \| 'right'` | no       | Which side the launcher sits on.                      |
| `greeting`  | `string`            | no       | Greeting shown on the launcher.                       |

If `widgetKey` is missing or malformed the integration prints a build-time warning and adds nothing. Your site still builds.

## How it works

The integration injects a small inline script into the document head that loads `https://deskcrew.io/desk.js` with your settings as `data-*` attributes. The widget renders inside a Shadow DOM, so it cannot inherit or leak your site's CSS. `desk.js` derives its API origin from its own `src`, so there is nothing else to configure.

Astro compatibility: works with any Astro 4 or later project, static or SSR, and with any adapter.

## How it compares

| | DeskCrew | Intercom | Crisp | Tidio |
| --- | --- | --- | --- | --- |
| Free plan with AI answers | Yes | No | Limited | Limited |
| Human approves AI replies | Yes, built in | No | No | No |
| Official Astro integration | Yes | No | No | No |
| Public knowledge base included | Yes | Paid add-on | Paid tier | Paid tier |
| Credit card to start | No | Yes | No | No |

## FAQ

### How do I add live chat to an Astro site?
Install `@deskcrew/astro`, add the integration to `astro.config.mjs` with your public widget key, and rebuild. The launcher appears on every page.

### Is it free?
Yes. The free plan includes the chat widget, a public knowledge base and ticketing, with no credit card. Paid plans add higher AI allowances and team features. See [pricing](https://deskcrew.io/pricing).

### Does it slow my site down?
The integration adds one deferred script tag. Nothing renders until the visitor opens the launcher, and the widget is isolated in a Shadow DOM.

### Does the AI make things up?
It answers from the knowledge base you publish. When it has no grounded answer it escalates to a human instead of guessing, and every draft reply requires human approval before sending.

### Does it work with static builds and SSR?
Both. The widget is client-side and framework agnostic, so output mode and adapter do not matter.

### Can I use it on multiple sites?
Yes. Each site is its own workspace with a separate knowledge base, ticket history and widget key.

## Links

- Astro integration page: https://deskcrew.io/integrations/astro
- All integrations: https://deskcrew.io/integrations
- Pricing: https://deskcrew.io/pricing
- Start free: https://deskcrew.io/signup

## License

MIT © DeskCrew · [deskcrew.io](https://deskcrew.io) · hello@deskcrew.io

_Updated July 2026._
