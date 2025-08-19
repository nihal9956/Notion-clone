'use client'

import Image from "next/image";
import React from "react";

const NotionHeroBento: React.FC = () => {
    return (
        <div>

        <section className="max-w-7xl mx-auto w-full flex flex-col items-center bg-white py-8 px-2 sm:px-3 lg:px-8">
            <div className="
                w-full
                bg-[#fff4e0]
                rounded-2xl
                p-4 sm:p-8
                flex flex-col lg:flex-row
                gap-4
                items-stretch
                relative
                group
                overflow-hidden
            ">
                {/* Left: Heading + Arrow */}
                <div className="flex flex-row justify-between items-start flex-1 lg:flex-col lg:justify-between">
                    <div>
                        <h6 className="text-black text-sm md:text-base font-semibold">Projects</h6>
                        <h2 className="text-black font-bold text-xl sm:text-2xl md:text-3xl md:leading-tight">
                            Keep every plan on track.
                        </h2>
                    </div>
                    <div className="
                        flex items-center justify-center
                        bg-white
                        rounded-full
                        w-9 h-9
                        text-gray-400 text-lg
                        hover:text-gray-700 transition
                        shadow
                        ml-3
                        mt-0 lg:mt-6
                    ">
                        <span className="font-bold text-black text-xl">→</span>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:w-[60%] flex-shrink-0">
                    <Image
                        alt='project-image'
                        src={'/project.avif'}
                        width={1200}
                        height={600}
                        className="
                            rounded-xl
                            w-full
                            h-48 sm:h-64 md:h-80
                            lg:h-full lg:min-h-[222px] lg:max-h-[400px]
                            object-cover
                        "
                        priority
                    />
                </div>

                {/* Hover GIF (Hidden by default, shows on hover) */}
                <div className="
                    absolute left-1/2 
                    -translate-x-1/2 
                    bottom-4 
                    z-20 
                    hidden group-hover:flex
                    justify-center
                    items-center
                ">
                    <img 
                        src="/noseySearching.gif" 
                        alt="Fun GIF"
                        className="w-20 h-20 object-contain pointer-events-none rounded-[100%]"
                    />
                </div>
            </div>
        </section>
        <section className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Left Card */}
        <div className="flex-1 bg-white rounded-2xl p-6 pb-0 shadow-sm flex flex-col min-w-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-block">
                {/* Replace with Notion mail SVG/icon if you have it */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M2.75 5.75A2 2 0 0 1 4.75 3.75h14.5a2 2 0 0 1 2 2v12.5a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2V5.75zm0 0L12 13l9.25-7.25" stroke="#222" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              </span>
              <span className="font-semibold text-gray-800">Notion Mail</span>
              <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700">New</span>
            </div>
            <span className="flex items-center justify-center bg-white shadow hover:bg-gray-200 w-8 h-8 rounded-full text-lg">
              <span className="text-gray-900">&rarr;</span>
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">The inbox that thinks like you.</h2>
          <div className="flex-1 overflow-hidden">
            <Image
              src={'/inbox.avif'}
              alt="Inbox Preview"
              width={560}
              height={260}
              className="rounded-lg w-full h-100 object-contain shadow-sm"
              priority
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 bg-blue-50 rounded-2xl p-6 pb-0 shadow-sm flex flex-col min-w-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {/* Replace with actual icon */}
              <span className="inline-block">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#5D9CF4" strokeWidth="1.5" /></svg>
              </span>
              <span className="font-semibold text-gray-800">Business-in-a-box</span>
            </div>
            <span className="flex items-center justify-center bg-white shadow hover:bg-gray-200 w-8 h-8 rounded-full text-lg">
              <span className="text-gray-900">&rarr;</span>
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Run your entire company.</h2>
          <div className="flex-1 overflow-hidden">
            <Image
              src={'/roadmap.avif'}
              alt="Company HQ"
              width={560}
              height={260}
              className="rounded-lg w-full h-100 object-contain  shadow-sm"
              priority
            />
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default NotionHeroBento;
