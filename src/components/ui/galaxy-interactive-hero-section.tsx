
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { NativeVideoBackground } from './native-video-background';
import { useDeviceCapability } from '@/hooks/useDeviceCapability';

export const HeroSection = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const { isLowPowerDevice } = useDeviceCapability();
  
  useEffect(() => {
    // Skip fade effect on scroll for low power devices
    if (isLowPowerDevice) return;
    
    const handleScroll = () => {
      if (heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
            heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLowPowerDevice]);
  
  return (
    <div className="relative">
      <Navbar />

      <div className="relative min-h-screen">
        {/* Enhanced Video Background */}
        <NativeVideoBackground 
          videoSrc="/assets/space-background.mp4"
          mobileSrc="/assets/space-background-mobile.mp4" 
          fallbackImageUrl="https://i.ytimg.com/vi/Bm5cNYxQWeM/maxresdefault.jpg"
          posterImage="https://i.ytimg.com/vi/Bm5cNYxQWeM/maxresdefault.jpg"
        />

        <div 
          ref={heroContentRef} 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        >
          <div className="container mx-auto">
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
};

function HeroContent() {
  return <div className="text-left text-white pt-16 sm:pt-24 md:pt-32 px-4 max-w-3xl">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-wide">
        TechStock <br className="sm:hidden" /><span className="text-techstock-gold">Goldmine</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-80 max-w-xl">
        Master the art of probabilistic stock investing. Learn to identify world-class tech companies and maximize your returns.
      </p>
      <div className="flex pointer-events-auto flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3">
        <Link to="/login" className="bg-[#F5A62329] hover:bg-black/50 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 w-full sm:w-auto border border-[#322D36]" style={{
        backdropFilter: 'blur(8px)'
      }}>
          Access the Course
        </Link>
        
      </div>
    </div>;
}

function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    features: false,
    enterprise: false,
    resources: false
  });
  const handleMouseEnterNavItem = (item: string) => setHoveredNavItem(item);
  const handleMouseLeaveNavItem = () => setHoveredNavItem(null);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileDropdowns({
        features: false,
        enterprise: false,
        resources: false
      });
    }
  };
  const toggleMobileDropdown = (key: keyof typeof mobileDropdowns) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  const navLinkClass = (itemName: string, extraClasses = '') => {
    const isCurrentItemHovered = hoveredNavItem === itemName;
    const isAnotherItemHovered = hoveredNavItem !== null && !isCurrentItemHovered;
    const colorClass = isCurrentItemHovered ? 'text-white' : isAnotherItemHovered ? 'text-gray-500' : 'text-gray-300';
    return `text-sm transition duration-150 ${colorClass} ${extraClasses}`;
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setMobileDropdowns({
          features: false,
          enterprise: false,
          resources: false
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);
  return <nav className="fixed top-0 left-0 right-0 z-20" style={{
    backgroundColor: 'rgba(13, 13, 24, 0.3)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '0 0 15px 15px'
  }}>
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="text-white flex items-center" style={{
          width: "auto",
          height: "32px"
        }}>
            
            <span className="font-bold">Antonio Linares</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative group" onMouseEnter={() => handleMouseEnterNavItem('features')} onMouseLeave={handleMouseLeaveNavItem}>
              <a href="#" className={navLinkClass('features', 'flex items-center')}>
                Course
                <svg className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-black bg-opacity-50 rounded-md shadow-lg py-2 border border-gray-700/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30" style={{
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}>
              <Link to="/login" className="block px-4 py-2 text-sm text-gray-300 hover:text-gray-100 hover:bg-gray-800/30 transition duration-150">Access the Course</Link>
              <a href="#testimonials" className="block px-4 py-2 text-sm text-gray-300 hover:text-gray-100 hover:bg-gray-800/30 transition duration-150">Testimonials</a>
              <a href="#about" className="block px-4 py-2 text-sm text-gray-300 hover:text-gray-100 hover:bg-gray-800/30 transition duration-150">About Antonio Linares</a>
            </div>
            </div>

            <a href="#about" className={navLinkClass('about')} onMouseEnter={() => handleMouseEnterNavItem('about')} onMouseLeave={handleMouseLeaveNavItem}>
              About Us
            </a>

            <a href="#pricing" className={navLinkClass('pricing')} onMouseEnter={() => handleMouseEnterNavItem('pricing')} onMouseLeave={handleMouseLeaveNavItem}>
              Pricing
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="#newsletter" className="hidden md:block text-gray-300 hover:text-white text-sm">Subscribe</a>
          <Link to="/login" className="hidden sm:block text-gray-300 hover:text-white text-sm">Log In</Link>
          <Link to="/login" className="bg-[#F5A62329] hover:bg-black/50 text-white font-semibold py-2 px-5 rounded-full text-sm md:text-base border border-[#322D36]" style={{
          backdropFilter: 'blur(8px)'
        }}>Try Free</Link>
          <button className="lg:hidden text-white p-2" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      <div className={`lg:hidden bg-black bg-opacity-50 border-t border-gray-700/30 absolute top-full left-0 right-0 z-30
           overflow-hidden transition-all duration-300 ease-in-out
           ${isMobileMenuOpen ? 'max-h-screen opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}
           `} style={{
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)'
    }}>
        <div className="px-4 py-6 flex flex-col space-y-4">
          <div className="relative">
            <button className="text-gray-300 hover:text-gray-100 flex items-center justify-between w-full text-left text-sm py-2" onClick={() => toggleMobileDropdown('features')} aria-expanded={mobileDropdowns.features}>
              Course
              <svg className={`ml-2 w-3 h-3 transition-transform duration-200 ${mobileDropdowns.features ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`pl-4 space-y-2 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${mobileDropdowns.features ? 'max-h-[200px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <Link to="/login" className="block text-gray-300 hover:text-gray-100 text-sm py-1 transition duration-150" onClick={toggleMobileMenu}>Access the Course</Link>
              <a href="#testimonials" className="block text-gray-300 hover:text-gray-100 text-sm py-1 transition duration-150" onClick={toggleMobileMenu}>Testimonials</a>
              <a href="#about" className="block text-gray-300 hover:text-gray-100 text-sm py-1 transition duration-150" onClick={toggleMobileMenu}>About Antonio Linares</a>
            </div>
          </div>
          
          <a href="#about" className="text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>About Us</a>
          <a href="#pricing" className="text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Pricing</a>
          <a href="#newsletter" className="text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Subscribe</a>
          <Link to="/login" className="text-gray-300 hover:text-gray-100 text-sm py-2 transition duration-150" onClick={toggleMobileMenu}>Log In</Link>
        </div>
      </div>
    </nav>;
}
