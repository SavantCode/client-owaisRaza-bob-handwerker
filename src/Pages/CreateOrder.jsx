// File: Features.jsx
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiInfo } from 'react-icons/fi';

const CreateOrder = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 bg-white font-sans text-gray-800">
      
      {/* ===============================
          Main Content Wrapper
      =============================== */}
      <div className="w-full max-w-4xl mx-auto text-center">

        {/* ===============================
            Intro Section
        =============================== */}
        <div className="mb-12 md:mb-16">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: '#01133b' }}>
            Anfrage starten – kostenlos & unverbindlich
          </h1>

          <p className="max-w-3xl mx-auto mb-6 text-base text-gray-600 sm:text-lg">
            Du hast einen Auftrag und suchst passende Handwerker oder Dienstleister?
            Fülle einfach unser Online-Formular aus – wir prüfen deine Angaben und leiten deinen Auftrag gezielt weiter.
          </p>

          <p className="mb-4 text-base text-gray-600 sm:text-lg">
            Interessierte Anbieter melden sich direkt bei dir.
          </p>

          <p className="text-base font-bold sm:text-lg">
            Keine Registrierung nötig. Kein Abo. Keine versteckten Kosten.
          </p>
        </div>

        {/* ===============================
            Datenschutzerklärung Section
        =============================== */}
        <div className="p-6 text-left bg-gray-50 border border-gray-200 rounded-lg shadow-sm sm:p-8">
          <h2 className="mb-4 text-xl font-bold sm:text-2xl" style={{ color: '#01133b' }}>
            Datenschutzerklärung
          </h2>

          <p className="mb-4 text-sm text-gray-700 sm:text-base">
            Wenn du unser Formular nutzt, erheben wir die von dir angegebenen personenbezogenen Daten
            (z.B. Name, E-Mail, Telefonnummer, Ort, Beschreibung, Bilder). Diese Daten werden ausschließlich
            zur Bearbeitung deiner Anfrage und zur gezielten Weiterleitung an passende Anbieter verwendet.
          </p>

          <p className="mb-4 text-sm text-gray-700 sm:text-base">
            Es erfolgt keine öffentliche Veröffentlichung, keine Weitergabe zu Werbezwecken und keine dauerhafte
            Speicherung über das Projekt hinaus.
          </p>

          <p className="mb-4 text-sm text-gray-700 sm:text-base">
            Du hast jederzeit das Recht auf Auskunft, Berichtigung oder Löschung deiner Daten.
          </p>

          <p className="text-sm text-gray-700 sm:text-base">
            Verantwortlich: Tobias Mayr, Hauptstraße 54, 86877 Walkertshofen{' '}
            <a
              href="mailto:schrauberparksgermany@gmail.com"
              className="inline-flex items-center gap-1 text-blue-600 hover:underline break-all"
            >
              <HiOutlineMail className="flex-shrink-0 w-4 h-4" />
              <span>schrauberparksgermany@gmail.com</span>
            </a>
          </p>
        </div>
      </div>

      {/* ===============================
          Info Icon (Bottom Left)
      =============================== */}
      <div
        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6"
        title="Weitere Informationen"
      >
        <FiInfo className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>
    </div>
  );
};

export default CreateOrder;
