import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

const baseUrl = path.resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": baseUrl,
      "@components": path.resolve(baseUrl, "components"),
      "@context": path.resolve(baseUrl, "context"),
      "@pages": path.resolve(baseUrl, "pages"),
      "@images": path.resolve(baseUrl, "images")
    }
  }
})