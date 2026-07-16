import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hoodfolio — Fantasy Stock Token Trading",
  description:
    "Build a portfolio of 5 assets. Compete daily and weekly. Climb the ranks. Simulated portfolios — no real money required. Built on Robinhood Chain.",
  keywords: [
    "fantasy stocks",
    "token trading",
    "stock competition",
    "simulated portfolio",
    "Robinhood Chain",
    "Web3 gaming",
    "fantasy trading game",
    "Hoodfolio",
  ],
  openGraph: {
    title: "Hoodfolio — Fantasy Stock Token Trading",
    description:
      "Build a portfolio of 5 assets. Compete daily and weekly. Climb the ranks.",
    type: "website",
    siteName: "Hoodfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
