import { crx, defineManifest } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Googleカレンダーの項目に色を付ける',
  version: '1.0.0',
  content_scripts: [
    {
      js: ['src/contentScripts/script.ts'],
      matches: ['https://calendar.google.com/*'],
      run_at: 'document_end',
    },
  ],
  side_panel: {
    default_path: 'index.html',
  },
  permissions: ['sidePanel', 'storage'],
});
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), crx({ manifest })],
});
