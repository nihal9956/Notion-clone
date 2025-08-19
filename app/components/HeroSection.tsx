'use client'
import React, { useRef, useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);  // Mark that we are on client
    }, []);

    useEffect(() => {
        if (!isClient) return; // Wait until client
        const video = videoRef.current;
        if (video) {
            video.play().catch(() => {
                // Handle autoplay policy failures
            });
            video.onended = () => video.pause();
        }
    }, [isClient]);

    return (
        <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 lg:px-8 pt-12 pb-8 lg:pb-20 min-h-[60vh]">
            {/* Left: Text */}
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
                <h1 className="text-6xl font-extrabold leading-none text-black mb-3">
                    The AI workspace<br className="hidden sm:block " /> that works for you.
                </h1>

                <p className="text-lg sm:text-2xl font-medium text-gray-700 mb-8 max-w-2xl">
                    One place where teams find every answer, <br className="hidden sm:block " />
                    automate the busywork, and get projects done.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <a
                        href="#"
                        className="bg-blue-600 text-white px-6 py-3 text-center rounded-md font-semibold text-base hover:bg-blue-700 transition"
                    >
                        Get Notion free
                    </a>
                    <a
                        href="#"
                        className="bg-blue-50 text-blue-700 px-6 py-3 text-center rounded-md font-semibold text-base hover:bg-blue-100 transition sm:ml-2"
                    >
                        Request a demo
                    </a>
                </div>
            </div>
            {/* Right: Video */}
            <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                <div className="w-full max-w-[660px] rounded-xl overflow-hidden  bg-white flex items-center justify-center aspect-[3/2]">
                    {!isClient ? (
                        <div suppressHydrationWarning className="w-full h-auto bg-gray-200" />
                    ) : (
                        <video
                            ref={videoRef}
                            className="w-full h-auto object-contain"
                            autoPlay
                            muted
                            playsInline
                            controls={false}
                            loop={false}
                            preload="auto"
                            tabIndex={-1}
                            aria-hidden
                            style={{ pointerEvents: 'none' }}
                            src="/noseyHero.mp4"
                        />
                    )}

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
