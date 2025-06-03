import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import netlify from '@netlify/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), netlify()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
