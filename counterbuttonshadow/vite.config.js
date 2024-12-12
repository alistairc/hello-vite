import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            name: 'counterbuttonshadow',
            entry: 'src/counter-button.js'
        }
    }
})