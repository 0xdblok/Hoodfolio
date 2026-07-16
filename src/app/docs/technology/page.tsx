import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology — Hoodfolio Docs",
};

export default function Technology() {
  return (
    <>
      <p className="font-mono text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
        Stack
      </p>
      <h1 className="mt-2 text-balance font-heading text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
        Technology
      </h1>

      <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
        Hoodfolio is built with a modern, performance-oriented stack designed
        for rapid iteration, real-time data, and eventual on-chain integration.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Frontend
      </h2>

      <div className="mt-4 grid gap-2">
        {[
          {
            tech: "Next.js",
            role: "React framework with App Router, server components, and static generation.",
          },
          {
            tech: "TypeScript",
            role: "Type-safe development across the entire codebase.",
          },
          {
            tech: "Tailwind CSS",
            role: "Utility-first CSS with a custom OKLCH design token system.",
          },
          {
            tech: "shadcn/ui",
            role: "Accessible, composable UI primitives built on Radix.",
          },
          {
            tech: "Framer Motion",
            role: "Declarative animations and spring physics for premium interactions.",
          },
          {
            tech: "Lucide Icons",
            role: "Consistent, crisp icon system.",
          },
        ].map((item) => (
          <div
            key={item.tech}
            className="flex flex-col gap-1 rounded-lg border border-border/15 bg-card/20 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="shrink-0 font-mono text-[12px] font-semibold text-brand">
              {item.tech}
            </span>
            <span className="text-[13px] leading-relaxed text-muted-foreground">
              {item.role}
            </span>
          </div>
        ))}
      </div>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Backend
      </h2>

      <div className="mt-4 grid gap-2">
        {[
          {
            tech: "Next.js Route Handlers",
            role: "API layer built directly into the Next.js application.",
          },
          {
            tech: "Supabase",
            role: "Managed PostgreSQL with real-time subscriptions, auth, and storage.",
          },
          {
            tech: "PostgreSQL",
            role: "Relational database for users, portfolios, competitions, and scores.",
          },
          {
            tech: "Drizzle ORM",
            role: "Type-safe database queries with migrations and schema management.",
          },
          {
            tech: "Zod",
            role: "Schema validation for API inputs, competition rules, and portfolio constraints.",
          },
        ].map((item) => (
          <div
            key={item.tech}
            className="flex flex-col gap-1 rounded-lg border border-border/15 bg-card/20 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="shrink-0 font-mono text-[12px] font-semibold text-brand">
              {item.tech}
            </span>
            <span className="text-[13px] leading-relaxed text-muted-foreground">
              {item.role}
            </span>
          </div>
        ))}
      </div>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Authentication
      </h2>

      <div className="mt-4 rounded-xl border border-border/15 bg-card/30 px-5 py-4">
        <span className="font-mono text-[12px] font-semibold text-brand">
          Privy
        </span>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
          Wallet-based authentication via Privy. Players connect with their
          existing wallets — no separate account creation required. Privy
          handles embedded wallets, social login fallbacks, and session
          management out of the box, letting us focus on the product experience.
        </p>
      </div>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Infrastructure
      </h2>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {[
          { tech: "Vercel", role: "Hosting, edge functions, preview deployments." },
          { tech: "GitHub", role: "Source control, CI/CD, code review." },
          { tech: "PostHog", role: "Product analytics and feature flags." },
          { tech: "Sentry", role: "Error monitoring and performance tracing." },
          { tech: "Upstash Redis", role: "Optional: rate limiting, caching, real-time leaderboards.", tag: "Optional" },
          { tech: "Inngest", role: "Optional: durable workflows for scheduled competitions and scoring.", tag: "Optional" },
        ].map((item) => (
          <div
            key={item.tech}
            className="flex flex-col gap-1 rounded-lg border border-border/15 bg-card/20 px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-[12px] font-semibold text-brand">
                {item.tech}
              </span>
              {item.tag && (
                <span className="rounded-full border border-border/15 px-2 py-0.5 font-mono text-[9px] text-muted-foreground">
                  {item.tag}
                </span>
              )}
            </div>
            <span className="text-[12px] text-muted-foreground">
              {item.role}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
