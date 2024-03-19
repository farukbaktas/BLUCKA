import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLUCKA | Crypto Creative Agency",
  description: "We are crypto creatives. Your comrades alongside. Our mission is clear. Supercharge your growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout");
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
