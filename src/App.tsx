import { About, Contact, Experience, Hero, Navigation, Philosophy, Projects, Writing } from '@/components/sections';
import { Analytics } from '@vercel/analytics/react';

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
      <Analytics />
    </main>
  );
}

export default App;
