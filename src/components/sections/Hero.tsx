import WaterSurface from '@/components/effects/WaterSurface';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900">
      <WaterSurface />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 text-sm font-semibold text-blue-300 bg-blue-950/40 border border-blue-800/50 rounded-full">
              ✨ Welcome to my creative space
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-bold leading-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Crafting Exceptional
            <span className="block">Digital Experiences</span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a creative frontend developer passionate about building beautiful, interactive
            experiences that engage and delight users. Specializing in animations, motion design,
            and performance optimization.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              View My Work
            </button>
            <button className="px-8 py-3 font-semibold text-cyan-300 border-2 border-cyan-500/50 rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
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
      </div>
    </section>
  );
}
