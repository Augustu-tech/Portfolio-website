"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  id: number;
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
      whileHover={{ scale: 1.04 }}
      className="bg-slate-800 p-6 rounded-xl shadow-lg transition"
    >
      {/* TITLE */}
      <h2 className="text-xl font-bold">{project.title}</h2>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mt-2 text-sm">
        {project.description}
      </p>

      {/* TECH STACK */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-slate-700 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* ACTION BUTTONS */}
      <div className="mt-6 flex flex-wrap gap-4">

        <a
          href={project.github}
          target="_blank"
          className="text-sm border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          className="text-sm bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Live Demo
        </a>

        <Link
          href={`/projects/${project.slug}`}
          className="text-sm text-green-400 hover:underline"
        >
          View Details →
        </Link>

      </div>
    </motion.div>
  );
}