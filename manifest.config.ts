// manifest.config.ts
import { defineManifest } from '@crxjs/vite-plugin'

export const manifest = defineManifest({
  manifest_version: 3,
  name: 'chrome-extension-sample',
  description: 'chrome-extension-sample',
  version: '0.0.1',
  permissions: ['tabs'],
  action: {
    default_popup: 'index.html'
  },
  background: {
    service_worker: 'src/background',
    type: 'module'
  }
  // icons: {
  //   '16': 'icons/icon_16.png',
  //   '32': 'icons/icon_32.png',
  //   '48': 'icons/icon_48.png',
  //   '128': 'icons/icon_128.png'
  // }
})
