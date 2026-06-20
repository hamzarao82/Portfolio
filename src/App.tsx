import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/sections/Hero'
import { Stats } from '@/sections/Stats'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Contact } from '@/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
