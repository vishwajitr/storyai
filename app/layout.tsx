import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AI Reel Studio - AI-Powered Instagram Reels for Indian Brands",
  description: "Get high-quality 30-second AI influencer videos for your brand starting at just ₹5,000. Perfect for D2C brands, salons, fashion, beauty, and fitness businesses.",
  keywords: "AI reels, Instagram reels, AI influencer, Indian brands, D2C marketing, social media content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
