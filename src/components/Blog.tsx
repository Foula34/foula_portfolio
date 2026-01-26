import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { searchPosts, filterByTags, sortByDate, getUniqueTags, getTagCount } from '../utils/blogUtils';
import SearchBar from './SearchBar';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';

interface BlogProps {
    theme: 'light' | 'dark';
}

export default function Blog({ theme }: BlogProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

    // Get all unique tags
    const allTags = getUniqueTags(blogPosts);

    // Filter and search posts
    const filteredPosts = sortByDate(
        searchPosts(
            filterByTags(blogPosts, selectedTags),
            searchQuery
        )
    );

    // Handle tag toggle
    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    // Clear all filters
    const clearFilters = () => {
        setSelectedTags([]);
        setSearchQuery('');
    };

    // Handle post navigation in modal
    const handlePrevious = useCallback(() => {
        if (!selectedPost) return;
        const currentIndex = filteredPosts.findIndex(p => p.id === selectedPost.id);
        if (currentIndex > 0) {
            setSelectedPost(filteredPosts[currentIndex - 1]);
        }
    }, [selectedPost, filteredPosts]);

    const handleNext = useCallback(() => {
        if (!selectedPost) return;
        const currentIndex = filteredPosts.findIndex(p => p.id === selectedPost.id);
        if (currentIndex < filteredPosts.length - 1) {
            setSelectedPost(filteredPosts[currentIndex + 1]);
        }
    }, [selectedPost, filteredPosts]);

    const currentIndex = selectedPost ? filteredPosts.findIndex(p => p.id === selectedPost.id) : -1;

    return (
        <section
            id="blog"
            className={`py-24 px-6 transition-colors duration-300 relative overflow-hidden ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'
                }`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 dot-pattern opacity-20" />

            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
                        style={{
                            border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
                        }}
                    >
                        <Sparkles size={16} className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} />
                        <span className={`text-sm font-medium font-mono ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                            }`}>
                            BLOG
                        </span>
                    </div>

                    <h2
                        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        Articles <span className="gradient-text">Techniques</span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Découvrez mes réflexions sur le développement web et mobile
                    </p>
                </motion.div>

                {/* Search Bar */}
                <div className="mb-12">
                    <SearchBar theme={theme} onSearch={setSearchQuery} />
                </div>

                {/* Tag Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-3">
                        {allTags.map((tag, index) => {
                            const isSelected = selectedTags.includes(tag);
                            const count = getTagCount(blogPosts, tag);

                            return (
                                <motion.button
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.3 + index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 glass ${isSelected
                                            ? theme === 'dark'
                                                ? 'text-cyan-400 bg-cyan-500/20'
                                                : 'text-blue-600 bg-blue-500/20'
                                            : theme === 'dark'
                                                ? 'text-gray-400 hover:text-cyan-400'
                                                : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                    style={{
                                        border: `2px solid ${isSelected
                                                ? theme === 'dark' ? 'rgba(0, 212, 255, 0.5)' : 'rgba(0, 102, 255, 0.5)'
                                                : theme === 'dark' ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 102, 255, 0.1)'
                                            }`,
                                        boxShadow: isSelected
                                            ? theme === 'dark'
                                                ? '0 0 20px rgba(0, 212, 255, 0.3)'
                                                : '0 0 20px rgba(0, 102, 255, 0.3)'
                                            : 'none',
                                    }}
                                >
                                    {tag} <span className="opacity-60">({count})</span>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Clear Filters */}
                    {(selectedTags.length > 0 || searchQuery) && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mt-6"
                        >
                            <button
                                onClick={clearFilters}
                                className={`text-sm font-medium underline ${theme === 'dark' ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'
                                    }`}
                            >
                                Réinitialiser les filtres
                            </button>
                        </motion.div>
                    )}
                </motion.div>

                {/* Results Count */}
                {(searchQuery || selectedTags.length > 0) && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`text-center mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}
                    >
                        {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} trouvé{filteredPosts.length > 1 ? 's' : ''}
                    </motion.p>
                )}

                {/* Blog Posts Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <BlogCard
                                key={post.id}
                                post={post}
                                theme={theme}
                                onClick={() => setSelectedPost(post)}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                    >
                        <div className={`inline-flex p-6 rounded-full glass mb-6 ${theme === 'dark' ? 'bg-cyan-500/10' : 'bg-blue-500/10'
                            }`}
                            style={{
                                border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
                            }}
                        >
                            <BookOpen size={48} className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} />
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}>
                            Aucun article trouvé
                        </h3>
                        <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            Essayez de modifier vos filtres ou votre recherche
                        </p>
                        <button
                            onClick={clearFilters}
                            className={`px-6 py-3 rounded-xl glass font-medium transition-all hover:scale-105 ${theme === 'dark' ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'
                                }`}
                            style={{
                                border: `2px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
                            }}
                        >
                            Réinitialiser les filtres
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Blog Modal */}
            <BlogModal
                post={selectedPost}
                theme={theme}
                onClose={() => setSelectedPost(null)}
                onPrevious={handlePrevious}
                onNext={handleNext}
                hasPrevious={currentIndex > 0}
                hasNext={currentIndex < filteredPosts.length - 1}
            />
        </section>
    );
}
