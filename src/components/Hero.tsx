"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
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
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
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

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--hero-gradient)" }} />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[100px]" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--gradient-end)] opacity-[0.025] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center py-32 lg:py-0">
          {/* Left content */}
          <div className="max-w-2xl">
            {/* Status badge */}
            <motion.div {...fadeUp(0.1)} className="mb-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--green-bg)] border border-[var(--green-border)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--green)]" />
                </span>
                <span className="text-xs font-semibold text-[var(--green)] tracking-wide">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg text-[var(--text-secondary)] mb-4 font-medium">
              Hi there, I&apos;m{" "}
              <span className="text-[var(--accent)] font-semibold">Haseeb Khalid</span>
            </motion.p>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.3)}
              className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] font-extrabold tracking-tight leading-[1.08] mb-4"
            >
              I build products
              <br />
              <span className="gradient-text">people love to use.</span>
            </motion.h1>

            {/* Typed role */}
            <motion.div {...fadeUp(0.4)} className="h-9 mb-6 flex items-center">
              <span className="text-lg sm:text-xl font-mono font-semibold text-[var(--accent)] tracking-tight">
                {displayed}
              </span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.45)}
              className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-10 max-w-xl"
            >
              4+ years crafting scalable SaaS platforms, cloud infrastructure
              tools, and real-time systems across GCP, AWS & Azure.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.55)} className="flex flex-wrap items-center gap-3 mb-14">
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={16} />
                Get in Touch
              </a>
              {personalInfo.resumeUrl && (
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Download size={16} />
                  Resume
                </a>
              )}
            </motion.div>

            {/* Social */}
            <motion.div {...fadeUp(0.65)} className="flex items-center gap-5">
              <span className="text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-[0.15em]">
                Connect
              </span>
              <div className="h-px w-10 bg-[var(--border)]" />
              <div className="flex items-center gap-1">
                {[
                  { icon: Github, href: personalInfo.github, label: "GitHub" },
                  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] border border-transparent hover:border-[var(--border)] transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Glowing ring */}
              <div className="w-[320px] h-[320px] rounded-full border border-[var(--border)] relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-soft)] to-transparent" />
                <div className="w-[240px] h-[240px] rounded-full border border-[var(--border)] flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-[var(--accent-soft)]" />
                  <div className="w-[160px] h-[160px] rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center shadow-lg relative z-10">
                    <span className="text-white text-5xl font-extrabold">HK</span>
                  </div>
                </div>
                {/* Floating tech tags */}
                {[
                  { text: "React", top: "5%", left: "-10%", delay: 0 },
                  { text: "Node.js", top: "15%", right: "-15%", delay: 0.5 },
                  { text: "TypeScript", bottom: "15%", left: "-18%", delay: 1 },
                  { text: "AWS", bottom: "5%", right: "-8%", delay: 1.5 },
                ].map((tag) => (
                  <motion.div
                    key={tag.text}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + tag.delay, duration: 0.5, type: "spring" }}
                    className="absolute tag !bg-[var(--bg-card)] shadow-md !border-[var(--border)] !text-[var(--text-primary)] !font-semibold"
                    style={{ top: tag.top, left: tag.left, right: tag.right, bottom: tag.bottom }}
                  >
                    {tag.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[var(--text-tertiary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
