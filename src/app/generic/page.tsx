"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Check,
  Star,
  ChevronDown,
} from "lucide-react";

/* ─────────────────────────────────────────────
   GENERIC AI LANDING PAGE — ANTI-IMPECCABLE
   Every Impeccable rule deliberately violated.
   ──────────────────────────────────────────── */

const STATS = [
  { value: "10K+", label: "Active Traders" },
  { value: "$2.4B", label: "Volume Traded" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Supported Assets" },
];

const FEATURES = [
  {
    icon: <BarChart3 size={28} />,
    title: "Advanced Analytics",
    desc: "Real-time charts and predictive models powered by cutting-edge AI to maximize your trading edge.",
  },
  {
    icon: <Shield size={28} />,
    title: "Bank-Grade Security",
    desc: "Your assets are protected by military-grade encryption and multi-signature cold storage.",
  },
  {
    icon: <Zap size={28} />,
    title: "Lightning Execution",
    desc: "Execute trades in microseconds with our proprietary low-latency order routing engine.",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Markets",
    desc: "Access stocks, crypto, forex, and commodities from a single unified trading dashboard.",
  },
  {
    icon: <Star size={28} />,
    title: "AI-Powered Insights",
    desc: "Our machine learning algorithms scan millions of data points to surface actionable opportunities.",
  },
  {
    icon: <Check size={28} />,
    title: "Seamless Integration",
    desc: "Connect your existing wallets, exchanges, and portfolio trackers in just one click.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Professional Trader",
    quote:
      "This platform completely transformed how I approach the markets. The AI insights are genuinely game-changing.",
    avatar: "SJ",
  },
  {
    name: "Marcus Chen",
    role: "Crypto Investor",
    quote:
      "I've tried every trading platform out there. Nothing comes close to the speed and reliability.",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Portfolio Manager",
    quote:
      "The analytics dashboard alone is worth it. My returns have improved by 40% since switching.",
    avatar: "ER",
  },
];

const PRICING = [
  {
    tier: "Starter",
    price: "$0",
    desc: "Perfect for getting started",
    features: ["5 assets", "Basic analytics", "Daily competitions", "Community access"],
  },
  {
    tier: "Pro",
    price: "$29",
    desc: "For serious traders",
    features: [
      "Unlimited assets",
      "Advanced AI insights",
      "Priority execution",
      "API access",
      "Custom dashboards",
      "Premium support",
    ],
    popular: true,
  },
  {
    tier: "Enterprise",
    price: "Custom",
    desc: "For institutions",
    features: [
      "Everything in Pro",
      "Dedicated infrastructure",
      "SLA guarantee",
      "White-label option",
      "Custom integrations",
      "24/7 phone support",
    ],
  },
];

export default function GenericPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.96_0.02_80)] text-[oklch(0.25_0.01_260)]">
      {/* ═══════════════════════════════════════════
          NAV — glassmorphism + ghost-card border
          ═══════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
            TradeVault
          </span>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm font-medium text-[oklch(0.4_0.01_260)] transition-colors hover:text-purple-600">
              Features
            </a>
            <a href="#" className="text-sm font-medium text-[oklch(0.4_0.01_260)] transition-colors hover:text-purple-600">
              Pricing
            </a>
            <a href="#" className="text-sm font-medium text-[oklch(0.4_0.01_260)] transition-colors hover:text-purple-600">
              About
            </a>
            <a
              href="#"
              className="rounded-full border border-purple-300 bg-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(147,51,234,0.25)] transition-all hover:bg-purple-700 hover:shadow-[0_12px_40px_rgba(147,51,234,0.35)]"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO — gradient text, glass card, hero metrics
          ═══════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center px-6 pt-28 pb-20 text-center">
        {/* Decorative stripe background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, oklch(0.3 0.01 260) 10px, oklch(0.3 0.01 260) 11px)",
          }}
        />

        {/* Tiny uppercase tracked eyebrow — THE AI TELL */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-xs font-semibold tracking-[0.2em] text-purple-600 uppercase"
        >
          Next-Generation Trading Platform
        </motion.p>

        {/* Gradient text headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-[clamp(2.5rem,7vw,5rem)] leading-[1.1] font-extrabold text-transparent"
        >
          Trade Smarter.
          <br />
          Grow Faster.
          <br />
          Win Bigger.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 max-w-xl text-lg text-[oklch(0.45_0.02_260)]"
        >
          The most advanced AI-powered trading platform for the modern investor.
          Real-time analytics, zero fees, and institutional-grade security.
        </motion.p>

        {/* CTA buttons with ghost-card pattern (border + shadow ≥16px) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-purple-400 bg-purple-600 px-8 py-3.5 text-base font-semibold text-white shadow-[0_12px_40px_rgba(147,51,234,0.3)] transition-all hover:bg-purple-700 hover:shadow-[0_16px_48px_rgba(147,51,234,0.4)]"
          >
            Start Trading Free
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-8 py-3.5 text-base font-medium text-purple-600 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]"
          >
            Watch Demo
          </a>
        </motion.div>

        {/* Hero-metric template — THE AI TELL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold tracking-[0.15em] text-[oklch(0.5_0.02_260)] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Glass card mockup — glassmorphism décoratif */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 w-full max-w-4xl rounded-[32px] border border-white/30 bg-white/40 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 border-b border-white/20 pb-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-[oklch(0.5_0.02_260)]">
              Dashboard Overview
            </span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/60 p-4 shadow-sm"
              >
                <div className="h-20 rounded-xl bg-gradient-to-br from-purple-100 to-blue-50" />
                <div className="mt-3 h-3 w-3/4 rounded-full bg-purple-200" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-purple-100" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bounce scroll hint — elastic easing violation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              type: "spring",
              bounce: 0.4,
            }}
          >
            <ChevronDown size={24} className="text-purple-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          LOGOS — fake partners
          ═══════════════════════════════════════════ */}
      <section className="border-y border-purple-100 bg-white/30 px-6 py-10 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-center text-xs font-semibold tracking-[0.2em] text-[oklch(0.5_0.02_260)] uppercase">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
            {["CoinBase", "Binance", "Kraken", "Gemini", "FTX 2.0", "eToro"].map(
              (name) => (
                <span
                  key={name}
                  className="text-lg font-bold tracking-tight text-[oklch(0.4_0.01_260)]"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY US — numbered markers + eyebrow
          ═══════════════════════════════════════════ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-xs font-semibold tracking-[0.2em] text-purple-600 uppercase">
            Why Choose TradeVault
          </p>
          <h2 className="text-center text-[clamp(1.75rem,4vw,3rem)] leading-[1.2] font-bold">
            The Future of Trading
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Is Already Here
            </span>
          </h2>

          <div className="mt-16 flex flex-col gap-8">
            {[
              {
                num: "01",
                title: "Cutting-Edge Technology",
                desc: "Our proprietary AI engine processes over 10 million data points per second to give you the edge in every trade. Built by ex-Google and Goldman Sachs engineers.",
              },
              {
                num: "02",
                title: "Unmatched Security",
                desc: "SOC 2 Type II certified with multi-signature cold storage, biometric authentication, and real-time threat monitoring. Your assets, protected 24/7.",
              },
              {
                num: "03",
                title: "Zero Commission Trading",
                desc: "Trade stocks, crypto, and derivatives with zero fees. We make money when you make money through our innovative revenue-sharing model.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 rounded-[28px] border border-purple-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              >
                <span className="shrink-0 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-[oklch(0.5_0.02_260)]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES — identical card grid with icons
          ═══════════════════════════════════════════ */}
      <section className="bg-white/20 px-6 py-24 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center text-xs font-semibold tracking-[0.2em] text-purple-600 uppercase">
            Powerful Features
          </p>
          <h2 className="text-center text-[clamp(1.75rem,4vw,3rem)] leading-[1.2] font-bold">
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              To Succeed
            </span>
          </h2>

          {/* Identical card grid — THE AI TELL */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center rounded-[32px] border border-purple-100 bg-white p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_12px_40px_rgba(147,51,234,0.12)] hover:-translate-y-1"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[oklch(0.5_0.02_260)]">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS — fake quotes
          ═══════════════════════════════════════════ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-xs font-semibold tracking-[0.2em] text-purple-600 uppercase">
            Testimonials
          </p>
          <h2 className="text-center text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] font-bold">
            Loved by
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Thousands
            </span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col gap-4 rounded-[32px] border border-purple-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              >
                {/* Side-stripe border — THE AI TELL */}
                <div className="border-l-[3px] border-purple-500 pl-4">
                  <p className="text-sm leading-relaxed italic text-[oklch(0.5_0.02_260)]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-purple-50 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-[oklch(0.5_0.02_260)]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING — nested cards + ghost-card pattern
          ═══════════════════════════════════════════ */}
      <section className="bg-white/20 px-6 py-24 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-xs font-semibold tracking-[0.2em] text-purple-600 uppercase">
            Pricing Plans
          </p>
          <h2 className="text-center text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] font-bold">
            Simple,
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Transparent Pricing
            </span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRICING.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col rounded-[32px] border bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ${
                  plan.popular
                    ? "border-purple-400 shadow-[0_8px_40px_rgba(147,51,234,0.15)]"
                    : "border-purple-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold">{plan.tier}</h3>
                <p className="mt-1 text-sm text-[oklch(0.5_0.02_260)]">
                  {plan.desc}
                </p>
                <p className="mt-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent">
                  {plan.price}
                </p>
                {plan.price !== "Custom" && (
                  <p className="text-xs text-[oklch(0.5_0.02_260)]">
                    per month
                  </p>
                )}
                <ul className="mt-6 flex flex-col gap-3 border-t border-purple-50 pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check
                        size={16}
                        className="shrink-0 text-purple-500"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "border-purple-400 bg-purple-600 text-white shadow-[0_8px_24px_rgba(147,51,234,0.25)] hover:bg-purple-700"
                      : "border-purple-200 text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  Get Started
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL — glass section + gradient text
          ═══════════════════════════════════════════ */}
      <section className="relative mx-6 mb-24 overflow-hidden rounded-[40px] md:mx-auto md:max-w-5xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="relative flex flex-col items-center px-8 py-20 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] font-extrabold text-white">
            Ready to Transform
            <br />
            Your Trading?
          </h2>
          <p className="mt-4 max-w-md text-white/80">
            Join thousands of traders who are already winning with TradeVault.
            Start your free trial today.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-purple-600 shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]"
            >
              Start Free Trial
              <ArrowRight size={18} />
            </a>
          </div>
          <p className="mt-4 text-sm text-white/50">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer className="border-t border-purple-100 bg-white/40 px-6 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-lg font-bold text-transparent">
                TradeVault
              </span>
              <p className="mt-2 text-sm text-[oklch(0.5_0.02_260)]">
                The future of trading.
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "API", "Changelog"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Cookies", "Licenses"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold">{col.title}</h4>
                <ul className="mt-3 flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-[oklch(0.5_0.02_260)] transition-colors hover:text-purple-600"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-purple-100 pt-6 text-center text-xs text-[oklch(0.5_0.02_260)]">
            © 2026 TradeVault. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
