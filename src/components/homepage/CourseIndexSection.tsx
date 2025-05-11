
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Book, Clock, Check } from "lucide-react";
import { Link } from 'react-router-dom';

interface CourseModuleLesson {
  title: string;
  duration?: string;
  isNew?: boolean;
}

interface CourseModule {
  id: string;
  number: string;
  title: string;
  description: string;
  duration?: string;
  progress: number;
  isNew?: boolean;
  isPopular?: boolean;
  lessons: CourseModuleLesson[];
}

// Antonio's Framework section
const frameworkModules: CourseModule[] = [
  {
    id: "module-1",
    number: "01",
    title: "A Note to My Friends",
    description: "Introduction to the investment framework and course overview",
    progress: 100,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "A Note to My Friends" }]
  },
  {
    id: "module-2",
    number: "02",
    title: "Introducing the Framework",
    description: "The framework behind 36X, 14X, 4X and 3X investments",
    duration: "11:05",
    progress: 100,
    isNew: false,
    isPopular: true,
    lessons: [{ title: "Introducing the Framework Behind 36X, 14X, 4X and 3X Investments", duration: "11:05" }]
  },
  {
    id: "module-3",
    number: "03",
    title: "Identifying Potential Multi-Baggers",
    description: "Understanding the Innovator's Dilemma and finding high-growth opportunities",
    duration: "15:38",
    progress: 75,
    isNew: false,
    isPopular: true,
    lessons: [{ title: "Identifying Potential Multi-Baggers and The Innovator's Dilemma", duration: "15:38" }]
  },
  {
    id: "module-4",
    number: "04",
    title: "The Costco Algorithm",
    description: "The father of all multibaggers - understanding what makes a winning stock",
    duration: "12:44",
    progress: 75,
    isNew: true,
    isPopular: true,
    lessons: [{ title: "The Costco Algorithm: The Father of All Multibaggers", duration: "12:44", isNew: true }]
  },
  {
    id: "module-5",
    number: "05",
    title: "Strengthening Moats and Growth",
    description: "The pursuit of ever strengthening moats, platforms and exponential growth",
    duration: "22:48",
    progress: 60,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "The Pursuit of Ever Strengthening Moats, Platforms and Exponential Growth", duration: "22:48" }]
  },
  {
    id: "module-6",
    number: "06",
    title: "The Nvidia/Palantir Algorithm",
    description: "Blueprint for exponential growth in tech companies",
    duration: "13:29",
    progress: 50,
    isNew: true,
    isPopular: false,
    lessons: [{ title: "The Nvidia/Palantir Algorithm: The Blueprint for Exponential Growth", duration: "13:29", isNew: true }]
  },
  {
    id: "module-7",
    number: "07",
    title: "Validating with KPIs",
    description: "Using key performance indicators to validate qualitative observations",
    duration: "23:07",
    progress: 40,
    isNew: true,
    isPopular: false,
    lessons: [{ title: "Validating Qualitative Observations with KPIs", duration: "23:07", isNew: true }]
  },
  {
    id: "module-8",
    number: "08",
    title: "Front Running Financials",
    description: "How to anticipate financial performance before the market",
    duration: "10:30",
    progress: 30,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "Front Running Financials", duration: "10:30" }]
  },
  {
    id: "module-9",
    number: "09",
    title: "The Amazon and Spotify Algorithm",
    description: "Reading financials like a professional investor",
    duration: "13:23",
    progress: 30,
    isNew: true,
    isPopular: false,
    lessons: [{ title: "The Amazon and Spotify Algorithm: Reading Financials Like a Pro", duration: "13:23", isNew: true }]
  }
];

// More Framework modules (continuing)
const moreFrameworkModules: CourseModule[] = [
  {
    id: "module-10",
    number: "10",
    title: "Building a High Performing Portfolio",
    description: "Strategies for portfolio construction and optimization",
    duration: "5:38",
    progress: 25,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "Building a High Performing Portfolio", duration: "5:38" }]
  },
  {
    id: "module-11",
    number: "11",
    title: "Framework Summary",
    description: "Highly replicable summary of the entire investment framework",
    duration: "5:01",
    progress: 20,
    isNew: false,
    isPopular: true,
    lessons: [{ title: "Highly Replicable Framework Summary", duration: "5:01" }]
  },
  {
    id: "module-12",
    number: "12",
    title: "Valuation",
    description: "How to value high-growth technology companies",
    duration: "21:36",
    progress: 15,
    isNew: true,
    isPopular: false,
    lessons: [{ title: "Valuation", duration: "21:36", isNew: true }]
  },
  {
    id: "module-13",
    number: "13",
    title: "Managing a Watchlist",
    description: "How to effectively track potential investment opportunities",
    duration: "5:31",
    progress: 10,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "Managing a Watchlist", duration: "5:31" }]
  },
  {
    id: "module-14",
    number: "14",
    title: "Framework Cheatsheet",
    description: "Bonus material: Quick reference guide to the entire framework",
    progress: 10,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "Bonus: Framework Cheatsheet" }]
  },
  {
    id: "module-15",
    number: "15",
    title: "Building an Audience",
    description: "Writing deep dives and building an investment audience",
    duration: "22:15",
    progress: 5,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "Writing Deep Dives and Building an Audience", duration: "22:15" }]
  },
  {
    id: "module-16",
    number: "16",
    title: "Mistakes Worth $300K",
    description: "Common investment mistakes and how to avoid them",
    duration: "15:51",
    progress: 5,
    isNew: true,
    isPopular: true,
    lessons: [{ title: "Mistakes Worth $300K (And How to Avoid Them)", duration: "15:51", isNew: true }]
  },
  {
    id: "module-17",
    number: "17",
    title: "Managing Volatility",
    description: "Strategies for handling market volatility and downturns",
    duration: "11:50",
    progress: 0,
    isNew: true,
    isPopular: false,
    lessons: [{ title: "Managing Volatility", duration: "11:50", isNew: true }]
  },
  {
    id: "module-18",
    number: "18",
    title: "Getting Help from Antonio",
    description: "How to get personalized help and guidance from Antonio",
    progress: 0,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "How to get help from Antonio" }]
  }
];

// Guided Deep Dives section
const deepDiveModules: CourseModule[] = [
  {
    id: "deepdive-1",
    number: "01",
    title: "Deep Dives Introduction",
    description: "Why deep dives are the path to wealth",
    duration: "3:32",
    progress: 50,
    isNew: true,
    isPopular: false,
    lessons: [{ title: "Deep Dives are the Path to Wealth", duration: "3:32", isNew: true }]
  },
  {
    id: "deepdive-2",
    number: "02",
    title: "Meta Deep Dive",
    description: "Analysis of Meta's business model and investment potential",
    duration: "11:06",
    progress: 40,
    isNew: false,
    isPopular: true,
    lessons: [{ title: "Meta Deep Dive", duration: "11:06" }]
  },
  {
    id: "deepdive-3",
    number: "03",
    title: "Amazon Deep Dive",
    description: "Analysis of Amazon's business model and investment potential",
    duration: "10:41",
    progress: 30,
    isNew: false,
    isPopular: true,
    lessons: [{ title: "Amazon Deep Dive", duration: "10:41" }]
  },
  {
    id: "deepdive-4",
    number: "04",
    title: "Palantir Deep Dive",
    description: "Analysis of Palantir's business model and investment potential",
    duration: "13:51",
    progress: 20,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "Palantir Deep Dive", duration: "13:51" }]
  },
  {
    id: "deepdive-5",
    number: "05",
    title: "Spotify Deep Dive",
    description: "Analysis of Spotify's business model and investment potential",
    duration: "10:29",
    progress: 10,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "Spotify Deep Dive", duration: "10:29" }]
  },
  {
    id: "deepdive-6",
    number: "06",
    title: "Hims Deep Dive",
    description: "Analysis of Hims' business model and investment potential",
    duration: "16:42",
    progress: 5,
    isNew: true,
    isPopular: false,
    lessons: [{ title: "Hims Deep Dive", duration: "16:42", isNew: true }]
  },
  {
    id: "deepdive-7",
    number: "07",
    title: "Duolingo Deep Dive",
    description: "Analysis of Duolingo's business model and investment potential",
    duration: "13:28",
    progress: 0,
    isNew: true,
    isPopular: false,
    lessons: [{ title: "Duolingo Deep Dive", duration: "13:28", isNew: true }]
  },
  {
    id: "deepdive-8",
    number: "08",
    title: "Finishing Off",
    description: "Concluding thoughts on deep dive analysis",
    progress: 0,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "Finishing Off" }]
  }
];

// FAQ section
const faqModules: CourseModule[] = [
  {
    id: "faq-1",
    number: "01",
    title: "Course Slides",
    description: "Where to find the course slides",
    progress: 100,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "Where can I download the slides for the course?" }]
  },
  {
    id: "faq-2",
    number: "02",
    title: "Probabilistic Model",
    description: "Understanding probabilistic investment models",
    progress: 80,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "What do you mean by a 'probabilistic model?'" }]
  },
  {
    id: "faq-3",
    number: "03",
    title: "Simple Accounting",
    description: "Explanation of the simple accounting approach",
    progress: 60,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "In the financials section, what do you mean by 'simple accounting'?" }]
  },
  {
    id: "faq-4",
    number: "04",
    title: "Network Economy",
    description: "Understanding network effects and the network economy",
    progress: 40,
    isNew: false,
    isPopular: true,
    lessons: [{ title: "How is a company a 'network' and how are we living in a 'network economy?'" }]
  },
  {
    id: "faq-5",
    number: "05",
    title: "New Verticals",
    description: "Understanding expansion into new verticals",
    progress: 30,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "What do you mean by 'new verticals?'" }]
  },
  {
    id: "faq-6",
    number: "06",
    title: "Flywheel",
    description: "Understanding the flywheel business model",
    progress: 20,
    isNew: false,
    isPopular: true,
    lessons: [{ title: "What is a 'flywheel'?" }]
  },
  {
    id: "faq-7",
    number: "07",
    title: "Inflection Point",
    description: "Understanding business inflection points",
    progress: 10,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "What do you mean by an 'inflection point?'" }]
  },
  {
    id: "faq-8",
    number: "08",
    title: "Core Value Creation",
    description: "Understanding core value creation mechanisms",
    progress: 10,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "What do you mean by 'core value creation mechanism?'" }]
  },
  {
    id: "faq-9",
    number: "09",
    title: "Capital Allocation",
    description: "Understanding capital allocation strategies",
    progress: 5,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "What do you mean by 'capital allocation?'" }]
  },
  {
    id: "faq-10",
    number: "10",
    title: "Organizational Properties",
    description: "How different organizational properties relate to each other",
    progress: 5,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "How do the different 'organizational properties' relate to each other?" }]
  },
  {
    id: "faq-11",
    number: "11",
    title: "Ask a Question",
    description: "Submit your own question to Antonio",
    progress: 0,
    isNew: false,
    isPopular: false,
    lessons: [{ title: "Ask me a question!" }]
  }
];

interface CourseIndexSectionProps {
  sectionId?: string;
}

const CourseIndexSection: React.FC<CourseIndexSectionProps> = ({ sectionId = "course-index" }) => {
  return (
    <section id={sectionId} className="py-20 bg-gradient-to-b from-black to-techstock-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Course <span className="text-techstock-gold">Structure</span></h2>
          <p className="text-gray-300">Discover everything you'll learn in this intensive program designed to master investing in technology companies</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Antonio's Framework Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-techstock-gold-light mb-2">Antonio's Framework</h3>
              <p className="text-gray-400">Master the investment framework that generated 36X returns</p>
            </div>
            
            <div className="bg-[#0D0D18]/80 border border-techstock-gray/30 rounded-xl backdrop-blur-sm p-6 md:p-8 mb-8">
              <Accordion type="single" collapsible className="space-y-4">
                {frameworkModules.map((module) => (
                  <AccordionItem 
                    key={module.id} 
                    value={module.id}
                    className="border border-techstock-gray/20 rounded-lg bg-black/40 overflow-hidden transition-all duration-300 hover:border-techstock-gold/30"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center w-full">
                        <div className="bg-gradient-to-br from-techstock-gold/20 to-techstock-gold/10 w-10 h-10 rounded-lg flex items-center justify-center border border-techstock-gold/30 mr-4">
                          <span className="text-techstock-gold-light font-bold">{module.number}</span>
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-techstock-gold-light transition-colors">
                            {module.title}
                          </h3>
                        </div>
                        <div className="hidden md:flex items-center space-x-3 ml-4">
                          {module.duration && (
                            <div className="flex items-center text-gray-400 text-sm">
                              <Clock className="w-4 h-4 mr-1" />
                              {module.duration}
                            </div>
                          )}
                          {module.isNew && (
                            <Badge className="bg-techstock-gold text-black border-none">New</Badge>
                          )}
                          {module.isPopular && (
                            <Badge className="bg-amber-600/80 text-white border-none">Popular</Badge>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="pl-14">
                        <p className="text-gray-400 mb-4">{module.description}</p>
                        
                        {/* Progress bar */}
                        <div className="w-full bg-gray-800 rounded-full h-2 mb-6">
                          <div 
                            className="bg-gradient-to-r from-techstock-gold-dark to-techstock-gold h-2 rounded-full" 
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                        
                        <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                          <Book className="w-4 h-4 mr-2" />
                          Main Lessons
                        </h4>
                        
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <span className="w-5 h-5 rounded-full bg-techstock-gold/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                                <Check className="w-3 h-3 text-techstock-gold-light" />
                              </span>
                              <span className="text-gray-300 flex-1">
                                {lesson.title}
                                {lesson.isNew && <Badge className="ml-2 bg-techstock-gold text-black border-none text-xs py-0 px-1.5">New</Badge>}
                              </span>
                              {lesson.duration && (
                                <span className="text-gray-500 text-xs flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {lesson.duration}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="bg-[#0D0D18]/80 border border-techstock-gray/30 rounded-xl backdrop-blur-sm p-6 md:p-8 mb-8">
              <Accordion type="single" collapsible className="space-y-4">
                {moreFrameworkModules.map((module) => (
                  <AccordionItem 
                    key={module.id} 
                    value={module.id}
                    className="border border-techstock-gray/20 rounded-lg bg-black/40 overflow-hidden transition-all duration-300 hover:border-techstock-gold/30"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center w-full">
                        <div className="bg-gradient-to-br from-techstock-gold/20 to-techstock-gold/10 w-10 h-10 rounded-lg flex items-center justify-center border border-techstock-gold/30 mr-4">
                          <span className="text-techstock-gold-light font-bold">{module.number}</span>
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-techstock-gold-light transition-colors">
                            {module.title}
                          </h3>
                        </div>
                        <div className="hidden md:flex items-center space-x-3 ml-4">
                          {module.duration && (
                            <div className="flex items-center text-gray-400 text-sm">
                              <Clock className="w-4 h-4 mr-1" />
                              {module.duration}
                            </div>
                          )}
                          {module.isNew && (
                            <Badge className="bg-techstock-gold text-black border-none">New</Badge>
                          )}
                          {module.isPopular && (
                            <Badge className="bg-amber-600/80 text-white border-none">Popular</Badge>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="pl-14">
                        <p className="text-gray-400 mb-4">{module.description}</p>
                        
                        {/* Progress bar */}
                        <div className="w-full bg-gray-800 rounded-full h-2 mb-6">
                          <div 
                            className="bg-gradient-to-r from-techstock-gold-dark to-techstock-gold h-2 rounded-full" 
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                        
                        <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                          <Book className="w-4 h-4 mr-2" />
                          Main Lessons
                        </h4>
                        
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <span className="w-5 h-5 rounded-full bg-techstock-gold/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                                <Check className="w-3 h-3 text-techstock-gold-light" />
                              </span>
                              <span className="text-gray-300 flex-1">
                                {lesson.title}
                                {lesson.isNew && <Badge className="ml-2 bg-techstock-gold text-black border-none text-xs py-0 px-1.5">New</Badge>}
                              </span>
                              {lesson.duration && (
                                <span className="text-gray-500 text-xs flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {lesson.duration}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Guided Deep Dives Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-techstock-gold-light mb-2">Guided Deep Dives</h3>
              <p className="text-gray-400">Real-world analysis of top tech companies</p>
            </div>
            
            <div className="bg-[#0D0D18]/80 border border-techstock-gray/30 rounded-xl backdrop-blur-sm p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {deepDiveModules.map((module) => (
                  <AccordionItem 
                    key={module.id} 
                    value={module.id}
                    className="border border-techstock-gray/20 rounded-lg bg-black/40 overflow-hidden transition-all duration-300 hover:border-techstock-gold/30"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center w-full">
                        <div className="bg-gradient-to-br from-techstock-gold/20 to-techstock-gold/10 w-10 h-10 rounded-lg flex items-center justify-center border border-techstock-gold/30 mr-4">
                          <span className="text-techstock-gold-light font-bold">{module.number}</span>
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-techstock-gold-light transition-colors">
                            {module.title}
                          </h3>
                        </div>
                        <div className="hidden md:flex items-center space-x-3 ml-4">
                          {module.duration && (
                            <div className="flex items-center text-gray-400 text-sm">
                              <Clock className="w-4 h-4 mr-1" />
                              {module.duration}
                            </div>
                          )}
                          {module.isNew && (
                            <Badge className="bg-techstock-gold text-black border-none">New</Badge>
                          )}
                          {module.isPopular && (
                            <Badge className="bg-amber-600/80 text-white border-none">Popular</Badge>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="pl-14">
                        <p className="text-gray-400 mb-4">{module.description}</p>
                        
                        {/* Progress bar */}
                        <div className="w-full bg-gray-800 rounded-full h-2 mb-6">
                          <div 
                            className="bg-gradient-to-r from-techstock-gold-dark to-techstock-gold h-2 rounded-full" 
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                        
                        <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                          <Book className="w-4 h-4 mr-2" />
                          Main Lessons
                        </h4>
                        
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <span className="w-5 h-5 rounded-full bg-techstock-gold/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                                <Check className="w-3 h-3 text-techstock-gold-light" />
                              </span>
                              <span className="text-gray-300 flex-1">
                                {lesson.title}
                                {lesson.isNew && <Badge className="ml-2 bg-techstock-gold text-black border-none text-xs py-0 px-1.5">New</Badge>}
                              </span>
                              {lesson.duration && (
                                <span className="text-gray-500 text-xs flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {lesson.duration}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-techstock-gold-light mb-2">Frequently Asked Questions</h3>
              <p className="text-gray-400">Get answers to common questions about the investment framework</p>
            </div>
            
            <div className="bg-[#0D0D18]/80 border border-techstock-gray/30 rounded-xl backdrop-blur-sm p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqModules.map((module) => (
                  <AccordionItem 
                    key={module.id} 
                    value={module.id}
                    className="border border-techstock-gray/20 rounded-lg bg-black/40 overflow-hidden transition-all duration-300 hover:border-techstock-gold/30"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center w-full">
                        <div className="bg-gradient-to-br from-techstock-gold/20 to-techstock-gold/10 w-10 h-10 rounded-lg flex items-center justify-center border border-techstock-gold/30 mr-4">
                          <span className="text-techstock-gold-light font-bold">{module.number}</span>
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-techstock-gold-light transition-colors">
                            {module.title}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="pl-14">
                        <p className="text-gray-400 mb-4">{module.description}</p>
                        
                        {/* Progress bar */}
                        <div className="w-full bg-gray-800 rounded-full h-2 mb-6">
                          <div 
                            className="bg-gradient-to-r from-techstock-gold-dark to-techstock-gold h-2 rounded-full" 
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                        
                        <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                          <Book className="w-4 h-4 mr-2" />
                          Questions
                        </h4>
                        
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <span className="w-5 h-5 rounded-full bg-techstock-gold/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                                <Check className="w-3 h-3 text-techstock-gold-light" />
                              </span>
                              <span className="text-gray-300">{lesson.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
            
          <div className="mt-8 text-center">
            <Link 
              to="/login" 
              className="bg-techstock-gold hover:bg-techstock-gold-dark text-black font-semibold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
            >
              Access the complete course
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIndexSection;
