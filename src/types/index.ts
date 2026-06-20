export interface Project {
  id: string
  title: string
  problem?: string
  description: string
  outcome?: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  featured?: boolean
}

export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  current?: boolean
}

export interface Skill {
  name: string
  icon?: string
  category: 'frontend' | 'backend' | 'databases' | 'ai-automation' | 'cloud-devops'
}

export interface NavLink {
  label: string
  href: string
}
