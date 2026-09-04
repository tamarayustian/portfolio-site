import { Film, Heart, Puzzle } from 'lucide-react';
import { Reveal } from './Reveal';

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <h2 className="max-w-[65ch] text-3xl font-semibold leading-tight tracking-tight md:text-4xl">Good products don&apos;t ask you to figure them out.</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <div className="flex h-full min-h-70 flex-col justify-between rounded-3xl bg-accent p-8 md:p-10">
              <Heart className="text-accent-foreground" size={32} strokeWidth={1.75} fill="currentColor" />
              <div className="mt-16">
                <h3 className="text-2xl font-semibold tracking-tight text-accent-foreground">Build for the person, not the spec</h3>
                <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-accent-foreground/85">Every feature should make someone&apos;s life a little easier. If a workflow takes three extra taps to get right, I treat that as a bug worth fixing.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full min-h-70 flex-col justify-between rounded-3xl border border-border bg-card p-8 md:p-10">
              <Puzzle className="text-accent" size={32} strokeWidth={1.75} />
              <div className="mt-16">
                <h3 className="text-2xl font-semibold tracking-tight">Clear workflows solve everything</h3>
                <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-muted-foreground">A cluttered interface hides the story. I cut away what is not needed until the path from start to done is obvious.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full min-h-70 flex-col justify-between rounded-3xl border border-border bg-card p-8 md:p-10">
              <Film className="text-accent" size={32} strokeWidth={1.75} />
              <div className="mt-16">
                <h3 className="text-2xl font-semibold tracking-tight">Details are the plot</h3>
                <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-muted-foreground">A good edit feels invisible. So does good software. The polish that goes unnoticed is the polish that makes a product feel right.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
