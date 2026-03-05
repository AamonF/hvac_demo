import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `Thank You | ${business.companyName}`,
  description: `Thank you for contacting ${business.companyName}. We'll be in touch soon.`,
  robots: "noindex, nofollow",
};

export default function ThanksPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
          Thank You
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-slate-600">
          We&apos;ve received your request and will get back to you shortly. For urgent
          issues, please call us directly at {business.phone}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90"
          >
            <Phone className="h-5 w-5" />
            {business.phone}
          </a>
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
