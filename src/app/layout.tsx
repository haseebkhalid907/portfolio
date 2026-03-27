import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Haseeb Khalid — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer with 4+ years of experience building scalable web applications, SaaS platforms, and cloud infrastructure tools.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Cloud Infrastructure",
    "SaaS",
  ],
  openGraph: {
    title: "Haseeb Khalid — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer building scalable SaaS platforms and cloud infrastructure tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
