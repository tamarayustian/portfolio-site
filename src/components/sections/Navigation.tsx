import { cn } from '@/lib/utils';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    setDark((v) => !v);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <nav className={cn('flex items-center justify-between rounded-full px-5 py-3 transition-colors duration-300', scrolled ? 'border border-border bg-card/80 shadow-sm backdrop-blur-md' : 'bg-transparent')}>
          <a href="#top" className="font-semibold tracking-tight">
            Tamara Yustian
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
            <button type="button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleTheme} className="inline-flex items-center justify-center rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90">
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button type="button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleTheme} className="inline-flex items-center justify-center rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="inline-flex items-center justify-center rounded-full p-2 text-foreground transition-colors hover:bg-secondary">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-border bg-card p-3 shadow-lg md:hidden">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-foreground transition-colors hover:bg-secondary">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-1 block rounded-xl bg-accent px-4 py-3 text-center font-medium text-accent-foreground transition-opacity hover:opacity-90">
              Get in touch
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
