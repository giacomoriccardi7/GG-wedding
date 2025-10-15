
import React from 'react';

const Accommodation: React.FC = () => {
  return (
    <section className="py-16">
      <div className="bg-gray-100 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-light uppercase tracking-wider text-gray-800 mb-4">
          Suggerimenti per l'alloggio
        </h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Ti consigliamo questi posti per il tuo soggiorno durante l'evento.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs bg-[#ccc6b6] text-white px-8 py-3 rounded-md uppercase text-sm font-semibold tracking-wider hover:bg-[#b9b2a2] transition-colors"
          >
            Hotel Bella Vista
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs bg-[#ccc6b6] text-white px-8 py-3 rounded-md uppercase text-sm font-semibold tracking-wider hover:bg-[#b9b2a2] transition-colors"
          >
            Albergo Centrale
          </a>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
