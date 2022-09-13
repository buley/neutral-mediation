import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { rm } from 'fs/promises'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  publicDir: false,
  build: {
    emptyOutDir: false,
  }
}))