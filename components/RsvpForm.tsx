import React, { useState } from 'react';

// Assicurati che questo URL sia corretto!
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz1Fl6DEZPYwgOimlnRUF5Z7KTzmf0fAFvqju4afeHDxkybetIyiv5I8GVOmxersMP2Rg/exec';

const RsvpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    guest_name: '',
    attendance: '',
    adults: 1,
    children: 0,
    participant_names: '',
    intolerances: '',
    rsvp_message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAttendanceChange = (value: string) => {
    setFormData(prev => ({ ...prev, attendance: value }));
  };

  const validateForm = () => {
    if (!formData.guest_name.trim()) return "Il campo Nome e Cognome è obbligatorio.";
    if (!formData.attendance) return "Devi confermare la tua partecipazione.";
    
    if (formData.attendance === 'yes') {
      if (formData.adults < 1) return "Il numero di adulti deve essere almeno 1.";
      if (formData.children < 0) return "Il numero di bambini non può essere negativo.";
      if (!formData.rsvp_message.trim()) return "Il campo Messaggio per gli Sposi è obbligatorio.";
    }
    
    if (formData.attendance === 'no') {
      if (!formData.rsvp_message.trim()) return "Il campo Messaggio per gli Sposi è obbligatorio.";
    }
    
    return '';
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setLoading(true);

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      mode: 'cors', // Aggiunto per maggiore chiarezza, anche se il workaround text/plain spesso basta
    })
    .then(response => {
      if (!response.ok) {
        // Se la risposta non è OK (es. errore 404 o 500), lancia un errore
        throw new Error(`Errore di rete: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.result === 'success') {
        setSubmitted(true);
      } else {
        // L'errore proviene dallo script stesso
        console.error('Errore dallo script:', data.error);
        setError('Si è verificato un errore durante l\'invio. Riprova.');
      }
    })
    .catch(err => {
      console.error('Errore durante il fetch:', err);
      // Questo cattura errori di rete, CORS, o di parsing JSON
      setError('Errore di configurazione o di rete. Controlla che l\'URL dello script sia corretto e che la distribuzione sia attiva.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  if (submitted) {
    return (
      <section className="py-16 text-center">
        <h3 className="text-3xl font-light uppercase tracking-widest text-gray-800 mb-6">Grazie!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          {formData.attendance === 'yes'
            ? "La tua conferma è stata inviata. Non vediamo l'ora di festeggiare con te!"
            : "Grazie per averci fatto sapere. Ci dispiace che non potrai esserci."}
        </p>
      </section>
    );
  }

  return (
    <section className="py-16 text-center">
      <h3 className="text-4xl md:text-5xl font-serif text-gray-800" style={{fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'}}>Conferma la Tua Presenza</h3>
      <p className="mt-4 text-gray-600">Vi chiediamo gentilmente di confermare la vostra partecipazione</p>
      <p className="mt-1 text-gray-600 font-semibold">Entro il 15 Maggio 2026</p>
      
      <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg text-left space-y-6">
        <div>
          <label htmlFor="guest_name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome e Cognome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="guest_name"
            name="guest_name"
            value={formData.guest_name}
            onChange={handleChange}
            placeholder="Mario Rossi"
            className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b9b2a2] focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Conferma Partecipazione <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={() => handleAttendanceChange('yes')} className={`px-4 py-3 rounded-lg text-center transition-all duration-200 ${formData.attendance === 'yes' ? 'bg-[#93A58D] text-white shadow-md' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
              Sì, parteciperò
            </button>
            <button type="button" onClick={() => handleAttendanceChange('no')} className={`px-4 py-3 rounded-lg text-center transition-all duration-200 ${formData.attendance === 'no' ? 'bg-[#93A58D] text-white shadow-md' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
              No, non potrò partecipare
            </button>
          </div>
        </div>

        {formData.attendance === 'yes' && (
          <div className="space-y-6 border-t border-gray-200 pt-6 animate-fade-in">
             <p className="text-sm text-gray-500">Ottimo! Indica il numero di adulti e bambini e i nomi dei partecipanti (con età dei bambini).</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
                  Numero di Adulti <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  min="1"
                  className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b9b2a2] focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
                  Numero di Bambini <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  min="0"
                  className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b9b2a2] focus:border-transparent transition"
                />
                 <p className="mt-1 text-xs text-gray-500">Inserisci il numero di bambini (usa 0 se nessuno).</p>
              </div>
            </div>
            <div>
              <label htmlFor="participant_names" className="block text-sm font-medium text-gray-700 mb-1">
                Nomi dei Partecipanti (e età dei bambini)
              </label>
              <textarea
                id="participant_names"
                name="participant_names"
                rows={3}
                value={formData.participant_names}
                onChange={handleChange}
                placeholder="Es. Giacomo Rossi, Giulia Bianchi, Leo (5 anni), Sofia (10 anni)"
                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b9b2a2] focus:border-transparent transition"
              />
            </div>
             <div>
              <label htmlFor="intolerances" className="block text-sm font-medium text-gray-700 mb-1">
                Intolleranze o Allergie Alimentari
              </label>
              <textarea
                id="intolerances"
                name="intolerances"
                rows={3}
                value={formData.intolerances}
                onChange={handleChange}
                placeholder="Es. intolleranza al lattosio, allergia alle noci..."
                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b9b2a2] focus:border-transparent transition"
              />
            </div>
            <div>
              <label htmlFor="rsvp_message" className="block text-sm font-medium text-gray-700 mb-1">
                Messaggio per gli Sposi <span className="text-red-500">*</span>
              </label>
              <textarea
                id="rsvp_message"
                name="rsvp_message"
                rows={3}
                value={formData.rsvp_message}
                onChange={handleChange}
                placeholder="Condividi i tuoi auguri e pensieri..."
                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b9b2a2] focus:border-transparent transition"
              />
            </div>
          </div>
        )}

        {formData.attendance === 'no' && (
          <div className="space-y-6 border-t border-gray-200 pt-6 animate-fade-in">
             <p className="text-sm text-gray-500">Grazie per averci avvisato. Puoi lasciare un messaggio per gli sposi.</p>
            <div>
              <label htmlFor="rsvp_message" className="block text-sm font-medium text-gray-700 mb-1">
                Messaggio per gli Sposi <span className="text-red-500">*</span>
              </label>
              <textarea
                id="rsvp_message"
                name="rsvp_message"
                rows={4}
                value={formData.rsvp_message}
                onChange={handleChange}
                placeholder="Condividi i tuoi auguri e pensieri..."
                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b9b2a2] focus:border-transparent transition"
              />
            </div>
          </div>
        )}
        
        {error && <p className="text-red-500 text-sm text-center font-semibold bg-red-50 p-3 rounded-lg">{error}</p>}
        
        {formData.attendance && (
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-800 text-white px-8 py-4 rounded-lg uppercase text-sm font-semibold tracking-wider hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Invio in corso...' : 'Invia Conferma'}
            </button>
          </div>
        )}
      </form>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default RsvpForm;