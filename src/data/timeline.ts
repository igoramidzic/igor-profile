export interface TimelineEntry {
  /** short date label shown on the badge */
  date: string;
  /** sort/era marker shown in the file-tree style rail */
  year: string;
  title: string;
  org: string;
  /** logo file in /public/logos, or null to use a text mark */
  logo: string | null;
  /** alt / fallback text mark */
  logoAlt: string;
  blurb: string;
  /** small tags rendered as editor-style chips */
  tags?: string[];
  kind: 'origin' | 'work' | 'education' | 'launch';
}

export const timeline: TimelineEntry[] = [
  {
    date: '2013',
    year: '2013',
    title: 'Wrote my first line of code',
    org: 'Age 16',
    logo: null,
    logoAlt: '{ }',
    blurb:
      'Started programming at sixteen, the spark that turned into a career. What began as curiosity about how software works became the thing I build my life around.',
    tags: ['curiosity', 'self-taught start'],
    kind: 'origin',
  },
  {
    date: '2018 — Jan 2021',
    year: '2018',
    title: 'Software Developer',
    org: 'Foundations IT',
    logo: '/logos/foundations-it.svg',
    logoAlt: 'Foundations IT',
    blurb:
      'Built a customizable website builder, shopping cart, and onboarding flow for an e-commerce platform in Angular & .NET.',
    tags: ['Angular', '.NET'],
    kind: 'work',
  },
  {
    date: 'Fall 2020',
    year: '2020',
    title: 'B.S. Computer Science',
    org: 'University of South Florida',
    logo: '/logos/usf.jpg',
    logoAlt: 'USF',
    blurb:
      'Graduated with a B.S. in Computer Science (GPA 3.5). Coursework across data structures, algorithms, OOP, computer architecture, and robotics, in Java, C, C++, and Python.',
    tags: ['Algorithms', 'Data Structures', 'C / C++ / Java'],
    kind: 'education',
  },
  {
    date: 'Jan — Jul 2021',
    year: '2021',
    title: 'Software Developer',
    org: 'Vanguard',
    logo: '/logos/vanguard.jpg',
    logoAlt: 'Vanguard',
    blurb:
      'A six-month stint between my two runs at Foundations IT. Built Splunk dashboards to visualize the impact of a large modernization effort and integrated Honeycomb logging across projects to sharpen error observability. Earned the AWS Cloud Practitioner certification.',
    tags: ['Splunk', 'Honeycomb', 'AWS'],
    kind: 'work',
  },
  {
    date: 'Jul 2021 — 2022',
    year: '2021',
    title: 'Team Lead',
    org: 'Foundations IT',
    logo: '/logos/foundations-it.svg',
    logoAlt: 'Foundations IT',
    blurb:
      'Returned to Foundations IT and grew into leading a team of 5+, assigning work, running code reviews, and onboarding new engineers.',
    tags: ['team lead', 'code review', 'onboarding'],
    kind: 'work',
  },
  {
    date: '2022 — Present',
    year: '2022',
    title: 'Senior Frontend Software Engineer',
    org: 'KeyBank',
    logo: '/logos/keybank.jpg',
    logoAlt: 'KeyBank',
    blurb:
      'Joined a greenfield Angular project from day one and built core flows: navigation, progress tracker, product selection, cart review, applicant forms. Shipped through pilot to a nationwide rollout for 1,500+ bankers, cutting business-account opening from over an hour to about ten minutes.',
    tags: ['Angular', 'TypeScript', '1,500+ users', '~60min → ~10min'],
    kind: 'work',
  },
  {
    date: 'Aug 2023 — Present',
    year: '2023',
    title: 'Founder & Engineer',
    org: 'Kualia',
    logo: '/logos/kualia.jpg',
    logoAlt: 'Kualia',
    blurb:
      'Founded Kualia, a budgeting app that helps people give every dollar a job and stay in control of their money. I designed, built, and shipped the whole thing myself (the iPhone app, the website, and everything behind the scenes) and grew it to $300 in monthly recurring revenue.',
    tags: ['SwiftUI', 'Angular', 'Convex', '$300 MRR'],
    kind: 'launch',
  },
];

export const skills = {
  Languages: ['TypeScript', 'HTML', 'CSS', 'Dart', 'Swift', 'C++', 'Java'],
  Frameworks: ['Angular 2+', 'Flutter', 'SwiftUI', 'Vitest'],
  Backend: ['Supabase', 'Convex', 'PostgreSQL', 'Plaid', '.NET'],
  Tooling: ['AWS', 'Splunk', 'Honeycomb', 'Git'],
};

export const socials = [
  {
    name: 'GitHub',
    handle: '@igoramidzic',
    url: 'https://github.com/igoramidzic',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    handle: 'in/igor-amidzic',
    url: 'https://www.linkedin.com/in/igor-amidzic/',
    icon: 'linkedin',
  },
  {
    name: 'Threads',
    handle: '@igoramidzic',
    url: 'https://www.threads.com/@igoramidzic',
    icon: 'threads',
  },
];
