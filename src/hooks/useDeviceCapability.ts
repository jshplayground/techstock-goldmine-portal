
import { useState, useEffect } from 'react';

export interface DeviceCapability {
  isLowPowerDevice: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  connectionSpeed: 'slow' | 'medium' | 'fast';
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>({
    isLowPowerDevice: false,
    isMobile: false,
    prefersReducedMotion: false,
    connectionSpeed: 'medium',
  });

  useEffect(() => {
    // Simplified device detection based primarily on screen size
    const isMobile = window.innerWidth < 768;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Estimate connection speed (simplified approach)
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
    // We'll consider older mobile devices or devices with reduced data/motion as low power
    const isLowPowerDevice = (isMobile && connectionSpeed === 'slow') || prefersReducedMotion;

    setCapability({
      isLowPowerDevice,
      isMobile,
      prefersReducedMotion,
      connectionSpeed,
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
