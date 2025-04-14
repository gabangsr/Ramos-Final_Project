import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: '/Ramos-Final_Project/',
  plugins: [
    tailwindcss(),
    react()],
})
