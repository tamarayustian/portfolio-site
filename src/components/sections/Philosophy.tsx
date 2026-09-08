import { Heart } from 'lucide-react'
import { Reveal } from './Reveal'

const notes = [
  {
    title: 'Build for the person, not the spec',
    body: "Every feature should make someone's life a little easier. If a workflow takes three extra taps to get right, I treat that as a bug worth fixing.",
  },
  {
    title: 'Clear workflows are the feature',
    body: 'A cluttered interface hides the story. I cut away what is not needed until the path from start to done is obvious.',
  },
  {
    title: 'Details are the plot',
    body: 'A good edit feels invisible. So does good software. The polish that goes unnoticed is the polish that makes a product feel right.',
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 md:p-10">
              <Heart className="text-accent" size={28} strokeWidth={1.75} />
              <div className="mt-16">
                <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  Good products don&apos;t ask you to figure them out.
                </h2>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  what I believe
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-7">
            <div className="flex h-full flex-col divide-y divide-border/60 overflow-hidden rounded-3xl border border-border bg-card">
              {notes.map((n, i) => (
                <div
                  key={n.title}
                  className="group flex items-start gap-5 px-6 py-6 transition-colors hover:bg-secondary/40 md:px-8 md:py-7"
                >
                  <span className="mt-0.5 font-mono text-xs tabular-nums tracking-wide text-muted-foreground transition-colors group-hover:text-accent">
                    No.{String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold tracking-tight md:text-lg">{n.title}</h3>
                    <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">{n.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}