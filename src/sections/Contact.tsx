import { useState } from 'react'
import { Button } from '@/components/ui/Button'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/hamzarao82' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hamzasarwar-full-stack-developer/' },
  { label: 'Email', href: 'mailto:engr.hamzarao@gmail.com' },
]

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Wire up to a form backend (Formspree, EmailJS, etc.)
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">Get in touch</h2>
        <p className="mb-10 text-zinc-500 dark:text-zinc-400">
          Have a project in mind or just want to say hi? My inbox is open.
        </p>

        {status === 'sent' ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400">
            Thanks for reaching out! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Name
              </label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Hi Hamza, I'd love to discuss..."
                className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              />
            </div>
            <Button type="submit" variant="primary" className="w-full justify-center py-3">
              Send message
            </Button>
          </form>
        )}

        <div className="mt-10 flex items-center justify-center gap-5">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-sm text-zinc-500 underline-offset-4 hover:text-indigo-600 hover:underline dark:text-zinc-400 dark:hover:text-indigo-400"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
