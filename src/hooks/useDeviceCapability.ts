
import { useState, useEffect } from 'react';

export interface DeviceCapability {
  isLowPowerDevice: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  isMidRangeDevice?: boolean;
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>({
    isLowPowerDevice: false,
    isMobile: false,
    prefersReducedMotion: false,
    isMidRangeDevice: false,
  });

  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth < 768;
    
    const userAgent = navigator.userAgent;
    
    // More comprehensive detection of modern high-end devices
    // This includes newer iPhones, flagship Android devices, and tablets
    const isHighEndMobileDevice = 
      /iPhone 1[3-9]|iPhone 2[0-9]|iPad Pro|Pixel [4-9]|Galaxy S2[0-9]|Galaxy S10|Galaxy Note|Galaxy Tab|OnePlus [7-9]|iPad Air|iPhone X[SR]|Edge\/|Mi 1[0-9]/.test(userAgent);

    // Mid-range devices - still capable but not top-tier
    const isMidRangeDevice = 
      /iPhone [7-9]|iPhone 1[0-2]|iPad [5-9]|iPad Mini|Pixel [1-3]|Galaxy S[7-9]|Galaxy A[5-9]/.test(userAgent) || 
      (/Android/.test(userAgent) && !/Mobile/.test(userAgent)); // Android tablets
      
    // Check if device is likely low power (simplified)
    // Only older devices or low-end models are considered low power now
    let isLowPowerDevice = isMobile && !isHighEndMobileDevice && !isMidRangeDevice;
    
    // Additional checks for desktop performance if needed
    if (!isMobile) {
      // Most modern desktops can handle heavier animations
      isLowPowerDevice = false;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setCapability({
      isLowPowerDevice,
      isMobile,
      prefersReducedMotion,
      isMidRangeDevice: !isHighEndMobileDevice && !isLowPowerDevice && isMobile,
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
