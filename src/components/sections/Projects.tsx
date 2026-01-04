'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative mx-auto  py-48 px-20 overflow-hidden">
      {/* Subtle background gradient with better color harmony */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/50 via-slate-900/30 to-slate-950/50 pointer-events-none" />

      {/* Animated gradient orbs - subtle and harmonious */}
      <div className="absolute -top-32 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/3 w-72 h-72 bg-purple-500/12 rounded-full blur-3xl pointer-events-none animate-pulse animation-delay-2000" />

      <motion.div
        className="mb-24 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className="h-14 w-1.5 rounded-full bg-linear-to-b from-cyan-400 via-blue-400 to-purple-400"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest letter-spacing-wider">
            ✦ Featured Projects
          </span>
        </div>
        <div className="flex justify-between flex-col lg:flex-row  gap-8">
          <div>
            <h2
              className="text-7xl sm:text-8xl font-black leading-tight"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              <span className="block text-white">Selected</span>
              <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Work
              </span>
            </h2>

            <div className="mt-8 h-1.5 w-40 rounded-full bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
          </div>

          <p
            className="mt-8 max-w-3xl text-gray-300 text-lg leading-relaxed font-light"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            A carefully curated selection of projects showcasing my passion for creating stunning
            digital experiences.
            <span className="block mt-2">
              Each project represents a unique challenge solved through thoughtful design and robust
              development.
            </span>
          </p>
        </div>
      </motion.div>

      <motion.div
        className="space-y-32 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-150px' }}
      >
        {projects.map((project, index) => (
          <motion.div key={project.slug} variants={itemVariants}>
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced CTA Section */}
      <motion.div
        className="mt-40 relative z-10 text-center px-6 py-20 rounded-3xl bg-linear-to-br from-white/5 via-white/2 to-transparent border border-white/10 backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3
          className="text-5xl sm:text-6xl font-bold mb-6 text-white"
          style={{ fontFamily: 'var(--font-sora)' }}
        >
          Explore More{' '}
          <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Work
          </span>
        </h3>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          View my complete portfolio and see how I can help bring your vision to life.
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(6, 182, 212, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-12 py-5 font-bold text-white text-lg overflow-hidden rounded-xl inline-block"
        >
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600" />
          <div className="absolute inset-0 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center gap-2">
            View All Projects
            <motion.span className="inline-block" whileHover={{ x: 4 }}>
              →
            </motion.span>
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Projects;
