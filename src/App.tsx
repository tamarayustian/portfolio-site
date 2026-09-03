import {
  Navigation,
  Hero,
  About,
  Philosophy,
  Experience,
  Projects,
  Writing,
  Contact,
} from '@/components/sections'

function App() {
  return (
    <main className="w-full max-w-full overflow-x-hidden bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Philosophy />
      <Experience />
      <Projects />
      <Writing />
      <Contact />
    </main>
  )
}

export default App