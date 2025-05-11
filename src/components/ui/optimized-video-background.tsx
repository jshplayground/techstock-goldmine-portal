
import React from 'react';
import { useDeviceCapability } from '@/hooks/useDeviceCapability';

interface VideoBackgroundProps {
  videoId: string;
  fallbackImageUrl?: string;
}

export function OptimizedVideoBackground({ videoId, fallbackImageUrl }: VideoBackgroundProps) {
  const { isLowPowerDevice, prefersReducedMotion, isOlderDevice } = useDeviceCapability();
  
  // Use a default fallback image if none provided
  const imageUrl = fallbackImageUrl || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  // Only use the image fallback for older/low power devices or users who prefer reduced motion
  const shouldUseImageFallback = isLowPowerDevice || prefersReducedMotion || isOlderDevice;

  if (shouldUseImageFallback) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        <div className="relative w-full h-full">
          <img 
            src={imageUrl}
            alt="Background" 
            className="absolute w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <div className="relative w-full h-full">
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&origin=${window.location.origin}`}
          allow="autoplay; encrypted-media; picture-in-picture; web-share" 
          className="absolute w-[300%] md:w-[200%] lg:w-[150%] xl:w-full h-[150%] sm:h-[130%] md:h-full -top-[25%] sm:-top-[15%] md:top-0 -left-[100%] md:-left-[50%] lg:-left-[25%] xl:left-0 pointer-events-none"
          style={{ filter: 'brightness(0.5)' }}
          title="Background Video"
          loading="eager"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
    </div>
  );
}
