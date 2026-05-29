// Single source of truth for the site's chip-links and contact links.
// Each "org" has its own text page at /<slug>; the logo + label render as an
// inline chip wherever it's referenced in prose.

export interface Org {
  slug: string;
  /** label shown inside the chip */
  label: string;
  /** logo file in /public/logos */
  logo: string;
  /** role line shown on the org's own page */
  role: string;
  /** human period, e.g. "2022 – Present" */
  period: string;
  /** one-line summary used in page metadata */
  summary: string;
}

export const orgs: Record<string, Org> = {
  keybank: {
    slug: 'keybank',
    label: 'KeyBank',
    logo: '/logos/keybank.jpg',
    role: 'Senior Frontend Software Engineer',
    period: '2022 – Present',
    summary:
      'Senior engineer at KeyBank: built a greenfield account-opening platform now used by 1,500+ bankers nationwide, now building the bank\'s first internal AI agents.',
  },
  kualia: {
    slug: 'kualia',
    label: 'Kualia',
    logo: '/logos/kualia.jpg',
    role: 'Founder & Engineer',
    period: 'Aug 2023 – Present',
    summary:
      'Founder and sole engineer of Kualia, a budgeting app for iPhone and web that I designed, built, and shipped on my own.',
  },
  'foundations-it': {
    slug: 'foundations-it',
    label: 'Foundations IT',
    logo: '/logos/foundations-it.svg',
    role: 'Software Developer, then Team Lead',
    period: '2018 – 2022',
    summary:
      'Built an e-commerce platform at Foundations IT, then returned to lead a team of 5+ engineers.',
  },
  vanguard: {
    slug: 'vanguard',
    label: 'Vanguard',
    logo: '/logos/vanguard.jpg',
    role: 'Software Developer',
    period: 'Jan – Jul 2021',
    summary:
      'A six-month stint at Vanguard building observability tooling and earning the AWS Cloud Practitioner certification.',
  },
  usf: {
    slug: 'usf',
    label: 'USF',
    logo: '/logos/usf.jpg',
    role: 'B.S. Computer Science',
    period: 'Graduated Fall 2020',
    summary:
      'Studied computer science at the University of South Florida, graduating with a 3.5 GPA.',
  },
};

// Featured Threads posts, rendered as official Threads embeds on the home page.
// These are just the clean post permalinks (tracking params stripped); Meta's
// embed.js hydrates each one into a full post card client-side. To swap a
// featured post, replace or reorder the URLs below.
export const threadsPosts = [
  'https://www.threads.com/@igoramidzic/post/DWkTwhTlEhQ',
  'https://www.threads.com/@igoramidzic/post/DWSTNtXjtn5',
  'https://www.threads.com/@igoramidzic/post/DWPXiUWlO0W',
  'https://www.threads.com/@igoramidzic/post/DUmTraDjeY_',
  'https://www.threads.com/@igoramidzic/post/DT_WjquFOxV',
  'https://www.threads.com/@igoramidzic/post/DSlKK3HiFmB',
  'https://www.threads.com/@igoramidzic/post/DRQaxizjSfP',
  'https://www.threads.com/@igoramidzic/post/DQrHQrgDVw7',
  'https://www.threads.com/@igoramidzic/post/DQpzM2yiNzg',
  'https://www.threads.com/@igoramidzic/post/DP38QybjZzD',
  'https://www.threads.com/@igoramidzic/post/DPIQotjjdRb',
  'https://www.threads.com/@igoramidzic/post/DN80NLcCvLS',
  'https://www.threads.com/@igoramidzic/post/DNG3qAIPiZb',
  ''
];

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/igoramidzic',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/igor-amidzic',
    icon: 'linkedin',
  },
  {
    name: 'Threads',
    url: 'https://www.threads.com/@igoramidzic',
    icon: 'threads',
  },
];
