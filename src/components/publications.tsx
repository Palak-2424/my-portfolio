'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';

const Publications = () => {
  return (
    <section
      id="publications"
      className="mx-auto my-16 max-w-4xl px-6 text-center"
    >
      <h2 className="mb-10 flex items-center justify-center gap-3 text-3xl font-bold text-white">
        <BookOpen className="size-7 text-blue-400" />
        Publication
      </h2>

      <div className="rounded-2xl border border-gray-700 bg-[#1e293b] p-6 text-left shadow-lg transition-all duration-300 hover:shadow-blue-500/20">
        <h3 className="mb-2 text-2xl font-semibold text-white">
          Building a Stronger Grid: How Blockchain Can Improve Smart Grid
          Resilience
        </h3>
        <p className="mb-4 text-sm italic text-gray-400">
          Published in:{' '}
          <span className="font-medium not-italic">
            IEEE Renewable Energy and Sustainable E-Mobility Conference (RESEM),
            2023
          </span>
        </p>
        <a
          href="https://ieeexplore.ieee.org/document/10236304"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-blue-400 hover:underline"
        >
          📄 View Publication on IEEE Xplore
        </a>
      </div>
    </section>
  );
};

export default Publications;
