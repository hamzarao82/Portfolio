import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">Projects</h2>
        <p className="mb-10 text-zinc-500 dark:text-zinc-400">
          A selection of things I've built.
        </p>

        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          {featured.map(project => (
            <div
              key={project.id}
              className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="font-semibold text-zinc-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <span className="shrink-0 rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  Featured
                </span>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <Button as="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="text-xs py-1.5">
                    GitHub
                  </Button>
                )}
                {project.liveUrl && (
                  <Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="text-xs py-1.5">
                    Live &rarr;
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map(project => (
            <div
              key={project.id}
              className="flex flex-col rounded-lg border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-1 font-medium text-zinc-900 dark:text-white">{project.title}</h3>
              <p className="mb-3 flex-1 text-sm text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
