import { fetchPosts } from '$lib/posts';

export const load = async () => {
    const posts = await fetchPosts();
    return { posts };
};