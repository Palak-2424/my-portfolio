// src/components/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
} from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Section title + subtitle */}
      <SectionHeading
        heading="Get In Touch"
        content="I am open to cybersecurity opportunities and would love to connect."
      />

      {/* Static contact info */}
      <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:justify-between">
        {/* Left column: Email & Phone */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-[#334155] p-3">
              <MailIcon className="size-5 text-green-400" />
            </div>
            <a
              href="mailto:your.email@domain.com"
              className="text-sm text-black hover:underline dark:text-white"
            >
              gupta.palak2@northeastern.edu
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-[#334155] p-3">
              <PhoneIcon className="size-5 text-green-400" />
            </div>
            <a
              href="tel:+1234567890"
              className="text-sm text-black hover:underline dark:text-white"
            >
              +1 (617) 719-0100
            </a>
          </div>
        </div>

        {/* Right column: Social Media */}
        <div className="space-y-4">
          <p className="font-medium text-black dark:text-white">Social Media</p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Palak-2424"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full bg-[#334155] p-3 transition hover:bg-gray-600">
                <GithubIcon className="size-5 text-gray-200" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/palakgupta2405/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full bg-[#334155] p-3 transition hover:bg-gray-600">
                <LinkedinIcon className="size-5 text-gray-200" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
