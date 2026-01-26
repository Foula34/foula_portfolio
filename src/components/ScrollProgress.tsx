import { useEffect, useState } from 'react';

interface ScrollProgressProps {
    theme: 'light' | 'dark';
}

export default function ScrollProgress({ theme }: ScrollProgressProps) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top progress bar */}
            <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
                <div
                    className="h-full transition-all duration-150 ease-out relative"
                    style={{
                        width: `${scrollProgress}%`,
                        background: theme === 'dark'
                            ? 'linear-gradient(90deg, #00d4ff, #b026ff, #00ffff)'
                            : 'linear-gradient(90deg, #0066ff, #b026ff, #00d4ff)',
                        boxShadow: theme === 'dark'
                            ? '0 0 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.4)'
                            : '0 0 10px rgba(0, 102, 255, 0.8), 0 0 20px rgba(0, 102, 255, 0.4)',
                    }}
                >
                    {/* Animated glow at the end */}
                    <div
                        className="absolute right-0 top-0 w-20 h-full"
                        style={{
                            background: theme === 'dark'
                                ? 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.6))'
                                : 'linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.6))',
                            filter: 'blur(8px)',
                        }}
                    />
                </div>
            </div>

            {/* Percentage indicator (optional, shows on scroll) */}
            {scrollProgress > 5 && (
                <div
                    className={`fixed top-20 right-6 px-4 py-2 rounded-full font-mono text-sm font-semibold z-50 glass transition-opacity duration-300 ${scrollProgress > 95 ? 'opacity-0' : 'opacity-100'
                        }`}
                    style={{
                        color: theme === 'dark' ? '#00d4ff' : '#0066ff',
                        border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
                    }}
                >
                    {Math.round(scrollProgress)}%
                </div>
            )}
        </>
    );
}
