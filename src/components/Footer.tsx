"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-[var(--text-primary)] hover:opacity-70 transition-opacity"
            >
              haseeb<span className="text-[var(--accent)]">.</span>
            </a>
            <span className="hidden sm:block w-px h-4 bg-[var(--border)]" />
            <p className="text-sm text-[var(--text-tertiary)] font-medium flex items-center gap-1.5">
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
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all duration-200"
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
