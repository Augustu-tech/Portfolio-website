"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 p-5 rounded-xl shadow-md"
        >
            <h2 className="text-xl font-bold">{project.title}</h2>

            <p className="text-gray-400 mt-2">
                {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <span key={t} className="text-sm bg-slate-700 px-2 py-1 rounded">
                        {t}
                    </span>
                ))}
            </div>

            <div className="mt-4 flex gap-4">
                <a href={project.github} className="text-green-400">
                    GitHub
                </a>
                <a href={project.demo} className="text-green-400">
                    Live Demo
                </a>
                <Link href={`/projects/${project.slug}`} className="text-green-400">
                    View Details
                </Link>
            </div>
        </motion.div>
    );
}