const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '30+', label: 'Technologies' },
  { value: '2',  label: 'Companies' },
]

export function Stats() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-10 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
        {STATS.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {value}
              </span>
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
