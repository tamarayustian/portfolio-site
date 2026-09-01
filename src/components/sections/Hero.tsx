import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import Auralis from '@/components/ui/auralis'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export function Hero() {
  const reduce = useReducedMotion()

  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center pb-16 pt-24"
    >
      <Auralis
        height="100dvh"
        speed={0.2}
        grain={0.5}
        className="absolute inset-0"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="max-w-4xl">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.p variants={item} className="text-sm font-medium text-accent">
              Software developer and storyteller
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl lg:text-6xl text-white"
            >
              I build products that feel simple, because clear always wins.
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-[65ch] text-base leading-relaxed text-white/70 md:text-lg"
            >
              I am a software developer who cares about the story a product
              tells. When the workflow reads clearly, the product becomes easier
              to use and easier to love. That is the kind of thing I want to
              build.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-opacity hover:opacity-90 active:scale-[0.98]"
              >
                View my work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}