import type { FC } from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Hoodfolio logo mark.
 * A hexagon containing a stylized "H" with two vertical bars
 * and a horizontal crossbar with an upward arrow tip
 * (chart/candlestick motif), in Robinhood-inspired green.
 */
export const LogoMark: FC<LogoProps> = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Hoodfolio"
  >
    {/* Hexagon */}
    <path
      d="M16 1L29.5 8.5V23.5L16 31L2.5 23.5V8.5L16 1Z"
      fill="currentColor"
      fillOpacity="0.12"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    {/* H left vertical bar */}
    <rect x="8" y="7.5" width="2.4" height="17" rx="1.2" fill="currentColor" />
    {/* H right vertical bar */}
    <rect x="21.6" y="7.5" width="2.4" height="17" rx="1.2" fill="currentColor" />
    {/* H crossbar — trading chart: starts at left bar, dips, breaks out to right bar */}
    <path
      d="M10.4 15.5 L12.5 15.5 L14.5 16.5 L16.5 13 L18.5 13.5 L21.6 14.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Small candle dot at the breakout peak */}
    <circle cx="16.5" cy="13" r="1.8" fill="currentColor" />
  </svg>
);

/**
 * Full logo: mark + wordmark.
 */
export const Logo: FC<{ className?: string }> = ({ className = "" }) => (
  <span className={`flex items-center gap-2.5 font-heading font-bold ${className}`}>
    <LogoMark size={28} className="text-[var(--brand)]" />
    <span className="tracking-tight">Hoodfolio</span>
  </span>
);
