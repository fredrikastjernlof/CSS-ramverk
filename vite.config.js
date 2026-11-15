import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    css: {
        lightningcss: {
            errorRecovery: true
        }
    },

    build: {
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                bootstrap: resolve(import.meta.dirname, 'bootstrap.html'),
                foundation: resolve(import.meta.dirname, 'foundation.html'),
                bulma: resolve(import.meta.dirname, 'bulma.html'),
                tailwind: resolve(import.meta.dirname, 'tailwind.html'),
                publicering: resolve(import.meta.dirname, 'publicering.html'),
            },
        },
    }
});