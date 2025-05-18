import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
   server: {
    host: '0.0.0.0', // Accept connections from all IPs
    port: 5173       // Default Vite port
  },
   
})