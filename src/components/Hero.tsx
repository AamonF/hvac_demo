import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/config/business";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showTrustBadges?: boolean;
  showEmergencyCallout?: boolean;
}

export function Hero({
  title = "24/7 HVAC Repair & Installation in Charlotte",
  subtitle = "Same-day service. Transparent pricing. Licensed & insured. When your AC goes out, we show up.",
  showTrustBadges = true,
  showEmergencyCallout = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
          <div className="relative h-full w-full">
            <Image
              src="/images/new-hero.jpg"
              alt="24/7 HVAC repair and installation in Charlotte"
              fill
              className="object-cover opacity-30"
              sizes="50vw"
              priority
            />
          </div>
        </div>
        {showEmergencyCallout && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            Emergency service available — {business.hours}
          </div>
        )}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-white hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-5 w-5" />
            {business.phone}
          </a>
          <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
            <Link href="/contact">Request Service</Link>
          </Button>
        </div>
        {showTrustBadges && (
          <div className="mt-12 flex flex-wrap gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-sky-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-sky-400" />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-sky-400" />
              <span>Upfront Pricing</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
