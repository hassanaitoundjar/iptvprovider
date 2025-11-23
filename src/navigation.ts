import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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
        { text: 'Adult Content', href: '/adult-content' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'download',
      links: [
        { text: 'android', href: '#' },
        { text: 'ios', href: '#' },
        { text: 'windows', href: '#' },
        { text: 'mac', href: '#' },
        { text: 'linux', href: '#' },
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
    Made by <a class="text-blue-600 underline dark:text-muted" href="#"> Arthelokyo</a> · All rights reserved.
  `,
};
