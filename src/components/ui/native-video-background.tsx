
import React, { useEffect, useRef, useState } from 'react';
import { useDeviceCapability } from '@/hooks/useDeviceCapability';

interface NativeVideoBackgroundProps {
  videoSrc: string;
  fallbackImageUrl: string;
  posterImage?: string;
}

export function NativeVideoBackground({ 
  videoSrc, 
  fallbackImageUrl, 
  posterImage 
}: NativeVideoBackgroundProps) {
  const { isLowPowerDevice, isMobile, prefersReducedMotion } = useDeviceCapability();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Determine if we should show video or image
  const showFallbackImage = isLowPowerDevice || prefersReducedMotion || videoError;
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video || showFallbackImage) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
      video.play().catch(err => {
        console.error("Video autoplay failed:", err);
        setVideoError(true);
      });
    };

    const handleError = () => {
      console.error("Video loading error");
      setVideoError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [showFallbackImage]);

  // Different CSS classes based on device type
  const videoClasses = isMobile
    ? "absolute w-auto h-[150%] min-w-full top-0 left-1/2 -translate-x-1/2 pointer-events-none object-cover"
    : "absolute w-full h-full object-cover pointer-events-none";

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full bg-black">
        {showFallbackImage ? (
          <img 
            src={fallbackImageUrl}
            alt="Background" 
            className="absolute w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }}
          />
        ) : (
          <video
            ref={videoRef}
            poster={posterImage || fallbackImageUrl}
            playsInline
            muted
            loop
            autoPlay
            className={`${videoClasses} ${videoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
            style={{ filter: 'brightness(0.5)' }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        
        {/* Gradients for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
    </div>
  );
}
