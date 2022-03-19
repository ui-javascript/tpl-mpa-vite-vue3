import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// const resolve = (p) => path.resolve(process.cwd(), p);

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        demo1: resolve('_demo1/index.html'),
        demo2: resolve('_demo2/index.html'),
      }
    }
  },
  plugins: [vue()]
})
