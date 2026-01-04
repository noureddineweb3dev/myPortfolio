'use client';

import { motion, useReducedMotion } from 'framer-motion';

function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const headingProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      };

  const paraProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: 0.1, duration: 0.6 },
      };

  const ctaProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: 0.2, duration: 0.6 },
      };

  return (
    <section className="relative overflow-hidden px-6 py-40">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-125 w-125 rounded-full bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Title */}
        <motion.h2 {...headingProps} className="text-4xl font-bold leading-tight">
          Let’s build something
          <br />
          <span className="text-indigo-400">meaningful together.</span>
        </motion.h2>

        {/* Description */}
        <motion.p {...paraProps} className="mx-auto mt-6 max-w-xl text-gray-400">
          I’m open to freelance projects, collaborations, and full-time opportunities where design,
          interaction, and performance truly matter.
        </motion.p>

        {/* CTA */}
        <motion.div {...ctaProps} className="mt-12 flex flex-col items-center gap-6">
          <a
            href="/contact?form=1"
            className="group relative inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-lg backdrop-blur transition hover:border-indigo-400"
          >
            <span>Get in touch</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>

          {/* Socials */}
          <div className="flex gap-6 text-sm text-gray-500">
            <a
              href="#"
              className="transition hover:text-indigo-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="#"
              className="transition hover:text-indigo-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="transition hover:text-indigo-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
