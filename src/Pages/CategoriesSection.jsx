import React from 'react';
import {
  FiPackage,
  FiTrash2,
  FiTool,
  FiDroplet,
  FiZap,
  FiHome,
  FiMonitor,
  FiSettings,
} from 'react-icons/fi';

const CategoriesSection = () => {
  const categories = [
    {
      icon: <FiPackage />,
      title: 'Garten- & Landschaftsbau',
      description: 'Pflastern, Rasen, Zäune, Bepflanzung',
    },
    {
      icon: <FiTrash2 />,
      title: 'Abbruch & Rückbau',
      description: 'Wände, Garagen, Entkernung, Demontage',
    },
    {
      icon: <FiTool />,
      title: 'Renovierung & Innenausbau',
      description: 'Malerarbeiten, Böden, Trockenbau',
    },
    {
      icon: <FiDroplet />,
      title: 'Sanitär & Badsanierung',
      description: 'Dusche, WC, Leitungen, Komplettumbau',
    },
    {
      icon: <FiZap />,
      title: 'Elektroarbeiten',
      description: 'Beleuchtung, Steckdosen, Sicherungskasten',
    },
    {
      icon: <FiHome />,
      title: 'Garagen- & Hallenbau',
      description: 'Fertiggaragen, Hallenkonstruktion, Lager',
    },
    {
      icon: <FiMonitor />,
      title: 'IT & Web',
      description: 'Webdesign, Admin, Support, Digitalisierung',
    },
    {
      icon: <FiSettings />,
      title: 'Sonstiges',
      description: 'Hausmeisterservice, Beratung, Planung',
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 leading-tight">
            Unsere Kategorien
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Hier findest du eine Auswahl der Gewerke & Dienstleistungen, für die über BOB Aufträge vermittelt werden.
            Die Liste wächst stetig – bei Fragen kannst du uns gerne direkt kontaktieren.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-sm p-5 sm:p-6 flex flex-col items-center text-center
                         border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200 hover:scale-[1.02]"
            >
              <div className="text-4xl sm:text-5xl text-indigo-800 mb-3 sm:mb-4">
                {category.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-snug">
                {category.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
