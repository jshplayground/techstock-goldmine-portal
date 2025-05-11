
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  // Datos de ejemplo para el dashboard
  const courseProgress = 35;
  const latestLessons = [
    {
      id: 1,
      title: "Introducción al Algoritmo Costco",
      duration: "25 min",
      progress: 100,
      path: "/dashboard/course"
    },
    {
      id: 2,
      title: "KPIs para compañías tech de alto crecimiento",
      duration: "40 min",
      progress: 60,
      path: "/dashboard/course"
    },
    {
      id: 3,
      title: "Valoración de empresas: El método probabilístico",
      duration: "35 min",
      progress: 0,
      path: "/dashboard/course"
    }
  ];

  const upcomingEarnings = [
    { company: "Apple (AAPL)", date: "28 Jul 2025", logo: "🍎" },
    { company: "Microsoft (MSFT)", date: "30 Jul 2025", logo: "🪟" },
    { company: "Amazon (AMZN)", date: "1 Ago 2025", logo: "📦" }
  ];
  
  const stats = [
    { 
      title: "Progreso del curso", 
      value: `${courseProgress}%`, 
      icon: (
        <svg className="w-5 h-5 text-techstock-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: "5 de 14 módulos completados" 
    },
    { 
      title: "Tests completados", 
      value: "3/10", 
      icon: (
        <svg className="w-5 h-5 text-techstock-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      description: "Demuestra lo aprendido" 
    },
    { 
      title: "Acciones analizadas", 
      value: "5", 
      icon: (
        <svg className="w-5 h-5 text-techstock-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      description: "AAPL, MSFT, AMZN, NVDA, TSLA" 
    },
    { 
      title: "Acciones en cartera", 
      value: "3", 
      icon: (
        <svg className="w-5 h-5 text-techstock-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      description: "Gestiona tus inversiones" 
    }
  ];

  return (
    <div className="h-screen flex bg-black">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-[#0D0D18] border-b border-techstock-gray/30 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Dashboard</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-gray-400 border-gray-700 hover:text-white hover:border-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Notificaciones
              </Button>
              
              <Button variant="outline" size="sm" className="text-gray-400 border-gray-700 hover:text-white hover:border-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Configuración
              </Button>
            </div>
          </div>
        </header>
        
        {/* Contenido principal */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-[#0D0D18] border-techstock-gray/30 text-white hover:border-techstock-purple transition-colors duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">{stat.title}</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-techstock-purple/10 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Progreso del curso */}
            <Card className="bg-[#0D0D18] border-techstock-gray/30 text-white col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Continúa aprendiendo</CardTitle>
                <CardDescription className="text-gray-400">Tus lecciones más recientes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {latestLessons.map((lesson) => (
                  <div key={lesson.id} className="border border-techstock-gray/30 rounded-lg p-4 hover:border-techstock-purple transition-colors duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{lesson.title}</h3>
                      <span className="text-xs text-gray-400">{lesson.duration}</span>
                    </div>
                    <div className="mb-2">
                      <Progress value={lesson.progress} className="h-2 bg-gray-700">
                        <div className="h-full bg-techstock-purple rounded-full"></div>
                      </Progress>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">{lesson.progress}% completado</span>
                      <Link to={lesson.path}>
                        <Button variant="outline" size="sm" className="text-techstock-purple-light border-techstock-purple/30 hover:border-techstock-purple">
                          {lesson.progress === 0 ? "Empezar" : lesson.progress === 100 ? "Repasar" : "Continuar"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Link to="/dashboard/course" className="w-full">
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:text-white hover:border-gray-500">
                    Ver todo el curso
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            {/* Próximas presentaciones de resultados */}
            <Card className="bg-[#0D0D18] border-techstock-gray/30 text-white">
              <CardHeader>
                <CardTitle>Próximas presentaciones</CardTitle>
                <CardDescription className="text-gray-400">Calendario de resultados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEarnings.map((earning, index) => (
                  <div key={index} className="border border-techstock-gray/30 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-techstock-purple/10 flex items-center justify-center mr-3 text-lg">
                        {earning.logo}
                      </div>
                      <div>
                        <p className="font-medium">{earning.company}</p>
                        <p className="text-xs text-gray-400">{earning.date}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-gray-300 border-gray-700 hover:text-white hover:border-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </Button>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Link to="/dashboard/portfolio" className="w-full">
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:text-white hover:border-gray-500">
                    Ver tu cartera
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
