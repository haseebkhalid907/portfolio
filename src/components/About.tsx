"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Globe, Layers, Zap, TrendingUp, Users } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Full Stack Development",
    desc: "End-to-end applications from React/Vue frontends to Node.js backends with robust database architecture and API design.",
  },
  {
    icon: Globe,
    title: "Multi-Tenant SaaS",
    desc: "Organization-scoped architectures with role-based access, subscription billing, and isolated database environments.",
  },
  {
    icon: Zap,
    title: "Cloud Native & DevOps",
    desc: "Docker containerization, Terraform IaC, and CI/CD pipelines across GCP, AWS, and Azure with production monitoring.",
  },
  {
    icon: Code2,
    title: "Real-Time Systems",
    desc: "WebSocket integrations, live streaming, real-time notifications, and interactive dashboards with live data feeds.",
  },
  {
    icon: TrendingUp,
    title: "Performance & Analytics",
    desc: "Elastic APM, New Relic monitoring, Amplitude analytics, and session replay for data-driven optimization.",
  },
  {
    icon: Users,
    title: "End-to-End Delivery",
    desc: "From requirements gathering and schema design to deployment and monitoring — complete ownership of the product lifecycle.",
  },
];

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Tech Stacks" },
  { value: 3, suffix: "", label: "Cloud Platforms" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = duration / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold text-[var(--accent)] mb-3 uppercase tracking-[0.2em]">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-5">
            Engineering products that{" "}
            <span className="gradient-text">scale and deliver value</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl text-base leading-relaxed">
            I&apos;m a Full Stack Engineer specializing in building production-grade SaaS platforms,
            cloud infrastructure tools, and real-time applications. I thrive on turning complex
            business requirements into elegant, maintainable systems using modern JavaScript/TypeScript stacks.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 pb-16 border-b border-[var(--border)]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="text-center sm:text-left"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[var(--text-tertiary)] font-medium mt-1.5 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
              className="group p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] hover:border-[var(--border-strong)] glow-card transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={20} className="text-[var(--accent)]" />
              </div>
              <h3 className="text-[15px] font-semibold text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
