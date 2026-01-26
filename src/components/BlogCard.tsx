import { Clock, Calendar, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '../data/blogData';
import { formatDate } from '../utils/blogUtils';

interface BlogCardProps {
    post: BlogPost;
    theme: 'light' | 'dark';
    onClick: () => void;
    index: number;
}

export default function BlogCard({ post, theme, onClick, index }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={onClick}
            className="group cursor-pointer perspective-container"
        >
            <div
                className="relative rounded-2xl overflow-hidden glass transition-all duration-500"
                style={{
                    border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                }}
            >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark'
                            ? 'from-slate-950 via-slate-950/50 to-transparent'
                            : 'from-white via-white/50 to-transparent'
                        } opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                    {/* Holographic Effect */}
                    <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                    {/* Read Time Badge */}
                    <div className="absolute top-4 right-4">
                        <div className={`flex items-center gap-1 px-3 py-1.5 rounded-lg glass text-sm font-medium ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                            }`}
                            style={{
                                border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
                            }}
                        >
                            <Clock size={14} />
                            {post.readTime}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Date */}
                    <div className={`flex items-center gap-2 mb-3 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        <Calendar size={14} />
                        {formatDate(post.date)}
                    </div>

                    {/* Title */}
                    <h3
                        className={`text-xl font-bold mb-3 line-clamp-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className={`mb-4 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium glass ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                                    }`}
                                style={{
                                    border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                                }}
                            >
                                <Tag size={12} />
                                {tag}
                            </span>
                        ))}
                        {post.tags.length > 3 && (
                            <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                                +{post.tags.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Read More */}
                    <div className={`flex items-center gap-2 font-medium ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                        }`}>
                        Lire l'article
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowRight size={18} />
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Glow Bar */}
                <div
                    className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0"
                    style={{
                        boxShadow: theme === 'dark'
                            ? '0 0 20px rgba(0, 212, 255, 0.6)'
                            : '0 0 20px rgba(0, 102, 255, 0.6)',
                    }}
                />
            </div>
        </motion.div>
    );
}
