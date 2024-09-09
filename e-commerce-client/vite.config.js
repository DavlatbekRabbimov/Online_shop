import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import macrosPlugin from 'vite-plugin-babel-macros';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [macrosPlugin(), reactRefresh()],
  server: {
    port: 3001
  },
  esbuild: {
    loader: 'jsx'
  }
})
