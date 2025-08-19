'use client'
import React, { useState } from "react";

type Card = {
  id: string;
  label: string;
  badge?: string;
  headline: string;
  cardBg: string;
  mainImage: string;
  gif: string;
  alt: string;
};

const featureCards: Card[] = [
  {
    id: "ai-meeting-notes",
    label: "AI Meeting Notes",
    badge: "New",
    headline: "Perfect notes every time.",
    cardBg: "bg-red-50 border border-red-100",
    mainImage: "/sales.avif",
    gif: "/noseyWriting.gif",
    alt: "AI Meeting Notes Card",
  },
  {
    id: "enterprise-search",
    label: "Enterprise Search",
    badge: "New",
    headline: "One search for everything.",
    cardBg: "bg-blue-50 border border-blue-100",
    mainImage: "/search.avif",
    gif: "/noseySearching.gif",
    alt: "Enterprise Search Card",
  },
];

const FeaturesSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <div className="mx-1 flex w-full flex-wrap items-center justify-center gap-5 pb-1 md:pb-2 text-gray-500 text-sm">
        <span className="text-zinc-500 mr-10">Trusted by top teams</span>

        <img src="/openai-logo.avif" alt="OpenAI" className="mr-8 h-20 w-20 object-contain" />
        <img src="/figma-logo.svg" alt="Figma" className="mr-8 h-20 w-20 object-contain" />
        <img src="/volvo-log.avif" alt="Volvo" className="mr-8 h-20 w-20 object-contain" />
        <img src="/ramp.avif" alt="Ramp" className="mr-8 h-20 w-20 object-contain" />
        <img src="/cursor.avif" alt="Cursor" className="mr-8 h-20 w-20 object-contain" />
        <img src="/nvidia.png" alt="NVIDIA" className="mr-8 h-20 w-20 object-contain" />
        <img src="/perplexity.png" alt="Perplexity" className="mr-8 h-20 w-20 object-contain" />
        <img src="/vercel.svg" alt="Vercel" className="mr-8 h-20 w-20 object-contain" />
      </div>
    <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-2 pb-5 w-full">
      {/* Trusted logos row */}

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {featureCards.map((card) => (
          <div
            key={card.id}
            className={`relative rounded-2xl overflow-hidden ${card.cardBg} p-6 pb-0 mb-0 transition-shadow group shadow-sm hover:shadow-xl min-h-[340px] flex flex-col cursor-pointer`}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Badge and label row */}
            <div className="flex items-center mb-2">
              <img
                src="/mic.svg"
                alt=""
                className={`h-5 mr-2 ${card.id === "ai-meeting-notes" ? "inline" : "hidden"}`}
              />
              <img
                src="/search-icon.svg"
                alt=""
                className={`h-5 mr-2 ${card.id === "enterprise-search" ? "inline" : "hidden"}`}
              />
              <span className="font-semibold text-sm text-zinc-600">{card.label}</span>
              {card.badge && (
                <span className="ml-2 text-xs bg-blue-100 text-blue-700 font-medium px-2 rounded-full py-0.5">
                  {card.badge}
                </span>
              )}
            </div>
            {/* Large Headline */}
            <h2 className="text-2xl md:text-2xl font-bold mb-5 text-zinc-900">{card.headline}</h2>
            {/* Main Content Image */}
            <div className="rounded-xl overflow-hidden flex-1 bg-white border border-gray-100 flex items-center justify-center">
              <img
                src={card.mainImage}
                alt={card.alt}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
            {/* Hover GIF - appears bottom right on hover only */}
            <div className="absolute bottom-5 right-5 z-10 transition-opacity duration-300"
              style={{ opacity: hovered === card.id ? 1 : 0 }}
            >
              <img
                src={card.gif}
                alt=""
                className="h-12 w-12 rounded-full border shadow-lg pointer-events-none"
                draggable={false}
              />
            </div>
            {/* Arrow */}
            <div className="flex items-center justify-center absolute top-12 right-6 bg-white rounded-[100%] w-[35px] h-[35px] text-gray-400 text-lg group-hover:text-gray-700 transition">
             <span className="font-black font-900 text-black">→</span> 
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default FeaturesSection;
