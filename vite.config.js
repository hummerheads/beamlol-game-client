// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@tonconnect/sdk': path.resolve(__dirname, 'node_modules/@tonconnect/sdk'),
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      '/cdn/assets': {
        target: 'https://static.okx.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
