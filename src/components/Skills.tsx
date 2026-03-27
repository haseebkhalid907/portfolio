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

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Palette,
  Backend: Server,
  "Databases & ORM": Database,
  "Auth & Payments": ShieldCheck,
  "Cloud & DevOps": Cloud,
  "Monitoring & Analytics": BarChart3,
  Languages: Terminal,
};

const categoryColors: Record<string, string> = {
  Frontend: "from-violet-500/10 to-pink-500/10",
  Backend: "from-emerald-500/10 to-teal-500/10",
  "Databases & ORM": "from-blue-500/10 to-cyan-500/10",
  "Auth & Payments": "from-amber-500/10 to-orange-500/10",
  "Cloud & DevOps": "from-sky-500/10 to-indigo-500/10",
  "Monitoring & Analytics": "from-rose-500/10 to-red-500/10",
  Languages: "from-purple-500/10 to-fuchsia-500/10",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-24 lg:py-32 bg-[var(--bg-secondary)] relative"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-xs font-semibold text-[var(--accent)] mb-3 uppercase tracking-[0.2em]">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
            Skills & Technologies
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg text-[15px] leading-relaxed">
            A comprehensive toolkit refined over 4+ years of building production applications.
          </p>
        </motion.div>

        {/* Total skill count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="text-sm font-medium text-[var(--text-tertiary)]">
            {skills.reduce((acc, c) => acc + c.items.length, 0)}+ technologies across {skills.length} categories
          </span>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, i) => {
            const Icon = categoryIcons[category.category] || Terminal;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="group bg-[var(--bg-elevated)] rounded-2xl border border-[var(--border)] hover:border-[var(--border-strong)] glow-card transition-all duration-300 overflow-hidden"
              >
                {/* Gradient header strip */}
                <div className={`h-1 w-full bg-gradient-to-r ${categoryColors[category.category] || "from-violet-500/10 to-pink-500/10"}`} />

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={16} className="text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                        {category.category}
                      </h3>
                      <p className="text-[11px] text-[var(--text-tertiary)]">
                        {category.items.length} technologies
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.06 + j * 0.02 }}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-muted)] transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
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
