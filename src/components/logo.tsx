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
    {/* H horizontal crossbar */}
    <rect x="10.4" y="15" width="8.5" height="2" rx="1" fill="currentColor" />
    {/* Upward arrow from crossbar (chart motif) */}
    <path
      d="M18 16L22 10"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arrow tip at the end */}
    <circle cx="22" cy="10" r="1.6" fill="currentColor" />
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
