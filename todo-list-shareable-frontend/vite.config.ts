import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      all:true,
      reporter:['cobertura']
    }
    // This doesn't work either
    // coverage: {
    //   include: ['src/**/*.{ts,vue}'],
    //   all: true,
    // } as any
  },
})