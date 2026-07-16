"use client";

import { useState, type FC, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Compass,
  Swords,
  Telescope,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";
import { Logo } from "@/components/logo";

const SECTIONS = [
  {
    href: "/docs",
    label: "Overview",
    icon: <BookOpen size={16} />,
    exact: true,
  },
  {
    href: "/docs/how-it-works",
    label: "How It Works",
    icon: <Compass size={16} />,
  },
  {
    href: "/docs/competition-system",
    label: "Competition System",
    icon: <Swords size={16} />,
  },
  {
    href: "/docs/vision",
    label: "Vision & Roadmap",
    icon: <Telescope size={16} />,
  },
];

const DocsSidebar: FC<{ onNavigate?: () => void }> = ({ onNavigate }) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-0.5">
      {SECTIONS.map((section) => {
        const isActive = section.exact
          ? pathname === section.href
          : pathname.startsWith(section.href);

        return (
          <Link
            key={section.href}
            href={section.href}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-all ${
              isActive
                ? "bg-brand/10 text-brand"
                : "text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground"
            }`}
          >
            <span className={isActive ? "text-brand" : "text-muted-foreground"}>
              {section.icon}
            </span>
            {section.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar (mobile) */}
      <div className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border/15 bg-background/90 backdrop-blur-xl px-5 md:hidden">
        <Link href="/docs" className="flex items-center">
          <Logo className="text-sm" />
          <span className="ml-2 font-mono text-[10px] text-muted-foreground">
            Docs
          </span>
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/20"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      <div className="mx-auto flex max-w-7xl">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col border-r border-border/15 px-4 py-6 md:flex">
          <div className="mb-6 flex items-center px-1">
            <Link href="/" className="flex items-center">
              <Logo className="text-sm" />
              <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                Docs
              </span>
            </Link>
          </div>
          <DocsSidebar />
          <div className="mt-auto pt-6">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft size={14} />
              Back to Hoodfolio
            </Link>
          </div>
        </aside>

        {/* Mobile sidebar drawer */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 z-40 flex h-full w-64 flex-col border-r border-border/15 bg-background px-5 py-6 md:hidden"
              >
                <div className="mb-6 flex items-center">
                  <Link href="/" className="flex items-center">
                    <Logo className="text-sm" />
                    <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                      Docs
                    </span>
                  </Link>
                </div>
                <DocsSidebar onNavigate={() => setSidebarOpen(false)} />
                <div className="mt-auto pt-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <ArrowLeft size={14} />
                    Back to Hoodfolio
                  </Link>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Content */}
        <main className="min-w-0 flex-1 px-6 py-10 md:px-12 md:py-14">
          <article className="prose-custom mx-auto max-w-3xl">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}
