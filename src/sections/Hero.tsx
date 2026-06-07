import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center pt-14"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:flex-row lg:justify-between">
        {/* Left — text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 text-sm font-medium tracking-widest text-indigo-500 uppercase">
            Open to opportunities
          </p>
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
