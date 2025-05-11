
import { useState, useEffect } from 'react';

export interface DeviceCapability {
  isLowPowerDevice: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  connectionSpeed: 'slow' | 'medium' | 'fast';
  isMidRangeDevice: boolean;
  isHighEndDevice: boolean;
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>({
    isLowPowerDevice: false,
    isMobile: false,
    prefersReducedMotion: false,
    connectionSpeed: 'medium',
    isMidRangeDevice: false,
    isHighEndDevice: false,
  });

  useEffect(() => {
    // Device detection based on screen size and pixel ratio
    const isMobile = window.innerWidth < 768;
    const pixelRatio = window.devicePixelRatio || 1;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Estimate connection speed (improved approach)
    let connectionSpeed: 'slow' | 'medium' | 'fast' = 'medium';
    
    // Use the Navigation API if available to determine connection speed
    if ('connection' in navigator) {
      const conn = (navigator as any).connection;
      if (conn) {
        if (conn.saveData) {
          connectionSpeed = 'slow';
        } else if (conn.effectiveType === '4g' && !isMobile) {
          connectionSpeed = 'fast';
        } else if (conn.effectiveType === '2g' || conn.effectiveType === 'slow-2g') {
          connectionSpeed = 'slow';
        }
      }
    }
    
    // Low power device determination
    const isLowPowerDevice = (isMobile && connectionSpeed === 'slow') || prefersReducedMotion;

    // Determine if device is mid-range
    const isMidRangeDevice = isMobile && !isLowPowerDevice;
    
    // Determine high-end devices (desktop with good connection or high-end mobile)
    const isHighEndDevice = (!isMobile && connectionSpeed === 'fast') || 
                           (isMobile && pixelRatio >= 2 && connectionSpeed === 'fast');

    setCapability({
      isLowPowerDevice,
      isMobile,
      prefersReducedMotion,
      connectionSpeed,
      isMidRangeDevice,
      isHighEndDevice,
    });

    const handleResize = () => {
      setCapability(prev => {
        const newIsMobile = window.innerWidth < 768;
        const newIsMidRange = newIsMobile && !prev.isLowPowerDevice;
        const newHighEnd = (!newIsMobile && prev.connectionSpeed === 'fast') || 
                          (newIsMobile && window.devicePixelRatio >= 2 && prev.connectionSpeed === 'fast');
        return {
          ...prev,
          isMobile: newIsMobile,
          isMidRangeDevice: newIsMidRange,
          isHighEndDevice: newHighEnd
        };
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return capability;
}
