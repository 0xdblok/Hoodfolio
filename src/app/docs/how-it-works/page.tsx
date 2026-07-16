import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Hoodfolio Docs",
};

const PlayerFlowDiagram = () => (
  <div className="my-8 overflow-x-auto rounded-xl border border-border/15 bg-card/20 p-5">
    <pre className="font-mono text-[11px] leading-[1.7] text-muted-foreground">
{`   ┌──────────┐      ┌──────────────┐      ┌──────────────┐
   │  CONNECT │─────▶│ BUILD        │─────▶│ ENTER        │
   │  WALLET  │      │ PORTFOLIO    │      │ COMPETITION  │
   │          │      │              │      │              │
   │ • Privy  │      │ • Pick 5     │      │ • Daily      │
   │ • Profile│      │   assets     │      │ • Weekly     │
   │ • Rep    │      │ • Weights    │      │ • Seasonal   │
   └──────────┘      └──────────────┘      └──────┬───────┘
                                                   │
                                                   ▼
   ┌──────────┐      ┌──────────────┐      ┌──────────────┐
   │  CLAIM   │◀─────│ CLIMB        │◀─────│ WATCH        │
   │ REWARDS  │      │ LEADERBOARD  │      │ SCORES       │
   │          │      │              │      │              │
   │ • Tokens │      │ • Real-time  │      │ • Market     │
   │ • Badges │      │   ranking    │      │   data feed  │
   │ • Rep    │      │ • Position Δ │      │ • Portfolio  │
   └──────────┘      └──────────────┘      │   tracking  │
                                           └──────────────┘`}
    </pre>
    <p className="mt-3 text-center font-mono text-[10px] text-muted-foreground/50">
      Complete player journey — from wallet connection to reward claiming
    </p>
  </div>
);

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
        Hoodfolio is built around a simple, repeatable loop that transforms
        portfolio construction into a competitive game. Every player follows the
        same path: connect, build, compete, watch, climb, and claim. The loop is
        intentionally simple so that the depth comes from strategy, not from
        interface complexity.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        What makes this loop powerful is that every step is social by default.
        Your portfolio is public. Your rank is visible. The top player&apos;s
        asset selection is inspectable by everyone. There is no &ldquo;private
        mode&rdquo; — the leaderboard is the product, and transparency is the
        feature that makes the competition meaningful.
      </p>

      <PlayerFlowDiagram />

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        1. Connect Your Wallet
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Every player connects through Privy, which provides embedded wallet
        creation, social login fallbacks, and session management. The experience
        is designed to be as frictionless as signing into any Web2 application —
        no seed phrases, no gas fees for onboarding, no requirement to already
        hold crypto.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Once connected, the wallet becomes the player&apos;s identity on
        Hoodfolio. It carries their reputation score, competition history,
        achievement badges, and any earned rewards. Because everything is
        anchored to an on-chain address, reputation is portable — a player who
        builds a strong track record on Hoodfolio can carry that identity into
        any other application that recognizes Hoodfolio reputation scores.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Profile creation is minimal: a display name and an optional avatar.
        Everything else — statistics, rankings, badges — is earned through
        competition performance, not configured in a settings panel. This
        ensures that profiles are merit-based from day one.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        2. Build Your Portfolio
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Every portfolio contains exactly five assets. This constraint is the
        central design decision of the entire platform. It is not arbitrary: it
        is the mechanism that forces strategic thinking.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        With five slots, every inclusion is a trade-off. Adding a sixth
        high-conviction pick is not possible — you must drop something. This
        creates tension. Do you go heavy on tech? Diversify across sectors?
        Hedge with one defensive asset? The five you leave out matter as much as
        the five you choose. This constraint is what separates Hoodfolio from a
        simple stock-picking game and elevates it to a portfolio construction
        challenge.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Players allocate weights to each asset — the percentage of the portfolio
        dedicated to that position. Weights must sum to 100%. This allows for
        conviction-weighted strategies: you might put 40% in your
        highest-conviction pick and spread the remaining 60% across four more
        conservative positions. The scoring engine evaluates both asset
        selection and allocation decisions.
      </p>

      <div className="mt-6 rounded-xl border border-border/15 bg-card/30 px-5 py-4">
        <h3 className="text-sm font-semibold">Portfolio Rules</h3>
        <ul className="mt-3 ml-5 flex list-disc flex-col gap-1.5 text-[13px] leading-relaxed text-muted-foreground">
          <li>
            <strong className="text-foreground">Five assets exactly.</strong>{" "}
            No more, no less. This constraint is non-negotiable across all
            competition formats.
          </li>
          <li>
            <strong className="text-foreground">Weights sum to 100%.</strong>{" "}
            Allocation must be complete. Partial allocations are rejected.
          </li>
          <li>
            <strong className="text-foreground">One portfolio per competition.</strong>{" "}
            You can enter multiple competitions simultaneously, each with a
            different portfolio if you wish. Within a single competition, you
            have one portfolio.
          </li>
          <li>
            <strong className="text-foreground">Locked at entry.</strong>{" "}
            Once a competition starts, portfolios are immutable for its
            duration. No mid-competition rebalancing — your initial strategy
            stands.
          </li>
        </ul>
      </div>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        3. Enter a Competition
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Competitions are the heart of Hoodfolio. They are self-contained events
        with defined start times, end times, eligible asset pools, and scoring
        rules. New competitions launch continuously — daily competitions at
        market open, weekly championships every Monday, and seasonal leagues
        that span multiple weeks with playoffs and finals.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Entering a competition is a deliberate act. You choose which competition
        to join, construct a portfolio specifically for that event, and commit
        your entry before the start time. Once the competition begins, your
        portfolio is locked and scoring begins. You can track your position in
        real time as market data flows in throughout the competition period.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Different competition formats serve different player preferences. Daily
        competitions reward quick tactical thinking — you might build a
        completely different portfolio for Tuesday than you did for Monday,
        reacting to earnings reports, sector momentum, or macro events. Weekly
        competitions reward sustained strategic conviction — your picks need to
        hold up across five trading days. Seasonal leagues introduce
        multi-week narratives, playoffs, and championship finals that create the
        kind of storylines that make competition compelling to follow over time.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        4. Scoring &amp; Ranking
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        The scoring engine is what makes Hoodfolio a game of skill rather than
        luck. It evaluates every portfolio continuously using live market data,
        producing a composite score that determines rank. The engine considers
        multiple dimensions of performance — not just raw returns.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        A portfolio that goes all-in on one volatile asset and happens to win is
        not necessarily rewarded more than a diversified portfolio that
        consistently outperforms. The scoring model penalizes excessive
        concentration, rewards risk management, and normalizes for volatility so
        that steady, disciplined strategies can compete with high-risk, high-reward
        approaches on a level playing field.
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-border/15">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border/15">
              <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Scoring Factor
              </th>
              <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Weight
              </th>
              <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Weighted Return",
                "40%",
                "Percentage performance of each asset multiplied by its portfolio weight. The core metric.",
              ],
              [
                "Diversification Bonus",
                "20%",
                "Rewards portfolios spread across sectors and asset classes. Concentration in a single sector incurs a penalty proportional to the degree of concentration.",
              ],
              [
                "Volatility Adjustment",
                "15%",
                "Applies a Sharpe-like normalization. Portfolios that achieve returns with lower volatility receive a bonus; erratic portfolios are discounted.",
              ],
              [
                "Relative Performance",
                "15%",
                "How the portfolio performs compared to the competition median and to a benchmark index. Outperformance against peers is rewarded directly.",
              ],
              [
                "Consistency Score",
                "10%",
                "Rewards portfolios whose assets move in predictable, correlated patterns rather than random dispersion. Consistency signals intentional construction.",
              ],
            ].map(([factor, weight, desc]) => (
              <tr key={factor} className="border-b border-border/10">
                <td className="px-5 py-3">
                  <span className="text-[13px] font-semibold text-foreground">
                    {factor}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className="font-mono text-[12px] text-brand">
                    {weight}
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
        The scoring architecture is modular by design. Competition creators can
        adjust factor weights, introduce new factors, or design entirely custom
        scoring models for specific competition formats. A tech-sector
        competition might increase the diversification bonus to prevent everyone
        from picking the same five mega-cap stocks. An earnings-season event
        might introduce a prediction accuracy factor that rewards players who
        correctly anticipate post-earnings moves. The platform provides the
        engine; competition designers provide the rules.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        5. Climb the Leaderboard
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        The leaderboard is not a secondary page — it is the product. Rankings
        update continuously as market data streams in. Every player can see
        exactly where they stand, who they are chasing, and who is gaining on
        them from behind. The leaderboard is competition-specific (your rank in
        today&apos;s daily competition), global (your all-time reputation
        score), and social (your rank among friends or within a creator league).
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        The top-ranked portfolios are fully public. Every asset, every weight,
        every performance metric is visible to all players. This transparency
        creates a dynamic where the competitive meta evolves naturally — players
        study the top portfolios, adapt their strategies, and the overall skill
        level of the player base rises over time. It also creates accountability:
        the number one player cannot hide behind a private portfolio. Their
        strategy is open for everyone to learn from, challenge, and attempt to
        beat.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Between competitions, players carry a global reputation score — a
        composite metric that reflects their long-term performance across all
        competitions they have ever entered. Reputation is not reset. It
        accumulates. A player who consistently finishes in the top 10% over
        dozens of competitions will build a reputation that distinguishes them
        from a player who won once and never repeated. This reputation is
        portable, on-chain, and verifiable — it becomes part of the
        player&apos;s Web3 identity.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        6. Claim Rewards
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        When a competition ends, rewards are distributed automatically to the
        top-ranked portfolios. The reward structure is defined per competition:
        a prize pool (funded by entry fees or sponsors), a distribution curve
        (how the pool is split among top finishers), and any bonus rewards (NFT
        badges, reputation multipliers, access to exclusive competitions).
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        On Robinhood Chain, reward distribution is fully automated through smart
        contracts. When a competition&apos;s end time is reached, the scoring
        engine publishes final rankings on-chain, and the prize pool is
        distributed directly to winners&apos; wallets — no manual claims
        process, no waiting period, no counterparty risk. Players can verify the
        entire settlement on-chain, from portfolio entry to final payout.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Beyond financial rewards, players earn non-transferable achievement
        badges and reputation tokens that mark significant accomplishments:
        first competition win, top 1% finish, ten consecutive daily top-100
        placements, season championship. These badges are cosmetic on the
        surface but carry weight in the ecosystem — they can gate access to
        prestigious competitions, signal credibility to other players, and form
        the foundation of a player&apos;s on-chain identity as a skilled
        portfolio builder.
      </p>
    </>
  );
}
