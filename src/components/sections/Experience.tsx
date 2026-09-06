import { experienceRoles, formatRoleDate, type ExperienceRole } from '@/content';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { Reveal } from './Reveal';

function RoleCard({ role, index }: { role: ExperienceRole; index: number }) {
  const volunteer = role.lane === 'volunteer';

  return (
    <li className="relative md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
      <span aria-hidden className={`absolute left-[4.5px] top-6 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full ${volunteer ? 'bg-indigo-500' : 'bg-accent'} md:left-1/2 ring-2 ring-background`} />

      <div className={volunteer ? 'pl-9 md:col-start-2 md:pl-0' : 'pl-9 md:col-start-1 md:pl-0'}>
        <Reveal delay={index * 0.05}>
          <div className="font-mono text-xs uppercase tracking-wide text-accent">{formatRoleDate(role)}</div>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{role.title}</h3>
            {role.roleType && <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{role.roleType}</span>}
          </div>
          <div className="mt-0.5 text-sm font-medium text-muted-foreground">
            {role.url ? (
              <a href={role.url} target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">
                {role.company}
              </a>
            ) : (
              role.company
            )}
          </div>
          <ul className="mt-3 max-w-[65ch] list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
            {role.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {role.techStack.map((tech) => (
              <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </li>
  );
}

export function Experience() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const roles = [...experienceRoles].sort((a, b) => a.from.year - b.from.year || a.from.month - b.from.month);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.5'] });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.5 });

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Experience</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 text-muted-foreground">A running timeline of the work that shaped how I build software, and the volunteer projects that keep me honest.</p>
        </Reveal>

        <div ref={ref} className="relative mt-12 md:mt-16">
          <div aria-hidden className="absolute bottom-2 left-[4.5px] top-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
          <motion.div aria-hidden style={{ scaleY: reduce ? 1 : progress, transformOrigin: 'top' }} className="absolute bottom-2 left-[4.5px] top-2 w-px bg-accent md:left-1/2 md:-translate-x-1/2" />
          <ol className="space-y-12 md:space-y-14">
            {roles.map((role, i) => (
              <RoleCard key={`${role.from.month}-${role.from.year}-${role.company}`} role={role} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
