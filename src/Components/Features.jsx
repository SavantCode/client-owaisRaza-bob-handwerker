import React from 'react';
import { FaCheckCircle, FaHandshake, FaWrench, FaCogs } from 'react-icons/fa';

const Features = () => {
    const infoCards = [
        {
            icon: <FaCheckCircle className="text-3xl text-[#0a2540]" />,  // decreased from 4xl to 3xl
            title: "Kostenlos für Auftraggeber",
            description: "Du zahlst nichts – die Anbieter bewerben sich bei dir."
        },
        {
            icon: <FaHandshake className="text-3xl text-[#0a2540]" />,
            title: "Direkter Kontakt",
            description: "Kein Umweg – Anbieter melden sich direkt bei dir."
        },
        {
            icon: <FaWrench className="text-3xl text-[#0a2540]" />,
            title: "Geprüfte Handwerker",
            description: "Wir prüfen alle Anbieter vor Weiterleitung."
        },
        {
            icon: <FaCogs className="text-3xl text-[#0a2540]" />,
            title: "Ideal auch für IT & Service",
            description: "Auch Web, IT & Admin: BOB deckt alles ab."
        }
    ];

    return (
        <section className="bg-white py-20 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a2540]">
                    BOB – Handwerker & Aufträge weltweit
                </h2>
                <p className="text-base md:text-lg text-gray-600 mt-2 mb-12">
                    Profis einfach finden. Klar. Fair. Direkt.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {infoCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-8 rounded-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="mb-4">{card.icon}</div>
                            <h3 className="text-lg font-bold text-[#0a2540] mb-2">{card.title}</h3>
                            <p className="text-gray-600">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
