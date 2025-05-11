
import { useState, useEffect, useRef } from 'react';
import { useDeviceCapability } from './useDeviceCapability';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  disableOnLowPower?: boolean;
}

export function useInView({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  disableOnLowPower = true
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const { isLowPowerDevice, prefersReducedMotion } = useDeviceCapability();

  useEffect(() => {
    if (!ref.current) return;
    
    // If it's a low power device or user prefers reduced motion and we want to disable animations
    // Just set it to true immediately and skip creating observers
    if ((disableOnLowPower && (isLowPowerDevice || prefersReducedMotion))) {
      setIsInView(true);
      return;
    }

    // Use a more lenient threshold for low-power devices that don't completely disable animations
    const effectiveThreshold = isLowPowerDevice ? 0.05 : threshold;
    
    // Use requestIdleCallback for creating the observer on low-priority devices
    const createObserver = () => {
      if (!ref.current) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce) {
              observer.disconnect();
            }
          } else if (!triggerOnce) {
            setIsInView(false);
          }
        },
        {
          threshold: effectiveThreshold,
          rootMargin,
        }
      );
  
      observer.observe(ref.current);
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    };
    
    // Use requestIdleCallback for non-critical functionality if available
    if (typeof window.requestIdleCallback !== 'undefined' && isLowPowerDevice) {
      const id = window.requestIdleCallback(() => {
        const cleanup = createObserver();
        return () => {
          cleanup && cleanup();
        };
      });
      return () => window.cancelIdleCallback(id);
    } else {
      return createObserver();
    }
  }, [threshold, rootMargin, triggerOnce, isLowPowerDevice, prefersReducedMotion, disableOnLowPower]);

  return { ref, isInView };
}
