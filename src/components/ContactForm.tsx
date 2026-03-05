"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { business } from "@/config/business";
import { supabase } from "@/lib/supabase";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  serviceNeeded: z.string().min(1, "Please select a service"),
  city: z.string().min(2, "City is required"),
  preferredTime: z.string(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceNeeded: "",
      preferredTime: "",
    },
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    const { error } = await supabase.from("leads").insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      service_needed: data.serviceNeeded,
      city: data.city,
      preferred_time: data.preferredTime || "",
      message: data.message || null,
    });
    if (error) {
      setSubmitError("Something went wrong. Please call us at " + business.phone);
      return;
    }
    router.push("/thanks");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Name *
        </label>
        <Input
          id="name"
          {...register("name")}
          className="mt-1"
          placeholder="John Smith"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          Phone *
        </label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          className="mt-1"
          placeholder="(704) 555-0123"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email *
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="serviceNeeded" className="block text-sm font-medium text-slate-700">
          Service Needed *
        </label>
        <select
          id="serviceNeeded"
          {...register("serviceNeeded")}
          className="mt-1 flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          <option value="">Select a service</option>
          <option value="ac-repair">AC Repair</option>
          <option value="ac-installation">AC Installation</option>
          <option value="furnace-repair">Furnace Repair</option>
          <option value="hvac-maintenance">HVAC Maintenance</option>
          <option value="ductless-mini-splits">Ductless Mini Splits</option>
          <option value="other">Other</option>
        </select>
        {errors.serviceNeeded && (
          <p className="mt-1 text-sm text-red-600">{errors.serviceNeeded.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-slate-700">
          City *
        </label>
        <Input
          id="city"
          {...register("city")}
          className="mt-1"
          placeholder={business.primaryCity}
        />
        {errors.city && (
          <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700">
          Preferred Time
        </label>
        <select
          id="preferredTime"
          {...register("preferredTime")}
          className="mt-1 flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          <option value="">Select preferred time</option>
          <option value="asap">As soon as possible</option>
          <option value="morning">Morning (8am-12pm)</option>
          <option value="afternoon">Afternoon (12pm-5pm)</option>
          <option value="evening">Evening (5pm-8pm)</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="mt-1 flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          placeholder="Describe your issue or question..."
        />
      </div>
      {submitError && (
        <p className="text-sm text-red-600">{submitError}</p>
      )}
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Request Service"}
      </Button>
    </form>
  );
}
