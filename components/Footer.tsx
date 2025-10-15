import React from 'react';

const HeartIcon = () => (
  <svg className="w-8 h-8 text-[#d9534f] mx-auto mb-8 animate-heartbeat" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-16 text-center text-gray-500">
      <HeartIcon />
      <p className="text-3xl font-serif text-gray-700" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>Ti aspettiamo!</p>
      <p className="mt-8 text-sm tracking-widest">CON AMORE,</p>
      <p className="font-great-vibes text-6xl text-gray-800 my-2">Giacomo e Giulia</p>
      <p className="text-gray-600">25 Settembre 2026</p>
      <div className="w-20 h-px bg-gray-300 mx-auto my-10"></div>
      <p className="text-xs text-gray-400">
        © 2025 Giacomo e Giulia — Il nostro per sempre inizia qui.
      </p>
    </footer>
  );
};

export default Footer;