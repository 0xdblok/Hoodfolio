"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type FC,
} from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  Plus,
  Sparkles,
  Hexagon,
} from "lucide-react";
import { Logo, LogoMark } from "@/components/logo";

/* ─────────────────────────────────────────────
   Data
   ──────────────────────────────────────────── */

const ASSETS = [
  { ticker: "AAPL", name: "Apple", change: 2.34, weight: 25 },
  { ticker: "NVDA", name: "NVIDIA", change: 4.71, weight: 30 },
  { ticker: "TSLA", name: "Tesla", change: -1.22, weight: 15 },
  { ticker: "BTC", name: "Bitcoin", change: 0.89, weight: 20 },
  { ticker: "ETH", name: "Ethereum", change: 3.15, weight: 10 },
] as const;

const LEADERBOARD_PREVIEW = [
  { rank: 1, name: "0xTrader", score: 14230, change: 8.4 },
  { rank: 2, name: "StockWhisperer", score: 13890, change: 5.2 },
  { rank: 3, name: "AlphaSeeker", score: 13560, change: -1.8 },
  { rank: 4, name: "NakamotoFan", score: 13120, change: 12.1 },
  { rank: 5, name: "TraderJane", score: 12840, change: 3.7 },
];

const COMPETITIONS = [
  {
    type: "Daily",
    time: "Today 9:30 AM ET",
    prize: "500 DOL",
    participants: 247,
    status: "live",
  },
  {
    type: "Daily",
    time: "Tomorrow 9:30 AM ET",
    prize: "500 DOL",
    participants: 189,
    status: "upcoming",
  },
  {
    type: "Weekly",
    time: "Monday 9:30 AM ET",
    prize: "2,500 DOL",
    participants: 412,
    status: "upcoming",
  },
] as const;

const FAQS = [
  {
    q: "What is Hoodfolio?",
    a: "Hoodfolio is a fantasy stock token trading game. You build a portfolio of five assets and compete against other players in daily and weekly competitions based on real market performance. Think Fantasy Premier League meets the stock market.",
  },
  {
    q: "Is it free to play?",
    a: "Completely free. You'll use simulated portfolios with virtual currency called DOL. No real money, no wallet required — just sign up and start competing.",
  },
  {
    q: "How do competitions work?",
    a: "Daily competitions start every morning at 9:30 AM ET. Weekly championships kick off every Monday. Your portfolio's performance is ranked against all other players — top performers earn rewards and climb the global leaderboard.",
  },
  {
    q: "What assets can I pick?",
    a: "The platform features a curated set of major stocks and cryptocurrencies. You pick exactly five assets per portfolio. As the platform grows, more assets — including Robinhood Stock Tokens — will be added.",
  },
  {
    q: "What is Robinhood Chain?",
    a: "Robinhood Chain is an emerging blockchain ecosystem that enables tokenized stock trading with near-instant settlement and near-zero fees. Hoodfolio is designed to showcase what competitive social trading looks like on this infrastructure.",
  },
  {
    q: "Do I need a crypto wallet?",
    a: "No. Simulated portfolios mean you can play immediately. Wallet integration and real tokenized assets will be introduced when the Robinhood Chain ecosystem matures.",
  },
  {
    q: "When is the launch?",
    a: "We're in active development. The platform is coming soon. Join the waitlist to get early access and secure your spot in the first competitions.",
  },
];

const ROBINHOOD_CHAIN = [
  {
    label: "Settlement",
    value: "Sub-second",
    desc: "Tokenized assets settle near-instantly on Robinhood Chain. Competitions resolve the moment markets close — no T+2 delays.",
  },
  {
    label: "Cost",
    value: "Near-zero fees",
    desc: "On-chain execution eliminates layers of intermediaries. More of every competition's prize pool goes directly to players.",
  },
  {
    label: "Verifiability",
    value: "Fully on-chain",
    desc: "Every portfolio, every trade, every leaderboard position is cryptographically verifiable. No hidden mechanics, no trust required.",
  },
  {
    label: "Access",
    value: "Permissionless",
    desc: "Anyone with an internet connection can participate. No broker account, no geographic restrictions, no minimum balance.",
  },
];

/* ─────────────────────────────────────────────
   Shared micro-components
   ──────────────────────────────────────────── */

const ComingSoonBadge: FC = () => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[10px] font-medium text-brand-light uppercase tracking-[0.08em]">
    <Sparkles size={10} />
    Coming soon
  </span>
);

const SimulatedLabel: FC = () => (
  <span className="inline-flex items-center gap-1 rounded-md border border-border/20 bg-card/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
    <Hexagon size={9} />
    Simulated data
  </span>
);

/* ─────────────────────────────────────────────
   Nav
   ──────────────────────────────────────────── */

const Nav: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center">
          <Logo className="text-lg" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </a>
          <a
            href="#competitions"
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Competitions
          </a>
          <a
            href="#leaderboard"
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Leaderboard
          </a>
          <a
            href="/docs"
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </a>
          <a
            href="#faq"
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </a>
          <a
            href="#waitlist"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-brand px-5 text-[13px] font-semibold text-brand-foreground transition-all hover:bg-brand-dim"
          >
            Join waitlist
            <ArrowRight size={14} />
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/30 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-border/20 bg-background/95 backdrop-blur-xl md:hidden"
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
              href="#leaderboard"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              Leaderboard
            </a>
            <a
              href="/docs"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              Docs
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#waitlist"
              className="mt-1 inline-flex h-9 w-fit items-center gap-1.5 rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground"
              onClick={() => setOpen(false)}
            >
              Join waitlist
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

/* ─────────────────────────────────────────────
   Asset Card (Hero) — improved
   ──────────────────────────────────────────── */

const AssetCard: FC<{
  ticker: string;
  name: string;
  change: number;
  mouseX: number;
  mouseY: number;
}> = ({ ticker, name, change, mouseX, mouseY }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 22 });
  const springY = useSpring(y, { stiffness: 120, damping: 22 });

  useEffect(() => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = mouseX - cx;
    const dy = mouseY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 350;
    const force = Math.max(0, 1 - dist / maxDist);
    x.set(dx * force * 0.05);
    y.set(dy * force * 0.05);
  }, [mouseX, mouseY, x, y]);

  const isPositive = change >= 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ x: springX, y: springY }}
      className="relative flex flex-col gap-2 rounded-xl border border-border/20 bg-card/80 px-4 py-3.5 backdrop-blur-sm select-none"
      whileHover={{ scale: 1.04 }}
    >
      {/* Top row: ticker + change */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-bold tracking-tight">
          ${ticker}
        </span>
        <span
          className={`flex items-center gap-1 font-mono text-xs font-semibold ${
            isPositive ? "text-positive" : "text-negative"
          }`}
        >
          {isPositive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {isPositive ? "+" : ""}
          {change.toFixed(2)}%
        </span>
      </div>
      {/* Name */}
      <span className="text-[11px] text-muted-foreground">{name}</span>
      {/* Subtle glow */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-xl opacity-[0.04] ${
          isPositive ? "bg-positive" : "bg-negative"
        }`}
      />
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Hero — OVERDRIVE
   ──────────────────────────────────────────── */

const Hero: FC = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }, []);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20"
    >
      {/* Ambient brand glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[140px]" />

      {/* Left green accent bar */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute top-1/2 left-8 hidden h-48 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-brand to-transparent md:block"
      />
      {/* Right green accent bar */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute top-1/2 right-8 hidden h-48 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-brand to-transparent md:block"
      />

      {/* Top-left green glow orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="pointer-events-none absolute top-10 left-[-10%] h-[300px] w-[300px] rounded-full bg-brand blur-[100px] md:left-[-5%] md:h-[400px] md:w-[400px]"
      />
      {/* Bottom-right green glow orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="pointer-events-none absolute right-[-10%] bottom-10 h-[250px] w-[250px] rounded-full bg-brand blur-[100px] md:right-[-5%] md:h-[350px] md:w-[350px]"
      />

      {/* Logo mark — large, subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <LogoMark size={400} className="text-brand" />
      </motion.div>

      {/* Headline */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-heading text-[clamp(2.2rem,6vw,5.5rem)] leading-[1.05] font-bold tracking-[-0.025em]"
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
          className="mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg"
        >
          Pick five assets. Compete in daily and weekly tournaments.
          <br />
          No real money — just skill, strategy, and the leaderboard.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-3 font-mono text-xs text-muted-foreground/50"
        >
          Simulated portfolios · Free to play · Built for Robinhood Chain
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href="#waitlist"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-brand px-8 text-[15px] font-semibold text-brand-foreground transition-all hover:bg-brand-dim hover:shadow-[0_0_32px_rgba(0,200,100,0.15)]"
          >
            Join the waitlist
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border/30 px-8 text-[15px] font-medium text-foreground transition-all hover:border-foreground/20 hover:bg-foreground/[0.03]"
          >
            How it works
          </a>
        </motion.div>

        {/* Live pulse indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-7 flex items-center justify-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          <a
            href="https://x.com/hoodfolioapp"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-muted-foreground transition-colors hover:text-brand"
          >
            Coming soon · Follow us on 𝕏 for updates
          </a>
        </motion.div>
      </div>

      {/* Asset grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-16 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-5 md:gap-4"
      >
        {ASSETS.map((asset) => (
          <AssetCard
            key={asset.ticker}
            ticker={asset.ticker}
            name={asset.name}
            change={asset.change}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </motion.div>

      {/* Portfolio weight indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 mt-4 flex items-center gap-3"
      >
        <span className="font-mono text-[10px] text-muted-foreground/50">
          Example portfolio weights
        </span>
        <div className="flex h-1.5 w-48 overflow-hidden rounded-full bg-muted">
          {ASSETS.map((a) => (
            <div
              key={a.ticker}
              className="h-full bg-brand/40 first:rounded-l-full last:rounded-r-full"
              style={{ width: `${a.weight}%` }}
            />
          ))}
        </div>
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
          <ChevronDown size={18} className="text-muted-foreground/20" />
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Section 2: Social differentiation
   ──────────────────────────────────────────── */

const WhyDifferent: FC = () => {
  return (
    <section id="how-it-works" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4">
          <ComingSoonBadge />
        </div>
        <h2 className="text-balance font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
          Trading is better
          <br />
          <span className="text-brand">with an audience.</span>
        </h2>

        <div className="mt-16 grid gap-1 md:grid-cols-2">
          {/* Left column: three value props */}
          <div className="flex flex-col gap-1">
            {[
              {
                icon: <Plus size={20} />,
                title: "Pick five. No more, no less.",
                desc: "Curate a portfolio of exactly five assets from stocks and crypto. Constraints create strategy — the five you don't pick matter as much as the five you do.",
                border: "border-brand/20 bg-brand/[0.03]",
                text: "text-brand-light",
              },
              {
                icon: <Users size={20} />,
                title: "Compete against everyone.",
                desc: "Every portfolio enters the same pool. Daily competitions, weekly championships. Your picks go head-to-head with every other player in real time.",
                border: "border-gold/20 bg-gold/[0.03]",
                text: "text-gold",
              },
              {
                icon: <Trophy size={20} />,
                title: "The leaderboard doesn't lie.",
                desc: "Market performance drives outcomes. No judges, no voting, no subjectivity. If your five outperform, you climb — pure merit.",
                border: "border-positive/20 bg-positive/[0.03]",
                text: "text-positive",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`flex gap-4 rounded-xl border p-5 ${item.border}`}
              >
                <div className={`mt-0.5 shrink-0 ${item.text}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center p-8"
          >
            <div className="relative flex h-[280px] w-[280px] items-center justify-center md:h-[340px] md:w-[340px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-brand/15" />
              <div className="absolute inset-2 rounded-full border border-brand/8" />
              {/* Inner glow */}
              <div className="absolute inset-8 rounded-full bg-brand/[0.03] blur-2xl" />
              {/* Asset positions on ring */}
              {ASSETS.map((a, i) => {
                const angle = (i / ASSETS.length) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const r = 115;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <span
                    key={a.ticker}
                    className="absolute font-mono text-xs font-bold text-brand"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    ${a.ticker}
                  </span>
                );
              })}
              {/* Center: logo + percentage */}
              <div className="z-10 flex flex-col items-center gap-1">
                <LogoMark size={40} className="text-brand" />
                <span className="font-mono text-sm font-bold text-foreground">
                  100%
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  5 assets
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Competitions Timeline
   ──────────────────────────────────────────── */

const CompetitionsTimeline: FC = () => {
  return (
    <section id="competitions" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3">
              <ComingSoonBadge />
            </div>
            <h2 className="text-balance font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
              Competitions
              <br />
              <span className="text-brand">every day.</span>
            </h2>
          </div>
        </div>

        {/* Timeline row */}
        <div className="mt-12 flex flex-wrap gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
            const isToday = i === 3; // Thursday
            const isPast = i < 3;
            return (
              <div
                key={day}
                className={`flex h-12 min-w-[56px] flex-1 items-center justify-center rounded-lg border text-xs font-medium ${
                  isToday
                    ? "border-brand bg-brand/10 text-brand"
                    : isPast
                      ? "border-border/10 bg-card/20 text-muted-foreground/50"
                      : "border-border/10 bg-card/20 text-muted-foreground/70"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
        <p className="mt-3 font-mono text-[11px] text-muted-foreground">
          New competition daily at 9:30 AM ET · Weekly championships every
          Monday
        </p>

        {/* Competition cards */}
        <div className="mt-10 flex flex-col gap-3">
          {COMPETITIONS.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/15 bg-card/40 px-5 py-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg font-mono text-[10px] font-bold ${
                    comp.status === "live"
                      ? "bg-brand/15 text-brand"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {comp.status === "live" ? "●" : "○"}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">
                      {comp.type}
                    </span>
                    {comp.status === "live" && (
                      <span className="rounded-full bg-brand/10 px-2 py-0.5 font-mono text-[10px] text-brand">
                        LIVE
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-muted-foreground">
                    {comp.time}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5 font-mono text-sm">
                  <Trophy size={14} className="text-gold" />
                  <span className="text-gold font-semibold">{comp.prize}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
                  <Users size={14} />
                  <span>{comp.participants} joined</span>
                </div>
                <div className="flex items-center gap-1">
                  <SimulatedLabel />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Leaderboard
   ──────────────────────────────────────────── */

const LeaderboardSection: FC = () => {
  return (
    <section id="leaderboard" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-3">
          <SimulatedLabel />
        </div>
        <h2 className="text-balance font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
          This is what
          <br />
          <span className="text-brand">Sunday evening</span> looks like.
        </h2>

        <div className="mt-10 overflow-x-auto rounded-xl border border-border/15 bg-card/30">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-border/15">
                <th className="px-5 py-3 font-mono text-[10px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                  Rank
                </th>
                <th className="px-5 py-3 font-mono text-[10px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                  Player
                </th>
                <th className="px-5 py-3 text-right font-mono text-[10px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                  Score
                </th>
                <th className="px-5 py-3 text-right font-mono text-[10px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                  24h Δ
                </th>
              </tr>
            </thead>
            <tbody>
              {LEADERBOARD_PREVIEW.map((p) => (
                <tr
                  key={p.name}
                  className="border-b border-border/10 transition-colors hover:bg-foreground/[0.02]"
                >
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded font-mono text-[11px] font-bold ${
                        p.rank === 1
                          ? "bg-gold text-background"
                          : p.rank === 2
                            ? "bg-foreground/15 text-foreground"
                            : p.rank === 3
                              ? "bg-gold/30 text-gold"
                              : "text-muted-foreground"
                      }`}
                    >
                      {p.rank}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${
                          p.rank <= 3
                            ? "bg-brand/10 text-brand"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {p.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="font-medium">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-right font-mono font-semibold tabular-nums">
                    {p.score.toLocaleString()}
                  </td>
                  <td
                    className={`px-5 py-3.5 text-right font-mono text-xs font-semibold tabular-nums ${
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
    </section>
  );
};

/* ─────────────────────────────────────────────
   Robinhood Chain
   ──────────────────────────────────────────── */

const WhyRHChain: FC = () => {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
          Built for
          <br />
          <span className="text-brand">Robinhood Chain.</span>
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Hoodfolio is designed to showcase what tokenized stock trading makes
          possible — competitive, social, and verifiable. The platform currently runs with
          simulated portfolios; Robinhood Chain integration is the target
          ecosystem.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border/15 bg-border/5 sm:grid-cols-2">
          {ROBINHOOD_CHAIN.map((item, i) => (
            <div key={i} className="flex flex-col gap-1.5 bg-card/30 px-5 py-5">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.06em]">
                {item.label}
              </span>
              <span className="font-heading text-base font-semibold">
                {item.value}
              </span>
              <span className="text-[13px] leading-relaxed text-muted-foreground">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   FAQ
   ──────────────────────────────────────────── */

const FAQ: FC = () => {
  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
          You probably
          <br />
          <span className="text-brand">have questions.</span>
        </h2>

        <div className="mt-10 flex flex-col gap-1">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border/15 bg-card/25 transition-colors hover:bg-card/40"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-[14px] font-medium list-none">
                <span className="pr-4">{faq.q}</span>
                <span className="shrink-0 text-[10px] text-muted-foreground transition-transform group-open:rotate-45">
                  <Plus size={14} />
                </span>
              </summary>
              <p className="px-5 pb-4 text-[13px] leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Waitlist CTA
   ──────────────────────────────────────────── */

const WaitlistCTA: FC = () => {
  return (
    <section
      id="waitlist"
      className="mx-6 mb-24 md:mx-auto md:max-w-4xl"
    >
      <div className="relative overflow-hidden rounded-2xl border border-brand/15 bg-brand/[0.04]">
        {/* Subtle grid texture — only here, not decorative */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.7 0.22 150) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.22 150) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative flex flex-col items-center gap-5 px-6 py-16 text-center md:py-20">
          <div className="mb-1">
            <LogoMark size={48} className="text-brand" />
          </div>
          <h2 className="text-balance font-heading text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
            Be the first
            <br />
            <span className="text-brand">on the leaderboard.</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Hoodfolio is in active development. Join the waitlist for early
            access, launch updates, and a head start on the competition.
          </p>

          {/* Visual-only form */}
          <div className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <div className="flex h-12 flex-1 items-center rounded-full border border-border/15 bg-card/40 px-5">
              <span className="text-sm text-muted-foreground/40">
                your@email.com
              </span>
            </div>
            <button
              disabled
              className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-7 text-sm font-semibold text-brand-foreground opacity-50"
            >
              Notify me
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="font-mono text-[11px] text-muted-foreground/40">
              Coming soon · No wallet required · Simulated portfolios
            </p>
            <ComingSoonBadge />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Footer
   ──────────────────────────────────────────── */

const Footer: FC = () => {
  return (
    <footer className="border-t border-border/15 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Logo className="text-base" />
          <p className="text-[12px] text-muted-foreground">
            Fantasy Stock Token Trading · Built for Robinhood Chain
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://x.com/hoodfolioapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            𝕏 Follow us on Twitter
            <ExternalLink size={11} />
          </a>
          <a
            href="/docs"
            className="flex items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </a>
          <span className="text-[13px] text-muted-foreground/40">
            © Hoodfolio
          </span>
        </div>
      </div>
    </footer>
  );
};

/* ─────────────────────────────────────────────
   Page
   ──────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyDifferent />
        <CompetitionsTimeline />
        <LeaderboardSection />
        <WhyRHChain />
        <FAQ />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
