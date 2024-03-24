import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "BLUCKA | Crypto Creative Agency",
  description:
    "We are crypto creatives. Your comrades alongside. Our mission is clear. Supercharge your growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout");
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
