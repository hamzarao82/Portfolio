import { experiences } from '@/data/experience'
import { Badge } from '@/components/ui/Badge'

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">Experience</h2>
        <p className="mb-10 text-zinc-500 dark:text-zinc-400">
          Where I've worked and what I've built.
        </p>

        <div className="relative border-l-2 border-zinc-200 pl-8 dark:border-zinc-800">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={i < experiences.length - 1 ? 'mb-10' : ''}
            >
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-indigo-500 bg-white dark:bg-zinc-950" />
              <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{exp.role}</h3>
                    <p className="text-sm text-indigo-500">{exp.company}</p>
                  </div>
                  <div className="text-right text-xs text-zinc-500 dark:text-zinc-400">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="mb-4 mt-3 space-y-1.5">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
