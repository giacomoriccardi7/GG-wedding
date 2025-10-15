import React from 'react';

interface EventSectionProps {
  icon: React.ReactNode;
  title: string;
  date?: string;
  time: string;
  location: string;
  mapLink: string;
}

const EventSection: React.FC<EventSectionProps> = ({ icon, title, date, time, location, mapLink }) => {
  return (
    <section className="py-16 text-center">
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-3xl font-light uppercase tracking-widest text-gray-800">{title}</h3>
      <div className="flex items-center justify-center my-8 text-gray-600">
        {date && (
          <>
            <span className="text-3xl font-light uppercase">{date}</span>
            <div className="w-px h-16 bg-gray-300 mx-6"></div>
          </>
        )}
        <span className="text-3xl font-light">{time}</span>
      </div>
      <p className="text-gray-500 mb-8">{location}</p>
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#93A58D] text-white px-8 py-3 rounded-md uppercase text-sm font-semibold tracking-wider hover:bg-[#82947C] transition-colors"
      >
        Vedi la posizione
      </a>
    </section>
  );
};

export default EventSection;