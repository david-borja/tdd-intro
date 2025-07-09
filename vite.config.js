import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    // vitest config
    environment: 'happy-dom' // vamos a emular un dom para poder testear interacciones del usuario - alternativa más rápidoa a js-dom
  }
})
