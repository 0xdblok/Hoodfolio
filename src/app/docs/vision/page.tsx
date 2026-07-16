import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Roadmap — Hoodfolio Docs",
};

export default function Vision() {
  return (
    <>
      <p className="font-mono text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
        Future
      </p>
      <h1 className="mt-2 text-balance font-heading text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
        Vision &amp; Roadmap
      </h1>

      <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
        The long-term goal is to become the default competitive layer for
        tokenized investing — whether users hold simulated assets today or
        tokenized stocks tomorrow.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Phase 1 — MVP
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Free competitions with simulated portfolios. The goal is to validate the
        core loop, build community, and iterate rapidly based on player
        feedback.
      </p>

      <div className="mt-4 rounded-xl border border-brand/15 bg-brand/[0.03] px-5 py-4">
        <span className="font-mono text-[11px] font-semibold text-brand uppercase tracking-[0.06em]">
          Current Phase
        </span>
        <ul className="mt-3 ml-5 flex list-disc flex-col gap-1.5 text-[13px] leading-relaxed text-muted-foreground">
          <li>Wallet connection via Privy</li>
          <li>Simulated portfolios (5 assets)</li>
          <li>Daily and weekly competitions</li>
          <li>Live leaderboards</li>
          <li>Portfolio cards and social sharing</li>
          <li>Referral system</li>
          <li>Historical performance tracking</li>
        </ul>
      </div>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Phase 2 — Robinhood Chain Integration
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        As Robinhood Chain matures and tokenized financial assets become
        available, Hoodfolio will progressively introduce on-chain features
        while maintaining backward compatibility with simulated competitions.
      </p>

      <ul className="mt-4 ml-5 flex list-disc flex-col gap-2 text-[15px] leading-relaxed text-muted-foreground">
        <li>Robinhood Stock Tokens as native portfolio assets</li>
        <li>On-chain competition verification</li>
        <li>Token-gated competitions with real entry fees and prize pools</li>
        <li>Decentralized scoring infrastructure</li>
        <li>On-chain reputation and achievement system</li>
        <li>Protocol rewards for top performers</li>
      </ul>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Phase 3 — Ecosystem
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Open the platform to creators, sponsors, and partners. Hoodfolio becomes
        a competition infrastructure layer that anyone can build on.
      </p>

      <ul className="mt-4 ml-5 flex list-disc flex-col gap-2 text-[15px] leading-relaxed text-muted-foreground">
        <li>Creator leagues — anyone can design, host, and monetize competitions</li>
        <li>Sponsored tournaments with brand partners</li>
        <li>Sector-specific and themed competitions (tech, crypto, earnings season)</li>
        <li>Seasonal championships with playoffs and finals</li>
        <li>Community governance over competition rules and fee structures</li>
      </ul>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Long-Term Vision
      </h2>

      <div className="mt-4 grid gap-3">
        {[
          {
            label: "Competitive layer for tokenized investing",
            desc: "Hoodfolio aims to become the default destination for competitive portfolio building — the place where investors go to prove their skill, not just track their returns.",
          },
          {
            label: "Social identity and reputation",
            desc: "On-chain reputation scores, achievement badges, and verifiable track records turn portfolio performance into a portable identity across the Web3 ecosystem.",
          },
          {
            label: "Mainstream on-chain onboarding",
            desc: "By starting with simulated assets and familiar financial concepts, Hoodfolio introduces millions of users to on-chain finance through an experience they already understand: competition.",
          },
          {
            label: "Premium but not exclusive",
            desc: "Paid competitions will exist alongside free ones. Token-gated leagues will coexist with open tournaments. The platform scales across commitment levels without leaving anyone behind.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border/15 bg-card/30 px-5 py-4"
          >
            <h3 className="text-sm font-semibold">{item.label}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
