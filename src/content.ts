export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
  codeUrl?: string;
  status: 'live' | 'soon';
};

export type Month = { month: number; year: number };

export type ExperienceRole = {
  title: string;
  company: string;
  url?: string;
  roleType?: string;
  lane: 'work' | 'volunteer';
  from: Month;
  to: Month | null; // null = Present
  bullets: string[];
  techStack: string[];
};

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function toMonthIndex(d: Month): number {
  return d.year * 12 + (d.month - 1);
}

function formatMonth(d: Month): string {
  return `${MONTH_NAMES[d.month - 1]} ${d.year}`;
}

export function formatRoleDate(role: ExperienceRole): string {
  const from = formatMonth(role.from);
  const to = role.to ? formatMonth(role.to) : 'Present';
  return `${from} — ${to}`;
}

export const timelineStart: Month = { month: 8, year: 2018 };

export function currentMonth(): Month {
  const now = new Date();
  return { month: now.getMonth() + 1, year: now.getFullYear() };
}

export function monthOffset(start: Month, d: Month): number {
  return toMonthIndex(d) - toMonthIndex(start);
}

export function roleStartOffset(role: ExperienceRole): number {
  return monthOffset(timelineStart, role.from);
}

export function roleDurationMonths(role: ExperienceRole, now: Month): number {
  const end = role.to ?? now;
  return toMonthIndex(end) - toMonthIndex(role.from) + 1;
}

export const projectsHeading = 'Selected projects';

export const projects: Project[] = [
  {
    title: 'Arise Asia',
    description: 'The main site for a young-adults movement across Asia. I build its event conferences landing pages and keep the international editions consistent.',
    tags: ['React', 'TailwindCSS', 'Vercel'],
    image: '/projects/arise-asia.png',
    url: 'https://www.ariseasia.org',
    status: 'live',
  },
  {
    title: 'Harvest Mission Community Church of Hong Kong',
    description: 'The Hong Kong church site I build and maintain as a volunteer: services, events, dashboard, and community stories.',
    tags: ['React', 'Vite'],
    image: '/projects/hmcc-hk.png',
    url: 'https://hk.hmccglobal.org',
    codeUrl: 'https://github.com/hmcc-global/hmcchk-web',
    status: 'live',
  },
  {
    title: 'Thank you, CANON LIFE Group Leaders',
    description: 'A place for small group members to send their leaders thank-you messages, dressed as their favorites — Pokemon and IU.',
    tags: ['TypeScript', 'React', 'Vite', 'Vercel'],
    image: '/projects/canon-life.png',
    url: 'https://canon-boom.vercel.app',
    codeUrl: 'https://github.com/tamarayustian/canon-lg-leaders',
    status: 'live',
  },
  {
    title: 'Thank you, Git LIFE Group Leader',
    description: 'Thank-you notes for the Git small group leader, styled as commit messages, with votes and a covenant.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    image: '/projects/git-lg-leader.png',
    url: 'https://git-randall.vercel.app',
    codeUrl: 'https://github.com/tamarayustian/git-lg-leader',
    status: 'live',
  },
  {
    title: 'Stewards',
    description: 'Split expenses with friends without the awkward — log what you paid, then ping a friendly reminder when it\u2019s time to settle up.',
    tags: [],
    url: 'https://stewards-nine.vercel.app',
    status: 'soon',
  },
  {
    title: 'Ripple Out Worship',
    description: "Built by Harvest Mission Community Church to get lyrics and chords where they're needed, and keep the logistics out of the service.",
    tags: ['React', 'TypeScript', 'Express'],
    url: 'https://rippleoutworship.net',
    codeUrl: 'https://github.com/Harvest-Mission-Global/ripple-out-worship',
    status: 'soon',
  },
];

export const experienceRoles: ExperienceRole[] = [
  {
    lane: 'work',
    from: { month: 3, year: 2025 },
    to: { month: 4, year: 2026 },
    title: 'Full-Stack Developer',
    company: 'Digital Capital Group',
    url: 'https://www.dcg.earth',
    bullets: ['Built and maintained full-stack features in Next.js and TypeScript, including a custom RBAC admin dashboard integrated with a third-party permission tool for compliance.', 'Owned cloud infrastructure and deployments across AWS and Cloudflare, managing integrations, cost, and CI/CD pipelines.', 'Shaped features from requirements to data structures with business and engineering teams before writing code, cutting rework in sprint planning.'],
    techStack: ['TypeScript', 'Next.js', 'TailwindCSS', 'Cloudflare', 'AWS', 'PostgreSQL', 'Upstash Redis', 'Railway'],
  },
  {
    lane: 'work',
    from: { month: 5, year: 2024 },
    to: null,
    title: 'Full-Stack Developer',
    company: 'Arise Asia',
    url: 'https://www.ariseasia.org',
    roleType: 'Freelance',
    bullets: ['Ships landing pages for global events in under a week, from build to zero-downtime launch.', 'Turns varied designer mockups into a consistent, reusable component library.', 'Keeps 5+ international sites updated weekly, juggling quick-turn content requests from stakeholders.'],
    techStack: ['JavaScript', 'React', 'TailwindCSS', 'Vercel', 'Railway'],
  },
  {
    lane: 'work',
    from: { month: 10, year: 2024 },
    to: { month: 12, year: 2024 },
    title: 'Full-stack Software Engineer',
    company: 'EXP.IS',
    roleType: 'Contract',
    bullets: ['Built a booking-system web application and other product features with Next.js, Node.js, and Flutter.', 'Worked closely with the team through planning and troubleshooting, bringing independent thinking to problem-solving and keeping an eye on detail.'],
    techStack: ['Next.js', 'Node.js', 'Flutter'],
  },
  {
    lane: 'work',
    from: { month: 2, year: 2024 },
    to: { month: 8, year: 2024 },
    title: 'Assistant Technical Officer',
    company: 'The Hong Kong Polytechnic University',
    roleType: 'Contract',
    bullets: ['Developed an internal system in Python and Next.js for reading and managing financial report documents, with live editing and automatic updates to a central database.', 'Refactored back-end code to improve system efficiency.'],
    techStack: ['Python', 'Next.js', 'Azure'],
  },
  {
    lane: 'work',
    from: { month: 3, year: 2023 },
    to: { month: 10, year: 2023 },
    title: 'Fintech Full-Stack Software Engineer',
    company: 'PremiaLab',
    url: 'https://www.premialab.com',
    roleType: 'Contract',
    bullets: ['Built a portfolio risk-assessment feature in Vue.js, with sensitivity, convexity, and stress-test graphs fed by Python/Flask APIs.', 'Migrated legacy components to Vue.js for cleaner, more maintainable code.', 'Delivered releases on schedule through weekly sprints without missing a deadline.'],
    techStack: ['TypeScript', 'Python', 'Vue.js', 'TailwindCSS', 'Node.js', 'Flask', 'MySQL', 'AWS'],
  },
  {
    lane: 'work',
    from: { month: 8, year: 2020 },
    to: { month: 3, year: 2023 },
    title: 'Back-end Developer',
    company: 'TaoTaro',
    url: 'https://www.taotaro.app',
    bullets: ['Shipped client e-commerce builds end to end, from price-monitoring systems to smart contracts.', 'Wrote clean front-end and back-end code across React, Vue.js, and Express, deployed through AWS and Alibaba Cloud.', 'Prototyped cross-platform sync between web components and WeChat mini programs for the R&D team.'],
    techStack: ['JavaScript', 'Python', 'React', 'Express', 'Node.js', 'MongoDB', 'Vue.js', 'Flask', 'AWS', 'Alibaba Cloud'],
  },
  {
    lane: 'volunteer',
    from: { month: 11, year: 2020 },
    to: { month: 5, year: 2024 },
    title: 'Tech Team Executive',
    company: 'Harvest Mission Community Church of Hong Kong',
    roleType: 'Volunteer',
    bullets: ['Led cross-functional project teams of up to 8 through the full development cycle, from gathering requirements to deployment, using Scrum and DevOps practices.', 'Brainstormed and shipped features that improved internal systems and removed pain points.', 'Mentored junior developers through consistent PR reviews and feedback to build critical thinking.'],
    techStack: ['React', 'Sails.js', 'DigitalOcean', 'Flutter'],
  },
  {
    lane: 'volunteer',
    from: { month: 6, year: 2024 },
    to: null,
    title: 'FILM Team Member',
    company: 'Harvest Mission Community Church of Hong Kong',
    roleType: 'Volunteer',
    bullets: ['Produce and edit film and media for the church, tying the same storytelling instinct to events and services.'],
    techStack: ['Photography', 'Adobe Premiere Pro'],
  },
  {
    lane: 'volunteer',
    from: { month: 8, year: 2018 },
    to: { month: 10, year: 2020 },
    title: 'Multimedia Team Member',
    company: 'Harvest Mission Community Church of Hong Kong',
    roleType: 'Volunteer',
    bullets: ['Shot and edited video, recorded audio, and photographed events to document and promote them.', 'Spearheaded a social media initiative for an on-campus student organization to raise its visibility.'],
    techStack: ['Photography', 'Adobe Premiere Pro', 'Social Media'],
  },
];

export const writing = {
  heading: 'Writing on the side',
  intro: 'When I am not building software, I write poems and short stories. A smaller corner of who I am, but one I keep close.',
};

export const contact = {
  heading: "Let's build something worth using.",
  description: 'A product that could be simpler, or a problem that needs someone who codes and writes. I would love to talk.',
  email: 'tamarayustian@gmail.com',
  footer: 'A little bit of everything, by me.',
  githubUrl: 'https://github.com/tamarayustian',
  linkedinUrl: 'https://www.linkedin.com/in/tamara-yustian',
};
