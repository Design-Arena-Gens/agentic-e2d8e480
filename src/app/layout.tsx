import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MEMO Code · Vibe Coding AI Studio",
  description:
    "MEMO Code is the vibe-driven AI pairing studio that translates creative intent into production-grade code.",
  openGraph: {
    title: "MEMO Code · Vibe Coding AI Studio",
    description:
      "Conduct creative coding sessions with MEMO Code and deploy production-ready experiences in minutes.",
    url: "https://agentic-e2d8e480.vercel.app",
    siteName: "MEMO Code",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEMO Code · Vibe Coding AI Studio",
    description:
      "Run your product jams with AI partners that respect your vibe. MEMO Code keeps the flow on beat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
