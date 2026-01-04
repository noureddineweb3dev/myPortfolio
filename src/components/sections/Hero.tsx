'use client';

import { motion } from 'framer-motion';
import WaterSurface from '@/components/effects/WaterSurface';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden ">
      <WaterSurface />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse animation-delay-2000" />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="mx-auto max-w-4xl px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-block">
            <motion.span
              className="px-4 py-2 text-sm font-medium text-cyan-300 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              ✨ Creative Developer & Motion Designer
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Crafting
            </span>
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
              Exceptional Experiences
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-10 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            I design and build beautiful, interactive digital experiences with a focus on motion,
            <span className="block mt-2">
              performance, and creating moments that delight and engage users.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 font-semibold text-white text-lg overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">View My Work</span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(6, 182, 212, 1)',
                backgroundColor: 'rgba(6, 182, 212, 0.08)',
              }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-4 font-semibold text-cyan-300 text-lg border-2 border-cyan-500/40 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Stats / Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16 text-center"
          >
            {[
              { label: '50+', value: 'Projects' },
              { label: '3+', value: 'Years' },
              { label: '100%', value: 'Dedication' },
            ].map((stat, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="group cursor-default">
                <p className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text group-hover:from-cyan-300 group-hover:to-purple-400 transition-all">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-gray-400">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
