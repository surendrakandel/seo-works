import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md', '.svx'],
    preprocess: [
        mdsvex({
            extensions: ['.md', '.svx'],
        }),
        vitePreprocess()
    ],

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            // CHANGE: Set a fallback page. 
            // 404.html is the standard for Vercel/GitHub Pages static hosting.
            fallback: '404.html', 
            precompress: false,
            strict: true
        }),
        // Ensure your slug pages are handled
        alias: {
            $content: 'src/content'
        }
    }
};

export default config;