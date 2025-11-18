import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitscale Assignment",
  description: "Bitscale workspace scaffolding with custom layout shell.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-[var(--color-bg)] text-[var(--color-text)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
