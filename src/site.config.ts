export const site = {
  name: 'Robert Mitchell',
  title: 'Robert Mitchell — AI Marketing Automation & Training',
  description:
    'A team of AI marketing specialists, deployed to your Telegram. Content · Ads · SEO · Email · Analytics. 24/7.',
  url: 'https://robertmitchell.co',

  hero: {
    headline: 'A team of AI marketing specialists, deployed to your Telegram.',
    sub: 'Content · Ads · SEO · Email · Analytics. Each with its own expertise, memory, and access to your tools. 24/7 — for less than a junior hire.',
    ctaLabel: 'Save seat',
  },

  live: {
    on: false,
    classTitle: 'Deploying your first Telegram bot team',
    youtubeUrl: 'https://youtube.com/@robertmitchell/live',
  },

  contact: {
    telegram: '@robertmitchell',
    email: 'hi@robertmitchell.co',
    youtube: '/@robertmitchell',
    location: 'London, UK',
  },

  nav: [
    { href: '/', label: 'Index', key: 'home' },
    { href: '/services/', label: 'Services', key: 'services' },
    { href: '/classes/', label: 'Classes', key: 'classes' },
    { href: '/writing/', label: 'Writing', key: 'writing' },
    { href: '/about/', label: 'About', key: 'about' },
    { href: '/contact/', label: 'Contact', key: 'contact' },
  ],
} as const;

export type Site = typeof site;
