import type { Metadata } from "next";
import Link from "next/link";
import { ServicesGrid } from "@/components/ServicesGrid";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `HVAC Services in ${business.primaryCity} | AC Repair, Furnace, Maintenance`,
  description: `Professional HVAC services in ${business.primaryCity}: AC repair, AC installation, furnace repair, HVAC maintenance, ductless mini splits. Same-day service available.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            HVAC Services in {business.primaryCity}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            From emergency AC repair to planned maintenance and new installations, we handle
            it all. Licensed, insured, and committed to honest pricing.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <p className="text-slate-600">
            We also serve{" "}
            {business.serviceAreas.slice(1).map((city, i) => (
              <span key={city}>
                <Link
                  href={`/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-primary hover:underline"
                >
                  {city}
                </Link>
                {i < business.serviceAreas.length - 2 ? ", " : ""}
              </span>
            ))}
            , and surrounding areas.{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Request service
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
