
import { useState, useEffect } from 'react';

export interface DeviceCapability {
  isLowPowerDevice: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  isOlderDevice: boolean;
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>({
    isLowPowerDevice: false,
    isMobile: false,
    prefersReducedMotion: false,
    isOlderDevice: false,
  });

  useEffect(() => {
    // Check if device is mobile
    const checkIsMobile = () => window.innerWidth < 768;
    const isMobile = checkIsMobile();
    
    // Check if device is likely low power (simplified heuristic)
    let isOlderDevice = false;
    
    // Check user agent for older devices that might struggle with animations/video
    const userAgent = navigator.userAgent;
    isOlderDevice = 
      /Android (4|5|6)/.test(userAgent) ||
      /iPhone (5|6|7|8)/.test(userAgent) ||
      /iPad (?!Pro)/.test(userAgent);
    
    // Consider device as low power if it's older or has low memory
    // Modern mobile devices should be capable of handling video playback
    const isLowPowerDevice = isOlderDevice;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setCapability({
      isLowPowerDevice,
      isMobile,
      prefersReducedMotion,
      isOlderDevice
    });

    const handleResize = () => {
      setCapability(prev => ({
        ...prev,
        isMobile: checkIsMobile()
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return capability;
}
