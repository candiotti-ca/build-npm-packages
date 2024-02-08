import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag.includes('vuejs-example')
      }
    }
  })],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: './src/main.ce.ts',
      name: 'vuejs-example',
      fileName: 'vuejs-example'
    }
  },
  define: { 'process.env': process.env }
})
