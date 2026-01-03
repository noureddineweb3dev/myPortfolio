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
};

function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover="hover"
      className="group relative flex h-[75vh] items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      {/* Image */}
      <motion.div
        variants={{
          hover: { x: -40 },
        }}
        transition={{ type: 'spring', stiffness: 60 }}
        className="absolute inset-0"
      >
        <Image src={project.image} alt={project.title} fill className="object-cover opacity-80" />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <motion.div
        variants={{
          hover: { x: 20, opacity: 1 },
        }}
        initial={{ x: 0, opacity: 0.9 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 max-w-xl p-12"
      >
        <h3 className="text-3xl font-semibold">{project.title}</h3>

        <p className="mt-4 text-gray-400">{project.description}</p>

        <div className="mt-6 flex gap-3">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-8 inline-block text-indigo-400">View case study →</span>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
