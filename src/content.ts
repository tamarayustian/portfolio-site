export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  large: boolean;
};

export type ExperienceRole = {
  date: string;
  title: string;
  company: string;
  summary: string;
};

export type WritingPiece = {
  title: string;
  genre: string;
  excerpt: string;
};

export const projectsHeading = 'Selected projects';

export const projects: Project[] = [
  {
    title: 'ClearFlow',
    description: 'A task manager that strips away the noise so teams can focus on the work that matters.',
    tags: ['Product design', 'TypeScript', 'React'],
    image: 'https://picsum.photos/seed/clearflow-app/1200/800',
    large: true,
  },
  {
    title: 'FieldNote',
    description: 'A lightweight journaling app built for people who want their ideas captured, not organized.',
    tags: ['Mobile', 'Swift', 'iOS'],
    image: 'https://picsum.photos/seed/fieldnote-mobile/800/800',
    large: false,
  },
  {
    title: 'Lens & Letter',
    description: 'An editorial site where photography and writing meet, telling stories in both forms.',
    tags: ['React', 'Photography', 'Content'],
    image: 'https://picsum.photos/seed/lensletter-editorial/800/800',
    large: false,
  },
];

export const experienceRoles: ExperienceRole[] = [
  {
    date: '2021 — Present',
    title: 'Senior Software Engineer',
    company: 'Larkline',
    summary: 'Own the platform team and the design system that keeps four products feeling like one.',
  },
  {
    date: '2019 — 2021',
    title: 'Software Engineer',
    company: 'Northbeam',
    summary: 'Built customer-facing web apps with React and TypeScript, working shoulder-to-shoulder with product design.',
  },
  {
    date: '2017 — 2019',
    title: 'Software Engineer',
    company: 'Brightpath',
    summary: 'Shipped an internal tooling suite that cut a weekly reporting chore down to a single button press.',
  },
  {
    date: '2016 — 2017',
    title: 'Frontend Developer (Intern)',
    company: 'Tandem Studio',
    summary: 'Turned static mockups into responsive interfaces, and learned that the last ten percent is the whole job.',
  },
];

export const writing = {
  heading: 'Writing on the side',
  intro:
    'When I am not building software, I write poems and short stories. A smaller corner of who I am, but one I keep close.',
  pieces: [
    {
      title: 'The Space Between Keys',
      genre: 'Poem',
      excerpt: 'You can hear the whole story in the pause before a sentence finds its ending.',
    },
    {
      title: 'Salt and Static',
      genre: 'Short story',
      excerpt: 'A radio host in a coastal town keeps playing the same request from a listener who stopped calling.',
    },
    {
      title: 'First Light',
      genre: 'Poem',
      excerpt: 'Dawn, like good design, arrives on its own. No one has to ask it to come.',
    },
  ] satisfies WritingPiece[],
};

export const contact = {
  heading: 'Let\'s build something clear.',
  description:
    'If you have a product that deserves to be simpler, or a problem that needs a storyteller who codes, I would love to talk.',
  email: 'tamarayustian@gmail.com',
  footer: 'Built with care. Code, photos, and words by me.',
  githubUrl: 'https://github.com/tamarayustian',
};
