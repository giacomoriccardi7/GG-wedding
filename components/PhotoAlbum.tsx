
import React, { useEffect, useRef } from 'react';

// Lottie Player component that dynamically loads the player script
const LottiePlayer = ({ src, ...props }: { src: string; [key: string]: any }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scriptId = 'lottie-player-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        const loadPlayer = () => {
            // FIX: Cast window to 'any' to access LottiePlayer property without a global type definition.
            if ((window as any).LottiePlayer) {
                // The player is available
            }
        };

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
            script.async = true;
            script.onload = loadPlayer;
            document.body.appendChild(script);
        } else if ((window as any).LottiePlayer) {
            loadPlayer();
        } else {
            script.addEventListener('load', loadPlayer);
        }

        return () => {
            if(script) script.removeEventListener('load', loadPlayer);
        }
    }, []);

    // FIX: Use React.createElement to bypass JSX type checking for the custom element 'lottie-player',
    // resolving the "Property 'lottie-player' does not exist on type 'JSX.IntrinsicElements'" error.
    return (
        <div ref={ref}>
            {React.createElement('lottie-player', {
                src: src,
                background: "transparent",
                speed: "1",
                style: { width: '140px', height: '140px', margin: '0 auto' },
                loop: true,
                autoplay: true,
                ...props
            })}
        </div>
    );
};


const PhotoAlbum: React.FC = () => {
  return (
    <section className="py-16">
      <div className="bg-[#ccc6b6] rounded-xl p-8 text-center text-white">
        <LottiePlayer src="https://assets9.lottiefiles.com/packages/lf20_0zv8teye.json" />
        <h3 className="text-2xl font-light uppercase tracking-wider mt-4 mb-4">
          Cattura i momenti migliori!
        </h3>
        <p className="font-light opacity-90 mb-8 max-w-md mx-auto">
          Vogliamo rivivere questo giorno speciale attraverso i tuoi occhi, aiutaci a creare un album pieno di ricordi indimenticabili caricando le tue foto del matrimonio.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-transparent border border-white/50 text-white px-8 py-3 rounded-lg uppercase text-sm font-light tracking-wider hover:bg-white/10 transition-colors"
        >
          Vedi Album
        </a>
      </div>
    </section>
  );
};

export default PhotoAlbum;