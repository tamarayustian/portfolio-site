import { Reveal } from './Reveal'

const pieces = [
  {
    title: 'The Space Between Keys',
    genre: 'Poem',
    excerpt:
      'You can hear the whole story in the pause before a sentence finds its ending.',
  },
  {
    title: 'Salt and Static',
    genre: 'Short story',
    excerpt:
      'A radio host in a coastal town keeps playing the same request from a listener who stopped calling.',
  },
  {
    title: 'First Light',
    genre: 'Poem',
    excerpt:
      'Dawn, like good design, arrives on its own. No one has to ask it to come.',
  },
]

export function Writing() {
  return (
    <section id="writing" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Writing on the side
            </h2>
            <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
              When I am not building software, I write poems and short stories.
              A smaller corner of who I am, but one I keep close.
            </p>
          </div>
        </Reveal>

        <div className="no-scrollbar -mx-4 mt-10 overflow-x-auto px-4 pb-4 md:-mx-8 md:px-8">
          <div className="flex w-max gap-5">
            {pieces.map((piece, i) => (
              <Reveal key={piece.title} delay={i * 0.06}>
                <article className="w-[300px] shrink-0 rounded-3xl border border-border bg-card p-7 transition-colors hover:bg-secondary md:w-[340px]">
                  <div className="font-mono text-xs uppercase tracking-wide text-accent">
                    {piece.genre}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight">
                    {piece.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {piece.excerpt}
                  </p>
                  <div className="mt-5 text-sm font-medium text-accent">
                    Read more
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-muted-foreground">
            More poems and stories coming soon.
          </p>
        </div>
      </div>
    </section>
  )
}