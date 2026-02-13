import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Game Plan Golf Performance | Nootropic Hydration for Golfers",
    template: "%s | Game Plan Golf Performance",
  },
  description:
    "Premium golf nootropic hydration. Engineered for mental clarity, sustained energy, and peak performance on every hole. Fuel your focus. Own the course.",
  keywords: [
    "golf hydration",
    "nootropic",
    "golf supplement",
    "golf performance",
    "electrolytes",
    "focus",
    "mental clarity",
    "CognatiQ",
  ],
  metadataBase: new URL("https://www.gameplangolfperformance.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gameplangolfperformance.com",
    siteName: "Game Plan Golf Performance",
    title: "Game Plan Golf Performance | Nootropic Hydration for Golfers",
    description:
      "Premium golf nootropic hydration. Engineered for mental clarity, sustained energy, and peak performance on every hole.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Plan Golf Performance",
    description:
      "Premium golf nootropic hydration. Fuel your focus. Own the course.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <div className="fixed top-0 right-0 left-0 z-30">
          <AnnouncementBar />
          <Header />
        </div>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
