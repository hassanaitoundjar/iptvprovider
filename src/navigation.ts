import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },

    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
    {
      text: 'Download',
      href: '/download',
    },
    {
      text: 'Adult Content',
      href: '/adult-content',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'subscribe ', href: '/pricing', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Site Links',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Contact Us', href: '/contact' },
        { text: 'Privacy', href: '/privacy' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Download', href: '/download' },
        { text: 'Adult Content', href: '/adult-content' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'download',
      links: [
        { text: 'Download App', href: '/download' },
        { text: 'Android', href: '/download#android' },
        { text: 'iOS', href: '/download#ios' },
        { text: 'Windows', href: '/download#windows' },
        { text: 'Mac', href: '/download#mac' },
        { text: 'Firestick', href: '/download#firestick' },
        { text: 'Smart TV', href: '/download#smarttv' },
      ],
    },

    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'whatsapp', icon: 'tabler:brand-whatsapp', href: '#' },
    { ariaLabel: 'telegram', icon: 'tabler:brand-telegram', href: '#' },
    { ariaLabel: 'facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'rss', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © 2024 IPTV Smarters Pro. All rights reserved.
  `,
};
