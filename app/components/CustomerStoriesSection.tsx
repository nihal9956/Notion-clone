'use client'

import Image from "next/image";
import React from "react";
import MarqueeStats from "./MarqueStats";
import MarqueeStatRow from "./MarqueStats";

const customerStories = [
    {
        logo: "/openai-logo.avif",
        name: "OpenAI",
        quote: `There’s power in a single platform where you can do all your work. Notion is that single place.`,
        link: "#",
        video: "/video-img.avif",
    },
];

const storySummaries = [
    {
        icon: "/toyota.avif",
        title: "TOYOTA",
        text: "Streamlined workflows to reduce timelines by 3x.",
        link: "#"
    },
    {
        icon: "/ramp.avif",
        title: "ramp ↗",
        text: "With Notion, every person at Ramp has an AI assistant.",
        link: "#"
    },
    {
        icon: "/vercel.svg",
        title: "▲Vercel",
        text: "Notion understands that you can solve a lot of problems with one tool.",
        link: "#"
    },
    {
        icon: "/match.avif",
        title: "MatchGroup",
        text: "Notion has been the most powerful and impactful way to streamline our workflow.",
        link: "#"
    },
    {
        icon: "/deel.avif",
        title: "deel.",
        text: "Someone could join Deel and onboard themselves without ever speaking to anybody.",
        link: "#"
    },
    {
        icon: "/planful.avif",
        title: "planful",
        text: "From six apps to one: Scaling faster with all teams running on Notion AI.",
        link: "#"
    },
];

const CustomerStoriesSection: React.FC = () => (
    <section className="w-full  py-10 px-2">
        <h2 className="text-black ml-[11%] mb-3">Customer stories</h2>
        <div className="max-w-6xl mx-auto bg-[#f6f5f4] rounded-2xl shadow-sm p-4 sm:p-8 flex flex-col">
            {/* Featured story */}
            <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">
                <div className="flex-1">
                    <div className="font-bold text-xl sm:text-2xl text-black mb-2">OpenAI</div>
                    <blockquote className="font-serif text-lg sm:text-2xl md:text-3xl text-black/90">
                        “There’s power in a single platform <br /> where you can do all your work.<br /> Notion is that single place.”
                    </blockquote>
                    <a
                        href="#"
                        className="mt-4 inline-block text-sm text-gray-600 hover:underline"
                    >
                        Read the full story →
                    </a>
                </div>
                <div className="flex-none w-full max-w-xs mx-auto md:mx-0 relative rounded-xl overflow-hidden aspect-video">
                    <Image
                        src="/video-img.avif"
                        alt="OpenAI Customer Testimonial"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                        priority
                    />
                    {/* Play button overlay */}
                    <span className="absolute top-25 left-60 inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white/90" fill="currentColor" viewBox="0 0 48 48">
                            <circle cx="24" cy="24" r="22" fill="#000" fillOpacity="0.45" />
                            <polygon points="20,16 34,24 20,32" fill="#fff" />
                        </svg>
                    </span>
                </div>
            </div>

            {/* Story summaries grid */}
            <div className="border-t border-gray-200 my-2" />
            <div className="relative w-full">

                <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-gray-200" style={{ transform: "translateY(-0.5px)" }} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {storySummaries.map(({ icon, title, text, link }) => (
                        <a
                            key={title}
                            href={link}
                            className="flex flex-col gap-3 items-start  rounded-lg p-3 transition"
                        >
                            <span className="w-20 h-7 flex-shrink-0 mt-1">
                                <Image
                                    src={icon}
                                    alt={title}
                                    width={58}
                                    height={58}
                                    className="object-contain"
                                />
                            </span>
                            <span>
                                <span className="ml-1 text-gray-700">{text} <span aria-hidden>→</span></span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
      
       <MarqueeStatRow />
    </section>
);

export default CustomerStoriesSection;
