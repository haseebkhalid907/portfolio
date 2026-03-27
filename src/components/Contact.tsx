"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.open(mailtoLink, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactGradients = [
    "from-indigo-500 to-blue-500",
    "from-emerald-500 to-green-500",
    "from-amber-500 to-orange-500",
  ];

  return (
    <section id="contact" className="py-28 lg:py-36 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[140px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-[11px] font-bold text-[var(--accent)] mb-4 uppercase tracking-[0.25em]">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[var(--text-primary)] mb-3 leading-tight">
            Have a project in mind?
          </h2>
          <p className="text-[var(--text-secondary)] text-base max-w-md mx-auto">
            I&apos;d love to hear about it. Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: Phone,
                label: "Phone",
                value: personalInfo.phone,
                href: `tel:${personalInfo.phone}`,
              },
              {
                icon: MapPin,
                label: "Location",
                value: personalInfo.location,
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="group card flex items-start gap-4 p-5"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${contactGradients[i]} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] text-[var(--text-tertiary)] font-bold uppercase tracking-[0.12em] mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-semibold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--text-primary)] font-semibold">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-3 pt-2"
            >
              {[
                {
                  icon: Linkedin,
                  href: personalInfo.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: personalInfo.github,
                  label: "GitHub",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !rounded-xl flex-1 justify-center"
                >
                  <Icon size={16} />
                  {label}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="card p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-[var(--text-tertiary)] font-bold uppercase tracking-[0.12em] mb-2.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[var(--text-tertiary)] font-bold uppercase tracking-[0.12em] mb-2.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-[var(--text-tertiary)] font-bold uppercase tracking-[0.12em] mb-2.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
