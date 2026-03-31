import { projects } from "@/data/projects";
import { Metadata } from "next";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

// ✅ SEO METADATA
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            url: `https://yourdomain.com/projects/${slug}`,
            siteName: "Augustus Portfolio",
            type: "website",
        },
    };
}

// ✅ PAGE COMPONENT
export default async function ProjectDetail({ params }: Props) {
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <main className="min-h-screen bg-slate-950 text-white p-6">
                <h1 className="text-2xl font-bold">Project not found</h1>
                <p className="text-gray-400 mt-2">
                    Slug received: {slug}
                </p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white p-6">
            <h1 className="text-3xl font-bold">{project.title}</h1>

            <p className="mt-4 text-gray-400">
                {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <span key={t} className="bg-slate-800 px-3 py-1 rounded">
                        {t}
                    </span>
                ))}
            </div>

            <div className="mt-6 flex gap-4">
                <a href={project.github} className="text-green-400">
                    GitHub
                </a>
                <a href={project.demo} className="text-green-400">
                    Live Demo
                </a>
            </div>
        </main>
    );
}