
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
    
    // Enhanced detection for low-power devices
    let isOlderDevice = false;
    
    // Check user agent for older devices that might struggle with animations/video
    const userAgent = navigator.userAgent;
    isOlderDevice = 
      /Android (4|5|6|7)/.test(userAgent) || // Added Android 7
      /iPhone (5|6|7|8|SE)/.test(userAgent) || // Added iPhone SE
      /iPad (?!Pro)/.test(userAgent) ||
      // Add check for budget phones with weaker processors
      /SM-A[1-5]|Redmi [1-7]|Moto G[1-7]|Nokia [1-6]|LG K|Honor [1-7]/.test(userAgent);
    
    // Check for low memory conditions where available
    // @ts-ignore - navigator.deviceMemory is not in all TypeScript definitions
    const lowMemory = typeof navigator.deviceMemory !== 'undefined' 
      // @ts-ignore
      ? navigator.deviceMemory < 4 
      : false;
    
    // Enhanced performance detection
    let hasLowPerformance = false;
    
    // Test a simple animation performance if possible
    try {
      const startTime = performance.now();
      let count = 0;
      for (let i = 0; i < 1000; i++) {
        count += Math.sin(i) * Math.cos(i);
      }
      const endTime = performance.now();
      
      // If this simple calculation takes more than 5ms, consider it a slower device
      hasLowPerformance = (endTime - startTime) > 5;
    } catch (e) {
      // Fallback if performance API not available
      hasLowPerformance = isMobile;
    }
    
    // Consider device as low power based on all factors
    const isLowPowerDevice = isOlderDevice || lowMemory || hasLowPerformance;

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
