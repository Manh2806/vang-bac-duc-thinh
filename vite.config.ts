import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Đường dẫn tương đối để chạy được cả trên GitHub Pages (/<repo>/) lẫn tên miền riêng
export default defineConfig({
  plugins: [react()],
  base: './',
})
