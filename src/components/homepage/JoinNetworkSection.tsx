
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { useDeviceCapability } from '@/hooks/useDeviceCapability';

const JoinNetworkSection = () => {
  const { isLowPowerDevice, isMobile } = useDeviceCapability();
  
  // For low power devices, render a simplified version without animation
  if (isLowPowerDevice) {
    return (
      <section className="py-16 bg-transparent relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl mx-auto py-[25px] mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join a <span className="text-techstock-gold">world-class</span> network of successful investors
            </h2>
            
            <p className="text-gray-300 mb-8">
              Connect with like-minded investors who are applying Antonio's framework to achieve extraordinary returns in the technology sector. Share insights, discuss investment opportunities, and learn from others' experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="bg-techstock-gold hover:bg-techstock-gold-dark text-black font-semibold py-3 px-8 rounded-full transition duration-300 text-center">
                Join the Network
              </Link>
              
              <Link to="#testimonials" className="bg-transparent border border-techstock-gold/40 hover:border-techstock-gold text-white py-3 px-8 rounded-full transition duration-300 text-center">
                See Member Success Stories
              </Link>
            </div>
          </div>

          <div className="relative mx-auto">
            <img 
              alt="Community chat" 
              className="mx-auto rounded-xl object-cover h-full w-full" 
              src="/lovable-uploads/117316df-4e63-42ba-8dec-ce75916bd93c.png" 
            />
            
            <div className="absolute top-[30%] right-[20%] px-3 py-2 rounded-lg backdrop-blur bg-black/30 border border-techstock-gold/20 text-sm text-white">
              36X Returns
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // For higher power devices, render the full animation
  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
      <ContainerScroll titleComponent={
        <div className="max-w-xl mx-auto py-[25px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Join a <span className="text-techstock-gold">world-class</span> network of successful investors
          </h2>
          
          <p className="text-gray-300 mb-8">
            Connect with like-minded investors who are applying Antonio's framework to achieve extraordinary returns in the technology sector. Share insights, discuss investment opportunities, and learn from others' experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login" className="bg-techstock-gold hover:bg-techstock-gold-dark text-black font-semibold py-3 px-8 rounded-full transition duration-300 text-center">
              Join the Network
            </Link>
            
            <Link to="#testimonials" className="bg-transparent border border-techstock-gold/40 hover:border-techstock-gold text-white py-3 px-8 rounded-full transition duration-300 text-center">
              See Member Success Stories
            </Link>
          </div>
        </div>
      }>
        {/* Community chat image */}
        <div className="relative h-full w-full">
          <img 
            alt="Community chat" 
            className="mx-auto rounded-xl object-cover h-full w-full" 
            src="/lovable-uploads/117316df-4e63-42ba-8dec-ce75916bd93c.png" 
          />
          
          {/* Stats overlays */}
          <motion.div 
            className="absolute top-[30%] right-[20%] px-3 py-2 rounded-lg backdrop-blur bg-black/30 border border-techstock-gold/20 text-sm text-white" 
            initial={{y: -20, opacity: 0}} 
            animate={{y: 0, opacity: 1}} 
            transition={{duration: 0.5, delay: 0.5}}
          >
            36X Returns
          </motion.div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default JoinNetworkSection;
