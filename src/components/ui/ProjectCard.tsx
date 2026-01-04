'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
  };
  index?: number;
};

function ProjectCard({ project, index = 0 }: Props) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      whileHover="hover"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className={`group relative flex h-[70vh] items-center overflow-hidden rounded-3xl border bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50 shadow-2xl backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 border-slate-700/50 hover:border-cyan-500/50 ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* Project number indicator */}
      <motion.div
        className="absolute top-8 right-8 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/20 border border-cyan-400/40 backdrop-blur-md"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <span className="text-base font-bold text-cyan-200">0{index + 1}</span>
      </motion.div>

      {/* Image Container */}
      <div className="absolute inset-0">
        <motion.div
          variants={{
            hover: { scale: 1.1 },
          }}
          transition={{ type: 'spring', stiffness: 60 }}
          className="relative h-full w-full"
        >
          <Image src={project.image} alt={project.title} fill className="object-cover" />
          {/* Image overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950/60" />
        </motion.div>
      </div>

      {/* Enhanced Overlay with better gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-${
          isEven ? 'r' : 'l'
        } from-slate-950/98 via-slate-900/80 to-slate-950/40 group-hover:via-slate-900/70 transition-all duration-500`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/8 via-transparent to-purple-500/8 pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={{
          hover: { x: isEven ? 16 : -16, y: -8 },
        }}
        initial={{ x: 0, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={`relative z-10 max-w-lg p-14 ${isEven ? 'pr-24' : 'pl-24'}`}
      >
        {/* Decorative line */}
        <motion.div
          className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3
            className="text-5xl font-black leading-tight text-white"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            {project.title}
          </h3>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-gray-200 leading-relaxed text-base font-light"
        >
          {project.description}
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.12, backgroundColor: 'rgba(6, 182, 212, 0.25)' }}
              className="rounded-full border border-cyan-400/50 px-5 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md bg-cyan-500/10 transition-all duration-300 hover:border-cyan-300/80 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10"
        >
          <motion.a
            href="#"
            whileHover={{ x: 10 }}
            whileTap={{ x: 5 }}
            className="inline-flex items-center gap-3 font-bold text-lg text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text group/link transition-all"
          >
            <span>View case study</span>
            <motion.span
              className="inline-block text-cyan-300"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
