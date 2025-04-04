
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fadeIn');
    }
  }, []);

  const handleDemoClick = () => {
    const contactSection = document.getElementById('how-it-works');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative bg-gradient-to-b from-techguard-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transforma tu hogar con</span>
                <span className="block text-techguard-600">GeoEntry</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                El sistema inteligente que activa tu hogar cuando te acercas. Cerradura electrónica, iluminación automática y control ambiental, todo en una solución.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button onClick={handleDemoClick} className="w-full flex items-center justify-center px-8 py-3 bg-techguard-600 hover:bg-techguard-700 text-white text-base font-medium btn-animate">
                    Solicitar Demo
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-techguard-700 hover:bg-techguard-50 btn-animate">
                    Saber más
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-64 sm:h-72 md:h-96 lg:h-full w-full">
          <img
            className="absolute inset-0 h-full w-full object-cover rounded-bl-[4rem] shadow-xl"
            src="https://images.unsplash.com/photo-1558002038-BB4BB24417AE?auto=format&fit=crop&q=80&w=1000"
            alt="Casa inteligente con tecnología GeoEntry"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-techguard-500/20 to-accent1-300/20 mix-blend-multiply rounded-bl-[4rem]" />
          <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-techguard-100 flex items-center justify-center">
                <Home className="h-5 w-5 text-techguard-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">Bienvenido a tu hogar inteligente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
