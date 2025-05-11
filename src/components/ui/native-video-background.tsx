
import React, { useEffect, useRef, useState } from 'react';
import { useDeviceCapability } from '@/hooks/useDeviceCapability';

interface NativeVideoBackgroundProps {
  videoSrc: string;
  mobileSrc?: string;
  fallbackImageUrl: string;
  posterImage?: string;
}

export function NativeVideoBackground({ 
  videoSrc, 
  mobileSrc,
  fallbackImageUrl, 
  posterImage 
}: NativeVideoBackgroundProps) {
  const { isLowPowerDevice, isMobile, prefersReducedMotion, isHighEndDevice } = useDeviceCapability();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Determine if we should show video or image
  const showFallbackImage = isLowPowerDevice || prefersReducedMotion || videoError;
  
  // Choose appropriate video source based on device
  const appropriateVideoSrc = isMobile && mobileSrc ? mobileSrc : videoSrc;
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video || showFallbackImage) return;

    // Reset video state when source changes
    setVideoLoaded(false);
    
    const handleCanPlay = () => {
      setVideoLoaded(true);
      
      // Apply playback optimizations for mobile
      if (isMobile && !isHighEndDevice) {
        video.playbackRate = 0.75; // Slightly slower playback on mid-range mobile devices
        video.currentTime = 1; // Start a bit into the video to avoid initial loading frame
      }
      
      video.play().catch(err => {
        console.error("Video autoplay failed:", err);
        setVideoError(true);
      });
    };

    const handleError = (e: Event) => {
      console.error("Video loading error", e);
      setVideoError(true);
    };
    
    // Progressive enhancement - try to play even if poster is still loading
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // If the video element was already ready when we got here
    if (video.readyState >= 3) {  // HAVE_FUTURE_DATA or better
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [showFallbackImage, appropriateVideoSrc, isMobile, isHighEndDevice]);

  // Responsive CSS classes based on device type
  const videoClasses = isMobile
    ? "absolute w-full h-full object-cover top-0 left-0 pointer-events-none"
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
            preload="auto"
            className={`${videoClasses} ${videoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
            style={{ filter: 'brightness(0.5)' }}
          >
            <source src={appropriateVideoSrc} type="video/mp4" />
          </video>
        )}
        
        {/* Gradients for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
    </div>
  );
}
