import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { business } from "@/config/business";

export function Footer() {
  const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold text-slate-900">{business.companyName}</h3>
            <p className="mt-2 text-sm text-slate-600">{business.tagline}</p>
            <p className="mt-2 text-sm text-slate-600">{business.hours}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Contact</h4>
            <a
              href={`tel:${business.phoneRaw}`}
              className="mt-2 flex items-center gap-2 text-sm text-slate-600 hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="mt-2 flex items-center gap-2 text-sm text-slate-600 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              {business.email}
            </a>
            <p className="mt-2 text-sm text-slate-600">{fullAddress}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Services</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/services/ac-repair" className="text-sm text-slate-600 hover:text-primary">
                  AC Repair
                </Link>
              </li>
              <li>
                <Link href="/services/ac-installation" className="text-sm text-slate-600 hover:text-primary">
                  AC Installation
                </Link>
              </li>
              <li>
                <Link href="/services/furnace-repair" className="text-sm text-slate-600 hover:text-primary">
                  Furnace Repair
                </Link>
              </li>
              <li>
                <Link href="/services/hvac-maintenance" className="text-sm text-slate-600 hover:text-primary">
                  HVAC Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/ductless-mini-splits" className="text-sm text-slate-600 hover:text-primary">
                  Ductless Mini Splits
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Service Areas</h4>
            <ul className="mt-2 space-y-1">
              {business.serviceAreas.map((city) => (
                <li key={city}>
                  <Link
                    href={`/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-slate-600 hover:text-primary"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {business.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
