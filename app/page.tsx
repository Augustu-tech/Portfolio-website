"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import Skills from "@/components/Skills";
import GithubStats from "@/components/GithubStats";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center max-w-3xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Hi, I'm <span className="text-green-400">Augustus</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-gray-400"
        >
          Computer Science student specializing in AI systems and modern web development.
          I build fast, scalable, and user-focused applications.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="bg-green-500 px-6 py-2 rounded"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="border border-green-500 px-6 py-2 rounded"
          >
            Contact Me
          </Link>

          {/* ✅ CV BUTTON */}
          <a
            href="/Augustus_Chiponde_CV.pdf"
            download
            className="border border-white px-6 py-2 rounded"
          >
            Download CV
          </a>
        </motion.div>

      </section>

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