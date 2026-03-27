"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Briefcase, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold text-[var(--accent)] mb-3 uppercase tracking-[0.2em]">
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Work Experience
          </h2>
        </motion.div>

        {/* Experience entry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-transparent hidden sm:block" />

          <div className="sm:pl-10 relative">
            {/* Timeline dot */}
            <div className="absolute left-[-5px] top-1 w-[11px] h-[11px] rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg-secondary)] hidden sm:block" />

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden glow-card transition-all duration-300">
              {/* Gradient strip */}
              <div className="h-1 w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />

              <div className="p-6 sm:p-8">
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center">
                      <Briefcase size={22} className="text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">
                        {experience.role}
                      </h3>
                      <p className="text-sm text-[var(--accent)] font-semibold">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <span className="sm:ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-[var(--green)] bg-[var(--green-bg)] border border-[var(--green-border)] px-3 py-1.5 rounded-full w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                    Current Position
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-5 mb-6 text-sm text-[var(--text-tertiary)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {experience.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {experience.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {experience.description}
                </p>

                {/* Key achievements */}
                {experience.highlights && (
                  <div className="pt-6 border-t border-[var(--border)]">
                    <p className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-4">
                      Key Responsibilities & Achievements
                    </p>
                    <ul className="space-y-3">
                      {experience.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                          className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[var(--accent)] mt-0.5 shrink-0"
                          />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Products built */}
                <div className="pt-6 mt-6 border-t border-[var(--border)]">
                  <p className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">
                    Key Products Built
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Complya",
                      "Zagit",
                      "Ilmiya LMS",
                      "ReEnvoy",
                      "Morpheus AI",
                      "RPlayer",
                      "TokBackup",
                      "Aflah",
                      "Skinny Tax",
                      "Singer Voice",
                    ].map((product) => (
                      <span
                        key={product}
                        className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 cursor-default"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
