import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '',
  server: {
    port: 4173,
    host: true,
    open: true,
    cors: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
      sass: resolve(__dirname, './src/sass/'),
      page: resolve(__dirname, './src/sass/pages/')
    }
  }
})
