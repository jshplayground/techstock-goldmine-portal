
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'slide-up' | 'slide-right' | 'none';
  mobileSpacing?: boolean; // New prop to control mobile spacing
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  delay = 0,
  animation = 'fade',
  mobileSpacing = false
}) => {
  const { ref, isInView } = useInView({
    threshold: 0.15,
    triggerOnce: true
  });
  
  // Define animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === 'slide-up' ? 20 : 0,
      x: animation === 'slide-right' ? 20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Improved easing function
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
      initial={animation === 'none' ? 'none' : 'hidden'}
      animate={isInView || animation === 'none' ? 'visible' : 'hidden'}
      variants={variants}
      className={cn(
        mobileSpacing && 'mt-6 md:mt-0',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
