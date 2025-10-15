import React from 'react';

import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventSection from './components/EventSection';
import DressCode from './components/DressCode';
import PhotoGallery from './components/PhotoGallery';
import Gifts from './components/Gifts';
import RsvpForm from './components/RsvpForm';
import Footer from './components/Footer';
import ScrollAnimator from './components/ScrollAnimator';
import { RingIcon, CheersIcon } from './components/Icons';

const App: React.FC = () => {
  const weddingDate = '2026-09-25T11:30:00';

  return (
    <div className="max-w-xl mx-auto bg-stone-50 shadow-2xl">
      <Hero />

      <main className="px-4 md:px-6">
        <ScrollAnimator>
          <section className="py-16 text-center">
            <h2 className="font-great-vibes text-5xl text-gray-700 mb-4">Sei invitato!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Saremmo davvero felici di condividere con te questo momento così speciale della nostra vita. Manca poco!
            </p>
          </section>
        </ScrollAnimator>

        <ScrollAnimator>
          <Countdown targetDate={weddingDate} />
        </ScrollAnimator>
        
        <ScrollAnimator>
          <EventSection
            icon={<RingIcon />}
            title="Cerimonia"
            time="11:30"
            location="Sala Del Regno Dei Testimoni di Geova, Auditorium A, Via Pantanelli, 98, 61025 Montelabbate (PU)"
            mapLink="https://maps.app.goo.gl/b3RzrMLUPajqdsby8"
          />
        </ScrollAnimator>

        <ScrollAnimator>
          <EventSection
            icon={<CheersIcon />}
            title="Celebrazione"
            time="13:00"
            location="La Fragola De Bosch, Via Sottorigossa, 1321, 47035 Gambettola (FC)"
            mapLink="https://www.google.com/maps/search/?api=1&query=La+Fragola+De+Bosch,+Via+Sottorigossa,+1321,+47035+Gambettola+(FC)"
          />
        </ScrollAnimator>
        
        <ScrollAnimator>
          <DressCode />
        </ScrollAnimator>

        <ScrollAnimator>
          <PhotoGallery />
        </ScrollAnimator>

        <ScrollAnimator>
          <Gifts />
        </ScrollAnimator>
        
        <ScrollAnimator>
          <RsvpForm />
        </ScrollAnimator>
      </main>

      <Footer />
    </div>
  );
};

export default App;