'use client';

import { useState } from 'react';
import HomeSection from './components/homeSection';
import CollectivesSection from './components/collectiveSection';
import WhatWeDoSection from './components/whatWeDoSection';
import GetInvolvedSection from './components/getInvoledSection';

export default function Home() {
  // By default, Home (index 0) is open
  const [openIndex, setOpenIndex] = useState(0);

  // Section titles and components
  const sections = [
    { title: 'HOME', content: <HomeSection /> },
    { title: 'COLLECTIVES', content: <CollectivesSection /> },
    { title: 'WHAT_WE_DO', content: <WhatWeDoSection /> },
    { title: 'GET_INVOLVED', content: <GetInvolvedSection /> },
  ];

  // Toggle accordion section
  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      {sections.map((section, idx) => (
        <div
          key={idx}
          onClick={() => handleToggle(idx)}
          className={`
            transition-all duration-500 ease-in-out
            h-screen border-r border-white
            relative flex flex-col
            ${
              openIndex === idx
                ? 'flex-grow bg-black'  // Expanded section takes full space
                : 'flex-none w-16 bg-white' // Collapsed sections stay narrow
            }
          `}
        >
          {/* Title (only show when collapsed) */}
          {openIndex !== idx && (
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90
                         text-black font-bold text-lg tracking-wide
                         transform rotate-180 writing-mode-vertical-lr cursor-pointer"
            >
              {section.title}
            </div>
          )}

          {/* Show content only if this section is open */}
          {openIndex === idx && (
            <div className="p-6 text-white overflow-auto h-full">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
