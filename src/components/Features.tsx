
import React from 'react';
import FeatureCard from './FeatureCard';
import { DoorClosed, MapPin, Lightbulb, Thermometer, BellElectric, Wifi } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Cerradura Inteligente',
      description: 'Control de acceso con contraseña numérica y reconocimiento de huella digital para mayor seguridad.',
      icon: DoorClosed
    },
    {
      title: 'Geolocalización',
      description: 'Detecta automáticamente cuando te acercas a casa y activa los dispositivos inteligentes.',
      icon: MapPin
    },
    {
      title: 'Iluminación Adaptativa',
      description: 'Las luces se encienden automáticamente según los niveles de luz natural, ahorrando energía.',
      icon: Lightbulb
    },
    {
      title: 'Control de Temperatura',
      description: 'Activa el aire acondicionado o la calefacción según las condiciones ambientales y tus preferencias.',
      icon: Thermometer
    },
    {
      title: 'Aromatizante Automático',
      description: 'Recibe un ambiente con el aroma perfecto al llegar a casa gracias a la activación automática.',
      icon: BellElectric
    },
    {
      title: 'Todo en una App',
      description: 'Controla y monitorea todos los dispositivos de tu hogar inteligente desde una sola aplicación.',
      icon: Wifi
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-techguard-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Características de <span className="text-techguard-600">GeoEntry</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Automatización inteligente que se adapta a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
