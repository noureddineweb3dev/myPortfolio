'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function ProjectsPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-8 py-32 sm:py-40">
      {/* Background accents */}
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 mb-20 max-w-3xl"
      >
        <h1
          className="text-6xl sm:text-7xl font-black text-white leading-tight"
          style={{ fontFamily: 'var(--font-sora)' }}
        >
          Projects
        </h1>

        <p className="mt-6 text-xl text-gray-300 leading-relaxed">
          A selection of projects showcasing my work with modern frontend technologies, interaction,
          and clean architecture.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            variants={item}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:border-cyan-400/40"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>

              <p className="mt-3 text-gray-400 leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/projects/${project.slug}`}
                className="mt-6 inline-block font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                View case study →
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectsPage;
