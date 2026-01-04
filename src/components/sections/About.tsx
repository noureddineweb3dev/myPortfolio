'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const exploring = [
  'advanced motion design',
  'WebGL & shaders',
  'creative developer workflows',
  'interaction-driven UI',
];

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const visualY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const shouldReduceMotion = useReducedMotion();
  const [exploreIndex, setExploreIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (isPaused) return;
    const id = setInterval(() => {
      setExploreIndex((i) => (i + 1) % exploring.length);
    }, 3000);
    return () => clearInterval(id);
  }, [shouldReduceMotion, isPaused]);

  return (
    <section ref={ref} className="relative mx-auto max-w-7xl px-6 py-40 overflow-hidden">
      {/* FLOATING ABSTRACT PORTRAIT */}
      <motion.div
        style={{ y: visualY }}
        className="pointer-events-none absolute right-25 top-1/2 h-105 w-105 -translate-y-1/2 rounded-full overflow-hidden"
        aria-hidden
      >
        <motion.div
          className="h-full w-full rounded-full bg-linear-to-br from-indigo-500/30 via-purple-500/20 to-cyan-400/20 blur-3xl"
          animate={shouldReduceMotion ? undefined : { y: [0, -20, 0] }}
          transition={
            shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }
        />
      </motion.div>

      <div className="relative grid grid-cols-1 gap-24 md:grid-cols-2">
        {/* LEFT — TEXT */}
        <motion.div style={{ y: textY }}>
          <h2 className="text-4xl font-bold leading-tight">
            I design and build
            <br />
            <span className="text-indigo-400">interfaces that feel alive.</span>
          </h2>

          <p className="mt-6 max-w-md text-gray-400">
            I’m Noureddine, a creative frontend developer focused on interaction, motion, and
            performance. I care deeply about how things feel — not just how they work.
          </p>

          {/* SIGNATURE */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 'auto' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-10 overflow-hidden"
          >
            <span className="text-2xl font-semibold tracking-tight text-white">— Noureddine</span>
          </motion.div>
        </motion.div>

        {/* RIGHT — INFO */}
        <motion.div style={{ y: visualY }} className="space-y-12">
          {/* PRINCIPLES */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-gray-500">Principles</h3>
            <ul className="space-y-3 text-lg">
              <li>→ Interaction over decoration</li>
              <li>→ Motion with purpose</li>
              <li>→ Performance first</li>
            </ul>
          </div>

          {/* STACK */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-gray-500">Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Next.js',
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Framer Motion',
                'Node.js',
                'Express',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm backdrop-blur"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CURRENTLY EXPLORING */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-wider text-gray-500">
              Currently exploring
            </h3>

            <motion.div className="text-lg text-indigo-400">
              <motion.span
                key={exploreIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                aria-live="polite"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                tabIndex={0}
                role="text"
              >
                {exploring[exploreIndex]}
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
