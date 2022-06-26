const path = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

function resolve(dir) {
  console.log(path.resolve(__dirname, '.', dir));
  return path.resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', 
  plugins: [vue()],
  resolve: {
    alias: {
      '/@': resolve('src'),
      '/$': resolve('src/modules')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
