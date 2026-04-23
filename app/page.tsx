"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import Skills from "@/components/Skills";
import GithubStats from "@/components/GithubStats";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center max-w-3xl mx-auto">

    

      </section>
      <Hero />
      {/* FEATURED PROJECTS */}
      <section className="mt-20 max-w-5xl mx-auto">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>

              <p className="text-gray-400 mt-2 text-sm">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-slate-700 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="text-green-400 mt-4 inline-block"
              >
                View Details →
              </Link>
            </motion.div>
          ))}
        </div>

      </section>
      <Skills />
      <GithubStats />

    </main>
  );
}