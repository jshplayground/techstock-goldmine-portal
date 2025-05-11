
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
  const { isLowPowerDevice } = useDeviceCapability();

  useEffect(() => {
    if (!ref.current) return;
    
    // If it's a low power device and we want to disable animations on such devices
    if (disableOnLowPower && isLowPowerDevice) {
      setIsInView(true);
      return;
    }

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
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, isLowPowerDevice, disableOnLowPower]);

  return { ref, isInView };
}
