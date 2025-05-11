
import React from 'react';
import { HeroSection } from '@/components/ui/galaxy-interactive-hero-section';
import AboutSection from '@/components/homepage/AboutSection';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';
import NewsletterSection from '@/components/homepage/NewsletterSection';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Sección de Contenido del Curso - Después del Hero */}
      <section className="py-16 bg-gradient-to-b from-techstock-black to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Descubre cómo <span className="text-techstock-purple-light">invertir</span> en bolsa con éxito</h2>
            <p className="text-gray-300">Aprende los principios probabilísticos que te permitirán identificar compañías tecnológicas con potencial extraordinario antes que el mercado.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="bg-[#0D0D18] p-6 rounded-xl border border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
              <div className="h-12 w-12 rounded-lg bg-techstock-purple/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-techstock-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Algoritmos de Análisis</h3>
              <p className="text-gray-400">Aprende cómo identificar patrones y aplicar algoritmos que te permitirán descubrir empresas exitosas consistentemente.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#0D0D18] p-6 rounded-xl border border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
              <div className="h-12 w-12 rounded-lg bg-techstock-purple/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-techstock-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">KPIs Clave</h3>
              <p className="text-gray-400">Domina los indicadores principales que te ayudarán a evaluar el rendimiento y potencial futuro de las empresas tecnológicas.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#0D0D18] p-6 rounded-xl border border-techstock-gray/30 hover:border-techstock-purple transition-colors duration-300">
              <div className="h-12 w-12 rounded-lg bg-techstock-purple/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-techstock-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Gestión de Riesgos</h3>
              <p className="text-gray-400">Aprende a gestionar la volatilidad y minimizar los riesgos mientras maximizas tus oportunidades de retorno a largo plazo.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/login" 
              className="bg-techstock-purple hover:bg-techstock-purple-dark text-white font-semibold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
            >
              Comenzar ahora
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Sección Sobre el Instructor */}
      <AboutSection />
      
      {/* Sección de Testimonios */}
      <TestimonialsSection />
      
      {/* Sección de Precios */}
      <section id="pricing" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Planes de <span className="text-techstock-purple-light">Inversión</span></h2>
            <p className="text-gray-300">Invierte en tu educación financiera y únete a nuestra comunidad de inversores exitosos.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Básico */}
            <div className="bg-[#0D0D18] border border-techstock-gray/30 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Plan Básico</h3>
                <div className="text-3xl font-bold text-white mb-4">€199 <span className="text-sm font-normal text-gray-400">/ un solo pago</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Acceso al curso completo
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Herramienta de análisis básica
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    6 meses de acceso
                  </li>
                </ul>
                <Link
                  to="/login"
                  className="block w-full py-2 px-4 bg-techstock-black border border-techstock-gray hover:border-techstock-purple text-white text-center rounded-lg transition duration-300"
                >
                  Empezar ahora
                </Link>
              </div>
            </div>
            
            {/* Plan Premium */}
            <div className="bg-[#0D0D18] border-2 border-techstock-purple rounded-xl overflow-hidden relative transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute top-0 right-0 bg-techstock-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Plan Premium</h3>
                <div className="text-3xl font-bold text-white mb-4">€349 <span className="text-sm font-normal text-gray-400">/ un solo pago</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Acceso al curso completo
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Análisis avanzado de acciones
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Acceso a la IA de Antonio
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Acceso de por vida
                  </li>
                </ul>
                <Link
                  to="/login"
                  className="block w-full py-2 px-4 bg-techstock-purple hover:bg-techstock-purple-dark text-white text-center rounded-lg transition duration-300"
                >
                  Empezar ahora
                </Link>
              </div>
            </div>
            
            {/* Plan Empresarial */}
            <div className="bg-[#0D0D18] border border-techstock-gray/30 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Plan Empresarial</h3>
                <div className="text-3xl font-bold text-white mb-4">€899 <span className="text-sm font-normal text-gray-400">/ un solo pago</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Todo lo del plan Premium
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    5 licencias de usuario
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Sesiones privadas mensuales
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-techstock-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Análisis personalizado de cartera
                  </li>
                </ul>
                <Link
                  to="/login"
                  className="block w-full py-2 px-4 bg-techstock-black border border-techstock-gray hover:border-techstock-purple text-white text-center rounded-lg transition duration-300"
                >
                  Empezar ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de Newsletter */}
      <NewsletterSection />
      
      {/* Footer */}
      <footer className="py-10 bg-black border-t border-techstock-gray/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="text-white flex items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM12.4306 9.70695C12.742 9.33317 13.2633 9.30058 13.6052 9.62118L19.1798 14.8165C19.4894 15.1054 19.4894 15.5841 19.1798 15.873L13.6052 21.0683C13.2633 21.3889 12.742 21.3563 12.4306 19.9991V9.70695Z" fill="currentColor" />
                </svg>
                <span className="font-bold">TechStock Goldmine</span>
              </Link>
              <p className="text-gray-400 mt-2 text-sm">Inversión probabilística en el mercado tecnológico</p>
            </div>
            
            <div className="flex space-x-8">
              <div>
                <h4 className="text-white font-medium mb-3">Enlaces rápidos</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">Sobre nosotros</a></li>
                  <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonios</a></li>
                  <li><a href="#pricing" className="text-gray-400 hover:text-white transition duration-300">Precios</a></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-white transition duration-300">Acceso</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-3">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Términos de uso</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Política de privacidad</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Aviso legal</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} TechStock Goldmine. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
