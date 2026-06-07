import { skills } from '@/data/skills'
import type { Skill } from '@/types'

const categoryLabels: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  databases: 'Databases & Caching',
  'ai-cloud': 'AI & Cloud',
  tools: 'Tools & DevOps',
  testing: 'Testing & Monitoring',
}

const categoryOrder: Skill['category'][] = ['frontend', 'backend', 'databases', 'ai-cloud', 'tools', 'testing']

export function Skills() {
  const grouped = categoryOrder.reduce(
    (acc, cat) => {
      acc[cat] = skills.filter(s => s.category === cat)
      return acc
    },
    {} as Record<Skill['category'], Skill[]>
  )

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">Skills</h2>
        <p className="mb-10 text-zinc-500 dark:text-zinc-400">
          Technologies I work with day-to-day.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryOrder.map(cat => {
            const items = grouped[cat]
            if (!items?.length) return null
            return (
              <div
                key={cat}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-500">
                  {categoryLabels[cat]}
                </h3>
                <ul className="space-y-2">
                  {items.map(skill => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
