
import { useState, useEffect } from 'react';

export interface DeviceCapability {
  isLowPowerDevice: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>({
    isLowPowerDevice: false,
    isMobile: false,
    prefersReducedMotion: false,
  });

  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth < 768;
    
    // Check if device is likely low power (simplified heuristic)
    // This is a more conservative approach that only marks truly low-end devices
    let isLowPowerDevice = false;
    
    // Check user agent for older devices that might struggle with video
    const userAgent = navigator.userAgent;
    const isOlderDevice = 
      /Android (4|5|6)/.test(userAgent) ||
      /iPhone (5|6|7|8)/.test(userAgent) ||
      /iPad (?!Pro)/.test(userAgent);
      
    if (isOlderDevice) {
      isLowPowerDevice = true;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setCapability({
      isLowPowerDevice,
      isMobile,
      prefersReducedMotion,
    });

    const handleResize = () => {
      setCapability(prev => ({
        ...prev,
        isMobile: window.innerWidth < 768
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return capability;
}
