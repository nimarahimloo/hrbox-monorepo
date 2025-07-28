import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(process.env.HOME || '', '.vite-ssl/dev-key.pem')),
      cert: fs.readFileSync(path.resolve(process.env.HOME || '', '.vite-ssl/dev-cert.pem')),
    },
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../../apps/project-management/src'),
    },
  },
});