export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>Designed & built by Hamza Sarwar &mdash; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
