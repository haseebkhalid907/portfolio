"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Briefcase, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-36 bg-[var(--bg-secondary)] relative">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <p className="text-[11px] font-bold text-[var(--accent)] mb-4 uppercase tracking-[0.25em]">
            Career
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
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
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/40 to-transparent hidden sm:block" />

          <div className="sm:pl-12 relative">
            {/* Timeline dot */}
            <div className="absolute left-[-6px] top-2 w-[13px] h-[13px] rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg-secondary)] shadow-[0_0_0_4px_var(--accent-soft)] hidden sm:block" />

            <div className="card overflow-hidden">
              <div className="p-5 sm:p-8 lg:p-10">
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-mid)] flex items-center justify-center shadow-md">
                      <Briefcase size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        {experience.role}
                      </h3>
                      <p className="text-sm text-[var(--accent)] font-semibold">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <span className="sm:ml-auto inline-flex items-center gap-2 text-xs font-semibold text-[var(--green)] bg-[var(--green-bg)] border border-[var(--green-border)] px-3.5 py-1.5 rounded-full w-fit">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green)]" />
                    </span>
                    Current Position
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <span className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] font-medium">
                    <Calendar size={15} className="text-[var(--accent)]" />
                    {experience.period}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] font-medium">
                    <MapPin size={15} className="text-[var(--accent)]" />
                    {experience.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-8">
                  {experience.description}
                </p>

                {/* Key achievements */}
                {experience.highlights && (
                  <div className="pt-7 border-t border-[var(--border)]">
                    <p className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-[0.15em] mb-5">
                      Key Responsibilities & Achievements
                    </p>
                    <ul className="space-y-3.5">
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
                <div className="pt-7 mt-7 border-t border-[var(--border)]">
                  <p className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-[0.15em] mb-4">
                    Key Products Built
                  </p>
                  <div className="flex flex-wrap gap-2">
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
                      <span key={product} className="tag">
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
