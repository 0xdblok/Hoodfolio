import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Roadmap — Hoodfolio Docs",
};

const EcosystemDiagram = () => (
  <div className="my-8 overflow-x-auto rounded-xl border border-border/15 bg-card/20 p-5">
    <pre className="font-mono text-[11px] leading-[1.7] text-muted-foreground">
{`   ┌─────────────────────────────────────────────────────────────┐
   │                  HOODFOLIO ECOSYSTEM                         │
   │                                                             │
   │                      ┌───────────┐                          │
   │                      │  PLAYERS  │                          │
   │                      └─────┬─────┘                          │
   │                            │                                │
   │         ┌──────────────────┼──────────────────┐             │
   │         ▼                  ▼                  ▼             │
   │  ┌────────────┐   ┌────────────┐   ┌────────────┐          │
   │  │ PORTFOLIO  │   │ COMPETITION│   │ LEADERBOARD│          │
   │  │ STRATEGIES │   │   ENTRIES  │   │  & REP     │          │
   │  └─────┬──────┘   └─────┬──────┘   └─────┬──────┘          │
   │        │                │                │                  │
   │        └────────────────┼────────────────┘                  │
   │                         ▼                                   │
   │              ┌─────────────────────┐                        │
   │              │  ROBINHOOD CHAIN    │                        │
   │              │                     │                        │
   │              │  • Tokenized stocks │                        │
   │              │  • Smart contracts  │                        │
   │              │  • Instant settlement│                       │
   │              │  • On-chain proofs  │                        │
   │              └─────────┬───────────┘                        │
   │                        │                                    │
   │         ┌──────────────┼──────────────┐                     │
   │         ▼              ▼              ▼                     │
   │  ┌────────────┐ ┌────────────┐ ┌────────────┐              │
   │  │  CREATORS  │ │  SPONSORS  │ │  PARTNERS  │              │
   │  │            │ │            │ │            │              │
   │  │ • Leagues  │ │ • Prizes   │ │ • Data     │              │
   │  │ • Formats  │ │ • Branding │ │ • Assets   │              │
   │  │ • Rules    │ │ • Events   │ │ • Audiences│              │
   │  └────────────┘ └────────────┘ └────────────┘              │
   └─────────────────────────────────────────────────────────────┘`}
    </pre>
    <p className="mt-3 text-center font-mono text-[10px] text-muted-foreground/50">
      Hoodfolio ecosystem — players, platform, chain, and ecosystem participants
    </p>
  </div>
);

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
        tokenized investing — the place where anyone goes to prove their skill
        as a portfolio builder, regardless of whether the underlying assets are
        simulated or tokenized, regardless of whether they are a retail trader
        or an institutional strategist. Hoodfolio is not a trading platform; it
        is the competition platform that sits on top of trading infrastructure.
      </p>

      <EcosystemDiagram />

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        The Destination
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        In its final form, Hoodfolio operates as a fully on-chain competition
        protocol on Robinhood Chain. Every aspect of the platform — portfolio
        submission, competition entry, scoring calculation, leaderboard ranking,
        prize distribution, and reputation accrual — is expressed as verifiable
        on-chain operations. There is no centralized server that could be
        compromised, no database that could be manipulated, and no organization
        that could arbitrarily change the rules mid-competition.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        The platform supports a diverse ecosystem of participants. Players
        compete across daily, weekly, and seasonal formats, building portable
        reputations that follow them across the Web3 ecosystem. Creators design
        and host competitions — sector-specific leagues, earnings-season events,
        sponsored tournaments — earning a share of entry fees. Sponsors and
        brand partners fund prize pools in exchange for visibility, audience
        engagement, and association with high-skill competition. Data providers
        supply the market feeds that power the scoring engine. Protocol
        participants govern the parameters that shape the competition meta —
        fee structures, reward curves, scoring model weights.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        The asset layer is Robinhood Stock Tokens: tokenized representations of
        publicly traded equities, ETFs, and indices that settle near-instantly
        and are natively composable with smart contract logic. Players construct
        portfolios from these tokens exactly as they would from traditional
        securities — the experience is identical. The difference is that
        settlement is instant, verification is cryptographic, and the portfolio
        itself exists as an on-chain object that can be referenced, analyzed,
        and composed into higher-order financial products.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Competitive Layer for Tokenized Investing
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        The core thesis of Hoodfolio is that tokenized assets need a competitive
        layer to achieve mainstream adoption. Traditional securities have an
        enormous ecosystem of analysis, commentary, rankings, and competition —
        stock-picking contests, analyst rankings, fund performance comparisons,
        fantasy finance leagues. Tokenized assets currently have none of this.
        They are traded, but they are not competed around.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Hoodfolio fills this gap. By wrapping tokenized assets in a competition
        system, it creates the social layer that makes holding those assets
        meaningful beyond their price. A Robinhood Stock Token for Apple is not
        just a token that tracks AAPL — it is a game piece. It is something you
        select, weight, compete with, and win or lose with. The token becomes
        part of a narrative: &ldquo;I won Tuesday&apos;s daily competition
        because I went heavy on NVDA and light on TSLA.&rdquo; That narrative is
        what drives engagement, retention, and growth.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Over time, Hoodfolio aims to become the default destination for
        competitive portfolio building — the place where investors go to prove
        their skill, not just track their returns. A player&apos;s Hoodfolio
        reputation should be as meaningful as a fund manager&apos;s track
        record: a verifiable, portable, time-series proof of consistent
        outperformance that can be referenced anywhere in the Web3 ecosystem.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Social Identity &amp; On-Chain Reputation
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Every player on Hoodfolio builds a reputation that is permanent,
        portable, and verifiable. This reputation is not a simple win/loss
        record — it is a multi-dimensional profile that captures sustained
        performance across many competitions over long time horizons. Key
        components include:
      </p>

      <div className="mt-5 grid gap-2">
        {[
          {
            metric: "Global Reputation Score",
            desc: "A composite metric calculated from all competitions a player has ever entered, weighted by recency, competition stakes, and field strength. Finishing top 10% in a seasonal league is worth more than finishing top 10% in a daily competition. The score is normalized so that it is comparable across players and over time.",
          },
          {
            metric: "Achievement Badges",
            desc: "Non-transferable soulbound tokens that mark significant accomplishments: first win, top 1% finish, ten consecutive top-100 daily placements, season championship, perfect diversification score. Badges are cosmetic on the surface but function as credentials — they can gate access to invitation-only competitions, signal credibility, and form a visual representation of a player's skill journey.",
          },
          {
            metric: "Competition History",
            desc: "Every competition a player has ever entered is recorded on-chain: the portfolio they submitted, their final rank, their score breakdown across all factors, and the field size. This history is fully public and can be analyzed by anyone. It forms the raw data from which reputation scores are derived.",
          },
          {
            metric: "Specialization Tags",
            desc: "Players who consistently excel in specific domains — tech-sector competitions, crypto-only events, earnings-season predictions — earn specialization tags that identify their areas of expertise. A player tagged as 'Tech Specialist — Top 5%' has demonstrated sustained outperformance in technology-sector competitions specifically.",
          },
        ].map((item) => (
          <div
            key={item.metric}
            className="rounded-lg border border-border/15 bg-card/20 px-5 py-3.5"
          >
            <span className="font-mono text-[12px] font-semibold text-brand">
              {item.metric}
            </span>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
        This reputation system is designed to be useful beyond Hoodfolio itself.
        A player with a strong Hoodfolio reputation should be able to use that
        reputation as a credential in any Web3 context: to access gated
        communities, to qualify for investment DAOs, to signal expertise in
        DeFi protocols, or to build a following as a portfolio strategist. The
        reputation is not locked inside Hoodfolio — it is an on-chain asset that
        the player owns and controls.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Ecosystem Participants
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Hoodfolio is not just a product — it is a platform that supports
        multiple participant types, each with their own incentives and value
        capture mechanisms. The ecosystem is designed so that each
        participant&apos;s success reinforces the others&apos;.
      </p>

      <div className="mt-5 grid gap-4">
        {[
          {
            role: "Players",
            incentive:
              "Compete, build reputation, earn rewards. Players provide the core activity that makes the platform valuable. They benefit from transparent competition, fair scoring, portable reputation, and financial rewards for top performance.",
          },
          {
            role: "Creators",
            incentive:
              "Design competitions, set rules, earn a share of entry fees. Creators are the competition designers — they might be community members building a league for their Discord server, influencers hosting a tournament for their audience, or professional analysts designing sophisticated competition formats. The creator model turns Hoodfolio into a platform for competition design, not just competition participation.",
          },
          {
            role: "Sponsors & Partners",
            incentive:
              "Fund prize pools, reach engaged audiences, associate with high-skill competition. Sponsors can fund entire competitions or contribute to prize pools in exchange for branding, visibility, and audience data. A trading platform might sponsor a weekly competition to drive users to their product. A financial media company might sponsor an earnings-season event to build audience around their coverage.",
          },
          {
            role: "Data Providers",
            incentive:
              "Supply market data feeds, get compensated per competition that uses their data. The scoring engine depends on accurate, timely market data. Multiple data providers can compete to supply feeds, with competition creators selecting which provider to use — creating a market for data quality.",
          },
          {
            role: "Protocol Governance",
            incentive:
              "Shape the parameters that govern the platform. Token holders participate in governance decisions: fee structures, reward curves, scoring model default weights, new competition format approval, and protocol treasury allocation. Governance ensures the platform evolves in alignment with its community rather than any single operator.",
          },
        ].map((item) => (
          <div
            key={item.role}
            className="rounded-xl border border-border/15 bg-card/30 px-5 py-4"
          >
            <h3 className="text-sm font-semibold">{item.role}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              {item.incentive}
            </p>
          </div>
        ))}
      </div>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Mainstream On-Chain Onboarding
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        One of Hoodfolio&apos;s most important functions is to serve as an
        on-ramp to on-chain finance for mainstream users. The platform is
        designed so that a user who has never interacted with a blockchain can
        participate meaningfully — and over time, naturally progress toward
        deeper on-chain engagement.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        The onboarding path is progressive. A new player connects with a
        familiar social login (via Privy), receives an embedded wallet without
        needing to understand seed phrases or gas fees, and starts competing
        immediately. The competition format is intuitive — pick five things,
        compete with others, see who wins — and maps to mental models that
        already exist from fantasy sports, prediction markets, and stock-picking
        contests.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        As the player engages more deeply, they encounter on-chain concepts
        naturally. They earn tokens as rewards and learn to manage them. They
        see their reputation as an on-chain asset and understand its value. They
        discover that their badges are soulbound tokens and learn what that
        means. They encounter token-gated competitions and understand why
        holding certain tokens grants access. Each step builds on the previous
        one, and each concept is introduced in the context of competition —
        something the player already cares about.
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        This approach stands in contrast to most Web3 onboarding, which demands
        that users understand wallets, seed phrases, gas fees, token approvals,
        and smart contract interactions before they can do anything meaningful.
        Hoodfolio inverts this: do something meaningful first (compete, win,
        build reputation), and understand the underlying technology as it
        becomes relevant to your goals. Competition is the hook; on-chain
        literacy is the side effect.
      </p>
    </>
  );
}
