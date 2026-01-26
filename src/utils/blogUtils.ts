import { BlogPost } from '../data/blogData';

/**
 * Filter blog posts by tag
 */
export function filterByTag(posts: BlogPost[], tag: string): BlogPost[] {
    if (!tag) return posts;
    return posts.filter(post => post.tags.includes(tag));
}

/**
 * Filter blog posts by multiple tags
 */
export function filterByTags(posts: BlogPost[], tags: string[]): BlogPost[] {
    if (!tags || tags.length === 0) return posts;
    return posts.filter(post =>
        tags.some(tag => post.tags.includes(tag))
    );
}

/**
 * Search blog posts by query (searches in title, excerpt, and content)
 */
export function searchPosts(posts: BlogPost[], query: string): BlogPost[] {
    if (!query || query.trim() === '') return posts;

    const lowerQuery = query.toLowerCase();
    return posts.filter(post =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}

/**
 * Sort blog posts by date (newest first)
 */
export function sortByDate(posts: BlogPost[]): BlogPost[] {
    return [...posts].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

/**
 * Get all unique tags from blog posts
 */
export function getUniqueTags(posts: BlogPost[]): string[] {
    const allTags = posts.flatMap(post => post.tags);
    return Array.from(new Set(allTags)).sort();
}

/**
 * Get tag count
 */
export function getTagCount(posts: BlogPost[], tag: string): number {
    return posts.filter(post => post.tags.includes(tag)).length;
}

/**
 * Format date to readable format
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('fr-FR', options);
}

/**
 * Get related posts based on tags
 */
export function getRelatedPosts(posts: BlogPost[], currentPost: BlogPost, limit: number = 3): BlogPost[] {
    return posts
        .filter(post => post.id !== currentPost.id)
        .map(post => ({
            post,
            score: post.tags.filter(tag => currentPost.tags.includes(tag)).length
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.post);
}
