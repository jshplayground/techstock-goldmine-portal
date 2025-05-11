
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
    // We consider most mobile devices as potentially low power
    // This is a simple approach - more sophisticated detection can be added
    let isLowPowerDevice = isMobile;
    
    // Some modern phones have good performance, try to detect them
    const userAgent = navigator.userAgent;
    const isHighEndMobileDevice = 
      /iPhone 1[3-9]|iPhone 2[0-9]|iPad Pro|Pixel [4-9]|Galaxy S2[0-9]|OnePlus [8-9]/.test(userAgent);
      
    if (isHighEndMobileDevice) {
      isLowPowerDevice = false;
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
