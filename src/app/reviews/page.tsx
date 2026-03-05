import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `Customer Reviews | ${business.companyName} - HVAC Service in ${business.primaryCity}`,
  description: `Read what customers say about ${business.companyName}. Real reviews from homeowners in Charlotte, Matthews, Huntersville, and surrounding areas.`,
};

const reviews = [
  {
    name: "Mike T.",
    location: "Charlotte",
    rating: 5,
    text: "AC died on a 95-degree Saturday. Called Queen City and they had someone out same day. Tech was professional, explained everything, and didn't try to upsell. Fair price, fixed it right.",
  },
  {
    name: "Sarah L.",
    location: "Matthews",
    rating: 5,
    text: "Had our furnace serviced before winter. Quick, thorough, and the guy actually cleaned up after himself. Rare these days. Will use again.",
  },
  {
    name: "James R.",
    location: "Huntersville",
    rating: 5,
    text: "Replaced our old AC unit. Got three quotes and theirs was competitive. Installation was clean, crew was respectful of our home. No complaints.",
  },
  {
    name: "Lisa M.",
    location: "Concord",
    rating: 5,
    text: "Thermostat was acting up. They came out, diagnosed it quickly, and replaced it. No drama. Fair price. Would recommend.",
  },
  {
    name: "David K.",
    location: "Pineville",
    rating: 5,
    text: "Emergency call on a Sunday. They had someone here within a few hours. Compressor capacitor was bad—fixed it same day. Very grateful.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Customer Reviews
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            What homeowners in {business.primaryCity} and the surrounding area say about
            {business.companyName}. Real feedback from real customers.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-slate-700">&ldquo;{review.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600">
            Need HVAC service?{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Request service
            </Link>{" "}
            or call {business.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
