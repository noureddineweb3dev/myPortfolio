'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const draw = shouldReduceMotion
    ? { initial: { pathLength: 1, opacity: 1 }, animate: { pathLength: 1, opacity: 1 } }
    : { initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 } };

  return (
    <footer className="border-t border-white/6 bg-transparent py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-gray-400">
        <div className="flex items-center gap-4">
          <motion.a
            href="/"
            className="flex items-center gap-3 text-white relative overflow-visible"
            aria-label="Homepage"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          >
            {/* pulsing glow behind signature */}
            {!shouldReduceMotion && (
              <motion.span
                aria-hidden
                className="absolute -left-2 -top-2 h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 blur-2xl"
                initial={{ scale: 0.9, opacity: 0.35 }}
                animate={{ scale: [0.9, 1.05, 0.95], opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}

            <motion.svg
              width="84"
              height="40"
              viewBox="0 0 84 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden
            >
              <defs>
                <linearGradient id="sigGrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              <motion.path
                d="M6 28c6-8 12-18 28-16 10 1.5 18 12 30 8"
                stroke="url(#sigGrad)"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={
                  shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }
                }
                animate={
                  shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 1 }
                }
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />

              <motion.path
                d="M12 24c6-3 12-6 20-2 6 3 12 6 22 2"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity={0.6}
              />
            </motion.svg>

            <div className="flex flex-col leading-tight">
              <motion.span
                className="font-semibold text-sm"
                {...(shouldReduceMotion
                  ? {}
                  : {
                      initial: { y: 6, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.25 },
                    })}
              >
                Built with ❤️ by Noureddine
              </motion.span>
            </div>
          </motion.a>

          <div className="hidden sm:block text-xs text-gray-400">© {year}</div>
        </div>

        <nav aria-label="Footer navigation" className="hidden sm:flex gap-6">
          <Link href="/about" className="hover:text-indigo-400 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-indigo-400 transition">
            Projects
          </Link>
          <Link href="/contact?form=1" className="hover:text-indigo-400 transition">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-400 transition"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-indigo-400 transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
