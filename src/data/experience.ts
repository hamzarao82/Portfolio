import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Devisnor',
    role: 'Mid-Level Full Stack Developer',
    duration: 'December 2025 – Present',
    location: 'Uzbekistan (Remote)',
    current: true,
    description: [
      'Led end-to-end development of three production platforms — Ghar Bazaar (e-commerce), DealerFlow (multi-dashboard SaaS), and Edere (restaurant intelligence) — independently owning architecture, implementation, and deployment.',
      'Designed polyglot backend systems combining Node.js/Express and FastAPI microservices with Redis queuing, async job processing, and AWS Lambda serverless functions.',
      'Integrated multiple LLM APIs (Claude, OpenAI) and built AI-powered features including Playwright-based web scrapers, product recommendation engines, and automated data enrichment pipelines.',
      'Owned full security hardening and cloud deployment across all projects — HTTPS/SSL, CORS, Helmet.js, rate limiting — deployed on AWS Amplify, Railway, and Vercel with CI/CD pipelines.',
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
      'Engineered production-ready full-stack features end-to-end — from scoping requirements to shipping frontend interfaces, backend REST APIs, and database schemas using React.js, Node.js, and MySQL.',
      'Implemented secure authentication and authorization systems including JWT-based auth flows, role-based access control (RBAC), and API key management.',
      'Integrated third-party APIs and cloud services (Cloudinary, Supabase, Firebase) to support media management, real-time data, and scalable storage.',
      'Contributed to agile sprints: feature planning, code reviews, debugging, and post-release iteration, consistently delivering features on schedule.',
    ],
    technologies: ['React.js', 'Node.js', 'MySQL', 'JWT', 'RBAC', 'Cloudinary', 'Supabase'],
  },
]
