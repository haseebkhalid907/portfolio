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
  Loader2,
  AlertCircle,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

// Web3Forms — free contact form API
// Get your access key at https://web3forms.com (free, 250 submissions/month)
const WEB3FORMS_KEY = "414683a4-5ab8-4b5c-81c5-0bcdba95736b";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: formData.name,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: undefined,
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[140px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 text-center"
        >
          <p className="text-[11px] font-bold text-[var(--accent)] mb-4 uppercase tracking-[0.25em]">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3 leading-tight">
            Have a project in mind?
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-md mx-auto">
            I&apos;d love to hear about it. Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-3 sm:space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="group card flex items-start gap-4 p-4 sm:p-5"
              >
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon size={18} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-[var(--text-tertiary)] font-bold uppercase tracking-[0.12em] mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-semibold truncate block"
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
              className="flex gap-3 pt-1"
            >
              {[
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Github, href: personalInfo.github, label: "GitHub" },
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
            <form onSubmit={handleSubmit} className="card p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green)] text-sm font-medium">
                  <CheckCircle size={18} className="shrink-0" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 text-red-600 dark:text-red-400 text-sm font-medium">
                  <AlertCircle size={18} className="shrink-0" />
                  {errorMsg}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-[var(--text-tertiary)] font-bold uppercase tracking-[0.12em] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    disabled={status === "sending"}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)] transition-all disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[var(--text-tertiary)] font-bold uppercase tracking-[0.12em] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    disabled={status === "sending"}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)] transition-all disabled:opacity-60"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-[var(--text-tertiary)] font-bold uppercase tracking-[0.12em] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What's this about?"
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)] transition-all disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-[11px] text-[var(--text-tertiary)] font-bold uppercase tracking-[0.12em] mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)] transition-all resize-none disabled:opacity-60"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
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
