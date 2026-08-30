import type { Metadata } from "next";
import Script from "next/script";
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
  title: "Gitesh Kumar Umrey | Author",
  description:
    "Official website of author Gitesh Kumar Umrey. Explore books on psychology, mindset, self-improvement, and personal growth.",

  verification: {
    google: "L_rSk8h_LfrYdOcGgwwS0Xx0o4plAYABIgPvzEIfBiI",
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
      <body className="min-h-full flex flex-col">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1703542180036552"
          crossOrigin="anonymous"
        />

        {children}
      </body>
    </html>
  );
}