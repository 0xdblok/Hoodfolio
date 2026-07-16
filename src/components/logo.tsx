import type { FC } from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Hoodfolio logo mark.
 * A hexagon (subtle blockchain reference) containing a stylized "H"
 * formed by two vertical bars and an upward-diagonal crossbar
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
    {/* Hexagon background */}
    <path
      d="M16 1L29.5 8.5V23.5L16 31L2.5 23.5V8.5L16 1Z"
      fill="currentColor"
      fillOpacity="0.12"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    {/* H left bar */}
    <rect x="9" y="8" width="2.5" height="16" rx="1" fill="currentColor" />
    {/* H right bar */}
    <rect x="20.5" y="8" width="2.5" height="16" rx="1" fill="currentColor" />
    {/* H crossbar — upward diagonal (chart motif) */}
    <path
      d="M11 20L15 15L18 17L21 12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Small dot at the end — price target */}
    <circle cx="21" cy="12" r="2" fill="currentColor" />
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
