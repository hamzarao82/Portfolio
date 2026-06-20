import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Edere',
    problem: 'Building a restaurant intelligence platform meant heavy manual data entry and no clean multi-tenant structure.',
    description:
      'Polyglot Node.js + FastAPI platform with React admin and restaurant portals, a native iOS app, and a Playwright scraper feeding Claude/OpenAI to extract, enrich, and classify restaurant data automatically.',
    outcome: 'Automated pipeline eliminated manual data entry; Redis queue handles async scraping + AI; Sequelize multi-tenant modeling keeps tenants cleanly separated.',
    tags: ['Node.js', 'FastAPI', 'React', 'iOS', 'Playwright', 'Claude/OpenAI', 'Redis', 'Sequelize'],
    featured: true,
  },
  {
    id: '2',
    title: 'Ghar Bazaar',
    problem: 'Selling on web and mobile usually means two separate backends and duplicated business logic.',
    description:
      'Next.js storefront and React Native app sharing one Node.js/Express backend, Stripe payments, and Redis-backed async order queuing — with LLM-powered product recommendations on top.',
    outcome: 'One backend serves both platforms; the API stays responsive under load; AI recommendations personalize discovery without manual curation.',
    tags: ['Next.js', 'React Native', 'Node.js/Express', 'Stripe', 'Redis', 'LLM APIs'],
    featured: true,
  },
  {
    id: '3',
    title: 'DealerFlow',
    problem: 'Dealers needed role-specific dashboards and bulk data ingestion without the overhead of managing servers.',
    description:
      'Next.js + FastAPI platform with role-based dashboards and SheetJS-powered spreadsheet parsing, running on AWS Lambda + DynamoDB with full security hardening (HTTPS/SSL, CORS, rate limiting) from day one.',
    outcome: 'Serverless deployment removed server-management overhead; shipped production-hardened with zero post-launch security incidents.',
    tags: ['Next.js', 'FastAPI', 'AWS Lambda', 'DynamoDB', 'AWS Amplify', 'SheetJS'],
    featured: true,
  },
  {
    id: '4',
    title: 'Campus Navigator',
    problem: 'Navigating large campuses is hard, especially indoors where GPS fails.',
    description:
      'React Native iOS/Android app with real-time tracking via Google Maps SDK and IndoorAtlas, plus role-based admin tools for managing maps and points of interest without a redeployment.',
    outcome: 'Admins update maps and POIs independently; role-based access keeps student and admin views separate.',
    tags: ['React Native', 'Google Maps SDK', 'IndoorAtlas', 'Firebase Auth', 'Firebase Realtime DB'],
    githubUrl: '#',
    featured: false,
  },
  {
    id: '5',
    title: 'Al-Hayat Blue Pottery',
    problem: 'A pottery business needed a fast, easily managed storefront without a heavy CMS dependency.',
    description:
      'Responsive Next.js storefront with dynamic product pages, category filtering, and a custom headless CMS backed by MongoDB Atlas and Cloudinary for asset management.',
    outcome: 'Owners manage the full catalog themselves; fast, reliable releases via Vercel CI/CD with no developer involvement for content updates.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB Atlas', 'Cloudinary', 'Vercel'],
    liveUrl: '#',
    featured: false,
  },
]
