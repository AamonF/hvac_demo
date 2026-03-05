import Link from "next/link";
import { Phone } from "lucide-react";
import { business } from "@/config/business";

export function CtaBar() {
  return (
    <div className="bg-primary py-3">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 sm:flex-row">
        <p className="text-center text-sm font-medium text-white sm:text-left">
          Same-day service available — Call now for fast AC repair in {business.primaryCity}
        </p>
        <a
          href={`tel:${business.phoneRaw}`}
          className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-slate-100 transition-colors"
        >
          <Phone className="h-4 w-4" />
          {business.phone}
        </a>
      </div>
    </div>
  );
}
