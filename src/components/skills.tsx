'use client';

import { motion } from 'framer-motion';
import { Code, Server, ShieldCheck, Wifi, Wrench } from 'lucide-react';

const categories = [
  {
    title: 'Security Compliance',
    icon: <ShieldCheck className="size-6 text-rose-500" />,
    items: ['NIST', 'HIPAA', 'GDPR', 'PCI-DSS', 'COPPA', 'FERPA', 'FTC'],
  },
  {
    title: 'Programming & Automation',
    icon: <Code className="size-6 text-cyan-400" />,
    items: ['Python', 'SQL', 'Bash Scripting', 'PowerShell'],
  },
  {
    title: 'Security Tools',
    icon: <Wrench className="size-6 text-green-400" />,
    items: [
      'Splunk',
      'Wazuh',
      'Security Onion',
      'Suricata',
      'PfSense',
      'VirusTotal',
      'FTK Imager',
      'Autopsy',
      'RegRipper',
    ],
  },
  {
    title: 'Operating Systems',
    icon: <Server className="size-6 text-orange-400" />,
    items: ['Linux (Ubuntu, Kali)', 'Windows (Server & Client)'],
  },
  {
    title: 'Network & Web Security',
    icon: <Wifi className="size-6 text-yellow-400" />,
    items: [
      'TCP/IP',
      'Nmap',
      'Nessus',
      'Wireshark',
      'Burp Suite',
      'Postman',
      'Active Directory Security',
      'MITRE ATT&CK',
    ],
  },
];
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export const Skills = () => (
  <section className="mx-auto my-16 w-full max-w-4xl px-4">
    <h2 className="mb-8 text-center text-3xl font-semibold text-black dark:text-white">
      Technical Skills
    </h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          className="rounded-lg border border-gray-700 bg-[#1f2937] p-6"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={i}
        >
          <div className="mb-4 flex items-center">
            {cat.icon}
            <h3 className="ml-3 text-xl font-semibold text-white">
              {cat.title}
            </h3>
          </div>
          <ul className="list-inside list-disc space-y-2 text-gray-200">
            {cat.items.map((item) => (
              <li key={item} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);
