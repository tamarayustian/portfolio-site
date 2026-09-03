import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { experienceRoles } from '@/content';
import { Reveal } from './Reveal';

export function Experience() {
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.85', 'end 0.35'] });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.5 });

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Experience</h2>
        </Reveal>

        <div ref={listRef} className="relative mt-12 md:mt-14">
          <div aria-hidden className="absolute bottom-2 left-[4.5px] top-2 w-px bg-border" />
          <motion.div
            aria-hidden
            style={{ scaleY: reduce ? 1 : progress, transformOrigin: 'top' }}
            className="absolute bottom-2 left-[4.5px] top-2 w-px bg-accent"
          />
          <ol className="space-y-12 md:space-y-14">
            {experienceRoles.map((role, i) => (
              <li key={role.company} className="relative pl-9 md:pl-10">
                <span aria-hidden className="absolute left-0 top-[7px] h-2.5 w-2.5 rounded-full bg-accent" />
                <Reveal delay={i * 0.05}>
                  <div className="font-mono text-xs uppercase tracking-wide text-accent">{role.date}</div>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight">{role.title}</h3>
                  <div className="mt-0.5 text-sm font-medium text-muted-foreground">{role.company}</div>
                  <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-muted-foreground">{role.summary}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
