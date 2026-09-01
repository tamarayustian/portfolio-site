import { Reveal } from './Reveal'

const stats = [
  { label: 'Years building software', value: '8' },
  { label: 'Photos & films made', value: '300+' },
  { label: 'Poems & stories written', value: '120+' },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-secondary">
              {/* TODO: portrait or workspace photo, 1200x1500 */}
              <img
                src="https://picsum.photos/seed/workspace-portfolio/1000/1250"
                alt="A photo of a workspace where I build and create"
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Software by day, storyteller always.
              </h2>
              <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
                My full-time work is building software. But I also love
                photography and video editing, because I am drawn to the way a
                good story is structured. That instinct carries into how I
                build products: I think of a user&apos;s journey as a narrative
                that has to flow from beginning to end.
              </p>
              <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
                A good product is not complicated to use. The best compliment
                someone can give a piece of work is that it just makes sense.
                That is the standard I hold every product I build to.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-card px-4 py-5"
                  >
                    <div className="font-mono text-2xl font-semibold">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm leading-snug text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}