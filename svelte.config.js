import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Move mdsvex to the front of the array
    preprocess: [
        mdsvex({
            extensions: ['.md', '.svx'], // Tell mdsvex which files to touch
        }),
        vitePreprocess()
    ],

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        })
    },

    // Ensure Svelte looks for .md files too
    extensions: ['.svelte', '.md', '.svx']
};

export default config;