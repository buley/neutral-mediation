import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { rm } from 'fs/promises'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    svelte(),
    {
      buildStart() {
        if (command === 'build')
          rm('./dist/assets', { recursive: true }).catch(() => {})
      }
    },
  ],
  publicDir: false,
  build: {
    emptyOutDir: false,
  }
}))