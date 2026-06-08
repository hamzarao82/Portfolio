import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiPython, SiPostgresql, SiMongodb, SiDocker,
} from 'react-icons/si'
import { Button } from '@/components/ui/Button'

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
    <section
      id="about"
      className="flex min-h-screen items-center pt-14"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:flex-row lg:justify-between">
        {/* Left — text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status chips */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Open to full-time roles
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              Remote · Onsite
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl xl:text-6xl">
            Hi, I'm{' '}
            <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Hamza Sarwar
            </span>
          </h1>
          <p className="mb-3 text-xl font-medium text-zinc-600 dark:text-zinc-300 sm:text-2xl">
            Full Stack Developer
          </p>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-lg lg:mx-0 mx-auto">
            Full Stack Developer with 2+ years of production experience building web and mobile
            applications across the entire stack. Proficient in React.js, Next.js, Node.js, and
            TypeScript — passionate about scalable architecture and shipping software that works.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button as="a" href="#projects" variant="primary">
              View my work
            </Button>
            <Button as="a" href="#contact" variant="outline">
              Get in touch
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
