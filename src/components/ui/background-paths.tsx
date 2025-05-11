
"use client";

import { motion } from "framer-motion";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

function FloatingPaths({ position }: { position: number }) {
    const { isMobile, isLowPowerDevice } = useDeviceCapability();
    
    // Significantly reduce the number of paths on mobile and low power devices
    const pathCount = isLowPowerDevice ? 6 : (isMobile ? 12 : 36);
    
    const paths = Array.from({ length: pathCount }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(245, 166, 35, ${0.08 + i * 0.015})`, 
        width: 0.8 + i * 0.05,
    }));

    // Skip animations on low power devices
    const shouldAnimate = !isLowPowerDevice;

    return (
        <div className="absolute inset-0 pointer-events-none">
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
                        strokeOpacity={0.2 + path.id * 0.015}
                        initial={shouldAnimate ? { pathLength: 0.3, opacity: 0.5 } : { opacity: 0.5 }}
                        animate={shouldAnimate ? {
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        } : {
                            opacity: 0.5
                        }}
                        transition={shouldAnimate ? {
                            duration: isMobile ? 30 : 18 + Math.random() * 8, 
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        } : {}}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    const { isLowPowerDevice } = useDeviceCapability();

    // On low power devices, we render fewer elements
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
            <FloatingPaths position={1} />
            {!isLowPowerDevice && <FloatingPaths position={-1} />}
            
            {/* Skip additional paths for low power devices */}
            {!isLowPowerDevice && (
                <div className="opacity-60 blur-[1px]">
                    <FloatingPaths position={0.7} />
                    {!isLowPowerDevice && <FloatingPaths position={-0.7} />}
                </div>
            )}
        </div>
    );
}
