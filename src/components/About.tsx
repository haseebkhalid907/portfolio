"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Globe, Layers, Zap, TrendingUp, Users } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Full Stack Development",
    desc: "End-to-end React/Vue frontends to Node.js backends with robust database architecture and API design.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Multi-Tenant SaaS",
    desc: "Organization-scoped architectures with role-based access, subscription billing, and isolated databases.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Cloud Native & DevOps",
    desc: "Docker, Terraform IaC, and CI/CD pipelines across GCP, AWS, and Azure with production monitoring.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Code2,
    title: "Real-Time Systems",
    desc: "WebSocket integrations, live streaming, real-time notifications, and interactive dashboards.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Performance & Analytics",
    desc: "Elastic APM, New Relic, Amplitude analytics, and session replay for data-driven optimization.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Users,
    title: "End-to-End Delivery",
    desc: "From requirements gathering and schema design to deployment and monitoring — full product ownership.",
    color: "from-sky-500 to-cyan-500",
  },
];

const stats = [
  { value: 4, suffix: "+", label: "Years Experience", icon: "\u{1F4BC}" },
  { value: 15, suffix: "+", label: "Projects Delivered", icon: "\u{1F680}" },
  { value: 10, suffix: "+", label: "Tech Stacks", icon: "\u{26A1}" },
  { value: 3, suffix: "", label: "Cloud Platforms", icon: "\u2601\uFE0F" },
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
    <section id="about" className="py-20 sm:py-28 lg:py-36 relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-[11px] font-bold text-[var(--accent)] mb-4 uppercase tracking-[0.25em]">
            About Me
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-5 leading-tight">
            Engineering products that{" "}
            <span className="gradient-text">scale and deliver value</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-base lg:text-[17px] leading-relaxed">
            I&apos;m a Full Stack Engineer specializing in building production-grade SaaS platforms,
            cloud infrastructure tools, and real-time applications. I thrive on turning complex
            business requirements into elegant, maintainable systems.
          </p>
        </motion.div>

        {/* Stats row — premium cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="stat-card p-4 sm:p-6 text-center hover:shadow-md transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] sm:text-[11px] text-[var(--text-tertiary)] font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
              className="group card p-6"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <item.icon size={20} className="text-white" />
              </div>
              <h3 className="text-[15px] font-bold text-[var(--text-primary)] mb-2">
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
