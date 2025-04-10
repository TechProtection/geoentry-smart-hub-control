
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fadeIn');
    }
  }, []);

  const handleDemoClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Full hero image as background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-techguard-600/60 to-techguard-900/60 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transforma tu hogar con</span>
              <span className="block text-techguard-50">GeoEntry</span>
            </h1>
            <p className="mt-3 text-base text-white/90 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              El sistema inteligente que activa tu hogar cuando te acercas. Cerradura electrónica, iluminación automática y control ambiental, todo en una solución.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Button onClick={handleDemoClick} className="w-full flex items-center justify-center px-8 py-3 bg-techguard-600 hover:bg-techguard-700 text-white text-base font-medium btn-animate">
                  Solicitar Demo
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm btn-animate">
                  Saber más
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
