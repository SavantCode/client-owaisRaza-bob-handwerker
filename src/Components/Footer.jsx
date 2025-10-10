import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 font-sans pb-12 md:pb-12">
      {/* 👆 Added pb-24 for mobile (to avoid overlap with bottom navbar), 
          and md:pb-12 for normal desktop spacing */}

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Über BOB (spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Über BOB</h3>
            <p className="text-sm leading-relaxed">
              BOB verbindet Auftraggeber mit Handwerkern, IT-Profis und Dienstleistern – direkt, schnell und ohne Umwege. Unser Ziel ist es, dir den Zugang zu geprüften Fachkräften zu erleichtern und dir die Möglichkeit zu geben, deine Projekte effizient umzusetzen. Egal ob Renovierungen, Gartenbau, IT-Services oder individuelle Anfragen: Bei BOB findest du schnell die passenden Anbieter. Auftraggeber können kostenlos ihre Aufträge einstellen und erhalten innerhalb kürzester Zeit Rückmeldungen von interessierten, geprüften Fachbetrieben. BOB steht für transparente Abläufe, faire Konditionen und eine unkomplizierte Abwicklung deiner Anliegen. Vertrauen, Qualität und Einfachheit sind die Grundpfeiler unserer Arbeit.
            </p>
          </div>
          
          {/* Column 3: Kontakt */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <div className="text-sm space-y-3">
              <p className="font-semibold text-gray-200">MT Garagen GmbH</p>
              <div className="flex items-start gap-3">
                <FiMapPin className="text-lg mt-1 flex-shrink-0" />
                <span>Hauptstraße 54<br/>86877 Walkertshofen</span>
              </div>
              <a href="tel:+49017672810134" className="flex items-center gap-3 hover:text-white transition-colors">
                <FiPhone className="text-lg" />
                <span>0176 728 10 134</span>
              </a>
              <a href="mailto:schrauberparksgermany@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <FiMail className="text-lg" />
                <span>schrauberparksgermany@gmail.com</span>
              </a>
            </div>
          </div>
          
          {/* Column 4: Rechtliches */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutzerklärung</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © 2025 BOB – Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
