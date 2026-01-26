import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            );
        };

        const handleMouseEnter = () => setIsHidden(false);
        const handleMouseLeave = () => setIsHidden(true);

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (isHidden) return null;

    return (
        <>
            {/* Main cursor dot */}
            <div
                className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
                    background: 'white',
                }}
            />

            {/* Cursor ring */}
            <div
                className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-200"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
                    opacity: isPointer ? 0.8 : 0.5,
                }}
            />

            {/* Glow effect */}
            <div
                className="fixed w-16 h-16 rounded-full pointer-events-none z-[9998] blur-xl transition-all duration-300"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                    background: isPointer
                        ? 'radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent)'
                        : 'radial-gradient(circle, rgba(0, 212, 255, 0.2), transparent)',
                }}
            />
        </>
    );
}
