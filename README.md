vite.config.js use this to get localhost port 3000 {
  import { defineConfig } from 'vite'
  import dns from 'dns'
  import react from '@vitejs/plugin-react-swc'
  
  dns.setDefaultResultOrder('verbatim')
  
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    server: {
      host: 'localhost',
      port: 3000
    }
  })
}
