"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, FileText, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const roles = [
  "Full Stack Engineer",
  "SaaS Architect",
  "Cloud Native Developer",
  "React & Node.js Expert",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[300px] -right-[200px] w-[600px] h-[600px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px]" />
        <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-pink-500 opacity-[0.03] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--accent)] opacity-[0.02] blur-[150px]" />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-8 w-full py-32">
        <div className="max-w-3xl">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--green-bg)] border border-[var(--green-border)] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
            <span className="text-xs font-medium text-[var(--green)]">
              Available for new projects
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] mb-3 font-medium"
          >
            Hi, I&apos;m <span className="text-[var(--accent)]">Haseeb Khalid</span> —
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-3"
          >
            I build products{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">people love to use.</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="h-8 mb-6 flex items-center"
          >
            <span className="text-lg sm:text-xl font-mono font-medium text-[var(--accent)]">
              {displayed}
            </span>
            <span className="typing-cursor" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-10 max-w-xl"
          >
            4+ years crafting scalable SaaS platforms, cloud infrastructure
            tools, and real-time systems across GCP, AWS & Azure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-16"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white text-sm font-semibold hover:bg-[var(--accent-hover)] shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/30 transition-all duration-300"
            >
              View My Work
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-strong)] text-[var(--text-secondary)] text-sm font-semibold hover:text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] transition-all duration-300"
            >
              <Mail size={15} />
              Get in Touch
            </a>
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-strong)] text-[var(--text-secondary)] text-sm font-semibold hover:text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] transition-all duration-300"
              >
                <Download size={15} />
                Resume
              </a>
            )}
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider">
              Find me on
            </span>
            <div className="h-px w-8 bg-[var(--border-strong)]" />
            <div className="flex items-center gap-1">
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                {
                  icon: Linkedin,
                  href: personalInfo.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: `mailto:${personalInfo.email}`,
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full text-[var(--text-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-muted)] transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-[var(--border-strong)] flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[var(--accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
