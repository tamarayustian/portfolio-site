import { contact } from '@/content';
import { ArrowRight, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

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
              <GitHubIcon size={18} />
            </a>
            <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (Tamara Yustian)" className="inline-flex items-center justify-center rounded-full border border-border p-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <LinkedInIcon size={18} />
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
