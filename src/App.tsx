import {
  Navigation,
  Hero,
  About,
  Philosophy,
  Work,
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
      <Work />
      <Writing />
      <Contact />
    </main>
  )
}

export default App