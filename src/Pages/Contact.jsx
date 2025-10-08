import React from 'react';

const ContactPage = () => {
  return (
    <section className="bg-gray-50 font-sans py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
            Contact & Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question, need support, or want to speak with us directly? No problem – we're always here for you.
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 sm:p-10 w-full max-w-lg mx-auto">
          <div className="space-y-6">
            
            {/* Contact Person */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Contact Person:</p>
              <p className="text-lg text-gray-800">Tobias Mayr</p>
            </div>

            {/* Address */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Address:</p>
              <p className="text-lg text-gray-800 leading-snug">
                Hauptstraße 54<br />
                86877 Walkertshofen
              </p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Phone:</p>
              <a href="tel:+4917672810134" className="text-lg text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                0176 728 10 134
              </a>
            </div>

            {/* E-Mail */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">E-Mail:</p>
              <a href="mailto:schrauberparksgermany@gmail.com" className="text-lg text-indigo-600 hover:text-indigo-800 transition-colors duration-200 break-all">
                schrauberparksgermany@gmail.com
              </a>
            </div>

            {/* Support Hours */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Support Hours:</p>
              <p className="text-lg text-gray-800">Mon–Fri, 9:00 AM – 6:00 PM</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;