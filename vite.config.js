import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://astounding-licorice-1ef290.netlify.app/"
    }
  },
  plugins: [react()],
})
