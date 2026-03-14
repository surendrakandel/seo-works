export interface Post {
    title: string;
    date: string;
    description?: string;
    image?: string;      // Hero image for the review card
    client_url?: string; // The URL of the company you are reviewing
    published: boolean;
}

export async function fetchPosts() {
    // 1. Point this to your new /src/content folder
    const allPostFiles = import.meta.glob<{ metadata: Post }>('/src/content/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const slug = path.split('/').pop()?.replace('.md', '');
            return {
                meta: metadata,
                path: `/${slug}`
            };
        })
    );

    // 3. Filter and Sort
    return allPosts
        .filter(post => post.meta.published)
        .sort((a, b) => {
            return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
        });
}