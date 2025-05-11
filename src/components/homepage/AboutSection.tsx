
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-techstock-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img 
              src="https://cdn.fs.teachablecdn.com/Jmyo40zFS2qUQbthP9Io" 
              alt="Antonio Linares" 
              className="rounded-xl shadow-2xl border border-techstock-gray/30 max-w-full"
            />
          </div>
          <div className="md:w-1/2 text-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Sobre <span className="text-techstock-purple-light">Antonio Linares</span></h2>
            <div className="space-y-4 text-gray-300">
              <p>La Versión 2 del curso ya está disponible, con mejoras basadas en los comentarios de casi 300 estudiantes.</p>
              
              <p className="font-semibold text-white">Las principales características de esta versión son:</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>La introducción del concepto de "algoritmo", que te permitirá detectar empresas de clase mundial con mayor facilidad. Hará que los modelos mentales enseñados en la Versión 1 sean aún más poderosos.</li>
                <li>La introducción de varios tipos de algoritmos, todos los cuales heredan sus propiedades fundamentales del algoritmo Costco.</li>
                <li>Las secciones de KPI y Valoración han sido completamente reelaboradas, siguiendo las opiniones de varios estudiantes.</li>
                <li>Una nueva sección dedicada a analizar mis errores y otra que explica cómo gestiono la volatilidad.</li>
                <li>2 nuevos análisis en profundidad: Hims y Duolingo.</li>
              </ul>
              
              <div className="pt-4">
                <a 
                  href="#pricing" 
                  className="bg-techstock-purple hover:bg-techstock-purple-dark text-white font-semibold py-3 px-8 rounded-full transition duration-300"
                >
                  Saber más
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
