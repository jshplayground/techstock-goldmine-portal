
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

// Usuario de prueba para demostración
const TEST_USER = {
  email: 'demo@techstock.com',
  password: 'password123'
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulación de autenticación
    setTimeout(() => {
      if (isLogin) {
        // Lógica de inicio de sesión
        if (email === TEST_USER.email && password === TEST_USER.password) {
          // Login exitoso
          toast.success('Inicio de sesión exitoso');
          navigate('/dashboard');
        } else {
          // Login fallido
          toast.error('Credenciales incorrectas. Usa demo@techstock.com / password123');
        }
      } else {
        // Lógica de registro (siempre exitoso en demo)
        toast.success('Cuenta creada exitosamente. Ahora puedes iniciar sesión.');
        setIsLogin(true);
      }
      setIsLoading(false);
    }, 1500);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    // Limpiar campos al cambiar de modo
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sección de imagen/banner */}
      <div className="md:w-1/2 bg-[#0D0D18] flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-techstock-purple/30 to-black z-0"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-techstock-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-techstock-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 text-center max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bienvenido a <span className="text-techstock-purple-light">TechStock Goldmine</span></h2>
          <p className="text-gray-300 mb-8">Descubre el poder de la inversión probabilística en bolsa y transforma tu forma de invertir en el mercado tecnológico.</p>
          
          <div className="p-6 bg-black/30 backdrop-blur-md rounded-xl border border-techstock-gray/20">
            <div className="flex items-center mb-4 text-left">
              <span className="bg-techstock-purple/20 p-2 rounded mr-4">
                <svg className="w-6 h-6 text-techstock-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </span>
              <div>
                <h4 className="text-white font-medium">Análisis Avanzado</h4>
                <p className="text-gray-400 text-sm">Detecta patrones de crecimiento antes que los demás</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4 text-left">
              <span className="bg-techstock-purple/20 p-2 rounded mr-4">
                <svg className="w-6 h-6 text-techstock-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </span>
              <div>
                <h4 className="text-white font-medium">Resultados Comprobados</h4>
                <p className="text-gray-400 text-sm">Estrategias probadas por más de 300 estudiantes</p>
              </div>
            </div>
            
            <div className="flex items-center text-left">
              <span className="bg-techstock-purple/20 p-2 rounded mr-4">
                <svg className="w-6 h-6 text-techstock-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
              <div>
                <h4 className="text-white font-medium">Acceso de por vida</h4>
                <p className="text-gray-400 text-sm">Actualizaciones constantes del contenido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Formulario de login/registro */}
      <div className="md:w-1/2 bg-black flex items-center justify-center p-6 md:p-12">
        <Card className="w-full max-w-md bg-[#0D0D18] border-techstock-gray/30 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{isLogin ? 'Iniciar sesión' : 'Crear una cuenta'}</CardTitle>
            <CardDescription className="text-gray-400">
              {isLogin 
                ? 'Ingresa tus credenciales para acceder a tu cuenta' 
                : 'Completa el formulario para crear una nueva cuenta'}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Correo electrónico</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isLogin ? "demo@techstock.com" : "tu@email.com"}
                  required
                  className="bg-black/50 border-gray-700 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Contraseña</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isLogin ? "password123" : "Contraseña segura"}
                  required
                  className="bg-black/50 border-gray-700 text-white"
                />
              </div>
              
              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-techstock-purple-light hover:underline">¿Olvidaste tu contraseña?</a>
                </div>
              )}
              
              <Button 
                type="submit"
                className="w-full bg-techstock-purple hover:bg-techstock-purple-dark"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </>
                ) : (
                  isLogin ? 'Iniciar sesión' : 'Registrarse'
                )}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center w-full">
              <button
                type="button"
                onClick={toggleMode}
                className="text-sm text-techstock-purple-light hover:underline"
              >
                {isLogin 
                  ? '¿No tienes una cuenta? Regístrate' 
                  : '¿Ya tienes una cuenta? Inicia sesión'}
              </button>
            </div>
            
            {isLogin && (
              <div className="flex items-center justify-center">
                <p className="text-xs text-gray-400">
                  Para la demostración: <span className="font-semibold">demo@techstock.com / password123</span>
                </p>
              </div>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
