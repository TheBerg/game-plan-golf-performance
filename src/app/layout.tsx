import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Elysian Sports | Nootropic Hydration for Peak Performance",
    template: "%s | Elysian Sports",
  },
  description:
    "Engineered for athletes who refuse to leave performance to chance. Nootropic hydration designed for the demands of elite competition.",
  keywords: [
    "sports hydration",
    "nootropic",
    "golf supplement",
    "sports performance",
    "electrolytes",
    "focus",
    "mental clarity",
    "CognatiQ",
  ],
  metadataBase: new URL("https://www.elysiansports.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.elysiansports.com",
    siteName: "Elysian Sports",
    title: "Elysian Sports | Nootropic Hydration for Peak Performance",
    description:
      "Engineered for athletes who refuse to leave performance to chance. Nootropic hydration designed for the demands of elite competition.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elysian Sports",
    description:
      "Nootropic hydration engineered for elite performance. Enter your Elysian state.",
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
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
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
