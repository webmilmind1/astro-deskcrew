import type { AstroIntegration } from 'astro'

export interface DeskcrewOptions {
  /** Your DeskCrew public widget key, e.g. "pub_xxxxxxxx". Required. */
  widgetKey: string
  /** Board slug (lowercase letters, numbers and dashes). Optional. */
  board?: string
  /** Accent colour as a 6-digit hex value, e.g. "#4f46e5". Optional. */
  color?: string
  /** Which side the launcher sits on. Optional (defaults to the widget's own default). */
  position?: 'left' | 'right'
  /** Greeting shown on the launcher. Optional. */
  greeting?: string
}

/**
 * Astro integration that adds the DeskCrew support widget to every page.
 *
 * @example
 * // astro.config.mjs
 * import { defineConfig } from 'astro/config'
 * import deskcrew from '@deskcrew/astro'
 *
 * export default defineConfig({
 *   integrations: [deskcrew({ widgetKey: 'pub_xxxxxxxx' })],
 * })
 */
export default function deskcrew(options: DeskcrewOptions): AstroIntegration
