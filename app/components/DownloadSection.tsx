'use client'

import Image from 'next/image';
import React from 'react';

const DownloadSection: React.FC = () => (
  <section className="w-full bg-white py-8 px-2">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
      <div className="bg-[#f7f7f5] px-6 pr-0 py-6 pb-0 rounded-2xl shadow-sm  flex flex-col gap-5 min-w-0">
        <div className="flex flex-col items-start">
          <span>
            <Image src={'/notion.png'} alt='logo' width={50} height={50}/>
          </span>
          <span className="text-lg sm:text-2xl font-extrabold text-gray-900 mt-3">Get started on Notion</span>
        <div className="mb-2 text-gray-600 font-medium text-sm sm:text-base ">Your AI workspace.</div>
        <a
          href="#"
          className="w-50 flex items-center  bg-blue-600 text-white font-semibold rounded-lg px-4 py-1 text-sm sm:text-base shadow hover:bg-blue-700 transition mb-2"
        >
          <span className="inline-block align-middle mr-1">
            <svg className="inline-block mb-0.5" width="18" height="18" fill="currentColor" viewBox="0 0 18 18"><path d="M14.965 9.709c-.014-2.28 1.86-3.368 1.943-3.426-1.063-1.557-2.719-1.774-3.309-1.795-1.407-.142-2.745.827-3.457.827-.715 0-1.812-.81-2.985-.788-1.539.023-2.963.892-3.757 2.268-1.599 2.77-.408 6.86 1.142 9.099.76 1.091 1.662 2.313 2.853 2.27 1.151-.045 1.582-.728 2.967-.728 1.386 0 1.764.728 2.977.71 1.236-.019 2.013-1.107 2.767-2.203.569-.816.802-1.244 1.256-2.18-3.304-1.26-3.793-4.626-.747-6.244Z"/><path d="M11.925 2.97C12.52 2.205 12.963 1.127 12.832.027c-1.047.042-2.3.698-3.046 1.578-.671.792-1.263 2.12-1.04 3.36 1.181.093 2.392-.623 3.179-1.634Z"/></svg>
          </span>
          Download for Mac
        </a>
        </div>
        {/* Main image */}
        <div className="rounded-xl overflow-hidden mt-2">
          <Image
            src="/design.avif"
            alt="Feature Art"
            width={600}
            height={120}
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    
      <div className="flex-1 flex-col gap-6 w-full lg:w-[330px]">
        <div className="flex mb-5 bg-[#f7f7f5] rounded-2xl shadow-sm justify-between px-6 py-6 pb-0 pr-0 min-w-0">
          <div className="flex flex-col gap-2 items-start mb-1"> 
            <svg width="30" height="30" fill="none" viewBox="0 0 36 36"><rect width="36" height="36" rx="9" fill="#fff"/><path d="M7.5 10.5h21v15h-21v-15zm0 0l10.5 8.25L28.5 10.5" stroke="#222" strokeWidth="1.5"/></svg>
            <span className="text-2xl font-extrabold text-gray-900">Notion Mail</span>
             <div className="text-gray-700 text-sm">The inbox that thinks like you.</div>
           <a
            href="#"
            className="inline-block mt-3 bg-white text-gray-900 rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-300 transition"
          >
            Download
          </a>
          </div>
          <div className="rounded-lg overflow-hidden mt-6">
            <Image
              src="/mail.avif"
              alt="Mail Preview"
              width={260}
              height={260}
              className="w-full object-cover"
            />
          </div>
        </div>
       
        <div className="flex bg-[#f7f7f5] rounded-2xl shadow-sm px-6 pr-0  py-6 pb-0 justify-between min-w-0">
          <div className="flex flex-col gap-2 items-start mb-1">
            <svg width="30" height="30" fill="none" viewBox="0 0 36 36"><rect width="36" height="36" rx="9" fill="#fff"/><rect x="8" y="14" width="20" height="14" rx="3" fill="#fff" stroke="#222" strokeWidth="1.5"/><rect x="12" y="19" width="4" height="4" rx="1" fill="#2563eb"/><rect x="20" y="19" width="4" height="4" rx="1" fill="#f59e42"/></svg>
            <span className="text-2xl font-extrabold text-gray-900">Notion Calendar</span>
          <div className="text-gray-700 text-sm">Time and work, together.</div>
           <a
            href="#"
            className="inline-block mt-3 bg-white text-gray-900 rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-300 transition"
          >
            Download
          </a>
          </div>
          <div className="rounded-lg overflow-hidden mt-6">
            <Image
              src="/calendar.avif"
              alt="Calendar Preview"
              width={260}
              height={60}
              className="w-full object-cover"
            />
          </div>
         
        </div>
      </div>
    </div>
  </section>
);

export default DownloadSection;
