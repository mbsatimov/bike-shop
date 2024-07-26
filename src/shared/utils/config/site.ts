export type SiteConfig = typeof siteConfig;

const links = {
  x: 'https://twitter.com/',
  repo: 'https://github.com/mbsatimov/bike-shop',
  github: 'https://github.com/mbsatimov',
  telegram: 'https://t.me/mbsatimov',
  instagram: 'https://instagram.com/mbsatimov',
};

export const siteConfig = {
  name: 'Bikeshop',
  description:
    'An open source e-commerce bike-shop build with everything new in Next.js.',
  url: 'https://bike-shop.mbsatimov.com',
  ogImage: 'https://bike-shop.mbsatimov.com/opengraph-image.png',
  links,
  footerNav: [
    {
      title: 'Credits',
      items: [
        {
          title: 'shadcn/ui',
          href: 'https://ui.shadcn.com',
          external: true,
        },
      ],
    },
    {
      title: 'Help',
      items: [
        {
          title: 'About',
          href: '/about',
          external: false,
        },
        {
          title: 'Contact',
          href: '/contact',
          external: false,
        },
        {
          title: 'Terms',
          href: '/terms',
          external: false,
        },
        {
          title: 'Privacy',
          href: '/privacy',
          external: false,
        },
      ],
    },
    {
      title: 'Social',
      items: [
        {
          title: 'X',
          href: links.x,
          external: true,
        },
        {
          title: 'GitHub',
          href: links.github,
          external: true,
        },
        {
          title: 'Telegram',
          href: links.telegram,
          external: true,
        },
        {
          title: 'Instagram',
          href: links.instagram,
          external: true,
        },
      ],
    },
  ],
};
