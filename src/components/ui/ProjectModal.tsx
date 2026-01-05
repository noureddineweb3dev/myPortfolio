import { useEffect } from 'react';
import Image from 'next/image';

export default function ProjectModal({ project, onClose }: { project: any; onClose: () => void }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"></div>
      {/* Modal Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-start">
        <button
          className="absolute top-8 left-8 flex items-center gap-4 text-cyan-300 text-2xl font-bold hover:text-white px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/80 to-blue-500/80 shadow-xl border-2 border-cyan-400/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={onClose}
          aria-label="Back"
        >
          <span className="text-3xl">←</span>
          <span className="text-lg font-semibold tracking-wide">Back to Projects</span>
        </button>
        <div
          className="w-full max-w-4xl mx-auto p-0 sm:p-0 bg-slate-950 rounded-3xl shadow-2xl animate-modalIn overflow-hidden overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 64px)' }}
        >
          {/* Banner Image */}
          <div className="w-full h-40 sm:h-65 relative mb-0">
            <Image
              src={project.image}
              alt="Banner"
              fill
              className="object-cover w-full h-full"
              style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-transparent rounded-t-3xl"></div>
          </div>
          {/* Top Text */}
          <div className="px-6 sm:px-10 pt-6">
            <span className="block text-lg sm:text-xl font-bold tracking-widest text-cyan-300 mb-2 drop-shadow">
              CASE STUDY
            </span>
            <h1
              className="text-3xl sm:text-5xl font-black leading-tight text-white mb-6 drop-shadow-lg"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              {project.title}
            </h1>
          </div>
          {/* Main Content */}
          <div className="px-6 sm:px-10 pb-16">
            <section className="mb-10">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-cyan-300">
                Background & Goals
              </h2>
              <p className="max-w-3xl text-gray-400 leading-relaxed">
                What inspired this project? What was the main objective? Describe the context and
                goals for the case study.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-cyan-300">
                Research & Discovery
              </h2>
              <p className="max-w-3xl text-gray-400 leading-relaxed">
                Summarize the research, user interviews, competitive analysis, and insights that
                shaped the direction of the project.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-cyan-300">
                Design & Prototyping
              </h2>
              <p className="max-w-3xl text-gray-400 leading-relaxed">
                Highlight the design process, wireframes, prototypes, and key visual decisions.
                Include rationale for major design choices.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-cyan-300">
                Development & Technical Challenges
              </h2>
              <p className="max-w-3xl text-gray-400 leading-relaxed">
                Describe the development process, technical hurdles, and how you solved them.
                Mention frameworks, libraries, and any custom solutions.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-cyan-300">
                Key Decisions & Rationale
              </h2>
              <p className="max-w-3xl text-gray-400 leading-relaxed">
                Explain the most important decisions made during the project and why they were
                critical to success.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-cyan-300">
                Results & Impact
              </h2>
              <p className="max-w-3xl text-gray-400 leading-relaxed">
                Share the outcomes, metrics, user feedback, and impact of the project. What changed
                as a result?
              </p>
            </section>
            <section className="mb-10">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-cyan-300">Lessons Learned</h2>
              <p className="max-w-3xl text-gray-400 leading-relaxed">
                Reflect on what you learned, what you’d do differently, and advice for others
                tackling similar challenges.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-cyan-300">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Example gallery images, replace with actual if available */}
                <Image
                  src={project.image}
                  alt="Gallery 1"
                  width={400}
                  height={220}
                  className="rounded-xl object-cover w-full h-30 sm:h-45"
                />
                <Image
                  src={project.image}
                  alt="Gallery 2"
                  width={400}
                  height={220}
                  className="rounded-xl object-cover w-full h-30 sm:h-45"
                />
              </div>
            </section>
            {/* --- SUPPORTING INFO --- */}
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-cyan-300">Technologies Used</h2>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 rounded bg-cyan-900 text-cyan-200 text-sm">Next.js</span>
                <span className="px-4 py-2 rounded bg-cyan-900 text-cyan-200 text-sm">React</span>
                <span className="px-4 py-2 rounded bg-cyan-900 text-cyan-200 text-sm">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 rounded bg-cyan-900 text-cyan-200 text-sm">
                  Framer Motion
                </span>
              </div>
            </section>
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-cyan-300">Timeline</h2>
              <p className="text-gray-400">Jan 2025 – Mar 2025</p>
            </section>
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-cyan-300">Role</h2>
              <p className="text-gray-400">Lead Developer, UI/UX Designer</p>
            </section>
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-cyan-300">Links</h2>
              <div className="flex gap-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="text-cyan-400 hover:underline text-lg"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="text-cyan-400 hover:underline text-lg"
                >
                  GitHub Repo
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
