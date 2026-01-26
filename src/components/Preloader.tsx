import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsComplete(true);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isComplete ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
            {/* Animated grid background */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            {/* Central loading content */}
            <div className="relative z-10 text-center">
                {/* Logo/Name with glitch effect */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
                        FF
                    </h1>
                    <p className="text-cyan-400 text-sm md:text-base tracking-[0.3em] font-mono">
                        FOULA FOFANA
                    </p>
                </motion.div>

                {/* Progress bar */}
                <div className="w-64 md:w-96 mx-auto">
                    <div className="relative h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
                        <motion.div
                            className="absolute inset-y-0 left-0 rounded-full"
                            style={{
                                width: `${progress}%`,
                                background: 'linear-gradient(90deg, #00d4ff, #b026ff, #00ffff)',
                                boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
                            }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>

                    {/* Progress percentage */}
                    <motion.p
                        className="text-cyan-400 font-mono text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {Math.round(progress)}%
                    </motion.p>
                </div>

                {/* Loading text */}
                <motion.p
                    className="text-slate-400 text-xs md:text-sm mt-8 font-mono"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    INITIALIZING PORTFOLIO...
                </motion.p>
            </div>

            {/* Animated orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
                    style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }}
                    animate={{
                        x: ['-25%', '125%'],
                        y: ['-25%', '125%'],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
                    style={{ background: 'radial-gradient(circle, #b026ff, transparent)' }}
                    animate={{
                        x: ['125%', '-25%'],
                        y: ['125%', '-25%'],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />
            </div>
        </motion.div>
    );
}
