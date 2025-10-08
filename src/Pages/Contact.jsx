import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <section className="bg-gray-50 font-sans mt-4 text-gray-800 py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#01133b] mb-4">
            Contact & Questions
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question, need support, or want to speak with us directly? No problem – we're always here for you.
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 sm:p-10 w-full max-w-lg mx-auto text-gray-700">
          <div className="space-y-6">

            {/* Contact Person */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Contact Person:
              </p>
              <p className="text-base text-gray-800 font-medium">Tobias Mayr</p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <FiMapPin className="text-lg text-gray-500 mt-1" />
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Address:
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Hauptstraße 54<br />86877 Walkertshofen
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <FiPhone className="text-lg text-gray-500 mt-1" />
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Phone:
                </p>
                <a
                  href="tel:+4917672810134"
                  className="text-sm sm:text-base text-cyan-600 hover:text-cyan-800 transition-colors duration-200"
                >
                  0176 728 10 134
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <FiMail className="text-lg text-gray-500 mt-1" />
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  E-Mail:
                </p>
                <a
                  href="mailto:schrauberparksgermany@gmail.com"
                  className="text-sm sm:text-base text-cyan-600 hover:text-cyan-800 transition-colors duration-200 break-all"
                >
                  schrauberparksgermany@gmail.com
                </a>
              </div>
            </div>

            {/* Support Hours */}
            <div className="flex items-start gap-3">
              <FiClock className="text-lg text-gray-500 mt-1" />
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Support Hours:
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  Mon–Fri, 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
