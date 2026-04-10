"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="mt-24 max-w-5xl mx-auto px-6">

      <h2 className="text-2xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 p-6 rounded-xl shadow-md"
          >

            <h3 className="text-xl font-semibold mb-4 text-green-400">
              {skill.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="bg-slate-700 px-3 py-1 rounded text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}