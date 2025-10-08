import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const FindJob = () => {
  return (
    <section className="bg-white font-sans py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
            For Craftsmen & Service Providers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            BOB is the platform for craftsmen, service providers, and digital professionals who want to receive new job offers easily – without any registration or obligation.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            All incoming job requests are reviewed before being published on the website – so you can view them anytime.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            When you use BOB PRO, you will also be informed <strong>in advance by email about new, suitable job offers</strong> – before they appear publicly.
          </p>
        </div>

        {/* Features Grid Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Fair Prices */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair Prices</h3>
            <p className="text-sm text-gray-600">You only pay when you are genuinely interested.</p>
          </div>

          {/* Card 2: No Registration */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Registration</h3>
            <p className="text-sm text-gray-600">You can view all public job offers directly.</p>
          </div>

          {/* Card 3: Targeted Forwarding */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Targeted Forwarding</h3>
            <p className="text-sm text-gray-600">Only suitable inquiries reach you – not random spam.</p>
          </div>
          
          {/* Card 4: Fast Contact */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Contact</h3>
            <p className="text-sm text-gray-600">Interested parties contact you directly – with no middlemen.</p>
          </div>

          {/* Card 5: How it works (Spans 2 columns on large screens) */}
          <div className="bg-slate-100 rounded-lg shadow-sm p-8 border border-gray-200 lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">How it works:</h3>
            <ol className="list-decimal list-inside space-y-2 text-left text-gray-700">
              <li>A client submits a job request via the form.</li>
              <li>BOB reviews and publishes the request on the website.</li>
              <li>BOB PRO users receive the request in advance via email.</li>
              <li>Interested providers contact the client directly.</li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FindJob;