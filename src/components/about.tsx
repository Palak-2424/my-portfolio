// src/components/About.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* Section Heading */}
      <SectionHeading heading="About Me" />

      {/* Centered Photo */}
      <div className="relative mb-8 mt-4 h-96 w-80 flex-none overflow-hidden rounded-2xl border-2 border-gray-300">
        <Image
          src="/palak.jpg"
          alt="Palak Gupta"
          fill
          className="object-cover"
        />
      </div>

      {/* About text */}
      <div className="max-w-2xl space-y-6 px-4 text-center leading-7">
        <p>
          I’m <strong>Palak Gupta</strong>, a Cybersecurity graduate student at
          Northeastern University with a <strong>3.83 GPA</strong>. My expertise
          includes <strong>SOC operations</strong>,{' '}
          <strong>threat detection</strong>, <strong>digital forensics</strong>,
          and <strong>risk management</strong>. I’m proficient in{' '}
          <strong>Python, Bash, and SQL</strong>, and hands-on with tools like{' '}
          <strong>Kali Linux, Wireshark, Docker,</strong> and{' '}
          <strong>Splunk</strong>. I hold the{' '}
          <strong>ISC2 Certified in Cybersecurity (CC)</strong> and the{' '}
          <strong>Google Cybersecurity Certificate</strong>, with a strong
          foundation in <strong>NIST</strong> and <strong>ISO 27001</strong>{' '}
          standards.
        </p>

        <p>
          I’ve built virtual SOC environments, automated security workflows, and
          analyzed attack patterns to strengthen incident response. As an active{' '}
          <strong>WiCyS</strong> member, I stay engaged with the latest in cyber
          defense. Outside of tech, I volunteer with{' '}
          <strong>Community Servings</strong> and enjoy <strong>cooking</strong>{' '}
          and <strong>dancing</strong>—passions that bring balance and energy to
          my work. I’m eager for opportunities where I can apply my skills,
          grow, and contribute meaningfully. Let’s connect!
        </p>
      </div>

      {/* Skills */}
      <Skills />
    </motion.section>
  );
};
