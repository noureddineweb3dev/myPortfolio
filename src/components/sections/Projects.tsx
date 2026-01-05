'use client';

import { motion } from 'framer-motion';

import ProjectCard from '@/components/ui/ProjectCard';
import ProjectModal from '@/components/ui/ProjectModal';
import { projects } from '@/data/projects';
import { useState } from 'react';

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-48">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-32 max-w-3xl"
      >
        <span className="mb-6 block text-sm tracking-widest text-cyan-400">
          ✦ Featured Projects
        </span>

        <h2
          className="text-7xl font-black leading-tight text-white"
          style={{ fontFamily: 'var(--font-sora)' }}
        >
          Selected
          <br />
          <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Work
          </span>
        </h2>

        <p className="mt-8 text-lg text-gray-400 leading-relaxed">
          A curated selection of projects where interaction, motion, and clarity were the core
          focus.
        </p>
      </motion.div>

      {/* PROJECT LIST */}
      <div className="space-y-40">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            onViewAction={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* MODAL OVERLAY */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
