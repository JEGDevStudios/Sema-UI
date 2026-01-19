import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      // El punto de entrada de tu librería (donde exportas todo)
      entry: 'src/index.js',
      // El nombre de la variable global si alguien lo usa sin módulos
      name: 'SemaUI',
      // Cómo se llamarán los archivos generados en /dist
      fileName: (format) => `sema-ui.${format}.js`
    },
    rollupOptions: {
      // IMPORTANTE: Le decimos a Vite que NO meta 'lit' dentro del paquete.
      // Así evitamos que si el usuario ya usa Lit, se descargue dos veces.
      external: /^lit/
    }
  }
});