import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

function Projects() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <h2 className="mb-16 text-4xl font-bold">
        Selected <span className="text-indigo-400">Work</span>
      </h2>

      <div className="flex flex-col gap-20">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
