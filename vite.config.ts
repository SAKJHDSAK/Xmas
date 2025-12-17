import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // 注意：这里的 'Christmas_tree' 必须替换为你 GitHub 仓库的名字
  base: '/Xmas/',
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  server: {
    host: true,
    open: true,
  }
});