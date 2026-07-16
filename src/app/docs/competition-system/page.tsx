import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competition System — Hoodfolio Docs",
};

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
        and leaderboard. This modular architecture allows the platform to run
        many competitions simultaneously and evolve formats independently.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Competition Definition
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Every competition defines a complete rule set:
      </p>

      <div className="mt-4 overflow-x-auto rounded-xl border border-border/15">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border/15">
              <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Parameter
              </th>
              <th className="px-5 py-3 font-mono text-[11px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Start date", "When the competition begins accepting entries"],
              ["End date", "When scoring finalizes and winners are declared"],
              ["Eligible assets", "Which assets can be selected for portfolios"],
              ["Portfolio size", "How many assets per portfolio (currently fixed at 5)"],
              ["Scoring model", "The formula used to rank portfolios"],
              ["Entry rules", "Who can join, entry limits, any prerequisites"],
              ["Prize structure", "Rewards for top performers (virtual in MVP)"],
            ].map(([param, desc]) => (
              <tr key={param} className="border-b border-border/10">
                <td className="px-5 py-3">
                  <span className="font-mono text-[12px] font-semibold text-brand">
                    {param}
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
        Because competitions are independent, the platform can experiment with
        new formats — sector-specific competitions, earnings-season events,
        creator leagues — without affecting existing competitions.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Portfolio Engine
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Every portfolio contains exactly five assets. The scoring engine
        evaluates multiple factors to produce a composite score used for
        ranking.
      </p>

      <div className="mt-5 grid gap-2">
        {[
          {
            factor: "Percentage performance",
            description:
              "Raw return across all five positions, weighted by allocation.",
          },
          {
            factor: "Diversification",
            description:
              "Rewards portfolios that spread risk across sectors and asset classes. Concentration penalties apply.",
          },
          {
            factor: "Volatility",
            description:
              "Lower-volatility portfolios receive a risk-adjusted bonus. Consistency matters.",
          },
          {
            factor: "Relative performance",
            description:
              "How the portfolio performs compared to the competition median and to a benchmark index.",
          },
          {
            factor: "Prediction accuracy",
            description:
              "Planned for future scoring models: measures how closely the portfolio's outcome matches projected performance.",
          },
          {
            factor: "Risk-adjusted return",
            description:
              "Sharpe-like ratio that normalizes returns against the volatility taken to achieve them.",
          },
        ].map((item) => (
          <div
            key={item.factor}
            className="flex flex-col gap-1 rounded-lg border border-border/15 bg-card/20 px-5 py-3.5 sm:flex-row sm:gap-6"
          >
            <span className="shrink-0 font-mono text-[12px] font-semibold text-brand">
              {item.factor}
            </span>
            <span className="text-[13px] leading-relaxed text-muted-foreground">
              {item.description}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
        The scoring architecture is modular. New models can be introduced
        without rebuilding the platform, allowing the competitive meta to evolve
        as the player base grows and new asset types become available.
      </p>

      <hr className="my-10 border-border/20" />

      <h2 className="font-heading text-xl font-semibold tracking-[-0.015em]">
        Future Competition Formats
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        As Robinhood Chain expands and the player base grows, Hoodfolio plans to
        introduce:
      </p>

      <ul className="mt-4 ml-5 flex list-disc flex-col gap-2 text-[15px] leading-relaxed text-muted-foreground">
        <li>Token-gated competitions with entry fees and real prize pools</li>
        <li>Creator leagues — anyone can design and host a competition</li>
        <li>Sponsored tournaments with brand partners</li>
        <li>Sector-specific competitions (tech-only, crypto-only, etc.)</li>
        <li>Earnings-season events timed to quarterly reports</li>
        <li>Seasonal championships with playoffs, finals, and seasonal rewards</li>
      </ul>
    </>
  );
}
