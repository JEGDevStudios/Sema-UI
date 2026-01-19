import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'; // Necesitarás instalar esto

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts', // Tu punto de entrada
      name: 'SemaUI',
      fileName: (format) => `sema-ui.${format}.js`,
    },
    rollupOptions: {
      // Asegúrate de no empaquetar Lit dentro de tu librería,
      // deja que el usuario final ponga la versión de Lit.
      external: ['lit'], 
      output: {
        globals: {
          lit: 'Lit',
        },
      },
    },
  },
  plugins: [
    dts({ 
      insertTypesEntry: true, // Genera los tipos automáticamente
    }), 
  ],
});