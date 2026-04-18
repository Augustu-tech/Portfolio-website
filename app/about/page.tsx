"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold"
        >
          About Me
        </motion.h1>

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 leading-relaxed"
        >
          I'm Augustus, a Computer Science student with a strong focus on
          Artificial Intelligence and modern web development. I enjoy building
          systems that solve real-world problems, from intelligent applications
          to scalable web platforms.
        </motion.p>

        {/* WHAT I DO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <h2 className="text-xl font-semibold">What I Do</h2>

          <p className="text-gray-400 mt-3 leading-relaxed">
            I specialize in developing full-stack applications using modern
            technologies like React, Next.js, and backend systems. I also work
            with machine learning models to build intelligent solutions such as
            phishing detection systems and automation tools.
          </p>
        </motion.div>

        {/* SKILLS SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <h2 className="text-xl font-semibold">Skills & Tools</h2>

          <ul className="mt-3 text-gray-400 space-y-2">
            <li>• JavaScript (React, Next.js)</li>
            <li>• Python (Machine Learning, Automation)</li>
            <li>• MongoDB & APIs</li>
            <li>• UI/UX and responsive design</li>
          </ul>
        </motion.div>

        {/* GOALS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <h2 className="text-xl font-semibold">My Goal</h2>

          <p className="text-gray-400 mt-3 leading-relaxed">
            My goal is to become a highly skilled software engineer specializing
            in AI-driven systems and scalable applications. I am continuously
            learning, building, and improving to reach a professional level where
            I can contribute to impactful global solutions.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 flex gap-4 flex-wrap"
        >
          <Link
            href="/contact"
            className="bg-green-500 px-6 py-2 rounded"
          >
            Contact Me
          </Link>

          <Link
            href="/projects"
            className="border border-green-500 px-6 py-2 rounded"
          >
            View Projects
          </Link>
        </motion.div>

      </div>

    </main>
  );
}