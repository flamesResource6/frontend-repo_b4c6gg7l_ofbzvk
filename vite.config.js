import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simplified Vite config to avoid unsupported/unstable options that can prevent the dev server from starting
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    cors: true,
  },
})
