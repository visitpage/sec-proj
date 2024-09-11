import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import commonjs from 'vite-plugin-commonjs'
// import commonjs from '@rollup/plugin-commonjs'

// https://vitejs.dev/config/
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  }
})
