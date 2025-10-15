import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  
  const addCalendarEvent = () => {
    const title = "Matrimonio di Giacomo e Giulia";
    const description = "Ti aspettiamo per la cerimonia alle 11:30 presso la Sala Del Regno Dei Testimoni di Geova, Auditorium A. Segue ricevimento alle 13:00 presso La Fragola De Bosch.";
    const location = "Sala Del Regno Dei Testimoni di Geova, Auditorium A, Via Pantanelli, 98, 61025 Montelabbate (PU)";
    const startDate = new Date(targetDate);
    // Ceremony ends around when the reception begins, added buffer.
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

    // Google Calendar requires YYYYMMDDTHHMMSSZ format
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d{3}/g, "");
    };

    const calendarUrl = [
      'https://www.google.com/calendar/render?action=TEMPLATE',
      '&text=' + encodeURIComponent(title),
      '&dates=' + formatDate(startDate) + '/' + formatDate(endDate),
      '&details=' + encodeURIComponent(description),
      '&location=' + encodeURIComponent(location)
    ].join('');
    
    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
  };


  const countdownItems = [
    { label: 'Giorni', value: timeLeft.days },
    { label: 'Ore', value: timeLeft.hours },
    { label: 'Minuti', value: timeLeft.minutes },
    { label: 'Secondi', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 text-center">
      <div className="flex justify-center gap-8">
        {countdownItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#93A58D] text-white rounded-full text-2xl font-medium">
              {String(item.value).padStart(2, '0')}
            </span>
            <label className="mt-2 text-xs uppercase tracking-wider text-gray-600">{item.label}</label>
          </div>
        ))}
      </div>
      <div className="my-12">
        <div style={{fontFamily: '"Times New Roman", Times, serif'}} className="text-gray-700">
            <p className="text-xl uppercase tracking-[0.2em]">Settembre</p>
            <p className="text-8xl font-thin my-2">25</p>
            <p className="text-xl tracking-[0.2em]">2 0 2 6</p>
        </div>
        <div className="w-16 h-[1px] bg-gray-400 mx-auto mt-6"></div>
      </div>
      <button onClick={addCalendarEvent} className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-50 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm10 5H4v8h12V7z" clipRule="evenodd" />
        </svg>
        Aggiungi al calendario
      </button>
    </section>
  );
};

export default Countdown;