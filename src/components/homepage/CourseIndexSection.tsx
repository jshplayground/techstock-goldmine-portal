
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Book, Clock, Check } from "lucide-react";
import { Link } from 'react-router-dom';

const courseModules = [
  {
    id: "module-1",
    number: "01",
    title: "Análisis Probabilístico",
    description: "Fundamentos para identificar empresas de alto potencial antes que el mercado",
    duration: "3 horas",
    progress: 100,
    isNew: false,
    isPopular: true,
    lessons: [
      "Introducción al análisis probabilístico",
      "Identificación de ventajas competitivas",
      "Cómo detectar modelos de negocio superiores",
      "Evaluación de equipos directivos"
    ]
  },
  {
    id: "module-2",
    number: "02",
    title: "Algoritmo Costco",
    description: "El método probado para detectar empresas tecnológicas de clase mundial",
    duration: "4 horas",
    progress: 75,
    isNew: true,
    isPopular: true,
    lessons: [
      "Fundamentos del algoritmo Costco",
      "Aplicación práctica del algoritmo",
      "Identificación de patrones comunes",
      "Estudio de caso: Aplicación en empresas SaaS"
    ]
  },
  {
    id: "module-3",
    number: "03",
    title: "KPIs Fundamentales",
    description: "Indicadores clave para evaluar el rendimiento y potencial de crecimiento",
    duration: "3.5 horas",
    progress: 50,
    isNew: false,
    isPopular: false,
    lessons: [
      "KPIs de crecimiento y retención",
      "Análisis de márgenes y rentabilidad",
      "Métricas específicas para empresas SaaS",
      "Interpretación de resultados financieros"
    ]
  },
  {
    id: "module-4",
    number: "04",
    title: "Valoración y Timing",
    description: "Técnicas para determinar el valor intrínseco y el momento óptimo de entrada",
    duration: "4 horas",
    progress: 30,
    isNew: false,
    isPopular: false,
    lessons: [
      "Modelos de valoración para empresas tecnológicas",
      "Análisis del momentum y timing",
      "DCF adaptado a crecimiento acelerado",
      "Comparativas de múltiplos relevantes"
    ]
  },
  {
    id: "module-5",
    number: "05",
    title: "Gestión de Riesgos",
    description: "Estrategias para proteger tu cartera y gestionar la volatilidad",
    duration: "3 horas",
    progress: 0,
    isNew: true,
    isPopular: false,
    lessons: [
      "Diversificación estratégica",
      "Gestión de la volatilidad",
      "Hedging y técnicas de protección",
      "Análisis de mis errores más grandes"
    ]
  }
];

const CourseIndexSection = () => {
  return (
    <section id="course-index" className="py-20 bg-gradient-to-b from-black to-techstock-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Estructura del <span className="text-techstock-purple-light">Curso</span></h2>
          <p className="text-gray-300">Descubre todo lo que aprenderás en este programa intensivo diseñado para dominar la inversión en empresas tecnológicas</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0D0D18]/80 border border-techstock-gray/30 rounded-xl backdrop-blur-sm p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {courseModules.map((module) => (
                <AccordionItem 
                  key={module.id} 
                  value={module.id}
                  className="border border-techstock-gray/20 rounded-lg bg-black/40 overflow-hidden transition-all duration-300 hover:border-techstock-purple/30"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center w-full">
                      <div className="bg-gradient-to-br from-techstock-purple/20 to-techstock-purple/10 w-10 h-10 rounded-lg flex items-center justify-center border border-techstock-purple/30 mr-4">
                        <span className="text-techstock-purple-light font-bold">{module.number}</span>
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-techstock-purple-light transition-colors">
                          {module.title}
                        </h3>
                      </div>
                      <div className="hidden md:flex items-center space-x-3 ml-4">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {module.duration}
                        </div>
                        {module.isNew && (
                          <Badge className="bg-techstock-purple text-white border-none">Nuevo</Badge>
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
                          className="bg-gradient-to-r from-techstock-purple to-techstock-purple-light h-2 rounded-full" 
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                      
                      <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
                        <Book className="w-4 h-4 mr-2" />
                        Lecciones principales
                      </h4>
                      
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="w-5 h-5 rounded-full bg-techstock-purple/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                              <Check className="w-3 h-3 text-techstock-purple-light" />
                            </span>
                            <span className="text-gray-300">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 text-center">
              <Link 
                to="/login" 
                className="bg-techstock-purple hover:bg-techstock-purple-dark text-white font-semibold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
              >
                Acceder al curso completo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIndexSection;
