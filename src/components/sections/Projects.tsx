import { projects, projectsHeading } from '@/content';
import { GitHubMarkIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { ArrowUpRight, RadioIcon } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { Reveal } from './Reveal';

function PlateLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline">
      {children}
    </a>
  );
}

function InThePress({ number }: { number: string }) {
  return (
    <div className="m-6 flex aspect-16/10 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-dashed border-foreground/25 bg-secondary/40 md:m-8">
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60">In the press</span>
      <span className="h-1.5 w-1.5 rounded-full bg-foreground/35" aria-hidden="true" />
      <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/40">sheet № {number} — coming soon</span>
    </div>
  );
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();
  const active = projects[activeIndex];
  const plateMotion = reduce ? { initial: false, animate: {}, exit: {} } : {};

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{projectsHeading}</h2>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 hover:underline">
              Have a project in mind?
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
          <Reveal className="hidden md:col-span-4 md:block" delay={0.05}>
            <nav aria-label="Project index" className="flex h-full flex-col divide-y divide-border/60 rounded-3xl border border-border bg-card p-2">
              {projects.map((project, i) => {
                const isActive = i === activeIndex;
                return (
                  <button key={project.title} type="button" onClick={() => setActiveIndex(i)} aria-pressed={isActive} className={cn('group flex w-full cursor-pointer items-baseline gap-3 rounded-2xl px-4 py-3.5 text-left transition-colors hover:bg-secondary/60 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent', isActive && 'bg-secondary/40')}>
                    <span className={cn('shrink-0 font-mono text-xs tabular-nums tracking-wide', isActive ? 'text-accent' : 'text-muted-foreground', project.status === 'soon' && 'underline decoration-dotted underline-offset-4')}>No.{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className={cn('truncate text-sm font-medium transition-colors', isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground')}>{project.title}</span>
                      {project.status === 'soon' && <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80">in the press</span>}
                    </span>
                  </button>
                );
              })}
            </nav>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.1}>
            <div className="no-scrollbar mb-5 flex gap-2 overflow-x-auto md:hidden">
              {projects.map((project, i) => {
                const isActive = i === activeIndex;
                return (
                  <button key={project.title} type="button" onClick={() => setActiveIndex(i)} aria-pressed={isActive} className={cn('shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent', isActive ? 'bg-foreground text-background' : project.status === 'soon' ? 'border border-dashed border-foreground/25 bg-transparent text-muted-foreground' : 'bg-secondary text-muted-foreground hover:bg-secondary/70')}>
                    {project.title}
                  </button>
                );
              })}
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={active.title} {...plateMotion} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                  {active.image ? <img src={active.image} alt={`${active.title} project`} className="aspect-16/10 w-full object-cover" loading="lazy" /> : <InThePress number={String(activeIndex + 1).padStart(2, '0')} />}
                  <div className="flex flex-col p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                        {active.status === 'live' && active.url ? (
                          <a href={active.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                            {active.title}
                          </a>
                        ) : (
                          active.title
                        )}
                      </h3>
                      {active.status === 'live' && active.url && <RadioIcon size={20} className="mt-1 shrink-0 text-muted-foreground" aria-hidden="true" />}
                    </div>
                    <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted-foreground">{active.description}</p>
{(active.tags.length > 0 || active.url || active.codeUrl) && (
  <div className="mt-5 flex flex-wrap items-center justify-between gap-x-2 gap-y-2.5">
    <div className="flex flex-wrap items-center gap-2">
      {active.tags.map((tag) => (
        <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
          {tag}
        </span>
      ))}
    </div>
    {(active.url || active.codeUrl) && (
      <div className="flex w-full flex-wrap items-center gap-x-3.5 gap-y-1 md:w-auto md:ml-auto md:justify-end">
        {active.url && (
          <PlateLink href={active.url}>
            {active.status === 'soon' ? 'Preview' : 'Visit site'}
            <ArrowUpRight size={13} />
          </PlateLink>
        )}
        {active.codeUrl && (
          <PlateLink href={active.codeUrl}>
            <GitHubMarkIcon size={14} />
            Source code
          </PlateLink>
        )}
      </div>
    )}
  </div>
)}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
