
import React from 'react';
import { HeroSection } from '@/components/ui/galaxy-interactive-hero-section';
import AboutSection from '@/components/homepage/AboutSection';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';
import NewsletterSection from '@/components/homepage/NewsletterSection';
import CourseIndexSection from '@/components/homepage/CourseIndexSection';
import JoinNetworkSection from '@/components/homepage/JoinNetworkSection';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { AnimatedSection } from '@/components/ui/animated-section';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Animation */}
      <BackgroundPaths />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Course Content Section - After Hero */}
      <AnimatedSection animation="slide-up" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover how to <span className="text-techstock-gold-light">invest</span> in stocks successfully</h2>
            <p className="text-gray-300">Learn the probabilistic principles that will help you identify tech companies with extraordinary potential before the market does.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <AnimatedSection delay={0.1} animation="slide-up" className="bg-[#0D0D18]/80 backdrop-blur-md p-6 rounded-xl border border-techstock-gray/30 hover:border-techstock-gold transition-colors duration-300">
              <div className="h-12 w-12 rounded-lg bg-techstock-gold/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-techstock-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Analysis Algorithms</h3>
              <p className="text-gray-400">Learn how to identify patterns and apply algorithms that will allow you to consistently discover successful companies.</p>
            </AnimatedSection>
            
            {/* Feature 2 */}
            <AnimatedSection delay={0.2} animation="slide-up" className="bg-[#0D0D18]/80 backdrop-blur-md p-6 rounded-xl border border-techstock-gray/30 hover:border-techstock-gold transition-colors duration-300">
              <div className="h-12 w-12 rounded-lg bg-techstock-gold/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-techstock-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Key KPIs</h3>
              <p className="text-gray-400">Master the main indicators that will help you evaluate the performance and future potential of technology companies.</p>
            </AnimatedSection>
            
            {/* Feature 3 */}
            <AnimatedSection delay={0.3} animation="slide-up" className="bg-[#0D0D18]/80 backdrop-blur-md p-6 rounded-xl border border-techstock-gray/30 hover:border-techstock-gold transition-colors duration-300">
              <div className="h-12 w-12 rounded-lg bg-techstock-gold/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-techstock-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Risk Management</h3>
              <p className="text-gray-400">Learn to manage volatility and minimize risks while maximizing your long-term return opportunities.</p>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.4} animation="slide-up" className="text-center mt-12">
            <Link 
              to="/login" 
              className="bg-techstock-gold hover:bg-techstock-gold-dark text-black font-semibold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
            >
              Start Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </AnimatedSection>
      
      {/* Join Network Section */}
      <AnimatedSection animation="fade" className="relative">
        <JoinNetworkSection />
      </AnimatedSection>
      
      {/* Course Index Section */}
      <AnimatedSection animation="fade" className="relative">
        <CourseIndexSection />
      </AnimatedSection>
      
      {/* About the Instructor Section */}
      <AnimatedSection animation="fade" className="relative">
        <AboutSection />
      </AnimatedSection>
      
      {/* Testimonials Section */}
      <AnimatedSection animation="fade" className="relative">
        <TestimonialsSection />
      </AnimatedSection>
      
      {/* Pricing Section */}
      <AnimatedSection animation="slide-up" className="py-16 bg-transparent relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Investment <span className="text-techstock-gold-light">Plan</span></h2>
            <p className="text-gray-300">Invest in your financial education and join our community of successful investors.</p>
          </div>
          
          <AnimatedSection delay={0.1} animation="slide-up" className="max-w-lg mx-auto">
            {/* Premium Plan */}
            <div className="bg-[#0D0D18]/80 backdrop-blur-md border-2 border-techstock-gold rounded-xl overflow-hidden relative transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">TechStock Goldmine Course</h3>
                <div className="text-3xl font-bold text-white mb-4">$350 <span className="text-sm font-normal text-gray-400">/ one-time payment</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Full course access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Advanced stock analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Access to Antonio's AI
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Lifetime access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    14-day money-back guarantee
                  </li>
                </ul>
                <Link
                  to="/login"
                  className="block w-full py-2 px-4 bg-techstock-gold hover:bg-techstock-gold-dark text-black text-center rounded-lg transition duration-300"
                >
                  Start now
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
      
      {/* Newsletter Section */}
      <AnimatedSection animation="fade" className="relative">
        <NewsletterSection />
      </AnimatedSection>
      
      {/* Footer */}
      <AnimatedSection animation="fade" className="py-10 bg-transparent border-t border-techstock-gray/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="text-white flex items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM12.4306 9.70695C12.742 9.33317 13.2633 9.30058 13.6052 9.62118L19.1798 14.8165C19.4894 15.1054 19.4894 15.5841 19.1798 15.873L13.6052 21.0683C13.2633 21.3889 12.742 21.3563 12.4306 19.9991V9.70695Z" fill="#F5A623" />
                </svg>
                <span className="font-bold">TechStock Goldmine</span>
              </Link>
              <p className="text-gray-400 mt-2 text-sm">Probabilistic investing in the technology market</p>
            </div>
            
            <div className="flex space-x-8">
              <div>
                <h4 className="text-white font-medium mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                  <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
                  <li><a href="#pricing" className="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-white transition duration-300">Login</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-3">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Use</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Legal Notice</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} TechStock Goldmine. All rights reserved.</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Index;
