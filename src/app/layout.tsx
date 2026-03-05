import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaBar } from "@/components/CtaBar";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { business } from "@/config/business";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${business.companyName} | 24/7 AC Repair & HVAC Service in ${business.primaryCity}`,
    template: `%s | ${business.companyName}`,
  },
  description: business.description,
  keywords: [
    "AC repair Charlotte",
    "HVAC repair Charlotte NC",
    "emergency AC repair",
    "furnace repair Charlotte",
    ...business.serviceAreas.map((c) => `HVAC ${c}`),
  ],
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <LocalBusinessJsonLd url={business.baseUrl} />
        <Header />
        <CtaBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
