/// <reference types="vitest/config" />

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default (mode: string) => {

  const env = loadEnv(mode, process.cwd());
  const API_URL = `${env.VITE_API_URL ?? 'http://localhost:8080'}`;

  return defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['src/setupTests.ts']
    },
    server: {
      proxy: {
        '/api/books/': {
          target: API_URL,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
        '/secure/api/': {
          target: API_URL,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
        '/login/': {
          target: API_URL,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
        '/feeds/': {
          target: API_URL,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      }
    }
  });
}
