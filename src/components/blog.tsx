'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';

export const Blog = () => {
  return (
    <section id="blog" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        viewport={{ once: true }}
      >
        <SectionHeading heading="My Blogs" />
      </motion.div>

      <div className="mt-6 rounded-lg bg-gray-900 p-6 shadow-lg">
        <h3 className="text-xl font-bold text-white">
          Understanding Buffer Overflows and Memory Corruption
        </h3>
        <p className="mt-2 text-gray-300">
          A beginner-friendly guide to buffer overflows, stack smashing, and how
          attackers exploit memory vulnerabilities using shellcode and GOT
          overwrites.
        </p>
        <a
          href="https://medium.com/@palakg200124/understanding-buffer-overflows-and-memory-corruption-7f28e2764377"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-400 hover:underline"
        >
          Read on Medium →
        </a>
      </div>
    </section>
  );
};
