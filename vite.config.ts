import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname,"src/components"),
      "@assets": path.resolve(__dirname,"src/assets"),
      "@function": path.resolve(__dirname,"src/function"),
      "@types": path.resolve(__dirname,"src/types")

    },
    extensions: ['.ts','.tsx']
  },
  // css: {
  //   modules: false
  // },

  server:{
    open:true,
    port:3000,
    proxy: {
      '/api': {
        target:'http://localhost:3000',
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/api/,'')
      }
    }
  }
})
