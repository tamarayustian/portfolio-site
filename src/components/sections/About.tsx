import { Reveal } from './Reveal';

const stats = [
  { label: 'Years building software', value: '6' },
  { label: 'Production sites live', value: '4' },
  { label: 'Years on GitHub', value: '9' },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
          <Reveal>
            <div className="group mx-auto w-full max-w-[20rem] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out hover:-translate-y-1">
              <div className="aspect-4/5 w-full overflow-hidden rounded-3xl border border-border bg-secondary transition-shadow duration-300 group-hover:shadow-lg">
                <img
                  src="/me.jpg"
                  alt="Portrait of Tamara Yustian"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mx-auto mt-5 h-0.5 w-16 origin-center scale-x-0 rounded-full bg-accent motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">Software by day, storyteller always.</h2>
              <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">I&apos;m a full-stack developer who&apos;s spent six years shipping software across TypeScript, React, Next.js, and Node.js. I work with engineering and business teams to take a feature from a rough requirement to production, using sprint planning, mockups, and data design to keep the code clean and the intent clear. I also run AWS and Cloudflare infrastructure and own CI/CD, so I see the whole path a product takes.</p>
              <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">Away from code I photograph, edit video, and write. It&apos;s the same instinct: a good story has a structure, and so does a product that feels easy to use.</p>
              <div className="grid grid-cols-3 gap-4 border-t pt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-card px-4 py-5">
                    <div className="font-mono text-2xl font-semibold">{stat.value}</div>
                    <div className="mt-1 text-sm leading-snug text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
