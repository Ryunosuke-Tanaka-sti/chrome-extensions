import { crx, defineManifest } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Hello Extention',
  version: '1.0.0',
  description: '猫が永遠と表示される',
  icons: {
    '16': 'images/cat_16.png',
    '24': 'images/cat_16.png',
    '32': 'images/cat_32.png',
  },
  action: {
    default_popup: 'index.html',
  },
  content_scripts: [
    {
      matches: ['https://www.google.com/*'],
      js: ['src/contentScript.tsx'],
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), crx({ manifest })],
});
