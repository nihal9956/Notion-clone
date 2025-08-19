'use client'

import React, { useState, useEffect } from 'react';
import useCustomAnalytics from '../hooks/customAnalytics';


const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuData, setMenuData] = useState({ notionDropdown: [], navLinks: [] });
  useCustomAnalytics();
  useEffect(() => {
    async function fetchMenuData() {
      try {
        const res = await fetch('/api/menu');
        if (!res.ok) throw new Error('Failed to fetch menu data');
        const data = await res.json();
        setMenuData({
          notionDropdown: data.notionDropdown || [],
          navLinks: data.navLinks || [],
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchMenuData();
  }, []);

  if (!menuData.navLinks.length) {
    return null;
  }

  return (
    <header className="w-full bg-white flex flex-col z-50">
      {/* Language Banner */}
      <div className="w-full bg-[#f6f5f4] py-3 text-center text-sm text-gray-600">
        See this page in your preferred language.
        <a href="#" className="font-medium text-black hover:underline ml-1">
          Change to English (UK) →
        </a>
      </div>

      {/* Main Navigation */}
      <nav className="w-full flex items-center justify-between px-2 md:px-12 h-16 relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/notion.png" alt="Notion Logo" className="w-8 h-8" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2 lg:gap-6 items-center relative">
          <div className="relative" tabIndex={0}>
            <button
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              className="flex items-center gap-1 px-3 py-2 font-medium text-gray-900 hover:bg-gray-100 rounded transition"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-controls="notion-dropdown"
            >
              Notion
              <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                <path
                  d="M3 5l3 3 3-3"
                  stroke="#222"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div
                id="notion-dropdown"
                className="fixed left-0 top-[95px] w-screen z-40 bg-white border-b border-gray-200 animate-fadeIn transition-all duration-300"
                style={{ minHeight: 240 }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="max-w-6xl mx-auto flex gap-8 py-8 px-4 lg:px-0">
                  <div className="flex-1 flex gap-8">
                    {menuData.notionDropdown.map(({ title, items }, idx) => (
                      <div key={idx}>
                        {title && (
                          <div className="text-xs uppercase text-gray-400 mb-2">
                            {title}
                          </div>
                        )}
                        {/* @ts-ignore */}
                        {items?.map((item) => (
                          <div className="mb-3" key={item.label} data-analytics-label={item.label}>
                            <div className="text-[15px] font-semibold text-black">
                              {item.label}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.desc}
                            </div>
                            {item.badge && (
                              <span className="ml-2 inline-block bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* Right: Download app box */}
                  <div className="hidden lg:flex flex-col justify-between items-center bg-gray-50 rounded-lg p-4 w-56 h-full border border-gray-100">
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">
                        Try the Notion desktop app for a faster experience
                      </div>
                      <button className="mt-2 mb-4 bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 text-sm transition">
                        Download app
                      </button>
                    </div>
                    <img
                      src="/header-img.avif"
                      alt=""
                      className="w-28 h-20 object-contain"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {menuData.navLinks
            .filter((nav:any) => nav.label !== 'Notion')
            .map((nav, i) => (
              <a key={i} href="#" className="nav-link text-gray-900">
                 {/* @ts-ignore */}
                {nav.label}
              </a>
            ))}
        </div>

        {/* Right: Actions / Hamburger */}
        <div className="flex gap-2 items-center">
          <a
            href="#"
            className="hidden md:inline text-gray-800 hover:underline font-medium text-sm px-2"
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-3 py-2 rounded-md font-semibold text-sm hover:bg-blue-700 transition"
          >
            Get Notion free
          </a>
          <button
            className="md:hidden ml-2 p-2"
            aria-label="Open Menu"
            onClick={() => setMobileOpen(true)}
          >
            <svg
              width={26}
              height={26}
              fill="none"
              stroke="#222"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <line x1={6} y1={9} x2={20} y2={9} />
              <line x1={6} y1={15} x2={20} y2={15} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white w-[95vw] max-w-xs rounded-2xl shadow-lg flex flex-col relative max-h-[90vh] overflow-y-auto pb-5">
            {/* Close X */}
            <button
              className="absolute right-5 top-1 text-2xl text-gray-700 hover:text-black transition"
              onClick={() => setMobileOpen(false)}
              aria-label="Close Menu"
            >
              ×
            </button>
            <div className="flex flex-row justify-between items-center pt-7 px-7">
              <img src="/notion.png" alt="Notion Logo" className="w-7 h-7" />
              <a
                href="#"
                className="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition"
              >
                Get Notion free
              </a>
            </div>
            <nav className=" text-black flex flex-col gap-2 items-start pt-4 px-7 pb-5">
              <a
                href="#"
                className="font-semibold text-lg py-1 flex items-center gap-2"
              >
                Notion{' '}
                <svg width="16" height="16">
                  <path
                    d="M5 7l3 3 3-3"
                    stroke="#222"
                    strokeWidth="1.3"
                    fill="none"
                  />
                </svg>
              </a>
              <a href="#" className="font-semibold text-lg py-1">
                Mail
              </a>
              <a href="#" className="font-semibold text-lg py-1">
                Calendar
              </a>
              <a href="#" className="font-semibold text-lg py-1">
                AI
              </a>
              <a href="#" className="font-semibold text-lg py-1">
                Enterprise
              </a>
              <a href="#" className="font-semibold text-lg py-1">
                Pricing
              </a>
              <a
                href="#"
                className="font-semibold text-lg py-1 flex items-center gap-2"
              >
                More{' '}
                <svg width="16" height="16">
                  <path
                    d="M5 7l3 3 3-3"
                    stroke="#222"
                    strokeWidth="1.3"
                    fill="none"
                  />
                </svg>
              </a>
            </nav>
            <div className="flex flex-col px-7 w-full gap-2 mt-4">
              <button className="bg-blue-600 text-white rounded-md py-2 w-full font-semibold text-base hover:bg-blue-700 transition">
                Download app
              </button>
              <button className="bg-gray-100 text-blue-600 rounded-md py-2 w-full font-semibold text-base hover:bg-gray-200 transition">
                Log in
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
