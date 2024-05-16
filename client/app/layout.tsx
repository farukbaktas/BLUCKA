import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLUCKA | Crypto Creative Agency",
  description: "WOur mission is clear. We supercharge your growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout");
  return (
    <html lang="en">
      <head>
          {/* Google Analytics*/}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-2GS59HQ3YH"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-2GS59HQ3YH');
              `,
            }}
          />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
