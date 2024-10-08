import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/books/': {
        target: 'https://cloudybookclub.com',
        changeOrigin: true,
        secure: false,      
        ws: true,
        configure: (proxy) => {
          proxy.on('error', (err) => {
            //console.error('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req) => {
            //console.debug('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            //console.debug('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      },
      '/secure/api/': {
        target: 'https://cloudybookclub.com',
        changeOrigin: true,
        secure: false,      
        ws: true,
        configure: (proxy) => {
          proxy.on('error', (err) => {
            //console.error('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req) => {
            //console.debug('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            //console.debug('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      },
      
    }
  }
})
