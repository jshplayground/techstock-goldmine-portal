
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
  
  // Datos de ejemplo para el curso
  const modules: Module[] = [
    {
      id: 1,
      title: "Fundamentos del Análisis Probabilístico",
      description: "Introducción a los conceptos principales y metodología de análisis.",
      duration: "1h 45min",
      progress: 100,
      lessons: [
        { id: 1, title: "Introducción al curso", duration: "15min", completed: true },
        { id: 2, title: "Metodología de inversión", duration: "30min", completed: true },
        { id: 3, title: "El concepto de algoritmo", duration: "25min", completed: true },
        { id: 4, title: "Mitos y verdades en la inversión en bolsa", duration: "35min", completed: true }
      ]
    },
    {
      id: 2,
      title: "El Algoritmo Costco",
      description: "Aprende el patrón y las características del algoritmo fundamental.",
      duration: "2h 10min",
      progress: 50,
      lessons: [
        { id: 5, title: "Introducción al Algoritmo Costco", duration: "25min", completed: true },
        { id: 6, title: "Características principales", duration: "40min", completed: true },
        { id: 7, title: "Casos prácticos y ejemplos", duration: "35min", completed: false },
        { id: 8, title: "Aplicación y limitaciones", duration: "30min", completed: false }
      ]
    },
    {
      id: 3,
      title: "KPIs para compañías tech de alto crecimiento",
      description: "Los indicadores clave que debes monitorear para evaluar oportunidades de inversión.",
      duration: "1h 55min",
      progress: 0,
      lessons: [
        { id: 9, title: "KPIs fundamentales", duration: "30min", completed: false },
        { id: 10, title: "Métricas de crecimiento", duration: "25min", completed: false },
        { id: 11, title: "Indicadores de rentabilidad", duration: "30min", completed: false },
        { id: 12, title: "Métricas específicas para cada sector tech", duration: "30min", completed: false }
      ]
    },
    {
      id: 4,
      title: "Valoración de empresas tecnológicas",
      description: "Métodos de valoración adaptados a las peculiaridades de las empresas tech.",
      duration: "2h 20min",
      progress: 0,
      lessons: [
        { id: 13, title: "Introducción a los métodos de valoración", duration: "25min", completed: false },
        { id: 14, title: "Flujos de caja descontados", duration: "35min", completed: false },
        { id: 15, title: "Múltiplos y comparables", duration: "30min", completed: false },
        { id: 16, title: "El método probabilístico", duration: "50min", completed: false }
      ]
    },
    {
      id: 5,
      title: "Gestión de la volatilidad y el riesgo",
      description: "Cómo gestionar la volatilidad inherente a las acciones tecnológicas.",
      duration: "1h 40min",
      progress: 0,
      lessons: [
        { id: 17, title: "Entendiendo la volatilidad", duration: "20min", completed: false },
        { id: 18, title: "Herramientas para gestionar el riesgo", duration: "30min", completed: false },
        { id: 19, title: "Construcción de una cartera robusta", duration: "25min", completed: false },
        { id: 20, title: "Psicología del inversor", duration: "25min", completed: false }
      ]
    }
  ];
  
  const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
  const completedLessons = modules.reduce((sum, module) => sum + module.lessons.filter(lesson => lesson.completed).length, 0);
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="h-screen flex bg-black">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-[#0D0D18] border-b border-techstock-gray/30 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">TechStock Goldmine - El Curso</h1>
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-400">
                <span className="font-medium text-white">{completedLessons}</span> / {totalLessons} lecciones completadas
              </div>
            </div>
          </div>
          <div className="mt-3">
            <Progress value={overallProgress} className="h-2 bg-gray-700">
              <div className="h-full bg-techstock-purple rounded-full"></div>
            </Progress>
          </div>
        </header>
        
        {/* Contenido principal */}
        <main className="p-6">
          <Tabs defaultValue="modules" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-6 bg-[#0D0D18]">
              <TabsTrigger value="modules" className="data-[state=active]:bg-techstock-purple data-[state=active]:text-white">Módulos</TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-techstock-purple data-[state=active]:text-white">Recursos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="modules">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Lista de módulos */}
                <div className="col-span-1 bg-[#0D0D18] border border-techstock-gray/30 rounded-lg overflow-hidden">
                  <div className="p-4 border-b border-techstock-gray/30">
                    <h2 className="font-bold text-white">Módulos del curso</h2>
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
                            {module.progress}%
                          </span>
                        </div>
                        
                        <div className="mt-1 text-xs text-gray-400 flex justify-between">
                          <span>{module.lessons.length} lecciones</span>
                          <span>{module.duration}</span>
                        </div>
                        
                        <div className="mt-2">
                          <Progress value={module.progress} className="h-1 bg-gray-700">
                            <div className="h-full bg-techstock-purple rounded-full"></div>
                          </Progress>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Contenido del módulo */}
                <div className="col-span-1 md:col-span-2 bg-[#0D0D18] border border-techstock-gray/30 rounded-lg overflow-hidden">
                  {/* Detalles del módulo */}
                  <div className="p-6 border-b border-techstock-gray/30">
                    <h2 className="text-xl font-bold text-white">{modules[activeModule - 1].title}</h2>
                    <p className="mt-2 text-gray-300">{modules[activeModule - 1].description}</p>
                    
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
                          {modules[activeModule - 1].lessons.filter(lesson => lesson.completed).length} / {modules[activeModule - 1].lessons.length} lecciones completadas
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-400">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Nivel: Intermedio</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lista de lecciones */}
                  <div className="p-6">
                    <h3 className="font-bold text-white mb-4">Lecciones</h3>
                    
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
                              {lesson.completed ? "Repasar" : "Comenzar"}
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
                <h2 className="text-xl font-bold text-white mb-6">Recursos del curso</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Libros recomendados */}
                  <div>
                    <h3 className="font-bold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Libros recomendados
                    </h3>
                    
                    <div className="space-y-4">
                      <Card className="bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-white">100 Baggers</h4>
                          <p className="text-sm text-gray-400">Christopher W. Mayer</p>
                          <p className="text-xs text-gray-500 mt-1">Cómo encontrar acciones que se multipliquen por 100 en un ciclo de mercado completo</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-white">The Psychology of Money</h4>
                          <p className="text-sm text-gray-400">Morgan Housel</p>
                          <p className="text-xs text-gray-500 mt-1">Lecciones atemporales sobre riqueza, codicia y felicidad</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-white">Common Stocks and Uncommon Profits</h4>
                          <p className="text-sm text-gray-400">Philip A. Fisher</p>
                          <p className="text-xs text-gray-500 mt-1">Análisis cualitativo para inversiones en empresas de alto crecimiento</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Archivos descargables */}
                  <div>
                    <h3 className="font-bold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Archivos descargables
                    </h3>
                    
                    <div className="space-y-4">
                      <Card className="bg-[#0D0D18] border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-white">Plantilla de análisis fundamental</h4>
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
                            <h4 className="font-medium text-white">Checklist de inversión probabilística</h4>
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
                            <h4 className="font-medium text-white">Diapositivas del curso</h4>
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
                            <h4 className="font-medium text-white">Guía de análisis técnico</h4>
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
