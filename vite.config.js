const path = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";
import { presetUno } from "unocss";
import { svgBuilder, findSvgFolders } from "./build/svg";

function resolve(dir) {
  console.log(path.resolve(__dirname, '.', dir));
  return path.resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', 
  plugins: [
    vue(),
    vueJsx(),
    Unocss({
      presets: [presetUno()]
    }),
    svgBuilder(["./src/icons/svg/",...findSvgFolders("./src/modules/")]),
  ],
  resolve: {
    alias: {
      '/@': resolve('src'),
      '/$': resolve('src/modules')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
