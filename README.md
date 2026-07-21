# @deskcrew/astro

[![npm](https://img.shields.io/npm/v/@deskcrew/astro?color=4f46e5&label=npm)](https://www.npmjs.com/package/@deskcrew/astro)
[![license](https://img.shields.io/npm/l/@deskcrew/astro?color=4f46e5)](./LICENSE)

<a href="https://www.producthunt.com/products/deskcrew?utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-deskcrew"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1197215&theme=dark" alt="DeskCrew on Product Hunt" width="250" height="54" /></a>

Add the [DeskCrew](https://deskcrew.io) support widget (live chat, instant
answers from your help articles and a help center) to every page of your
Astro site with one line of config.

## Install

```bash
npm install @deskcrew/astro
```

## Usage

Add the integration to your `astro.config.mjs` and pass your widget key:

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

Build or run your site and the chat launcher appears on every page.

## Options

| Option      | Type                | Required | Description                                        |
| ----------- | ------------------- | -------- | -------------------------------------------------- |
| `widgetKey` | `string`            | yes      | Your public key (`pub_…`).                         |
| `board`     | `string`            | no       | Board slug (lowercase letters, numbers, dashes).   |
| `color`     | `string`            | no       | Accent colour as a 6-digit hex value, e.g. `#4f46e5`. |
| `position`  | `'left' \| 'right'` | no       | Which side the launcher sits on.                   |
| `greeting`  | `string`            | no       | Greeting shown on the launcher.                    |

If `widgetKey` is missing or malformed the integration prints a build-time
warning and adds nothing, your site still builds.

## How it works

The integration injects a tiny inline script into the document head that loads
`https://deskcrew.io/desk.js` with your settings as `data-*` attributes.
`desk.js` derives its API origin from its own `src`, so there is nothing else to
configure.

## No account yet?

[Create one free](https://deskcrew.io/signup), no card needed, then copy your
key from [Dashboard → Install](https://deskcrew.io/dashboard/install).

## License

MIT © DeskCrew · [deskcrew.io](https://deskcrew.io) · hello@deskcrew.io
