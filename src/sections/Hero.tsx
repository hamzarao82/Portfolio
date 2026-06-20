import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiPython, SiPostgresql, SiMongodb, SiDocker,
} from 'react-icons/si'
import { Button } from '@/components/ui/Button'

// Replace with your Upwork profile URL when ready
const TODO_UPWORK_URL = '#upwork'

const TECH_STACK = [
  { Icon: SiTypescript, color: '#3178C6', label: 'TypeScript' },
  { Icon: SiReact,      color: '#61DAFB', label: 'React' },
  { Icon: SiNextdotjs,  color: '',        label: 'Next.js' },
  { Icon: SiNodedotjs,  color: '#339933', label: 'Node.js' },
  { Icon: SiPython,     color: '#3776AB', label: 'Python' },
  { Icon: SiPostgresql, color: '#4169E1', label: 'PostgreSQL' },
  { Icon: SiMongodb,    color: '#47A248', label: 'MongoDB' },
  { Icon: SiDocker,     color: '#2496ED', label: 'Docker' },
]

export function Hero() {
  return (
    <section className="flex min-h-screen items-center pt-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:flex-row lg:justify-between">
        {/* Left — text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status chips */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Available for freelance projects
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              Remote · Onsite
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl xl:text-6xl">
            Hamza Sarwar —{' '}
            <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-lg mx-auto lg:mx-0">
            I build and ship production web and mobile applications end to end — React &amp; Next.js
            frontends, Node.js and FastAPI backends, and AI-powered features on top. I own projects
            from architecture to deployment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button as="a" href="#projects" variant="primary">
              View Projects
            </Button>
            <Button
              as="a"
              href={TODO_UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Hire me ↗
            </Button>
            <Button
              as="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              Resume &darr;
            </Button>
          </div>

          {/* Upwork availability line */}
          <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500 text-center lg:text-left">
            Looking to hire?{' '}
            <a
              href={TODO_UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 underline-offset-2 hover:underline"
            >
              Find me on Upwork ↗
            </a>
          </p>

          {/* Tech stack icons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="mr-1 text-xs font-medium text-zinc-400 dark:text-zinc-500">Stack:</span>
            {TECH_STACK.map(({ Icon, color, label }) => (
              <div
                key={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-700 dark:hover:bg-indigo-500/10"
              >
                <Icon
                  size={18}
                  className={!color ? 'text-zinc-900 dark:text-white' : undefined}
                  style={color ? { color } : undefined}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div className="shrink-0">
          <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-500 opacity-20 blur-2xl" />
            <img
              src="/profile photo.png"
              alt="Hamza Sarwar"
              className="relative h-full w-full rounded-2xl object-cover shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-800"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
