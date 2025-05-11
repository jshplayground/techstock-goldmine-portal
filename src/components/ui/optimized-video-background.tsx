
import React from 'react';
import { useDeviceCapability } from '@/hooks/useDeviceCapability';

interface VideoBackgroundProps {
  videoId: string;
  fallbackImageUrl?: string;
}

export function OptimizedVideoBackground({ videoId, fallbackImageUrl }: VideoBackgroundProps) {
  const { isLowPowerDevice, isMobile, isMidRangeDevice } = useDeviceCapability();
  
  // Use a default fallback image if none provided
  const imageUrl = fallbackImageUrl || 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';

  // Only show the image on truly low-power devices
  if (isLowPowerDevice) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <img 
            src={imageUrl}
            alt="Background" 
            className="absolute w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        </div>
      </div>
    );
  }
  
  // Different sizing and positioning for mobile vs desktop
  const videoClasses = isMobile || isMidRangeDevice
    ? "absolute w-[300%] h-[150%] -top-[25%] -left-[100%] pointer-events-none"
    : "absolute w-[200%] md:w-[150%] xl:w-full h-[130%] md:h-full -top-[15%] md:top-0 -left-[50%] lg:-left-[25%] xl:left-0 pointer-events-none";
  
  // Lower quality parameters for mid-range devices
  const videoQuality = isMidRangeDevice ? "modest" : "default";
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&vq=${videoQuality}`}
          allow="autoplay; encrypted-media" 
          className={videoClasses}
          style={{ filter: 'brightness(0.5)' }}
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
    </div>
  );
}
