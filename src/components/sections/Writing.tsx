import { writing } from '@/content';
import { mediumPosts } from '@/generated/medium-posts';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function Writing() {
  return (
    <section id="writing" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{writing.heading}</h2>
              <a
                href="https://medium.com/@tamarayustian"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                Read more on Medium
                <ArrowUpRight size={15} />
              </a>
            </div>
            <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">{writing.intro}</p>
          </div>
        </Reveal>

        {mediumPosts.length > 0 && (
          <div className="no-scrollbar -mx-4 mt-10 overflow-x-auto px-4 pb-4 md:-mx-8 md:px-8">
            <div className="flex w-max gap-5">
              {mediumPosts.map((post, i) => (
                <Reveal key={post.url} delay={i * 0.06}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block flex h-72 w-75 shrink-0 flex-col rounded-3xl border border-border bg-card p-7 transition-colors hover:bg-secondary md:w-85"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-mono text-xs uppercase tracking-wide text-accent">{post.genre}</div>
                      <div className="shrink-0 font-mono text-xs uppercase tracking-wide text-muted-foreground">{post.date}</div>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight">{post.title}</h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-accent">
                      Read more
                      <ArrowUpRight size={15} className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}