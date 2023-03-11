import { fileURLToPath, URL } from 'node:url'

import { crx } from '@crxjs/vite-plugin'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { manifest } from './manifest.config'

// https://vitejs.dev/config/
// mode = "development" | "production"
export default ({ mode }) => {
  const isProd = mode === 'production'
  return defineConfig({
    plugins: [vue(), crx({ manifest })],
    build: {
      // not minify on development
      minify: isProd
    },
    esbuild: {
      // remove console on production
      drop: isProd ? ['console'] : undefined
    }
  })
}
