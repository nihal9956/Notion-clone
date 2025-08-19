'use client'

import Image from "next/image";
import React from "react";

const filters = ['Product', 'Engineering', 'Design', 'IT', 'Marketing', 'Startups'];

// Replace this with your actual roadmap screenshot in public folder
const roadmapImage = '/notion-roadmap.png';

const NotionShowcase: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Section 1: Quote & Headline */}
      <section className="max-w-5xl mx-auto w-full flex flex-col items-center px-2 sm:px-4 py-14 pb-5">
        <blockquote className="text-2xl sm:text-3xl md:text-4xl text-center text-black/80 font-serif font-medium mb-3">
          “Your AI everything app.”
        </blockquote>
        <div className="text-lg font-bold text-center mb-10 text-black/80 font-serif">
          Forbes
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 text-black">
          One space for every team.
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f, i) => (
            <span
              key={f}
              className={`px-4 py-1 rounded-full text-sm font-semibold
                ${i === 0
                  ? 'bg-gray-200 text-gray-800 font-thin'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 transition font-thin'}
              `}
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      <section className="w-[90%] m-auto">
        <div className="max-w-6xl mx-auto w-full bg-blue-50 rounded-2xl  sm:p-6 md:p-10 flex justify-center items-center shadow-sm">
          <div className="w-full p-10">
            <Image
              src={'/onespace.avif'}
              alt="Notion Roadmap"
              width={1600}
              height={900}
              className="rounded-xl w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-3xl">
            <h2 className="text-center text-black font-black">More productivity. Fewer tools.</h2>
             <Image
              src={'/cancel.avif'}
              alt="Notion Roadmap"
              width={800}
              height={800}
              className="rounded-xl w-full h-auto object-contain"
              priority
            />
        </div>
      </section>
    </div>
  );
}

export default NotionShowcase;
