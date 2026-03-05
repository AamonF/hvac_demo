import Link from "next/link";
import Image from "next/image";
import { Thermometer, Flame, Settings, Wind, Zap } from "lucide-react";

const services = [
  {
    slug: "ac-repair",
    title: "AC Repair",
    description: "Fast diagnosis and repair when your AC quits. We get you cool again.",
    icon: Thermometer,
    image: "/images/ac-unit.jpg",
  },
  {
    slug: "ac-installation",
    title: "AC Installation",
    description: "New system installs with honest quotes. No pressure, just options.",
    icon: Zap,
    image: "/images/a-bryant-dealer-installs-hvac-units.jpg",
  },
  {
    slug: "furnace-repair",
    title: "Furnace Repair",
    description: "Heating problems in winter? We fix furnaces and heat pumps.",
    icon: Flame,
    image: "/images/furnace-tune-up.jpg",
  },
  {
    slug: "hvac-maintenance",
    title: "HVAC Maintenance",
    description: "Tune-ups that extend equipment life and catch small issues early.",
    icon: Settings,
    image: "/images/test-unit.jpg",
  },
  {
    slug: "ductless-mini-splits",
    title: "Ductless Mini Splits",
    description: "Zone cooling and heating without ductwork. Great for additions.",
    icon: Wind,
    image: "/images/ductwork.jpg",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          HVAC Services We Provide
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          From emergency AC repair to planned maintenance, we handle it all. No job too small.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-primary">
                  Learn more →
                </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
