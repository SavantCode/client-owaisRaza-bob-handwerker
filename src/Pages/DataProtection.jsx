import React from 'react';

const DataProtectionPage = () => {
  return (
    <div className="bg-white font-sans text-gray-800 pt-5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Datenschutzerklärung
          </h1>
        </header>

        <main className="prose prose-slate max-w-none prose-h2:font-semibold prose-h2:text-slate-800 prose-h2:text-2xl prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
          {/* Section 1: Verantwortlicher */}
          <section className="mb-8">
            <h2>1. Verantwortlicher</h2>
            <p>
              Tobias Mayr<br />
              Hauptstraße 54<br />
              86877 Walkertshofen<br />
              Deutschland
            </p>
            <p>
              <strong>E-Mail:</strong> <a href="mailto:schrauberparksgermany@gmail.com">schrauberparksgermany@gmail.com</a>
            </p>
          </section>

          {/* Section 2: Erhebung und Verarbeitung */}
          <section className="mb-8">
            <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wenn du unser Kontaktformular nutzt, erheben wir die von dir angegebenen personenbezogenen Daten (z. B. Name, E-Mail, Telefonnummer, Ortsangabe, Bilder, Beschreibung des Auftrags). Diese Daten verwenden wir ausschließlich zur Bearbeitung deiner Anfrage und zur gezielten Weiterleitung an passende Dienstleister. Eine Veröffentlichung oder Weitergabe zu Werbezwecken erfolgt nicht.
            </p>
          </section>

          {/* Section 3: Rechtsgrundlage */}
          <section className="mb-8">
            <h2>3. Rechtsgrundlage</h2>
            <p>
              Die Verarbeitung deiner Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer funktionierenden Vermittlung).
            </p>
          </section>

          {/* Section 4: Empfänger der Daten */}
          <section className="mb-8">
            <h2>4. Empfänger der Daten</h2>
            <p>
              Deine Daten werden nur dann an Dienstleister weitergegeben, wenn dies zur Bearbeitung deines konkreten Auftrags erforderlich ist. Es erfolgt keine Veröffentlichung deiner Daten auf der Website oder in öffentlich zugänglichen Bereichen.
            </p>
          </section>

          {/* Section 5: Speicherdauer */}
          <section className="mb-8">
            <h2>5. Speicherdauer</h2>
            <p>
              Wir speichern deine Daten nur so lange, wie dies zur Bearbeitung deines Auftrags erforderlich ist oder gesetzliche Aufbewahrungsfristen dies verlangen.
            </p>
          </section>

          {/* Section 6: Deine Rechte */}
          <section className="mb-8">
            <h2>6. Deine Rechte</h2>
            <p>
              Du hast jederzeit das Recht auf Auskunft über die bei uns gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Ebenso hast du das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten im Rahmen der gesetzlichen Vorgaben.
            </p>
            <p>
              Bitte wende dich dazu an: <a href="mailto:schrauberparksgermany@gmail.com">schrauberparksgermany@gmail.com</a>
            </p>
          </section>
          
          {/* Section 7: Hosting und Zugriffsdaten */}
          <section className="mb-8">
            <h2>7. Hosting und Zugriffsdaten</h2>
            <p>
              Unsere Website wird über die Google Sites Plattform bereitgestellt. Beim Besuch der Seite werden automatisch technische Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs sowie der verwendete Browser erfasst. Diese Daten dienen ausschließlich dem technischen Betrieb und der Sicherheit der Website.
            </p>
          </section>

          {/* Section 8: Änderungen */}
          <section>
            <h2>8. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen – z. B. bei rechtlichen Änderungen oder neuen Funktionalitäten auf der Website.
            </p>
          </section>
        </main>
        
        <footer className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Letzte Aktualisierung: Juni 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DataProtectionPage;