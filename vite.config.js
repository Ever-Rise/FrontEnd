import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    define: {
        global: 'globalThis',
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules/gsap')) return 'vendor-gsap';
                    if (
                        id.includes('node_modules/three') ||
                        id.includes('node_modules/@react-three')
                    ) {
                        return 'vendor-three';
                    }
                    if (id.includes('node_modules/framer-motion')) {
                        return 'vendor-framer';
                    }
                },
            },
        },
    },
    plugins: [
        react({
            babel: {
                plugins: [
                    [
                        'babel-plugin-react-compiler',
                        {
                            target: '18',
                            runtimeModule: 'react-compiler-runtime',
                        },
                    ],
                ],
            },
        }),
    ],
});
