
"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 48 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(245, 166, 35, ${0.08 + i * 0.015})`, // Increased base opacity and multiplier
        width: 0.8 + i * 0.05, // Increased stroke width
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-techstock-gold/50" // Increased base opacity
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.2 + path.id * 0.015} // Increased base opacity
                        initial={{ pathLength: 0.3, opacity: 0.5 }} // Increased initial opacity
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3], // Increased animation opacity range
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 18 + Math.random() * 8, // Slightly faster animation
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
            
            {/* Additional set of paths for more depth and intensity */}
            <div className="opacity-60 blur-[1px]">
                <FloatingPaths position={0.7} />
                <FloatingPaths position={-0.7} />
            </div>
        </div>
    );
}
