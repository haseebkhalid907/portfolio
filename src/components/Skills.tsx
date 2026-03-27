"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolio";
import {
  Palette,
  Server,
  Database,
  ShieldCheck,
  Cloud,
  BarChart3,
  Terminal,
} from "lucide-react";

const categoryMeta: Record<string, { icon: React.ElementType; gradient: string }> = {
  Frontend: { icon: Palette, gradient: "from-violet-500 to-purple-500" },
  Backend: { icon: Server, gradient: "from-emerald-500 to-green-500" },
  "Databases & ORM": { icon: Database, gradient: "from-blue-500 to-cyan-500" },
  "Auth & Payments": { icon: ShieldCheck, gradient: "from-amber-500 to-yellow-500" },
  "Cloud & DevOps": { icon: Cloud, gradient: "from-sky-500 to-indigo-500" },
  "Monitoring & Analytics": { icon: BarChart3, gradient: "from-rose-500 to-pink-500" },
  Languages: { icon: Terminal, gradient: "from-fuchsia-500 to-purple-500" },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 lg:py-36 bg-[var(--bg-secondary)] relative">
      {/* Subtle mesh */}
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-5 max-w-xl"
        >
          <p className="text-[11px] font-bold text-[var(--accent)] mb-4 uppercase tracking-[0.25em]">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[var(--text-primary)] mb-3 leading-tight">
            Skills & Technologies
          </h2>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed">
            A comprehensive toolkit refined over 4+ years of building production applications.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 text-sm font-medium text-[var(--text-tertiary)]">
          {skills.reduce((acc, c) => acc + c.items.length, 0)}+ technologies across {skills.length} categories
        </motion.p>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, i) => {
            const meta = categoryMeta[category.category] || { icon: Terminal, gradient: "from-gray-500 to-gray-600" };
            const Icon = meta.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="group card overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-primary)]">
                        {category.category}
                      </h3>
                      <p className="text-[11px] text-[var(--text-tertiary)] font-medium">
                        {category.items.length} technologies
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
