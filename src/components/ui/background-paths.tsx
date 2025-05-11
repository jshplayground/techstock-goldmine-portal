
"use client";

import { motion } from "framer-motion";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

function FloatingPaths({ position }: { position: number }) {
    const { isMobile, isLowPowerDevice, isMidRangeDevice } = useDeviceCapability();
    
    // Increase path count on mobile devices that can handle it
    // Only reduce significantly for truly low-power devices
    const pathCount = isLowPowerDevice ? 12 : (isMobile && !isMidRangeDevice ? 20 : (isMobile && isMidRangeDevice ? 32 : 48));
    
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

    // Skip animations only on truly low power devices
    // Mid-range and better can handle animations
    const shouldAnimate = !isLowPowerDevice;

    // Adjust animation duration based on device capability
    const durationBase = isLowPowerDevice ? 30 : (isMidRangeDevice ? 24 : 18);

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-techstock-gold/50"
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
                            duration: durationBase + Math.random() * 8, 
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
    const { isLowPowerDevice, isMidRangeDevice } = useDeviceCapability();

    // On mid-range devices, we render more elements than before
    // Only on truly low-power devices we minimize rendering
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <FloatingPaths position={1} />
            {/* Show secondary paths on mid-range and high-end devices */}
            {(!isLowPowerDevice || isMidRangeDevice) && <FloatingPaths position={-1} />}
            
            {/* Additional set of paths - only skip for truly low power devices */}
            {(!isLowPowerDevice) && (
                <div className="opacity-60 blur-[1px]">
                    <FloatingPaths position={0.7} />
                    {/* Most detailed paths only for high-end devices */}
                    {(!isLowPowerDevice && !isMidRangeDevice) && <FloatingPaths position={-0.7} />}
                </div>
            )}
        </div>
    );
}
