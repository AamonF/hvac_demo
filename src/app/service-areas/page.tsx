import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `HVAC Service Areas | ${business.companyName} Serves ${business.primaryCity} & Surrounding Cities`,
  description: `We provide HVAC repair, AC installation, and furnace service in Charlotte, Matthews, Mint Hill, Pineville, Huntersville, Cornelius, Concord, Gastonia, Belmont, and surrounding areas.`,
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            HVAC Service Areas
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            {business.companyName} serves {business.primaryCity} and the surrounding metro area.
            We provide AC repair, furnace repair, HVAC maintenance, and new installations in these
            communities.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {business.serviceAreas.map((city) => {
              const slug = city.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={city}
                  href={`/service-areas/${slug}`}
                  className="block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <h2 className="font-semibold text-slate-900">{city}</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    AC repair, furnace repair, HVAC maintenance & more
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-primary">
                    View {city} services →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-2 text-slate-600">
            <Link href="/services" className="text-primary hover:underline">
              View all HVAC services
            </Link>{" "}
            we offer in these areas.
          </p>
        </div>
      </section>
    </>
  );
}
