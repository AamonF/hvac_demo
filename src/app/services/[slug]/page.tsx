import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FaqJsonLd } from "@/components/JsonLd";
import { business } from "@/config/business";

const services: Record<
  string,
  {
    title: string;
    description: string;
    content: string;
    faqs: { q: string; a: string }[];
  }
> = {
  "ac-repair": {
    title: "AC Repair",
    description: `Emergency AC repair in ${business.primaryCity}. Same-day service when your AC quits. Fast diagnosis, honest pricing.`,
    content: `When your AC stops working on a hot day, you need someone who shows up fast. We diagnose the problem, give you a clear quote, and get you cool again. We work on all major brands and don't push unnecessary repairs.

Common issues we fix: refrigerant leaks, compressor problems, capacitor failures, frozen coils, thermostat issues, and more. If we can't fix it, we'll tell you straight.`,
    faqs: [
      {
        q: "How fast can you get here for AC repair?",
        a: "We prioritize emergency calls and aim for same-day service when you call early. Non-emergencies typically get scheduled within 1-2 days.",
      },
      {
        q: "Do you charge for diagnostics?",
        a: "We charge a standard service call fee that covers the diagnosis. If you proceed with the repair, that fee is often applied to the total.",
      },
      {
        q: "What if my AC is beyond repair?",
        a: "We'll give you an honest assessment. If replacement makes more sense than repair, we'll explain your options with no pressure.",
      },
    ],
  },
  "ac-installation": {
    title: "AC Installation",
    description: `New AC installation in ${business.primaryCity}. Honest quotes, quality equipment. We help you choose the right system.`,
    content: `Replacing an old AC? Adding cooling to a new space? We install new systems with honest quotes and quality equipment. We'll size it right, explain your options, and handle the full installation.

We work with trusted brands and can help you choose between standard efficiency and higher-efficiency units based on your budget and goals.`,
    faqs: [
      {
        q: "How long does AC installation take?",
        a: "A typical residential AC installation takes one day. We'll give you a clear timeline when we provide the quote.",
      },
      {
        q: "Do you offer financing for new AC units?",
        a: "Yes. Ask us about financing options when you get your quote. We'll walk you through what's available.",
      },
      {
        q: "What size AC do I need?",
        a: "We perform a load calculation based on your home's size, insulation, and other factors to recommend the right size. Oversized or undersized units cause problems.",
      },
    ],
  },
  "furnace-repair": {
    title: "Furnace Repair",
    description: `Furnace repair in ${business.primaryCity}. Heating problems fixed fast. Same-day service for emergencies.`,
    content: `No heat when it's cold is miserable. We repair furnaces and heat pumps quickly. Whether it's a pilot light, blower motor, ignitor, or something else, we'll diagnose and fix it.

We work on gas furnaces, electric furnaces, and heat pumps. Same-day service available for heating emergencies.`,
    faqs: [
      {
        q: "Why isn't my furnace producing heat?",
        a: "Common causes include a dirty filter, pilot light out, faulty ignitor, or blower motor issues. We'll diagnose and explain before we fix.",
      },
      {
        q: "Do you repair heat pumps?",
        a: "Yes. We service and repair heat pumps for both heating and cooling. Many Charlotte-area homes use heat pumps.",
      },
      {
        q: "Should I repair or replace my furnace?",
        a: "We'll give you an honest recommendation based on the repair cost, your furnace's age, and efficiency. No pressure either way.",
      },
    ],
  },
  "hvac-maintenance": {
    title: "HVAC Maintenance",
    description: `HVAC maintenance and tune-ups in ${business.primaryCity}. Extend equipment life and catch problems early.`,
    content: `Regular maintenance keeps your AC and furnace running efficiently and catches small issues before they become big repairs. We offer tune-ups that include cleaning, inspection, and basic adjustments.

Many homeowners schedule maintenance in spring (before AC season) and fall (before heating season). We can set up a reminder for you.`,
    faqs: [
      {
        q: "How often should I get HVAC maintenance?",
        a: "We recommend annual maintenance for both your AC and furnace. Spring for AC, fall for heating is a common schedule.",
      },
      {
        q: "What does a tune-up include?",
        a: "We clean coils, check refrigerant levels, inspect electrical connections, test safety controls, and ensure everything is operating correctly.",
      },
      {
        q: "Can maintenance prevent breakdowns?",
        a: "Yes. Many breakdowns are caused by dirty coils, low refrigerant, or worn parts. Maintenance catches these early.",
      },
    ],
  },
  "ductless-mini-splits": {
    title: "Ductless Mini Splits",
    description: `Ductless mini split installation in ${business.primaryCity}. Zone cooling and heating without ductwork.`,
    content: `Ductless mini splits are great for additions, garages, sunrooms, or homes without ductwork. Each unit cools (and often heats) its own zone, so you control comfort room by room.

We install and service ductless systems from major brands. They're efficient, quiet, and flexible for a variety of spaces.`,
    faqs: [
      {
        q: "Where are ductless mini splits a good fit?",
        a: "Additions, garages, sunrooms, finished basements, or homes without existing ductwork. Also useful for zoning in larger homes.",
      },
      {
        q: "Do ductless systems provide heat too?",
        a: "Most ductless mini splits provide both cooling and heating. They're heat pumps, so they're efficient for moderate climates like Charlotte.",
      },
      {
        q: "How many indoor units can one outdoor unit support?",
        a: "It depends on the system. Single-zone systems have one indoor unit. Multi-zone systems can support 2-5 indoor units from one outdoor unit.",
      },
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: `${service.title} in ${business.primaryCity}`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <>
      <FaqJsonLd faqs={service.faqs} />
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {service.title} in {business.primaryCity}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">{service.description}</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-slate max-w-3xl">
            <p className="whitespace-pre-line text-slate-700">{service.content}</p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-md bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90"
            >
              Request {service.title}
            </Link>
          </div>
        </div>
      </section>
      <FaqAccordion faqs={service.faqs} />
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-slate-900">Other Services</h2>
          <ul className="mt-4 flex flex-wrap gap-4">
            {Object.entries(services)
              .filter(([s]) => s !== slug)
              .map(([s, { title }]) => (
                <li key={s}>
                  <Link
                    href={`/services/${s}`}
                    className="text-primary hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
          </ul>
          <p className="mt-4">
            <Link href="/service-areas" className="text-primary hover:underline">
              View our service areas
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
