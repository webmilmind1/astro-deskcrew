// Dev-only ambient stub so `tsc --noEmit` can resolve the `astro` peer
// dependency without installing it. NOT published (excluded from "files").
// In a consumer's project the real `astro` types apply.
declare module 'astro' {
  export interface AstroIntegration {
    name: string
    hooks: Record<string, (...args: any[]) => unknown>
  }
}
