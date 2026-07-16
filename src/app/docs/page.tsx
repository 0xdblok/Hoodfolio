import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs — Hoodfolio",
  description:
    "Hoodfolio documentation: the competitive layer for tokenized investing on Robinhood Chain.",
};

/* ASCII architecture diagram rendered as a pre block */
const ArchitectureDiagram = () => (
  <div className="my-8 overflow-x-auto rounded-xl border border-border/15 bg-card/20 p-5">
    <pre className="font-mono text-[11px] leading-[1.7] text-muted-foreground">
{`   ┌──────────────────────────────────────────────────────────┐
   │                    HOODFOLIO  PLATFORM                    │
   │                                                          │
   │  ┌──────────┐   ┌──────────┐   ┌──────────────────┐     │
   │  │ PLAYERS  │   │   PORTFOLIO   │   │  COMPETITIONS   │     │
   │  │          │   │   ENGINE      │   │                  │     │
   │  │ • Wallet │──▶│ • 5 assets    │──▶│ • Daily          │     │
   │  │ • Profile│   │ • Scoring     │   │ • Weekly         │     │
   │  │ • Rep    │   │ • Rebalancing │   │ • Seasonal       │     │
   │  └──────────┘   └──────────────┘   └────────┬─────────┘     │
   │                                              │               │
   │                    ┌─────────────────────────┘               │
   │                    ▼                                         │
   │  ┌─────────────────────────────────────────────┐            │
   │  │              LEADERBOARD ENGINE              │            │
   │  │                                             │            │
   │  │  • Real-time ranking    • Historical data   │            │
   │  │  • Global / per-comp    • Social sharing    │            │
   │  └─────────────────────────────────────────────┘            │
   │                                                              │
   │  ┌─────────────────────────────────────────────────────┐    │
   │  │               ROBINHOOD CHAIN LAYER                  │    │
   │  │                                                     │    │
   │  │  • Tokenized stocks    • On-chain verification      │    │
   │  │  • Instant settlement  • Protocol rewards           │    │
   └──────────────────────────────────────────────────────────────┘`}
    </pre>
    <p className="mt-3 text-center font-mono text-[10px] text-muted-foreground/50">
      Hoodfolio platform architecture — from player to on-chain settlement
    </p>
  </div>
);

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
        Hoodfolio is the competitive layer for tokenized investing — a platform
        where portfolio construction becomes a social, strategic, and verifiable
        game. It transforms the solitary act of investing into a multiplayer
        experience where every decision is measured, ranked, and shared.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Built for Robinhood Chain, Hoodfolio allows players to build portfolios
        of tokenized financial assets and compete in daily, weekly, and seasonal
        competitions. Unlike traditional trading platforms that optimize for
        volume and frequency, Hoodfolio optimizes for skill expression — the best
        portfolio builders rise to the top, and everyone can see exactly how
        they got there.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        The product draws inspiration from several converging trends: the
        explosive growth of fantasy sports platforms like Sorare and Fantasy
        Top, which proved that millions of people want to compete around
        real-world data; the rise of stock market competitions and prediction
        markets, which showed that financial outcomes are compelling spectator
        sports; and Robinhood&apos;s vision for tokenized assets, which makes
        programmable, composable financial infrastructure available to anyone.
        Hoodfolio sits at the intersection of all three.
      </p>

      <ArchitectureDiagram />

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        The Problem
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Investing today is deeply isolating. Most platforms present the same
        interface: a solitary dashboard, a personal portfolio, a line chart
        going up or down. There is no community, no shared experience, no way to
        know if your strategy is actually good or simply lucky. You might
        outperform the market and have no one to share it with. You might
        underperform and have no benchmark beyond an index fund.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        At the same time, the tools for competitive, social finance are
        emerging. Fantasy sports platforms have demonstrated that people will
        spend hours researching, strategizing, and competing around data that
        already exists in the world — player statistics, match outcomes, league
        tables — when the competition format is compelling. Robinhood Chain is
        building the infrastructure to make financial assets programmable,
        tokenized, and composable. The missing piece is the application layer
        that turns those assets into a game people want to play.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Hoodfolio is that application layer. It takes tokenized financial assets
        and wraps them in a competition system that makes portfolio construction
        intrinsically social, competitive, and rewarding — not as a side
        feature, but as the core experience.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Core Principles
      </h2>

      <div className="mt-4 grid gap-3">
        {[
          {
            label: "Strategy over speculation",
            desc: "Hoodfolio rewards portfolio construction, not luck. Winning requires understanding diversification, correlation, volatility, sector exposure, and risk-adjusted returns — not just picking the asset that went up the most. The scoring engine evaluates portfolios across multiple dimensions, and the top-ranked players are those who demonstrate consistent, disciplined strategy over time. A single lucky pick won't carry you; consistent outperformance will.",
          },
          {
            label: "Accessible finance",
            desc: "The platform is designed to be understood by someone who has never used a crypto wallet. Portfolio concepts map to familiar ideas: you pick five things, you compete with friends, you see who wins. The underlying technology — tokenized assets, on-chain settlement, cryptographic verification — operates beneath a surface that feels intuitive. Hoodfolio exists to onboard the next hundred million users to on-chain finance, not to serve the existing crypto-native audience.",
          },
          {
            label: "Social competition",
            desc: "Leaderboards, public portfolios, and comparative rankings are not secondary features — they are the product. Every portfolio is visible. Every strategy is inspectable. The top player's five assets are public knowledge, creating a dynamic where the meta evolves continuously as players adapt to what's working. Reputation scores follow players across competitions, building a portable identity that represents their skill level over months and years.",
          },
          {
            label: "Verifiable outcomes",
            desc: "Everything that matters is on-chain. Portfolio selections, competition entries, scoring calculations, and final rankings are cryptographically verifiable. There is no hidden algorithm, no subjective judging, no opaque fee structure. The Robinhood Chain settlement layer ensures that when a competition ends, the results are immutable and the rewards are distributed automatically. Trust is not required because verification is built into the protocol.",
          },
        ].map((p) => (
          <div
            key={p.label}
            className="rounded-xl border border-border/15 bg-card/30 px-5 py-4"
          >
            <h3 className="text-sm font-semibold">{p.label}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        How It Compares
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Hoodfolio does not compete with trading platforms — it competes with
        isolation. Where a brokerage optimizes for trade frequency and asset
        accumulation, Hoodfolio optimizes for competition, reputation, and
        shared experience. The table below illustrates the fundamental
        difference in design philosophy.
      </p>

      <div className="mt-5 overflow-x-auto rounded-xl border border-border/15">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border/15">
              <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Dimension
              </th>
              <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Traditional Trading
              </th>
              <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-[0.06em] text-brand uppercase">
                Hoodfolio
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Core loop",
                "Buy low, sell high",
                "Build, compete, rank up",
              ],
              [
                "Social layer",
                "None — solitary experience",
                "Public portfolios, leaderboards, reputation",
              ],
              [
                "Success metric",
                "Portfolio value in dollars",
                "Competition rank and reputation score",
              ],
              [
                "Time horizon",
                "Continuous, indefinite",
                "Structured: daily, weekly, seasonal",
              ],
              [
                "Asset layer",
                "Traditional securities",
                "Tokenized assets on Robinhood Chain",
              ],
              [
                "Verifiability",
                "Opaque — trust the broker",
                "On-chain — cryptographic proof",
              ],
              [
                "Risk model",
                "Financial loss possible",
                "Competition entry stakes (simulated or token-based)",
              ],
            ].map(([dim, traditional, hoodfolio]) => (
              <tr key={dim} className="border-b border-border/10">
                <td className="px-5 py-3 font-medium text-foreground">
                  {dim}
                </td>
                <td className="px-5 py-3 text-[13px] leading-relaxed text-muted-foreground">
                  {traditional}
                </td>
                <td className="px-5 py-3 text-[13px] leading-relaxed text-brand">
                  {hoodfolio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Robinhood Chain
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Hoodfolio is designed specifically for Robinhood Chain — the convergence
        of traditional finance and programmable on-chain infrastructure.
        Robinhood Chain enables tokenized representations of real-world
        financial assets: stocks, ETFs, indices, and eventually more complex
        instruments. These tokens settle near-instantly, carry near-zero
        transaction costs, and are natively composable with smart contract
        logic.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        For Hoodfolio, this infrastructure is transformative. Competition entry,
        portfolio composition, scoring calculation, and prize distribution can
        all be expressed as on-chain operations — transparent, automated, and
        trustless. A weekly competition with 50,000 participants can resolve
        automatically the moment markets close, with rewards distributed
        directly to winners&apos; wallets. No manual settlement. No
        counterparty risk. No dispute resolution process.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        The platform is architected to progressively integrate with Robinhood
        Chain as the ecosystem matures. Early competitions use simulated scoring
        to validate the format and build community. As Robinhood Stock Tokens
        become available, they replace simulated assets while preserving the
        exact same gameplay — a player who mastered the simulated version will
        find the on-chain version identical in every way except that the
        underlying assets are real, the settlement is instant, and the
        reputation is permanent.
      </p>
    </>
  );
}
