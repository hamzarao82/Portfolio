import { education } from '@/data/education'
import { Badge } from '@/components/ui/Badge'

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">Education</h2>
        <p className="mb-10 text-zinc-500 dark:text-zinc-400">
          Academic background.
        </p>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="text-sm text-indigo-500">{education.institution}</p>
            </div>
            <div className="text-right text-xs text-zinc-500 dark:text-zinc-400">
              <p>{education.duration}</p>
              <p>{education.location}</p>
            </div>
          </div>
          <div className="mt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {education.courses.map(course => (
                <Badge key={course}>{course}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
