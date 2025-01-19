import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  base: '/personal-finance-app/',
  plugins: [
    react(),
    svgr(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
