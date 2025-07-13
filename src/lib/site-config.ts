// src/lib/site-config.ts
import { env } from '@/env.mjs';

export const siteConfig = {
  // Browser tab title
  title: 'Palak Gupta | Cybersecurity Student',

  // Meta description (shown in search results, social shares, etc.)
  description:
    "Hello! I'm Palak Gupta, currently pursuing my M.S. in Cybersecurity at Northeastern University. I specialize in risk management, SOC operations, digital forensics, and security best practices.",

  // SEO keywords
  keywords: [
    'Palak Gupta',
    'Cybersecurity',
    'Northeastern University',
    'Risk Management',
    'SOC Operations',
    'Digital Forensics',
    'Python',
    'C++',
    'SQL',
    'Bash Scripting',
    'InfoSec',
    'Network Security',
  ],

  // Your canonical site URL
  url: env.SITE_URL || 'https://your-domain.com',

  // (Optional) Google Search Console verification
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
