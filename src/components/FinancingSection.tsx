import Link from "next/link";
import Image from "next/image";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinancingSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[3/1] w-full">
            <Image
              src="/images/ac-unit.jpg"
              alt="New HVAC installation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <CreditCard className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Flexible Financing Available</h2>
                <p className="text-slate-600">
                  New AC or furnace? We offer financing options to fit your budget.
                </p>
              </div>
            </div>
            <p className="mt-6 text-slate-600">
              Big repairs and replacements don&apos;t have to break the bank. Ask us about our financing
              options when you call or request a quote. We&apos;ll walk you through what&apos;s available.
            </p>
            <Button asChild className="mt-6">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
