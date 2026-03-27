"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowRight, ChevronDown, Folder } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold text-[var(--accent)] mb-3 uppercase tracking-[0.2em]">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
            Featured Projects
          </h2>
          <p className="text-[var(--text-secondary)] text-[15px] max-w-lg">
            A selection of products I&apos;ve built — from SaaS platforms to
            cloud infrastructure tools and AI-powered applications.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-5 mb-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden glow-card transition-all duration-300"
            >
              {/* Accent top bar */}
              <div className="h-[2px] w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Folder size={20} className="text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                      project.status === "Current" || project.status === "Ongoing"
                        ? "text-[var(--green)] bg-[var(--green-bg)] border border-[var(--green-border)]"
                        : "text-[var(--amber)] bg-[var(--amber-bg)] border border-[var(--amber-border)]"
                    }`}
                  >
                    {(project.status === "Current" ||
                      project.status === "Ongoing") && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                    )}
                    {project.status}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {project.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  {project.tags.slice(0, 7).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 7 && (
                    <span className="text-xs px-2 py-1 text-[var(--text-tertiary)]">
                      +{project.tags.length - 7}
                    </span>
                  )}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4 group/link"
                  >
                    Visit Project
                    <ExternalLink size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                More Projects
                <span className="text-xs font-normal text-[var(--text-tertiary)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded-full">
                  {other.length}
                </span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {other.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden hover:border-[var(--border-strong)] glow-card transition-all duration-300"
                  >
                    <div className="h-[2px] w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${
                            project.status === "Current"
                              ? "text-[var(--green)] bg-[var(--green-bg)] border-[var(--green-border)]"
                              : "text-[var(--amber)] bg-[var(--amber-bg)] border-[var(--amber-border)]"
                          }`}
                        >
                          {project.status}
                        </span>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors p-1"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] mb-4 flex-1 leading-relaxed">
                        {project.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-tertiary)] border border-[var(--border)]"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-[11px] px-1.5 py-0.5 text-[var(--text-tertiary)]">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-strong)] text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] transition-all duration-300"
          >
            {showAll ? "Show Less" : `View all ${projects.length} projects`}
            <ChevronDown
              size={15}
              className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
