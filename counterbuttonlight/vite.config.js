import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            name: 'counterbuttonlight',
            entry: 'src/counter-button.js'
        }
    }
})