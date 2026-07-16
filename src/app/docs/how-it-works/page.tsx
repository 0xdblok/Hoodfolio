import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Hoodfolio Docs",
};

export default function HowItWorks() {
  return (
    <>
      <p className="font-mono text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
        Core Concepts
      </p>
      <h1 className="mt-2 text-balance font-heading text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
        How It Works
      </h1>

      <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
        Hoodfolio is built around a simple loop: pick assets, enter a
        competition, and watch your portfolio compete in real time. Every layer
        of the experience is designed to be social, transparent, and
        strategically deep.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        1. Create Your Portfolio
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Every portfolio contains exactly five assets — no more, no less. This
        constraint is intentional: it forces strategic thinking. You must
        consider diversification, correlation, volatility, and sector exposure.
        The five you leave out matter as much as the five you choose.
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        During the MVP, assets are simulated representations of major publicly
        traded companies and cryptocurrencies. As Robinhood Chain matures,
        these will be replaced with tokenized financial assets.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        2. Enter a Competition
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Competitions are the heart of Hoodfolio. New competitions launch daily
        and weekly, with clear start times, eligible assets, and scoring rules.
        Every player enters the same pool — your portfolio competes directly
        against thousands of others.
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Competitions are independent from one another. You can participate in a
        daily competition on Tuesday and a weekly league simultaneously, each
        with different portfolios if you wish.
      </p>

      <div className="mt-6 rounded-xl border border-border/15 bg-card/30 p-5">
        <h3 className="text-sm font-semibold">Competition Structure</h3>
        <ul className="mt-3 ml-5 flex list-disc flex-col gap-1.5 text-[13px] leading-relaxed text-muted-foreground">
          <li>
            <strong className="text-foreground">Daily:</strong> New competition
            every day at 9:30 AM ET. Results finalize after market close.
          </li>
          <li>
            <strong className="text-foreground">Weekly:</strong> Championships
            launch every Monday. Cumulative scoring across the full week.
          </li>
          <li>
            <strong className="text-foreground">Seasonal:</strong> Planned for
            future releases. Multi-week leagues with playoffs and finals.
          </li>
        </ul>
      </div>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        3. Scoring &amp; Ranking
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        The portfolio engine evaluates every portfolio continuously using market
        data. Scoring considers multiple dimensions beyond simple percentage
        gain.
      </p>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {[
          { label: "Performance", desc: "Percentage return across all five assets" },
          { label: "Diversification", desc: "Penalty for over-concentration in one sector" },
          { label: "Volatility", desc: "Risk-adjusted return — consistency is rewarded" },
          { label: "Relative Strength", desc: "Performance vs. the competition average" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-border/15 bg-card/20 px-4 py-3"
          >
            <span className="font-mono text-[11px] font-semibold text-brand">
              {item.label}
            </span>
            <p className="mt-0.5 text-[12px] text-muted-foreground">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
        The scoring architecture is modular by design. New scoring models,
        competition formats, and rule sets can be introduced without rebuilding
        the platform — allowing the meta to evolve over time.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        4. Climb the Leaderboard
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        The leaderboard is the product. Rankings update continuously as market
        data flows in. Every player&apos;s portfolio is public — you can see
        exactly what the top players are holding, learn from their strategy, and
        adapt for the next competition.
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Leaderboards are competition-specific. A global reputation score tracks
        your long-term performance across all competitions, building a
        verifiable track record over time.
      </p>
    </>
  );
}
