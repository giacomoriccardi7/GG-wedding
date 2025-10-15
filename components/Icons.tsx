
import React from 'react';

export const ArrowDownIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 9L12 15L5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const RingIcon = () => (
    <img src="https://weddingfy.app/recursos/iconos/anillosN.gif" alt="Rings" className="w-20 h-20" />
);

export const CheersIcon = () => (
    <img src="https://weddingfy.app/recursos/iconos/cheersN.gif" alt="Cheers" className="w-20 h-20" />
);

// Fix: Add missing PlayIcon and PauseIcon exports.
export const PlayIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5v14l11-7z" />
    </svg>
);

export const PauseIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
);
