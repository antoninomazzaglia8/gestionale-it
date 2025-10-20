import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configurazione standard di Vite per React
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'build',
  },
  envPrefix: 'VITE_', // Permette a Vite di leggere tutte le variabili che iniziano con VITE_
});
