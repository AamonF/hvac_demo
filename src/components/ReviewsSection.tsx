import { Star, Quote } from "lucide-react";
import { business } from "@/config/business";

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
];

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-slate-600">
          Real feedback from homeowners in the {business.primaryCity} area.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
              <Quote className="mt-4 h-8 w-8 text-slate-200" />
              <p className="mt-2 text-slate-700">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-slate-900">{review.name}</p>
              <p className="text-sm text-slate-500">{review.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
