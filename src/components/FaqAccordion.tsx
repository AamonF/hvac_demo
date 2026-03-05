"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const defaultFaqs = [
  {
    q: "Do you offer same-day AC repair?",
    a: "Yes. We prioritize emergency calls and do our best to get a technician to you the same day when you call early. For non-emergencies, we typically schedule within 1-2 days.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Charlotte and the surrounding metro area including Matthews, Mint Hill, Pineville, Huntersville, Cornelius, Concord, Gastonia, and Belmont.",
  },
  {
    q: "Do you give upfront pricing?",
    a: "We provide estimates before starting work. For repairs, we'll diagnose first and give you a clear quote. No surprises on the bill.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We're fully licensed and insured. We can provide proof of insurance upon request.",
  },
  {
    q: "Do you work on all brands?",
    a: "We work on most major HVAC brands—Carrier, Trane, Lennox, Rheem, Goodman, and others. If we can't fix it, we'll tell you honestly.",
  },
];

interface FaqAccordionProps {
  faqs?: { q: string; a: string }[];
}

export function FaqAccordion({ faqs = defaultFaqs }: FaqAccordionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-slate-600">
          Common questions about our HVAC services.
        </p>
        <Accordion type="single" collapsible className="mt-10 max-w-3xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
