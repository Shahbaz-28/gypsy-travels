'use client';

import { FaStar, FaGlobe, FaThumbsUp } from 'react-icons/fa';

export default function WhyUs() {
  const cards = [
    {
      icon: <FaStar className="text-white text-xl" />,
      title: 'Handpicked Hotels',
      description:
        'Enjoy curated stays with comfort, quality, and convenience in every destination.',
    },
    {
      icon: <FaGlobe className="text-white text-xl" />,
      title: 'World Class Service',
      description:
        'Experience seamless support, friendly guidance, and unforgettable moments throughout your journey.',
    },
    {
      icon: <FaThumbsUp className="text-white text-xl" />,
      title: 'Best Price Guarantee',
      description:
        'Get the best travel deals with value-packed tours that suit your budget and expectations.',
    },
  ];

  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1618714418503-fab6e24f85ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Soft greenish overlay */}
      <div className="absolute inset-0 bg-green-900/40 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 tracking-wide">
          WHY CHOOSE US
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl p-6 shadow-xl text-center"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-700  rounded-full p-3 shadow-md">
                {card.icon}
              </div>
              <h3 className="mt-6 text-gray-600 font-semibold text-lg">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{card.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-emerald-600 text-sm font-medium hover:underline"
              >
                learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
