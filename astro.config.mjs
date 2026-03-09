import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://nitesh-77.github.io',
    base: '/Personal-Website',
    vite: {
        plugins: [tailwindcss()],
    },
});
