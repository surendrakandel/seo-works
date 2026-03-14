import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    try {
        // Load the markdown file from /src/content based on the URL slug
        const post = await import(`../../content/${params.slug}.md`);

        return {
            content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        throw error(404, `The review for "${params.slug}" does not exist.`);
    }
};