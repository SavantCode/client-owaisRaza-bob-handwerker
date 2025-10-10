import React from 'react';

const ImprintPage = () => {
  return (
    <div className="bg-white font-sans text-gray-800 mt-5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Imprint
          </h1>
        </header>

        <main className="prose prose-slate max-w-none prose-h2:font-semibold prose-h2:text-slate-800 prose-h2:text-2xl prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-indigo-600 hover:prose-a:text-indigo-800">
          
          <section className="mb-8">
            <p>Information according to § 5 TMG (German Telemedia Act):</p>
            <p>
              Tobias Mayr<br />
              Hauptstraße 54<br />
              86877 Walkertshofen<br />
              Germany
            </p>
          </section>

          <section className="mb-8">
            <h2>Contact:</h2>
            <p>
              <strong>Phone:</strong> <a href="tel:+4917672810134">0176 728 10 134</a><br />
              <strong>E-Mail:</strong> <a href="mailto:schrauberparksgermany@gmail.com">schrauberparksgermany@gmail.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2>Responsible for the content according to § 55 Abs. 2 RStV:</h2>
            <p>
              Tobias Mayr<br />
              Hauptstraße 54<br />
              86877 Walkertshofen
            </p>
          </section>

          <section className="mb-8">
            <h2>Liability for Content</h2>
            <p>
              As a service provider, we are responsible for our own content on these pages according to § 7 Abs.1 TMG and general laws. According to §§ 8 to 10 TMG, however, we as a service provider are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected.
            </p>
          </section>

          <section className="mb-8">
            <h2>Liability for Links</h2>
            <p>
              Our site does not contain external links.
            </p>
          </section>

          <section>
            <h2>Copyright</h2>
            <p>
              The content and works created by the site operator on these pages are subject to German copyright law. The reproduction, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
};

export default ImprintPage;