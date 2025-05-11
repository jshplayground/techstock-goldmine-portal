import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getDescriptionByTitle } from '@/lib/course-descriptions';

interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  progress: number;
  lessons: Lesson[];
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

const Course = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeModule, setActiveModule] = useState<number>(1);
  
  // Example course data
  const modules: Module[] = [
    {
      id: 1,
      title: "Fundamentals of Probabilistic Analysis",
      description: "Introduction to key concepts and analysis methodology.",
      duration: "1h 45min",
      progress: 100,
      lessons: [
        { id: 1, title: "Course introduction", duration: "15min", completed: true },
        { id: 2, title: "Investment methodology", duration: "30min", completed: true },
        { id: 3, title: "The algorithm concept", duration: "25min", completed: true },
        { id: 4, title: "Myths and truths in stock investing", duration: "35min", completed: true }
      ]
    },
    {
      id: 2,
      title: "The Costco Algorithm",
      description: "Learn the pattern and characteristics of the fundamental algorithm.",
      duration: "2h 10min",
      progress: 50,
      lessons: [
        { id: 5, title: "Introduction to the Costco Algorithm", duration: "25min", completed: true },
        { id: 6, title: "Key characteristics", duration: "40min", completed: true },
        { id: 7, title: "Practical cases and examples", duration: "35min", completed: false },
        { id: 8, title: "Application and limitations", duration: "30min", completed: false }
      ]
    },
    {
      id: 3,
      title: "KPIs for high-growth tech companies",
      description: "The key indicators you should monitor to evaluate investment opportunities.",
      duration: "1h 55min",
      progress: 0,
      lessons: [
        { id: 9, title: "Fundamental KPIs", duration: "30min", completed: false },
        { id: 10, title: "Growth metrics", duration: "25min", completed: false },
        { id: 11, title: "Profitability indicators", duration: "30min", completed: false },
        { id: 12, title: "Sector-specific metrics for tech", duration: "30min", completed: false }
      ]
    },
    {
      id: 4,
      title: "Technology Company Valuation",
      description: "Valuation methods adapted to the peculiarities of tech companies.",
      duration: "2h 20min",
      progress: 0,
      lessons: [
        { id: 13, title: "Introduction to valuation methods", duration: "25min", completed: false },
        { id: 14, title: "Discounted cash flows", duration: "35min", completed: false },
        { id: 15, title: "Multiples and comparables", duration: "30min", completed: false },
        { id: 16, title: "The probabilistic method", duration: "50min", completed: false }
      ]
    },
    {
      id: 5,
      title: "Volatility and Risk Management",
      description: "How to manage the inherent volatility in technology stocks.",
      duration: "1h 40min",
      progress: 0,
      lessons: [
        { id: 17, title: "Understanding volatility", duration: "20min", completed: false },
        { id: 18, title: "Risk management tools", duration: "30min", completed: false },
        { id: 19, title: "Building a robust portfolio", duration: "25min", completed: false },
        { id: 20, title: "Investor psychology", duration: "25min", completed: false }
      ]
    }
  ];
  
  const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
  const completedLessons = modules.reduce((sum, module) => sum + module.lessons.filter(lesson => lesson.completed).length, 0);

  return (
    <div className="h-screen flex bg-black">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-[#0D0D18] border-b border-techstock-gray/30 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">TechStock Goldmine - The Course</h1>
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-400">
                <span className="font-medium text-white">{completedLessons}</span> / {totalLessons} lessons completed
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="p-6">
          <Tabs defaultValue="modules" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-6 bg-[#0D0D18]">
              <TabsTrigger value="modules" className="data-[state=active]:bg-techstock-purple data-[state=active]:text-white">Modules</TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-techstock-purple data-[state=active]:text-white">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="modules">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Module list */}
                <div className="col-span-1 bg-[#0D0D18] border border-techstock-gray/30 rounded-lg overflow-hidden">
                  <div className="p-4 border-b border-techstock-gray/30">
                    <h2 className="font-bold text-white">Course modules</h2>
                  </div>
                  <div className="overflow-y-auto max-h-[calc(100vh-240px)]">
                    {modules.map((module) => (
                      <div 
                        key={module.id}
                        className={`p-4 border-b border-techstock-gray/30 cursor-pointer hover:bg-techstock-black transition-colors duration-200 ${activeModule === module.id ? 'bg-techstock-purple/10 border-l-2 border-l-techstock-purple' : ''}`}
                        onClick={() => setActiveModule(module.id)}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium text-white">{module.id}. {module.title}</span>
                          <span className={`text-xs ${module.progress === 100 ? 'text-green-400' : module.progress > 0 ? 'text-yellow-400' : 'text-gray-400'}`}>
                            {module.progress === 100 ? 'Completed' : module.progress > 0 ? 'In progress' : 'Not started'}
                          </span>
                        </div>
                        
                        <div className="mt-1 text-xs text-gray-400 flex justify-between">
                          <span>{module.lessons.length} lessons</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Module content */}
                <div className="col-span-1 md:col-span-2 bg-[#0D0D18] border border-techstock-gray/30 rounded-lg overflow-hidden">
                  {/* Module details */}
                  <div className="p-6 border-b border-techstock-gray/30">
                    <h2 className="text-xl font-bold text-white">{modules[activeModule - 1].title}</h2>
                    <p className="mt-3 text-gray-300 leading-relaxed">
                      {getDescriptionByTitle(modules[activeModule - 1].title)}
                    </p>
                    
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center text-gray-400">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{modules[activeModule - 1].duration}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-400">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>
                          {modules[activeModule - 1].lessons.filter(lesson => lesson.completed).length} / {modules[activeModule - 1].lessons.length} lessons completed
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-400">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Level: Intermediate</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lessons list */}
                  <div className="p-6">
                    <h3 className="font-bold text-white mb-4">Lessons</h3>
                    
                    <div className="space-y-3">
                      {modules[activeModule - 1].lessons.map((lesson) => (
                        <Card key={lesson.id} className={`bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300 ${lesson.completed ? 'border-l-2 border-l-green-500' : ''}`}>
                          <CardContent className="p-4 flex justify-between items-center">
                            <div className="flex items-center">
                              {lesson.completed ? (
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              ) : (
                                <div className="w-6 h-6 rounded-full border border-techstock-gray/50 flex items-center justify-center mr-3">
                                  <span className="text-xs text-gray-400">{lesson.id}</span>
                                </div>
                              )}
                              <div>
                                <p className="font-medium text-white">{lesson.title}</p>
                                <p className="text-xs text-gray-400">{lesson.duration}</p>
                              </div>
                            </div>
                            
                            <Button
                              variant="outline"
                              size="sm"
                              className={`${lesson.completed ? 'text-green-500 border-green-500/30 hover:border-green-500' : 'text-techstock-purple-light border-techstock-purple/30 hover:border-techstock-purple'}`}
                            >
                              {lesson.completed ? "Review" : "Start"}
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="bg-[#0D0D18] border border-techstock-gray/30 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-6">Course resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Recommended books */}
                  <div>
                    <h3 className="font-bold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Recommended books
                    </h3>
                    
                    <div className="space-y-4">
                      <Card className="bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-white">100 Baggers</h4>
                          <p className="text-sm text-gray-400">Christopher W. Mayer</p>
                          <p className="text-xs text-gray-500 mt-1">How to find stocks that multiply by 100 in one complete market cycle</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-white">The Psychology of Money</h4>
                          <p className="text-sm text-gray-400">Morgan Housel</p>
                          <p className="text-xs text-gray-500 mt-1">Timeless lessons on wealth, greed, and happiness</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-white">Common Stocks and Uncommon Profits</h4>
                          <p className="text-sm text-gray-400">Philip A. Fisher</p>
                          <p className="text-xs text-gray-500 mt-1">Qualitative analysis for investments in high-growth companies</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Downloadable files */}
                  <div>
                    <h3 className="font-bold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Downloadable files
                    </h3>
                    
                    <div className="space-y-4">
                      <Card className="bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-white">Fundamental analysis template</h4>
                            <p className="text-xs text-gray-400">Excel, 2.3 MB</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-techstock-purple-light border-techstock-purple/30 hover:border-techstock-purple">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </Button>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-white">Probabilistic investment checklist</h4>
                            <p className="text-xs text-gray-400">PDF, 1.5 MB</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-techstock-purple-light border-techstock-purple/30 hover:border-techstock-purple">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </Button>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-white">Course slides</h4>
                            <p className="text-xs text-gray-400">PowerPoint, 8.7 MB</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-techstock-purple-light border-techstock-purple/30 hover:border-techstock-purple">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </Button>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-white">Technical analysis guide</h4>
                            <p className="text-xs text-gray-400">PDF, 3.2 MB</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-techstock-purple-light border-techstock-purple/30 hover:border-techstock-purple">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Course;
