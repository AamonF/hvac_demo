import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FinancingSection } from "@/components/FinancingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { business } from "@/config/business";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-square">
                <Image
                  src="/images/a-bryant-dealer-installs-hvac-units.jpg"
                  alt="HVAC technician at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h2 className="mt-8 text-2xl font-bold text-slate-900 md:text-3xl">
                Request Service
              </h2>
              <p className="mt-2 text-slate-600">
                Fill out the form and we&apos;ll get back to you quickly. For emergencies, call us
                directly at {business.phone}.
              </p>
              <div className="mt-8 max-w-md">
                <ContactForm />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Why Choose Us
              </h2>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span>
                    <strong>Same-day service</strong> — We prioritize emergency calls and
                    same-day appointments when possible.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>
                    <strong>Transparent pricing</strong> — We give you a clear quote before
                    we start. No hidden fees.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>
                    <strong>Licensed & insured</strong> — Fully licensed in North Carolina.
                    Your home is protected.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <span>
                    <strong>Local expertise</strong> — We know Charlotte-area homes and
                    the HVAC systems we see every day.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FinancingSection />
      <ReviewsSection />
      <FaqAccordion />
    </>
  );
}
