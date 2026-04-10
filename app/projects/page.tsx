import { projects } from "@/data/projects";
import ProjectCard from "@/components/projectCard";

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">

      <h1 className="text-3xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </main>
  );
}