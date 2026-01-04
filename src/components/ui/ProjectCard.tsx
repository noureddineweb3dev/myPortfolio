'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

type Props = {
  project: {
    slug: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
  };
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // HYBRID horizontal drift
  const x = useTransform(scrollYProgress, [0, 1], isEven ? [-80, 80] : [80, -80]);

  return (
    <motion.article
      ref={ref}
      style={{ x }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-120px' }}
      className={`relative flex h-[65vh] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40 backdrop-blur-xl ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* IMAGE */}
      <div className="relative w-1/2 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative h-full w-full"
        >
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70" />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-1/2 flex-col justify-center px-16">
        <span className="mb-4 text-sm tracking-widest text-cyan-400">0{index + 1}</span>

        <h3
          className="text-5xl font-black text-white leading-tight"
          style={{ fontFamily: 'var(--font-sora)' }}
        >
          {project.title}
        </h3>

        <p className="mt-6 max-w-md text-gray-300 leading-relaxed">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-10 inline-flex items-center gap-3 text-lg font-semibold text-cyan-300 hover:gap-4 transition-all"
        >
          View case study <span>→</span>
        </Link>
      </div>
    </motion.article>
  );
}
