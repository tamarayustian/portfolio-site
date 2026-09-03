import { contact } from '@/content';
import { ArrowRight, Code, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{contact.heading}</h2>
            <p className="mx-auto mt-5 max-w-[55ch] text-base leading-relaxed text-muted-foreground md:text-lg">{contact.description}</p>
            <a href={`mailto:${contact.email}`} className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 active:scale-[0.98]">
              <Mail size={18} />
              {contact.email}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">{contact.footer}</p>
          <div className="flex items-center gap-3">
            <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub (Tamara Yustian)" className="inline-flex items-center justify-center rounded-full border border-border p-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Code size={18} />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Contact" className="inline-flex items-center justify-center rounded-full border border-border p-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
