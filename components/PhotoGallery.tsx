
import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const PhotoItem: React.FC<{ src: string, alt: string, className?: string, isDouble?: boolean }> = ({ src, alt, className, isDouble = false }) => {
    return (
        <div className={`w-full ${isDouble ? 'md:w-full' : 'md:w-1/2'} p-2 ${className}`}>
             <img src={src} alt={alt} loading="lazy" className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
        </div>
    )
}

const PhotoGallery: React.FC = () => {
  return (
    <section className="py-16 text-center">
        <h2 className="font-great-vibes text-5xl text-gray-700 mb-8">I nostri momenti</h2>
        <div className="flex flex-wrap -m-2">
            <div className="w-1/2 p-2">
                 <img src="https://picsum.photos/500/800?random=1" alt="Foto 1" loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
            </div>
             <div className="w-1/2 p-2">
                 <img src="https://picsum.photos/500/400?random=2" alt="Foto 2" loading="lazy" className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
                 <img src="https://picsum.photos/500/400?random=3" alt="Foto 3" loading="lazy" className="w-full h-64 object-cover rounded-lg shadow-lg mt-4 transform hover:scale-105 transition-transform duration-300" />
            </div>
             <div className="w-full p-2">
                 <img src="https://picsum.photos/1000/500?random=4" alt="Foto 4" loading="lazy" className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
            </div>
             <div className="w-1/2 p-2">
                 <img src="https://picsum.photos/500/500?random=5" alt="Foto 5" loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
            </div>
             <div className="w-1/2 p-2">
                 <img src="https://picsum.photos/500/500?random=6" alt="Foto 6" loading="lazy" className="w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
            </div>
        </div>
    </section>
  );
};

export default PhotoGallery;