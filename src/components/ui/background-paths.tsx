
"use client";

import { motion } from "framer-motion";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

function FloatingPaths({ position }: { position: number }) {
    const { isMobile, isLowPowerDevice, prefersReducedMotion } = useDeviceCapability();
    
    // Further reduce the number of paths
    const pathCount = isLowPowerDevice ? 4 : (isMobile ? 8 : 24);
    
    // Calculate paths with optimized values
    const paths = Array.from({ length: pathCount }, (_, i) => {
        // Simplify path calculation for better performance
        const offset = i * (isLowPowerDevice ? 10 : 5) * position;
        return {
            id: i,
            d: `M-${380 - offset} -${189 + i * 6}C-${
                380 - offset
            } -${189 + i * 6} -${312 - offset} ${216 - i * 6} ${
                152 - offset
            } ${343 - i * 6}C${616 - offset} ${470 - i * 6} ${
                684 - offset
            } ${875 - i * 6} ${684 - offset} ${875 - i * 6}`,
            color: `rgba(245, 166, 35, ${0.08 + i * 0.015})`, 
            width: 0.8 + i * 0.03,  // Reduced thickness growth
        };
    });

    // Skip animations for reduced motion preference or low power
    const shouldAnimate = !isLowPowerDevice && !prefersReducedMotion;

    // Simpler, faster animation
    const getAnimationDuration = () => {
        if (isLowPowerDevice) return 0; // No animation
        if (isMobile) return 12 + Math.random() * 3; // Shorter on mobile
        return 15 + Math.random() * 5; // Shorter on desktop too
    };

    return (
        <div className="absolute inset-0 pointer-events-none opacity-60">
            <svg
                className="w-full h-full text-techstock-gold/50"
                viewBox="0 0 696 316"
                fill="none"
                aria-hidden="true"
            >
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.2 + path.id * 0.01}  // Reduced opacity growth
                        initial={shouldAnimate ? { pathLength: 0.3, opacity: 0.4 } : { opacity: 0.4 }}
                        animate={shouldAnimate ? {
                            pathLength: [0.3, 0.6, 0.3],  // Simplified animation
                            opacity: [0.3, 0.4, 0.3],
                        } : {
                            opacity: 0.4
                        }}
                        transition={shouldAnimate ? {
                            duration: getAnimationDuration(),
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        } : {}}
                        style={{
                            willChange: "opacity, stroke-dashoffset",  // Performance hint
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    const { isLowPowerDevice, isMobile } = useDeviceCapability();

    // Significantly reduced components for better performance
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
            <FloatingPaths position={1} />
            
            {/* Only add additional layers when not a low power device */}
            {!isLowPowerDevice && !isMobile && <FloatingPaths position={-1} />}
        </div>
    );
}
