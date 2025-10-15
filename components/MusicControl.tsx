
import React from 'react';
import { PlayIcon, PauseIcon } from './Icons';

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicControl: React.FC<MusicControlProps> = ({ isPlaying, onToggle }) => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
      <button
        onClick={onToggle}
        className="w-12 h-12 bg-[#ccc6b6] text-white rounded-l-full shadow-lg flex items-center justify-center hover:bg-[#b9b2a2] transition-all"
        aria-label={isPlaying ? 'Pausa musica' : 'Riproduci musica'}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
};

export default MusicControl;
