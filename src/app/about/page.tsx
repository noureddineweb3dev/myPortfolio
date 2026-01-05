'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function AboutPage() {
  const skills = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    'UI & Motion': ['Framer Motion', 'GSAP'],
    'Tools & Workflow': ['Git', 'Vercel', 'Figma'],
  };

  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-8 py-32 sm:py-40">
      {/* Background accents */}
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 space-y-24"
      >
        {/* Intro */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-10">
          <Image
            src="/assets/profile.jpg"
            alt="Noureddine Meziany"
            width={160}
            height={160}
            priority
            className="rounded-full border-4 border-cyan-400 shadow-xl object-cover bg-slate-900"
          />

          <div>
            <h1
              className="text-5xl sm:text-7xl font-black text-white leading-tight"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Noureddine
            </h1>

            <p className="mt-6 max-w-2xl text-xl text-gray-300 leading-relaxed">
              Frontend Developer focused on building modern web applications using
              <span className="text-cyan-300"> React</span> and
              <span className="text-blue-300"> Next.js</span>.
            </p>

            <p className="mt-4 max-w-2xl text-lg text-gray-400">
              I’m early in my professional journey, with a strong focus on learning, building real
              projects, and developing solid frontend foundations.
            </p>
          </div>
        </motion.div>

        {/* Journey — HONEST */}
        <motion.div variants={item} className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Journey</h2>

          <ol className="relative border-l border-cyan-400/30 ml-2 space-y-10">
            <li className="ml-6 relative">
              <span className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 ring-4 ring-cyan-200/30">
                <span className="h-3 w-3 rounded-full bg-white" />
              </span>
              <h3 className="text-xl font-semibold text-cyan-300">
                8 Months Ago — Started Web Development
              </h3>
              <p className="mt-2 text-gray-400">
                Began learning web development with a focus on HTML, CSS, JavaScript, and the
                fundamentals of how the web works.
              </p>
            </li>

            <li className="ml-6 relative">
              <span className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 ring-4 ring-cyan-200/30">
                <span className="h-3 w-3 rounded-full bg-white" />
              </span>
              <h3 className="text-xl font-semibold text-cyan-300">
                Progression to React & Next.js
              </h3>
              <p className="mt-2 text-gray-400">
                Focused on React, component-based architecture, state management, and building small
                to medium projects with Next.js.
              </p>
            </li>

            <li className="ml-6 relative">
              <span className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 ring-4 ring-cyan-200/30">
                <span className="h-3 w-3 rounded-full bg-white" />
              </span>
              <h3 className="text-xl font-semibold text-cyan-300">Today — Building & Improving</h3>
              <p className="mt-2 text-gray-400">
                Actively building projects, improving code quality, learning best practices, and
                strengthening my frontend development skills.
              </p>
            </li>
          </ol>
        </motion.div>

        {/* Skills */}
        <motion.div variants={item} className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Skills & Tools</h2>

          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-white">{group}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/30 bg-cyan-900/30 px-5 py-2 text-sm text-cyan-200 backdrop-blur-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* How I Work */}
        <motion.div variants={item} className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">How I Work</h2>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li>• I focus on understanding problems before writing code</li>
            <li>• I aim to write clean, readable, and maintainable components</li>
            <li>• I learn by building and improving real projects</li>
            <li>• I value feedback and continuous improvement</li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="pt-10">
          <h2 className="text-3xl font-bold text-white mb-4">Open to Opportunities</h2>

          <p className="max-w-xl text-lg text-gray-300">
            I’m currently open to freelance projects, internships, and junior frontend roles where I
            can grow, contribute, and learn from experienced teams.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-4 font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            Get in touch →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
