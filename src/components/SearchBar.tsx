import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SearchBarProps {
    theme: 'light' | 'dark';
    onSearch: (query: string) => void;
    placeholder?: string;
}

export default function SearchBar({ theme, onSearch, placeholder = 'Rechercher des articles...' }: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(query);
        }, 300);

        return () => clearTimeout(timer);
    }, [query, onSearch]);

    const handleClear = () => {
        setQuery('');
        onSearch('');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-2xl mx-auto"
        >
            <div
                className={`relative flex items-center glass rounded-xl transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''
                    }`}
                style={{
                    border: `2px solid ${isFocused
                            ? theme === 'dark' ? 'rgba(0, 212, 255, 0.5)' : 'rgba(0, 102, 255, 0.5)'
                            : theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'
                        }`,
                    boxShadow: isFocused
                        ? theme === 'dark'
                            ? '0 0 30px rgba(0, 212, 255, 0.3)'
                            : '0 0 30px rgba(0, 102, 255, 0.3)'
                        : 'none',
                }}
            >
                {/* Search Icon */}
                <div className="pl-6">
                    <Search
                        size={20}
                        className={`transition-colors ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                            }`}
                    />
                </div>

                {/* Input */}
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    className={`flex-1 px-4 py-4 bg-transparent outline-none font-medium ${theme === 'dark'
                            ? 'text-white placeholder-gray-500'
                            : 'text-slate-900 placeholder-gray-400'
                        }`}
                />

                {/* Clear Button */}
                {query && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onClick={handleClear}
                        className={`mr-4 p-2 rounded-lg glass transition-all hover:scale-110 ${theme === 'dark'
                                ? 'text-gray-400 hover:text-cyan-400'
                                : 'text-gray-600 hover:text-blue-600'
                            }`}
                        style={{
                            border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                        }}
                    >
                        <X size={16} />
                    </motion.button>
                )}
            </div>

            {/* Search hint */}
            {query && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-2 text-sm text-center font-mono ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                >
                    Recherche: "{query}"
                </motion.p>
            )}
        </motion.div>
    );
}
