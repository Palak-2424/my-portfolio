import { Icons } from '@/components/icons';

export const links = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Blog', hash: '#blog' },
  { name: 'Certifications', hash: '#certifications' },
  { name: 'Publications', hash: '#publications' },
  { name: 'Contact', hash: '#contact' },
] as const;

export const projectsData = [
  {
    image: '/images/soc-home-lab.png', // You can update this with your own image
    title: 'SOC Home Lab (UTM-based)',
    description:
      'Built a virtual SOC environment using UTM virtual machines. Integrated Suricata IDS and Splunk SIEM for real-time attack detection and alert correlation.',
    technologies: ['Suricata', 'Splunk', 'UTM', 'Linux', 'Cybersecurity'],
    links: {
      preview: 'https://github.com/Palak-2424/SOC-Home-Lab-UTM', // No live preview, so GitHub as fallback
      github: 'https://github.com/Palak-2424/SOC-Home-Lab-UTM',
      githubApi: 'https://api.github.com/repos/Palak-2424/SOC-Home-Lab-UTM',
    },
  },
  {
    image: '/images/suricata-dashboard.png',
    title: 'Suricata + Splunk SOC Dashboard',
    description:
      'Created a custom SOC dashboard to visualize and analyze IDS alerts from Suricata using Splunk. Simulated Nmap scans and detected events with custom rules.',
    technologies: ['Splunk', 'Suricata', 'Dashboards', 'IDS', 'SIEM'],
    links: {
      preview: 'https://github.com/Palak-2424/suricata-splunk-soc-lab',
      github: 'https://github.com/Palak-2424/suricata-splunk-soc-lab',
      githubApi:
        'https://api.github.com/repos/Palak-2424/suricata-splunk-soc-lab',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Teaching Assistant, CS5700/CS4700 Fundamentals of Networking',
    company: 'Northeastern University',
    description:
      'Selected as TA under Professor Alden Jackson. Assisted students with lab exercises, graded assignments, and helped students in understanding core networking concepts.',
    period: 'May 2025 – Present',
    technologies: ['Networking Fundamentals', 'Instruction', 'Lab Assistance'],
  },
  {
    title: 'Operational Lead',
    company: 'Bitosa Global, New Delhi, India',
    description:
      'Organized alumni networking events, boosting engagement by 30%. Trained team members on cybersecurity best practices, such as secure file sharing and phishing detection. Coordinated with diverse teams to achieve organizational goals, strengthening leadership and communication skills.',
    period: 'April 2023 – May 2024',
    technologies: [
      'Alumni Engagement',
      'Phishing Detection',
      'Team Leadership',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
