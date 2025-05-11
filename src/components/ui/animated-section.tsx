
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { useDeviceCapability } from '@/hooks/useDeviceCapability';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'slide-up' | 'slide-right' | 'none';
  mobileSpacing?: boolean; // Prop to control mobile spacing
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  delay = 0,
  animation = 'fade',
  mobileSpacing = false
}) => {
  const { isLowPowerDevice, prefersReducedMotion } = useDeviceCapability();
  
  // Skip animation for low power devices or when reduced motion is preferred
  const effectiveAnimation = (isLowPowerDevice || prefersReducedMotion) ? 'none' : animation;
  
  // Also reduce delay for low power devices
  const effectiveDelay = isLowPowerDevice ? 0 : delay;
  
  const { ref, isInView } = useInView({
    threshold: 0.1, // Lower threshold for better performance
    triggerOnce: true,
    disableOnLowPower: true
  });
  
  // Define animation variants - simplified for better performance
  const variants = {
    hidden: {
      opacity: 0,
      y: effectiveAnimation === 'slide-up' ? 10 : 0, // Reduced distance
      x: effectiveAnimation === 'slide-right' ? 10 : 0, // Reduced distance
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.4, // Reduced duration
        delay: effectiveDelay,
        ease: "easeOut", // Simpler easing function
      },
    },
    none: {
      opacity: 1,
      y: 0,
      x: 0,
    }
  };
  
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={effectiveAnimation === 'none' ? 'none' : 'hidden'}
      animate={isInView || effectiveAnimation === 'none' ? 'visible' : 'hidden'}
      variants={variants}
      className={cn(
        mobileSpacing && 'mt-6 md:mt-0',
        className
      )}
      style={{ 
        willChange: effectiveAnimation !== 'none' ? 'opacity, transform' : 'auto'
      }}
    >
      {children}
    </motion.div>
  );
};
