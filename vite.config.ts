import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

const host = true
const port = 3000

export default defineConfig({
  plugins: [sveltekit()],
  server: { host, port },
  preview: { host, port }
})
