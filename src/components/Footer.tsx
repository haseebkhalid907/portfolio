"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <a
              href="#home"
              className="text-lg font-semibold tracking-tight text-[var(--text-primary)] hover:opacity-70 transition-opacity"
            >
              haseeb<span className="text-[var(--accent)]">.</span>
            </a>
            <span className="hidden sm:block text-[var(--border-strong)]">|</span>
            <p className="text-sm text-[var(--text-tertiary)] flex items-center gap-1">
              &copy; {currentYear} {personalInfo.name}. Built with
              <Heart size={12} className="text-[var(--accent)] inline" />
              using Next.js
            </p>
          </div>
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
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
