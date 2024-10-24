import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/books/': {
        //target: 'https://cloudybookclub.com',
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,      
        ws: true,
      },
      '/secure/api/': {
        //target: 'https://cloudybookclub.com',
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,      
        ws: true,
      },
      '/login/': {
        //target: 'https://cloudybookclub.com',
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,      
        ws: true,
      },
      '/feeds/': {
        //target: 'https://cloudybookclub.com',
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,      
        ws: true,
      },
    }
  }
})
