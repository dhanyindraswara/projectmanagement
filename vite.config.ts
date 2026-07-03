import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so bundled assets resolve correctly when the app is
  // served from a GitHub Pages project subpath (e.g. /projectmanagement/).
  base: './',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
