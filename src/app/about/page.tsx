import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Clock, DollarSign, Wrench } from "lucide-react";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `About Us | ${business.companyName} - HVAC Service in ${business.primaryCity}`,
  description: `Learn about ${business.companyName}. Licensed, insured HVAC contractor serving ${business.primaryCity} with same-day service and transparent pricing.`,
};

const values = [
  {
    icon: Clock,
    title: "Fast Response",
    text: "When your AC goes out or your furnace quits, we show up. Same-day service when possible.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    text: "We give you a clear quote before we start. No hidden fees, no pressure to buy more than you need.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    text: "Fully licensed in North Carolina. Your home and our technicians are protected.",
  },
  {
    icon: Wrench,
    title: "Honest Work",
    text: "We fix what's broken. If we can't fix it, we'll tell you. If you don't need a new system, we won't push one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            About {business.companyName}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            We&apos;re a local HVAC company serving {business.primaryCity} and the surrounding
            area. Our job is simple: get your heating and cooling working, do it right, and
            charge you fairly.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src="/images/about-us.jpg"
              alt="HVAC installation and repair team"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="prose prose-slate max-w-3xl">
            <p className="text-slate-700">
              {business.companyName} was built on the idea that HVAC service doesn&apos;t have to
              be complicated. You call when something breaks. We show up, diagnose the problem,
              give you a straight answer, and fix it. No upselling, no scare tactics, no
              surprises on the bill.
            </p>
            <p className="text-slate-700">
              We serve homeowners across the Charlotte metro—from {business.serviceAreas[0]} to{" "}
              {business.serviceAreas[business.serviceAreas.length - 1]} and everywhere in
              between. We know these homes. We know the systems. And we know that when it&apos;s
              95 degrees or 30 degrees, you need someone who answers the phone and shows up.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900">What We Stand For</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600">
            Ready to get your HVAC working?{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Request service
            </Link>{" "}
            or call us at {business.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
