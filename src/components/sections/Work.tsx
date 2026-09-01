import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

const projects = [
  {
    title: 'ClearFlow',
    description:
      'A task manager that strips away the noise so teams can focus on the work that matters.',
    tags: ['Product design', 'TypeScript', 'React'],
    image: 'https://picsum.photos/seed/clearflow-app/1200/800',
    large: true,
  },
  {
    title: 'FieldNote',
    description:
      'A lightweight journaling app built for people who want their ideas captured, not organized.',
    tags: ['Mobile', 'Swift', 'iOS'],
    image: 'https://picsum.photos/seed/fieldnote-mobile/800/800',
    large: false,
  },
  {
    title: 'Lens & Letter',
    description:
      'An editorial site where photography and writing meet, telling stories in both forms.',
    tags: ['React', 'Photography', 'Content'],
    image: 'https://picsum.photos/seed/lensletter-editorial/800/800',
    large: false,
  },
]

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Selected work
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Have a project in mind?
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-auto grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              className={project.large ? 'md:col-span-2 md:row-span-2' : ''}
              delay={i * 0.06}
            >
              <a
                href="#contact"
                className="group block h-full overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className={cn(
                      'w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105',
                      project.large ? 'aspect-[16/10]' : 'aspect-[4/3]',
                    )}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}