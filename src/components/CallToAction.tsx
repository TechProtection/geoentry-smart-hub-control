
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      const steps = sectionRef.current.querySelectorAll('.step-item');
      steps.forEach(step => observer.observe(step));
    }
    
    return () => {
      if (sectionRef.current) {
        const steps = sectionRef.current.querySelectorAll('.step-item');
        steps.forEach(step => observer.unobserve(step));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-16 bg-techguard-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Experimenta el futuro del hogar inteligente
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-techguard-100">
            Instalación sencilla, resultados inmediatos, experiencia incomparable
          </p>
          
          <div className="mt-8 flex justify-center">
            <Button className="px-8 py-3 bg-white text-techguard-700 hover:bg-techguard-50 text-base font-medium btn-animate">
              Solicitar Demostración
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center step-item opacity-0">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-techguard-500 text-white">
              <span className="text-lg font-bold">1</span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">Instalación Profesional</h3>
            <p className="mt-2 text-techguard-100">
              Nuestro equipo de técnicos instalará todo el sistema en tu hogar, rápido y sin complicaciones.
            </p>
          </div>
          
          <div className="text-center step-item opacity-0">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-techguard-500 text-white">
              <span className="text-lg font-bold">2</span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">Configuración Personalizada</h3>
            <p className="mt-2 text-techguard-100">
              Adapta el sistema a tus preferencias y establece las automatizaciones que mejor se ajusten a tu estilo de vida.
            </p>
          </div>
          
          <div className="text-center step-item opacity-0">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-techguard-500 text-white">
              <span className="text-lg font-bold">3</span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">Disfruta la Experiencia</h3>
            <p className="mt-2 text-techguard-100">
              Vive la comodidad de un hogar que se adapta a ti, con seguridad y confort sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
