import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contact: resolve(__dirname, 'contact.html'),
                blog: resolve(__dirname, 'blog.html'),
                bioSandFilter: resolve(__dirname, 'bio-sand-filter.html'),
                bioSandFilterNepal: resolve(__dirname, 'bio-sand-filter-nepal.html'),
                bioSandFilterUrlabari: resolve(__dirname, 'bio-sand-filter-urlabari.html'),
                bioSandFilterGuide: resolve(__dirname, 'bio-sand-filter-installation-maintenance.html'),
                agriculturalTools: resolve(__dirname, 'agricultural-tools.html'),
                agriculturalToolsMorang: resolve(__dirname, 'agricultural-tools-morang.html'),
                cementBench: resolve(__dirname, 'cement-bench.html'),
                cementBenchNepal: resolve(__dirname, 'cement-bench-nepal.html'),
                waterFilterSupplierUrlabari: resolve(__dirname, 'water-filter-supplier-urlabari.html'),
                productsAds: resolve(__dirname, 'products-ads.html'),
                notFound: resolve(__dirname, '404.html'),
            },
        },
    },
});
