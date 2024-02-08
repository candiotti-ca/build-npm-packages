import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag.includes('vuejs-example')
      }
    }
  }), cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: './src/main.ce.ts',
      name: 'vuejs-example',
      fileName: 'vuejs-example'
    }
  },
  define: { 'process.env': process.env }
})
