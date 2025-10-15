
import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal';

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

const Gifts: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 text-center">
        <LottiePlayer src="https://assets6.lottiefiles.com/private_files/lf30_y0mCTl.json" />
        <h3 className="text-3xl font-light uppercase tracking-widest text-gray-800">Regali</h3>
        <p className="mt-4 text-gray-600 max-w-sm mx-auto">
          La cosa più importante è la tua presenza, ma se desideri farci un regalo qui trovi i nostri dati:
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full max-w-xs bg-[#93A58D] text-white px-8 py-3 rounded-md uppercase text-sm font-semibold tracking-wider hover:bg-[#82947C] transition-colors"
          >
            Vedi dati bancari
          </button>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h4 className="text-xl font-semibold mb-4 text-gray-800">Dati Bancari</h4>
        <div className="text-gray-600 space-y-2">
            <p><strong>IBAN:</strong> IT79W0347501605CC0012827993</p>
            <p><strong>Intestatario:</strong> Giacomo Riccardi</p>
        </div>
      </Modal>
    </>
  );
};

export default Gifts;