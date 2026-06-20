const SERVICES = [
  {
    title: 'E-commerce platforms',
    description: 'Web storefronts and mobile apps sharing one backend — payments, queuing, inventory.',
  },
  {
    title: 'Multi-dashboard SaaS',
    description: 'Role-based dashboards, bulk data ingestion, serverless or containerised backends.',
  },
  {
    title: 'AI-integrated features & automation',
    description: 'LLM-powered features, web scrapers, and data-enrichment pipelines wired into real products.',
  },
  {
    title: 'REST & serverless backends',
    description: 'Scalable APIs on Node.js/Express or FastAPI — auth, queuing, cloud deployment included.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">About</h2>
        <p className="mb-10 text-zinc-500 dark:text-zinc-400">Background and what I do best.</p>

        <div className="mb-14 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          I&apos;m a full-stack developer with 2+ years of production experience building and shipping
          web and mobile applications across the entire stack. I work on both sides — React and
          Next.js on the frontend, Node.js and FastAPI on the backend — and I&apos;m most useful
          when a project needs one person to own a feature from the interface down to the database
          and out to deployment. A lot of my recent work involves wiring AI into real products:
          LLM-powered features, scrapers, and data-enrichment pipelines that do something useful.
          I care about systems that hold up in production — proper auth, queuing, and security, not
          just a working happy path.
        </div>

        {/* What I can build for you */}
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-indigo-500">
          What I can build for you
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {SERVICES.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-1 font-medium text-zinc-900 dark:text-white">{title}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
