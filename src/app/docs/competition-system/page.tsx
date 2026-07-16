import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competition System — Hoodfolio Docs",
};

const CompetitionLifecycleDiagram = () => (
  <div className="my-8 overflow-x-auto rounded-xl border border-border/15 bg-card/20 p-5">
    <pre className="font-mono text-[11px] leading-[1.7] text-muted-foreground">
{`   ┌─────────────────────────────────────────────────────────┐
   │              COMPETITION LIFECYCLE                       │
   │                                                         │
   │  ANNOUNCED → OPEN → LIVE → FINALIZED → SETTLED          │
   │                                                         │
   │  ┌──────────┐   ┌──────────┐   ┌──────────┐            │
   │  │ Rules    │   │ Players  │   │ Market   │            │
   │  │ published│   │ submit   │   │ data     │            │
   │  │ on-chain │   │ portfolios│  │ feeds    │            │
   │  └──────────┘   └──────────┘   │ scoring  │            │
   │                                 │ engine   │            │
   │                                 └────┬─────┘            │
   │                                      │                  │
   │                                      ▼                  │
   │  ┌──────────┐   ┌──────────┐   ┌──────────┐            │
   │  │ Rankings │   │ Rewards  │   │ Rep      │            │
   │  │ finalized│──▶│ distributed│──▶│ updated  │            │
   │  │ on-chain │   │ to wallets│   │ on-chain │            │
   │  └──────────┘   └──────────┘   └──────────┘            │
   └─────────────────────────────────────────────────────────┘`}
    </pre>
    <p className="mt-3 text-center font-mono text-[10px] text-muted-foreground/50">
      Competition lifecycle — from announcement to on-chain settlement
    </p>
  </div>
);

export default function CompetitionSystem() {
  return (
    <>
      <p className="font-mono text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
        Game Mechanics
      </p>
      <h1 className="mt-2 text-balance font-heading text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
        Competition System
      </h1>

      <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
        Competitions are the organizing principle of Hoodfolio. Each competition
        is a self-contained event with its own rules, timeline, eligible assets,
        scoring model, and prize structure. This modular architecture allows the
        platform to run many competitions simultaneously — daily, weekly,
        seasonal, and special-event — each with different formats, different
        audiences, and different stakes.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        The competition system is designed to be composable and extensible.
        Competition creators — whether the Hoodfolio core team, community
        members, brand partners, or protocol DAOs — can define new competition
        formats without modifying the underlying platform. The scoring engine,
        the leaderboard infrastructure, and the settlement layer are generic;
        the rules that sit on top of them are specific to each competition.
      </p>

      <CompetitionLifecycleDiagram />

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Competition Architecture
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Every competition is defined by a complete parameter set that specifies
        exactly how it operates. These parameters are published on-chain before
        the competition opens, making the rules immutable and verifiable for the
        duration of the event. No parameter can change after entries open.
      </p>

      <div className="mt-5 overflow-x-auto rounded-xl border border-border/15">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border/15">
              <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Parameter
              </th>
              <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Type
              </th>
              <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Start time", "Timestamp", "When the competition opens for portfolio submissions"],
              ["Entry deadline", "Timestamp", "When portfolio submissions close and the competition locks"],
              ["End time", "Timestamp", "When scoring finalizes and winners are determined"],
              ["Eligible assets", "Array<AssetId>", "The set of assets players can select from for this competition"],
              ["Portfolio size", "Integer", "Number of assets per portfolio (fixed at 5 for standard competitions)"],
              ["Scoring model", "ModelId", "Reference to the scoring formula used for ranking"],
              ["Entry rules", "Struct", "Who can enter, entry limits, any prerequisites or gates"],
              ["Prize structure", "Struct", "Total pool, distribution curve, bonus rewards, token type"],
              ["Fee", "Amount", "Entry fee if applicable (0 for free competitions)"],
              ["Max participants", "Integer", "Optional cap on total entries"],
            ].map(([param, type, desc]) => (
              <tr key={param} className="border-b border-border/10">
                <td className="px-5 py-3">
                  <span className="font-mono text-[12px] font-semibold text-brand">
                    {param}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {type}
                  </span>
                </td>
                <td className="px-5 py-3 text-[13px] leading-relaxed text-muted-foreground">
                  {desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
        This parameterized architecture means that a daily tech-sector
        competition with a $100 entry fee and a free weekly global competition
        are the same system under the hood — they differ only in their parameter
        values. The platform does not need to be rebuilt for each new format; it
        simply reads the parameters and executes the competition accordingly.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Competition Formats
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Hoodfolio supports multiple competition formats designed for different
        time horizons, commitment levels, and player motivations. Every format
        uses the same underlying infrastructure — the same portfolio engine, the
        same leaderboard system, the same settlement layer — but the rules and
        rhythms are distinct.
      </p>

      <div className="mt-5 grid gap-4">
        {[
          {
            format: "Daily Competitions",
            rhythm: "Every day at market open",
            duration: "Single trading day",
            audience:
              "Active players who enjoy frequent competition and rapid feedback loops. Daily players might construct completely different portfolios each day, adapting to earnings reports, sector rotation, and overnight news.",
            strategy:
              "Short-term tactical. You are rewarded for reading the day's market conditions and positioning accordingly. A portfolio that worked Monday may be completely wrong for Tuesday.",
            stakes:
              "Lower individual stakes, higher volume. Daily competitions accumulate into weekly and monthly reputation gains.",
          },
          {
            format: "Weekly Championships",
            rhythm: "Every Monday at market open",
            duration: "Full trading week (5 days)",
            audience:
              "Strategic players who prefer deeper analysis and sustained conviction. Weekly players tend to research more thoroughly, construct more balanced portfolios, and follow multi-day narratives.",
            strategy:
              "Medium-term strategic. You must pick assets that will perform across five trading days, not just one. Diversification, sector balance, and resilience to mid-week volatility matter more.",
            stakes:
              "Higher stakes per competition. Weekly championships carry larger prize pools, more prestige, and greater reputation impact.",
          },
          {
            format: "Seasonal Leagues",
            rhythm: "Quarterly or themed",
            duration: "4–12 weeks with playoffs",
            audience:
              "The most dedicated players. Seasonal leagues create narratives, rivalries, and storylines that build community. Following a season is like following a sports league — you know the top players, you track their performance, and you anticipate the playoffs.",
            strategy:
              "Long-term portfolio management. Portfolios may be rebalanced between rounds, but the season format rewards consistency across many weeks. One bad week does not eliminate you; sustained excellence wins championships.",
            stakes:
              "Highest prestige. Seasonal champions earn permanent badges, significant reputation multipliers, and access to invitation-only competitions.",
          },
          {
            format: "Special Events",
            rhythm: "Ad-hoc, triggered by real-world events",
            duration: "Variable",
            audience:
              "Everyone. Special events are designed to capture moments of peak market attention — earnings season, Fed decisions, IPOs, sector-wide events. They serve as entry points for new players and spectacle for existing ones.",
            strategy:
              "Event-specific. An earnings-season competition might reward prediction accuracy for post-earnings price moves. A sector event might restrict the asset pool to a single industry, forcing deep specialization.",
            stakes:
              "Variable. Special events can be free (onboarding) or high-stakes (prestige). They often feature sponsor-funded prize pools and limited-edition achievement badges.",
          },
        ].map((item) => (
          <div
            key={item.format}
            className="rounded-xl border border-border/15 bg-card/30 px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold">{item.format}</h3>
              <span className="font-mono text-[10px] text-brand">
                {item.rhythm}
              </span>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.06em]">
                  Duration
                </span>
                <p className="text-[13px] text-muted-foreground">
                  {item.duration}
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.06em]">
                  Strategy
                </span>
                <p className="text-[13px] text-muted-foreground">
                  {item.strategy}
                </p>
              </div>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.06em]">
                  Audience
                </span>
                <p className="text-[13px] text-muted-foreground">
                  {item.audience}
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.06em]">
                  Stakes
                </span>
                <p className="text-[13px] text-muted-foreground">
                  {item.stakes}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Portfolio Engine
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        The portfolio engine is the computational core of Hoodfolio. It ingests
        player portfolios, live market data, and competition rules, and produces
        continuous scores that power the leaderboard. It operates independently
        for each active competition, processing thousands of portfolios in
        parallel with sub-second latency.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        The engine is designed around three principles: accuracy (scores must
        faithfully reflect the competition&apos;s scoring model), transparency
        (every score must be independently verifiable from on-chain data), and
        extensibility (new scoring factors can be added without modifying the
        core engine). The scoring factors described in How It Works are
        implemented as pluggable modules, each with a defined interface:
        input portfolio data and market data, output a normalized score
        component.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Competition creators can compose custom scoring models by selecting
        which factors to include and assigning weights to each. A daily
        competition might weight raw return at 60% and reduce the volatility
        adjustment to 5%, while a seasonal league might weight consistency at
        25% and reduce raw return to 30%. The engine adapts to the model
        definition without code changes — it reads the model, loads the
        specified factors, and computes accordingly.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        On-Chain Settlement
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        When a competition reaches its end time, settlement is handled entirely
        on Robinhood Chain. The scoring engine publishes final rankings as an
        on-chain data structure. A settlement smart contract reads those
        rankings, verifies them against the competition&apos;s published
        parameters, and distributes the prize pool to the winning wallets
        automatically.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        This architecture eliminates several traditional failure modes. There is
        no manual payout process that can be delayed or disputed. There is no
        centralized escrow that could be compromised. There is no ambiguity
        about who won or how much they should receive — the rankings, the
        scoring model, and the distribution curve are all on-chain and
        verifiable. A player who finishes first can independently verify that
        their score was calculated correctly and that their reward matches the
        published prize structure.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        For competitions that include performance-based badges or reputation
        updates, these are also settled on-chain as non-transferable tokens
        (soulbound). A season championship badge, once minted, belongs
        permanently to the winner&apos;s wallet and cannot be sold, transferred,
        or duplicated. It becomes a permanent, verifiable credential in the
        player&apos;s on-chain identity.
      </p>
    </>
  );
}
