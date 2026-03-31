import { projects } from "@/data/projects";
import ProjectCard from "@/components/projectCard";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white p-6">
            <h1 className="text-3xl font-bold mb-8">My Projects</h1>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </main>
    );
}