
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-techstock-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 relative z-10">
            <img 
              src="https://cdn.fs.teachablecdn.com/Jmyo40zFS2qUQbthP9Io" 
              alt="Antonio Linares" 
              className="rounded-xl shadow-2xl border border-techstock-gray/30 max-w-full"
            />
          </div>
          <div className="md:w-1/2 text-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About <span className="text-techstock-purple-light">Antonio Linares</span></h2>
            <div className="space-y-4 text-gray-300">
              <p>Version 2 of the course is now available, with improvements based on feedback from almost 300 students.</p>
              
              <p className="font-semibold text-white">The main features of this version are:</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Introduction of the "algorithm" concept, which will allow you to more easily detect world-class companies. It will make the mental models taught in Version 1 even more powerful.</li>
                <li>Introduction of various types of algorithms, all of which inherit their fundamental properties from the Costco algorithm.</li>
                <li>The KPI and Valuation sections have been completely reworked, following the opinions of several students.</li>
                <li>A new section dedicated to analyzing my mistakes and another that explains how I manage volatility.</li>
                <li>2 new in-depth analyses: Hims and Duolingo.</li>
              </ul>
              
              <div className="pt-4">
                <a 
                  href="#pricing" 
                  className="bg-techstock-purple hover:bg-techstock-purple-dark text-white font-semibold py-3 px-8 rounded-full transition duration-300"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
