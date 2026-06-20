import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: '0',
    company: '[New Company — update me]',
    role: '[Your Role — update me]',
    duration: '[Month Year] – Present',
    location: '[Location — update me]',
    current: true,
    description: [
      '[Outcome-focused bullet 1 — describe what you built or improved and the result]',
      '[Outcome-focused bullet 2 — describe what you built or improved and the result]',
    ],
    technologies: ['[Tech 1]', '[Tech 2]', '[Tech 3]'],
  },
  {
    id: '1',
    company: 'Devisnor',
    role: 'Mid-Level Full Stack Developer',
    duration: 'December 2025 – [End Date]',
    location: 'Uzbekistan (Remote)',
    current: false,
    description: [
      'Led end-to-end development of three production platforms (Ghar Bazaar, DealerFlow, Edere) — independently owning architecture, implementation, and deployment for each.',
      'Integrated LLM APIs (Claude, OpenAI) and built a Playwright-based scraping pipeline with a Redis async queue for automated data extraction and enrichment at scale.',
      'Owned full security hardening and cloud deployment across all projects: HTTPS/SSL, CORS, Helmet.js, rate limiting — deployed on AWS Amplify, Railway, and Vercel with CI/CD.',
    ],
    technologies: ['Next.js', 'Node.js', 'FastAPI', 'Redis', 'AWS Lambda', 'Claude API', 'Playwright'],
  },
  {
    id: '2',
    company: 'RF Technologies',
    role: 'Junior Full Stack Developer',
    duration: 'May 2024 – November 2025',
    location: 'Islamabad, Pakistan',
    description: [
      'Engineered full-stack features end-to-end — scoping requirements, building React frontends, Node.js/Express backends, and MySQL schemas, then shipping to production.',
      'Implemented JWT-based auth with RBAC and integrated third-party services (Cloudinary, Supabase, Firebase) for media management, real-time data, and scalable storage.',
    ],
    technologies: ['React.js', 'Node.js', 'MySQL', 'JWT', 'RBAC', 'Cloudinary', 'Supabase'],
  },
]
