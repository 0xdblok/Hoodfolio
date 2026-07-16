"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type FC,
} from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Trophy,
  Clock,
  Users,
  Zap,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  HelpCircle,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Data
   ──────────────────────────────────────────── */

const ASSETS = [
  { ticker: "AAPL", name: "Apple Inc.", change: 2.34 },
  { ticker: "NVDA", name: "NVIDIA Corp", change: 4.71 },
  { ticker: "TSLA", name: "Tesla Inc.", change: -1.22 },
  { ticker: "BTC", name: "Bitcoin", change: 0.89 },
  { ticker: "ETH", name: "Ethereum", change: 3.15 },
] as const;

const LEADERBOARD_PREVIEW = [
  { rank: 1, name: "CryptoKing", score: 14230, change: 8.4 },
  { rank: 2, name: "StockWhisperer", score: 13890, change: 5.2 },
  { rank: 3, name: "AlphaSeeker", score: 13560, change: -1.8 },
  { rank: 4, name: "NakamotoFan", score: 13120, change: 12.1 },
  { rank: 5, name: "TraderJane", score: 12840, change: 3.7 },
];

const COMPETITIONS = [
  { type: "Daily", time: "Today 9:30 AM ET", prize: "500 DOL", participants: 247, status: "live" },
  { type: "Daily", time: "Tomorrow 9:30 AM ET", prize: "500 DOL", participants: 189, status: "upcoming" },
  { type: "Weekly", time: "Monday 9:30 AM ET", prize: "2,500 DOL", participants: 412, status: "upcoming" },
] as const;

const FAQS = [
  {
    q: "What is Hoodfolio?",
    a: "Hoodfolio is a fantasy stock token trading game. You build a portfolio of five assets and compete against other players in daily and weekly competitions based on real market performance.",
  },
  {
    q: "Is it free to play?",
    a: "Yes — completely free during the MVP. You'll use simulated portfolios with virtual currency. No real money, no wallet required.",
  },
  {
    q: "How do I win?",
    a: "Your portfolio's performance is ranked against other players. The top portfolios at the end of each competition earn rewards and climb the leaderboard.",
  },
  {
    q: "What assets can I pick?",
    a: "You can choose from a curated set of stocks, crypto, and tokenized assets. The initial MVP focuses on major stocks and cryptocurrencies.",
  },
  {
    q: "What is Robinhood Chain?",
    a: "Robinhood Chain is an emerging blockchain ecosystem that enables tokenized stock trading with near-instant settlement. Hoodfolio is built to showcase what's possible on this infrastructure.",
  },
  {
    q: "Do I need a crypto wallet?",
    a: "Not during the MVP. Simulated portfolios mean you can play immediately without any setup. Wallet integration will be added when real tokenized assets become available.",
  },
];

/* ─────────────────────────────────────────────
   Components
   ──────────────────────────────────────────── */

/* ── Nav ── */
const Nav: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground font-mono text-sm font-bold">
            H
          </span>
          Hoodfolio
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#competitions" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Competitions
          </a>
          <a href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </a>
          <a
            href="#cta"
            className="inline-flex h-9 items-center rounded-full border border-brand px-5 text-sm font-medium text-brand transition-all hover:bg-brand hover:text-brand-foreground"
          >
            Join the beta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-border/30 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-3 px-6 py-5">
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              How it works
            </a>
            <a
              href="#competitions"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              Competitions
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#cta"
              className="mt-1 inline-flex h-9 w-fit items-center rounded-full border border-brand px-5 text-sm font-medium text-brand"
              onClick={() => setOpen(false)}
            >
              Join the beta
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

/* ── Asset Card (Hero) ── */
const AssetCard: FC<{
  ticker: string;
  name: string;
  change: number;
  index: number;
  mouseX: number;
  mouseY: number;
}> = ({ ticker, name, change, index, mouseX, mouseY }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = mouseX - cx;
    const dy = mouseY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 300;
    const force = Math.max(0, 1 - dist / maxDist);
    x.set(dx * force * 0.04);
    y.set(dy * force * 0.04);
  }, [mouseX, mouseY, x, y]);

  const isPositive = change >= 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ x: springX, y: springY }}
      className="relative flex flex-col gap-1.5 rounded-xl border border-border/30 bg-card/70 px-4 py-3 backdrop-blur-sm select-none"
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-semibold tracking-tight">
          {ticker}
        </span>
        <span
          className={`flex items-center gap-0.5 font-mono text-xs font-medium ${
            isPositive ? "text-positive" : "text-negative"
          }`}
        >
          {isPositive ? (
            <TrendingUp size={12} />
          ) : (
            <TrendingDown size={12} />
          )}
          {isPositive ? "+" : ""}
          {change.toFixed(2)}%
        </span>
      </div>
      <span className="text-xs text-muted-foreground">{name}</span>
      <div
        className={`absolute inset-0 -z-10 rounded-xl opacity-[0.06] transition-opacity ${
          isPositive ? "bg-positive" : "bg-negative"
        }`}
      />
    </motion.div>
  );
};

/* ── Hero (OVERDRIVE) ── */
const Hero: FC = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    },
    []
  );

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20"
    >
      {/* Ambient glow behind the cards */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[120px]" />

      {/* Headline */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-heading text-[clamp(2.2rem,6vw,5.5rem)] leading-[1.06] font-bold tracking-[-0.025em]"
        >
          Your portfolio.
          <br />
          Their plays.
          <br />
          <span className="text-brand">One leaderboard.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-6 text-balance text-lg text-muted-foreground"
        >
          Build a portfolio of 5 assets.
          <br className="sm:hidden" /> Compete daily and weekly.
          <br className="sm:hidden" /> Climb the ranks.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-2 font-mono text-xs text-muted-foreground/60"
        >
          Simulated portfolios — no real money, no wallet required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href="#cta"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-8 text-[15px] font-semibold text-brand-foreground transition-all hover:bg-brand-dim"
          >
            Start playing
            <span className="font-normal opacity-70">— It&apos;s free</span>
          </a>
          <a
            href="#competitions"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border/40 px-8 text-[15px] font-medium text-foreground transition-all hover:border-foreground/30 hover:bg-foreground/[0.03]"
          >
            Watch a live competition
          </a>
        </motion.div>

        {/* Live indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 flex items-center justify-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            247 traders competing right now
          </span>
        </motion.div>
      </div>

      {/* Asset grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-16 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-5 md:gap-4"
      >
        {ASSETS.map((asset, i) => (
          <AssetCard
            key={asset.ticker}
            ticker={asset.ticker}
            name={asset.name}
            change={asset.change}
            index={i}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            size={20}
            className="text-muted-foreground/30"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ── Section 2: Contrast ── */
const Contrast: FC = () => {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
          Most trading platforms
          <br />
          are lonely.
          <br />
          <span className="text-brand">This one isn&apos;t.</span>
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
          {/* Left: Three intensity lines */}
          <div className="flex flex-col gap-8">
            {[
              {
                step: "Pick five assets. Any five.",
                desc: "Apple. Bitcoin. Tesla. NVIDIA. Ethereum. Curate your portfolio from stocks and crypto — no real money needed.",
                accent: "bg-brand/10 text-brand border-brand/20",
              },
              {
                step: "Your picks compete against everyone else's.",
                desc: "Every portfolio enters the same daily and weekly competitions. Your choices go head-to-head with the entire player base.",
                accent: "bg-amber/10 text-amber border-amber/20",
              },
              {
                step: "Win daily. Win weekly. No entry fee, just skill.",
                desc: "The top portfolios rise. Real market data drives real outcomes. Performance is the only thing that matters.",
                accent: "bg-positive/10 text-positive border-positive/20",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col gap-2 rounded-2xl border p-6 ${item.accent}`}
              >
                <span className="font-heading text-lg font-semibold">
                  {item.step}
                </span>
                <span className="text-sm opacity-80">{item.desc}</span>
              </motion.div>
            ))}
          </div>

          {/* Right: Portfolio visual */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="flex h-[280px] w-[280px] items-center justify-center rounded-full border border-border/20 bg-card/40 md:h-[320px] md:w-[320px]">
                {["AAPL", "NVDA", "TSLA", "BTC", "ETH"].map((ticker, i) => {
                  const angle = (i / 5) * 360 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const r = 100;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <span
                      key={ticker}
                      className="absolute font-mono text-xs font-semibold text-brand"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      {ticker}
                    </span>
                  );
                })}
                <span className="font-mono text-sm font-bold text-foreground">
                  100%
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="font-heading text-xl font-semibold">
            Daily competitions. Real stakes, simulated money.
          </h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
              <div
                key={day}
                className={`flex h-14 flex-1 min-w-[60px] items-center justify-center rounded-xl border text-sm font-medium ${
                  i === 3
                    ? "border-brand bg-brand/10 text-brand"
                    : i < 3
                      ? "border-border/10 bg-card/30 text-muted-foreground"
                      : "border-border/15 bg-card/20 text-muted-foreground/70"
                }`}
              >
                {day}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            New competition every day at 9:30 AM ET. Weekly championships every
            Monday.
          </p>
        </div>

        {/* Mini-leaderboard */}
        <div className="mt-16">
          <h3 className="font-heading text-xl font-semibold">
            Your rank updates live.
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            This is what your Sunday evening looks like.{" "}
            <span className="text-muted-foreground/50">
              (Preview — simulated data)
            </span>
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-border/20 text-xs uppercase tracking-[0.05em] text-muted-foreground">
                  <th className="pb-3 font-medium">Rank</th>
                  <th className="pb-3 font-medium">Player</th>
                  <th className="pb-3 text-right font-medium">Score</th>
                  <th className="pb-3 text-right font-medium">Change</th>
                </tr>
              </thead>
              <tbody>
                {LEADERBOARD_PREVIEW.map((p) => (
                  <tr
                    key={p.name}
                    className="border-b border-border/10 transition-colors hover:bg-foreground/[0.02]"
                  >
                    <td className="py-3">
                      <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded font-mono text-xs font-bold ${
                          p.rank === 1
                            ? "bg-amber text-background"
                            : p.rank === 2
                              ? "bg-foreground/20 text-foreground"
                              : p.rank === 3
                                ? "bg-amber/30 text-amber"
                                : "text-muted-foreground"
                        }`}
                      >
                        {p.rank}
                      </span>
                    </td>
                    <td className="py-3 font-medium">{p.name}</td>
                    <td className="py-3 text-right font-mono">
                      {p.score.toLocaleString()}
                    </td>
                    <td
                      className={`py-3 text-right font-mono ${
                        p.change >= 0 ? "text-positive" : "text-negative"
                      }`}
                    >
                      {p.change >= 0 ? "+" : ""}
                      {p.change}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── How It Works ── */
const HowItWorks: FC = () => {
  return (
    <section id="how-it-works" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
          Three steps.
          <br />
          <span className="text-brand">That&apos;s it.</span>
        </h2>

        <div className="mt-16 flex flex-col gap-6 md:flex-row">
          {[
            {
              icon: <Zap size={24} />,
              title: "Pick 5 assets",
              desc: "Choose from stocks, crypto, and tokenized assets. Build your portfolio in under a minute.",
            },
            {
              icon: <Users size={24} />,
              title: "Enter a competition",
              desc: "Join a daily or weekly competition. Everyone competes with the same market data.",
            },
            {
              icon: <Trophy size={24} />,
              title: "Climb the ranks",
              desc: "Watch your portfolio compete in real time. Top performers win and earn rewards.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex flex-1 flex-col gap-4 rounded-2xl border border-border/15 bg-card/30 p-6 pt-14"
            >
              <div className="absolute top-5 left-5 flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                {step.icon}
              </div>
              <span className="font-heading text-lg font-semibold">
                {step.title}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>

              {/* Connector line between steps (desktop only) */}
              {i < 2 && (
                <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-border/20 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Competitions ── */
const Competitions: FC = () => {
  return (
    <section id="competitions" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
          Competitions
          <br />
          <span className="text-brand">ready for you.</span>
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Prizes are simulated and for demonstration during the MVP.
        </p>

        <div className="mt-12 flex flex-col gap-4">
          {COMPETITIONS.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/15 bg-card/30 p-6"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl font-mono text-xs font-bold ${
                    comp.status === "live"
                      ? "bg-brand/15 text-brand"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {comp.status === "live" ? "●" : "○"}
                </span>
                <div>
                  <span className="font-heading font-semibold">
                    {comp.type} Competition
                  </span>
                  <p className="text-sm text-muted-foreground">{comp.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <Trophy size={15} className="text-amber" />
                  <span className="text-amber">{comp.prize}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={15} />
                  <span>{comp.participants} joined</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Why Robinhood Chain ── */
const WhyRHChain: FC = () => {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
          Built for
          <br />
          <span className="text-brand">Robinhood Chain.</span>
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Hoodfolio is designed to showcase what tokenized stock trading makes
          possible. The MVP runs with simulated portfolios — Robinhood Chain
          integration is the target ecosystem.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/15 bg-border/10 md:grid-cols-2">
          {[
            {
              label: "Settlement speed",
              value: "Near-instant",
              desc: "Tokenized assets settle in seconds, not days. Competitions resolve immediately.",
            },
            {
              label: "Cost",
              value: "Fraction of traditional",
              desc: "On-chain execution eliminates intermediary fees. More value stays in the game.",
            },
            {
              label: "Transparency",
              value: "Fully on-chain",
              desc: "Every trade, every score, every leaderboard position is verifiable on-chain.",
            },
            {
              label: "Access",
              value: "Permissionless",
              desc: "Anyone can participate. No broker account needed for tokenized assets.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-1.5 bg-card/30 p-6"
            >
              <span className="text-xs text-muted-foreground">
                {item.label}
              </span>
              <span className="font-heading text-lg font-semibold">
                {item.value}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── FAQ ── */
const FAQ: FC = () => {
  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
          Questions
          <br />
          <span className="text-brand">you might have.</span>
        </h2>

        <div className="mt-12 flex flex-col gap-1">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border/15 bg-card/30 transition-colors hover:bg-card/50"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 font-medium list-none">
                <span className="pr-4 text-[15px]">{faq.q}</span>
                <HelpCircle
                  size={16}
                  className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── CTA Final ── */
const CTAFinal: FC = () => {
  return (
    <section
      id="cta"
      className="mx-6 mb-24 overflow-hidden rounded-3xl bg-brand/8 md:mx-auto md:max-w-5xl"
    >
      <div className="flex flex-col items-center gap-6 px-8 py-16 text-center md:py-24">
        <h2 className="text-balance font-heading text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
          Start building your portfolio.
          <br />
          <span className="text-brand">It&apos;s free.</span>
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">
          No wallet required. Simulated portfolios only. Jump in and start
          competing in under a minute.
        </p>

        {/* Visual-only signup form */}
        <div className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Your nickname or email"
            disabled
            className="h-12 flex-1 rounded-full border border-border/20 bg-card/50 px-5 text-sm text-muted-foreground placeholder:text-muted-foreground/40 disabled:cursor-not-allowed"
          />
          <button
            disabled
            className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-8 text-sm font-semibold text-brand-foreground opacity-60 disabled:cursor-not-allowed"
          >
            Get started
            <ArrowRight size={16} />
          </button>
        </div>
        <p className="text-xs text-muted-foreground/40">
          The form is visual only — signups will be available at launch.
        </p>

        {/* Player count */}
        <div className="mt-4 flex items-center gap-2 rounded-full border border-border/15 bg-card/30 px-4 py-1.5">
          <Users size={14} className="text-muted-foreground" />
          <span className="font-mono text-xs text-muted-foreground">
            Early access — limited spots available at launch
          </span>
        </div>
      </div>
    </section>
  );
};

/* ── Footer ── */
const Footer: FC = () => {
  return (
    <footer className="border-t border-border/20 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col gap-1">
          <a href="#" className="flex items-center justify-center gap-2 font-heading font-bold md:justify-start">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-brand-foreground font-mono text-xs font-bold">
              H
            </span>
            Hoodfolio
          </a>
          <p className="text-xs text-muted-foreground">
            Fantasy Stock Token Trading Game. Built for Robinhood Chain.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            X / Twitter
            <ExternalLink size={12} />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            Discord
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

/* ── Main Page ── */
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Contrast />
        <HowItWorks />
        <Competitions />
        <WhyRHChain />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
