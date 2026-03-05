import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: `Contact Us | ${business.companyName} - Request HVAC Service in ${business.primaryCity}`,
  description: `Contact ${business.companyName} for AC repair, furnace repair, and HVAC service in ${business.primaryCity}. Request service online or call ${business.phone} for same-day service.`,
};

const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Request service, get a quote, or ask a question. For emergencies, call us
            directly—we prioritize same-day service.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Request Service</h2>
              <p className="mt-2 text-slate-600">
                Fill out the form and we&apos;ll get back to you quickly. Include your preferred
                contact time and we&apos;ll work around your schedule.
              </p>
              <div className="mt-8 max-w-md">
                <ContactForm />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Get in Touch</h2>
              <div className="mt-6 space-y-6">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-start gap-4 rounded-lg border border-slate-200 p-4 hover:border-primary/30 transition-colors"
                >
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-slate-900">Call Us</p>
                    <p className="text-lg font-semibold text-primary">{business.phone}</p>
                    <p className="text-sm text-slate-600">{business.hours}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-start gap-4 rounded-lg border border-slate-200 p-4 hover:border-primary/30 transition-colors"
                >
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-primary">{business.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 rounded-lg border border-slate-200 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-slate-900">Address</p>
                    <p className="text-slate-600">{fullAddress}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
