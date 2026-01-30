import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'SemaUI',
      fileName: (format) => `semaui.${format}.js`
    },
    rollupOptions: {
      external: /^lit/, 
      
      output: {
        globals: {
          lit: 'lit'
        }
      }
    }
  },
  plugins: [
    dts({ 
      rollupTypes: true,
      insertTypesEntry: true 
    }) 
  ]
});