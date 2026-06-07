import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Ghar Bazaar',
    description:
      'Full-stack e-commerce platform with a Next.js web storefront and React Native mobile app sharing a unified Node.js/Express backend. Features Stripe payments, Redis-backed order queuing, and AI-powered product recommendations via LLM APIs.',
    tags: ['Next.js', 'React Native', 'Node.js', 'Stripe', 'Redis', 'LLM APIs'],
    featured: true,
  },
  {
    id: '2',
    title: 'DealerFlow',
    description:
      'Multi-dashboard SaaS platform with role-based dashboards and SheetJS-powered spreadsheet parsing for bulk data ingestion. Serverless backend on AWS Lambda with DynamoDB, deployed on AWS Amplify with full HTTPS/SSL hardening.',
    tags: ['Next.js', 'FastAPI', 'AWS Lambda', 'DynamoDB', 'AWS Amplify', 'SheetJS'],
    featured: true,
  },
  {
    id: '3',
    title: 'Edere',
    description:
      'Restaurant intelligence platform with a polyglot backend (Node.js + FastAPI), React.js admin portal, and native iOS app. Built a Playwright scraper integrated with Claude and OpenAI to auto-extract and classify restaurant data, with a Redis LPush pipeline for async AI tasks.',
    tags: ['Node.js', 'FastAPI', 'React.js', 'Playwright', 'Claude API', 'Redis', 'Railway'],
    featured: true,
  },
  {
    id: '4',
    title: 'Campus Navigator',
    description:
      'Cross-platform indoor/outdoor navigation app for iOS & Android using React Native, Google Maps SDK, and IndoorAtlas for real-time campus tracking. Role-based map management backed by Firebase Auth and Realtime Database.',
    tags: ['React Native', 'Google Maps SDK', 'IndoorAtlas', 'Firebase'],
    githubUrl: '#',
    featured: false,
  },
  {
    id: '5',
    title: 'Al-Hayat Blue Pottery',
    description:
      'Responsive e-commerce storefront with dynamic product pages, category filtering, and a custom headless CMS backed by MongoDB Atlas and Cloudinary. Deployed on Vercel with CI/CD pipelines.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB Atlas', 'Cloudinary', 'Vercel'],
    liveUrl: '#',
    featured: false,
  },
]
