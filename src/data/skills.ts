import type { Skill } from '@/types'

export const skills: Skill[] = [
  // Frontend
  { name: 'React',        category: 'frontend' },
  { name: 'Next.js',      category: 'frontend' },
  { name: 'React Native', category: 'frontend' },
  { name: 'TypeScript',   category: 'frontend' },
  { name: 'TailwindCSS',  category: 'frontend' },
  // Backend
  { name: 'Node.js / Express', category: 'backend' },
  { name: 'FastAPI',           category: 'backend' },
  { name: 'REST APIs',         category: 'backend' },
  { name: 'WebSockets',        category: 'backend' },
  { name: 'JWT / RBAC',        category: 'backend' },
  // Databases & Caching
  { name: 'PostgreSQL', category: 'databases' },
  { name: 'MySQL',      category: 'databases' },
  { name: 'MongoDB',    category: 'databases' },
  { name: 'Firebase',   category: 'databases' },
  { name: 'Redis',      category: 'databases' },
  // AI & Automation
  { name: 'OpenAI',     category: 'ai-automation' },
  { name: 'Claude',     category: 'ai-automation' },
  { name: 'Playwright', category: 'ai-automation' },
  // Cloud & DevOps
  { name: 'AWS Lambda',  category: 'cloud-devops' },
  { name: 'DynamoDB',    category: 'cloud-devops' },
  { name: 'AWS Amplify', category: 'cloud-devops' },
  { name: 'Vercel',      category: 'cloud-devops' },
  { name: 'Railway',     category: 'cloud-devops' },
  { name: 'CI/CD',       category: 'cloud-devops' },
]
