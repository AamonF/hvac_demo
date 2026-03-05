import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { business } from "@/config/business";

type Props = { params: Promise<{ city: string }> };

function slugToCity(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = slugToCity(city);
  const isValid = business.serviceAreas.some(
    (a) => a.toLowerCase().replace(/\s+/g, "-") === city
  );
  if (!isValid) return {};
  return {
    title: `HVAC Services in ${cityName}, NC | AC Repair, Furnace, Maintenance`,
    description: `Professional HVAC services in ${cityName}, NC: AC repair, furnace repair, HVAC maintenance. Same-day service. ${business.companyName} serves ${cityName} and the Charlotte metro.`,
  };
}

export async function generateStaticParams() {
  return business.serviceAreas.map((city) => ({
    city: city.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const cityName = slugToCity(city);
  const isValid = business.serviceAreas.some(
    (a) => a.toLowerCase().replace(/\s+/g, "-") === city
  );
  if (!isValid) notFound();

  return (
    <>
      <Hero
        title={`HVAC Services in ${cityName}, NC`}
        subtitle={`AC repair, furnace repair, and HVAC maintenance in ${cityName}. Same-day service when you need it. Licensed, insured, transparent pricing.`}
        showTrustBadges={true}
        showEmergencyCallout={true}
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <p className="max-w-2xl text-slate-600">
            {business.companyName} serves {cityName} and the greater Charlotte area. Whether
            you need emergency AC repair, a furnace tune-up, or a new system installation,
            we&apos;re here to help. Call {business.phone} or request service online.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-slate-900">Nearby Service Areas</h2>
          <ul className="mt-4 flex flex-wrap gap-4">
            {business.serviceAreas
              .filter((c) => c.toLowerCase().replace(/\s+/g, "-") !== city)
              .map((c) => (
                <li key={c}>
                  <Link
                    href={`/service-areas/${c.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary hover:underline"
                  >
                    {c}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
