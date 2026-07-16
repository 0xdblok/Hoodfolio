import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs — Hoodfolio",
  description: "Hoodfolio documentation: overview, how it works, competition system, technology, and vision.",
};

export default function DocsOverview() {
  return (
    <>
      <p className="font-mono text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
        Overview
      </p>
      <h1 className="mt-2 text-balance font-heading text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
        What is Hoodfolio?
      </h1>

      <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
        Hoodfolio is a competitive portfolio strategy game built for the next
        generation of tokenized finance.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Inspired by Fantasy Top, Sorare, stock market competitions and
        Robinhood&apos;s vision for tokenized assets, Hoodfolio allows players
        to build portfolios of financial assets and compete against other
        players through daily, weekly and seasonal competitions.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Unlike traditional trading simulators, Hoodfolio is designed around{" "}
        <strong className="text-foreground">competition, strategy, social identity</strong>{" "}
        and{" "}
        <strong className="text-foreground">on-chain reputation</strong> rather
        than simply maximizing returns.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Vision
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Financial markets are becoming increasingly social. Investors no longer
        want to trade in isolation. They want to compare strategies, compete
        with friends, climb leaderboards, build reputations and share their
        best-performing portfolios.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Hoodfolio transforms investing into a competitive experience where
        portfolio construction becomes the game. The long-term vision is to
        become the competitive layer for tokenized stocks and financial assets
        on Robinhood Chain.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Core Principles
      </h2>

      <div className="mt-4 grid gap-3">
        {[
          {
            label: "Strategy over speculation",
            desc: "Winning requires portfolio construction, diversification and risk management rather than simply buying the strongest-performing asset.",
          },
          {
            label: "Accessible finance",
            desc: "Players should be able to understand the product even without prior crypto experience.",
          },
          {
            label: "Social competition",
            desc: "Leaderboards, public portfolios and rankings are first-class features. The competition itself is the product.",
          },
          {
            label: "Progressive decentralization",
            desc: "The first version prioritizes usability and rapid iteration. Future versions progressively introduce on-chain verification, tokenized assets and decentralized competition infrastructure.",
          },
        ].map((p) => (
          <div
            key={p.label}
            className="rounded-xl border border-border/15 bg-card/30 px-5 py-4"
          >
            <h3 className="text-sm font-semibold">{p.label}</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        The Core Concept
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Every player creates a portfolio composed of exactly five assets.
        Initially these assets are simulated representations of publicly traded
        companies. As Robinhood Chain matures, simulated assets can
        progressively be replaced with tokenized financial assets while
        preserving the exact same gameplay.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Players join competitions where portfolio performance is continuously
        scored using market data and predefined competition rules. Rather than
        predicting a single asset, players must construct balanced portfolios
        capable of outperforming thousands of competitors.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Version One (MVP)
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        The MVP focuses exclusively on free competitions with simulated
        portfolios and virtual scoring — allowing anyone to participate without
        financial risk.
      </p>

      <ul className="mt-4 ml-5 flex list-disc flex-col gap-2 text-[15px] leading-relaxed text-muted-foreground">
        <li>Connect a wallet and create a profile</li>
        <li>Build a portfolio of five assets</li>
        <li>Participate in daily competitions</li>
        <li>Join weekly leagues</li>
        <li>Compare scores on live leaderboards</li>
        <li>View historical performance</li>
        <li>Share portfolio cards</li>
        <li>Invite friends using referral codes</li>
      </ul>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        No deposits, trading or real-money contests are required during the
        first release. The goal is to validate the competitive format, build
        community, and prepare the platform for on-chain integration.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Robinhood Chain
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Hoodfolio is designed specifically for Robinhood Chain — the convergence
        of traditional finance and programmable on-chain infrastructure. Its
        focus on tokenized financial assets makes it the ideal ecosystem for
        competitive portfolio applications.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        The first release intentionally avoids depending on deep on-chain
        liquidity, allowing the product to launch and prove its format before
        tokenized stocks become widely available. When Robinhood Stock Tokens
        reach sufficient maturity, Hoodfolio will integrate them as the native
        asset layer.
      </p>
    </>
  );
}
