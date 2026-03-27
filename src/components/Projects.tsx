"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronDown, FolderOpen, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <p className="text-[11px] font-bold text-[var(--accent)] mb-4 uppercase tracking-[0.25em]">
            Portfolio
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3 leading-tight">
            Featured Projects
          </h2>
          <p className="text-[var(--text-secondary)] text-base">
            A selection of products I&apos;ve built — from SaaS platforms to
            cloud infrastructure tools and AI-powered applications.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-14">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group card overflow-hidden"
            >
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-mid)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
                      <FolderOpen size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full ${
                      project.status === "Current" || project.status === "Ongoing"
                        ? "text-[var(--green)] bg-[var(--green-bg)] border border-[var(--green-border)]"
                        : "text-[var(--amber)] bg-[var(--amber-bg)] border border-[var(--amber-border)]"
                    }`}
                  >
                    {(project.status === "Current" || project.status === "Ongoing") && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green)]" />
                      </span>
                    )}
                    {project.status}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-[7px] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline underline-offset-4 group/link"
                  >
                    Visit Project
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
                More Projects
                <span className="text-xs font-semibold text-[var(--text-tertiary)] bg-[var(--bg-secondary)] px-2.5 py-0.5 rounded-full border border-[var(--border)]">
                  {other.length}
                </span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {other.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group card flex flex-col"
                  >
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                            project.status === "Current"
                              ? "text-[var(--green)] bg-[var(--green-bg)] border-[var(--green-border)]"
                              : "text-[var(--amber)] bg-[var(--amber-bg)] border-[var(--amber-border)]"
                          }`}
                        >
                          {project.status}
                        </span>
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all">
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                      <h4 className="text-[15px] font-bold text-[var(--text-primary)] mb-1.5 group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] mb-4 flex-1 leading-relaxed">
                        {project.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="tag !text-[11px] !px-2 !py-0.5">{tag}</span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-[11px] px-1.5 py-0.5 text-[var(--text-tertiary)] font-medium">
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
            className="btn-secondary !rounded-full"
          >
            {showAll ? "Show Less" : `View all ${projects.length} projects`}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
