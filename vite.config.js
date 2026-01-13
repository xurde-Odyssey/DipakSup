import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contact: resolve(__dirname, 'contact.html'),
                bioSandFilter: resolve(__dirname, 'bio-sand-filter.html'),
                agriculturalTools: resolve(__dirname, 'agricultural-tools.html'),
                cementBench: resolve(__dirname, 'cement-bench.html'),
            },
        },
    },
});
