
import React from 'react';
import { ArrowDownIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <header 
      className="relative h-[70vh] bg-cover bg-center text-white flex flex-col items-center shadow-lg"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559941198-a66f27b581d1?q=80&w=1887&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-24">
        <h1 className="font-great-vibes text-7xl md:text-8xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
          Giacomo e Giulia
        </h1>
        <h2 className="mt-6 text-xl tracking-[0.2em] uppercase" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
          Ci Sposiamo
        </h2>
      </div>
      <div className="absolute bottom-8 z-10">
        <div className="anim-bounce">
          <ArrowDownIcon />
        </div>
      </div>
    </header>
  );
};

export default Hero;