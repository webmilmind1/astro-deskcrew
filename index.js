import { buildBootstrap } from './build-tag.js'

/**
 * DeskCrew Astro integration.
 *
 * Adds the DeskCrew support widget (live chat, instant answers and a help
 * centre) to every page of your Astro site. It injects a single inline
 * bootstrap into the document head that loads https://deskcrew.io/desk.js with
 * your public key; desk.js reads its `data-*` attributes and derives its API
 * origin from its own src.
 *
 * @param {import('./index.js').DeskcrewOptions} options
 * @returns {import('astro').AstroIntegration}
 */
export default function deskcrew(options) {
  return {
    name: '@deskcrew/astro',
    hooks: {
      'astro:config:setup': ({ injectScript, logger }) => {
        const { code, warnings } = buildBootstrap(options)
        for (const message of warnings) {
          if (logger && typeof logger.warn === 'function') logger.warn(message)
          else console.warn(message)
        }
        // 'head-inline' injects a non-module <script> into the <head> of every
        // page: the sanctioned way to add third-party JS from an integration.
        if (code) injectScript('head-inline', code)
      },
    },
  }
}
