
import React from 'react';
import { Globe } from '@/components/ui/globe';
import { Link } from 'react-router-dom';

const JoinNetworkSection = () => {
  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Content */}
        <div className="lg:w-1/2 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join a <span className="text-techstock-gold">world-class</span> network of successful investors
            </h2>
            
            <p className="text-gray-300 mb-8">
              Connect with like-minded investors who are applying Antonio's framework to achieve extraordinary returns in the technology sector. Share insights, discuss investment opportunities, and learn from others' experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/login" 
                className="bg-techstock-gold hover:bg-techstock-gold-dark text-black font-semibold py-3 px-8 rounded-full transition duration-300 text-center"
              >
                Join the Network
              </Link>
              
              <Link 
                to="#testimonials" 
                className="bg-transparent border border-techstock-gold/40 hover:border-techstock-gold text-white py-3 px-8 rounded-full transition duration-300 text-center"
              >
                See Member Success Stories
              </Link>
            </div>
          </div>
        </div>
        
        {/* Globe Visualization */}
        <div className="lg:w-1/2 h-[400px] md:h-[500px] relative">
          <div className="relative h-full w-full">
            <Globe className="opacity-70" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-techstock-gold/20 backdrop-blur-2xl flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold text-techstock-gold">3K+</span>
            </div>
            <div className="absolute top-[30%] right-[20%] px-3 py-2 rounded-lg backdrop-blur bg-black/30 border border-techstock-gold/20 text-sm text-white">
              36X Returns
            </div>
            <div className="absolute bottom-[25%] left-[15%] px-3 py-2 rounded-lg backdrop-blur bg-black/30 border border-techstock-gold/20 text-sm text-white">
              Global Community
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNetworkSection;
