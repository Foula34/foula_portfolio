import { X, Calendar, Clock, User, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '../data/blogData';
import { formatDate } from '../utils/blogUtils';
import { useEffect } from 'react';

interface BlogModalProps {
    post: BlogPost | null;
    theme: 'light' | 'dark';
    onClose: () => void;
    onPrevious?: () => void;
    onNext?: () => void;
    hasPrevious?: boolean;
    hasNext?: boolean;
}

export default function BlogModal({
    post,
    theme,
    onClose,
    onPrevious,
    onNext,
    hasPrevious,
    hasNext
}: BlogModalProps) {
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (post) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [post]);

    if (!post) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Backdrop */}
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-slate-950/95' : 'bg-white/95'
                    } backdrop-blur-xl`} />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-2xl"
                    style={{
                        border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
                    }}
                >
                    {/* Close Button */}
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                        className={`absolute top-4 right-4 z-10 p-3 rounded-xl glass ${theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'
                            }`}
                        style={{
                            border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                        }}
                    >
                        <X size={20} />
                    </motion.button>

                    {/* Header Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark'
                                ? 'from-slate-950 via-slate-950/50 to-transparent'
                                : 'from-white via-white/50 to-transparent'
                            }`} />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                <Calendar size={16} />
                                {formatDate(post.date)}
                            </div>
                            <div className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                <Clock size={16} />
                                {post.readTime}
                            </div>
                            <div className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                <User size={16} />
                                {post.author}
                            </div>
                        </div>

                        {/* Title */}
                        <h1
                            className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                }`}
                            style={{ fontFamily: 'Orbitron, sans-serif' }}
                        >
                            {post.title}
                        </h1>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium glass ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                                        }`}
                                    style={{
                                        border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
                                    }}
                                >
                                    <Tag size={14} />
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Article Content */}
                        <div
                            className={`prose prose-lg max-w-none ${theme === 'dark' ? 'prose-invert' : ''
                                }`}
                            style={{
                                color: theme === 'dark' ? '#e5e7eb' : '#374151',
                            }}
                        >
                            {/* Simple markdown-like rendering */}
                            {post.content.split('\n').map((line, index) => {
                                // Headers
                                if (line.startsWith('# ')) {
                                    return (
                                        <h1 key={index} className={`text-3xl font-bold mt-8 mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                            }`} style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                            {line.replace('# ', '')}
                                        </h1>
                                    );
                                }
                                if (line.startsWith('## ')) {
                                    return (
                                        <h2 key={index} className={`text-2xl font-bold mt-6 mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                            }`}>
                                            {line.replace('## ', '')}
                                        </h2>
                                    );
                                }
                                // Code blocks
                                if (line.startsWith('```')) {
                                    return null; // Handle in a more sophisticated way if needed
                                }
                                // Regular paragraphs
                                if (line.trim()) {
                                    return (
                                        <p key={index} className="mb-4 leading-relaxed">
                                            {line}
                                        </p>
                                    );
                                }
                                return <br key={index} />;
                            })}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    {(hasPrevious || hasNext) && (
                        <div className="flex justify-between items-center p-6 border-t"
                            style={{
                                borderColor: theme === 'dark' ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 102, 255, 0.1)',
                            }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, x: -5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onPrevious}
                                disabled={!hasPrevious}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium transition-all ${hasPrevious
                                        ? theme === 'dark'
                                            ? 'text-cyan-400 hover:text-cyan-300'
                                            : 'text-blue-600 hover:text-blue-500'
                                        : 'opacity-50 cursor-not-allowed'
                                    }`}
                                style={{
                                    border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                                }}
                            >
                                <ChevronLeft size={20} />
                                Article précédent
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onNext}
                                disabled={!hasNext}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium transition-all ${hasNext
                                        ? theme === 'dark'
                                            ? 'text-cyan-400 hover:text-cyan-300'
                                            : 'text-blue-600 hover:text-blue-500'
                                        : 'opacity-50 cursor-not-allowed'
                                    }`}
                                style={{
                                    border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                                }}
                            >
                                Article suivant
                                <ChevronRight size={20} />
                            </motion.button>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
