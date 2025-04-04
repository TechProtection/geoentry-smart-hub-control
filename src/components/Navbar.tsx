
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { House } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setIsMobileMenuOpen(false);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <House className="h-8 w-8 text-techguard-600" />
            <span className="ml-2 text-xl font-bold text-techguard-800">GeoEntry</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="px-3 py-2 rounded-md text-sm font-medium text-techguard-800 hover:text-techguard-600 transition-colors">
                Características
              </a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="px-3 py-2 rounded-md text-sm font-medium text-techguard-800 hover:text-techguard-600 transition-colors">
                Cómo funciona
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-3 py-2 rounded-md text-sm font-medium text-techguard-800 hover:text-techguard-600 transition-colors">
                Contacto
              </a>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-techguard-600 hover:bg-techguard-700 text-white btn-animate">
              Solicitar Demo
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-techguard-800 hover:text-techguard-600 focus:outline-none btn-animate"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icon when menu is closed */}
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="block px-3 py-2 rounded-md text-base font-medium text-techguard-800 hover:bg-techguard-100">
            Características
          </a>
          <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="block px-3 py-2 rounded-md text-base font-medium text-techguard-800 hover:bg-techguard-100">
            Cómo funciona
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block px-3 py-2 rounded-md text-base font-medium text-techguard-800 hover:bg-techguard-100">
            Contacto
          </a>
          <div className="mt-4">
            <Button className="w-full bg-techguard-600 hover:bg-techguard-700 text-white btn-animate">
              Solicitar Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
