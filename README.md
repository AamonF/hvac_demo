# Queen City HVAC - Lead Gen Website

A production-ready local lead-gen website for an HVAC company in Charlotte, NC. Built for max conversions and local SEO.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **TailwindCSS** for styling
- **shadcn/ui**-style components (Button, Input, Accordion)
- **React Hook Form** + **Zod** for form validation
- **Supabase** for lead storage (contact form submissions)
- Local config file for business info (no CMS)

## Quick Start

```bash
npm install
cp .env.example .env.local   # Add your Supabase keys (or use existing .env.local)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase

Contact form submissions are stored in Supabase. The `leads` table has:

- `name`, `phone`, `email`, `service_needed`, `city`, `preferred_time`, `message`, `created_at`

View leads in the [Supabase Dashboard](https://supabase.com/dashboard) → Table Editor → `leads`.

## Business Config

Edit **`src/config/business.ts`** to update:

- Company name, phone, email
- Service areas
- Address
- Base URL (for sitemap, robots, JSON-LD)

All business info across the site pulls from this single file.

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── page.tsx           # Home
│   ├── services/          # Services overview + [slug]
│   ├── service-areas/     # Service areas + [city]
│   ├── about/
│   ├── reviews/
│   ├── contact/
│   ├── thanks/            # Form success
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Header.tsx         # Sticky header with CTA
│   ├── Hero.tsx
│   ├── CtaBar.tsx        # Same-day service bar
│   ├── ServicesGrid.tsx
│   ├── FinancingSection.tsx
│   ├── ReviewsSection.tsx
│   ├── FaqAccordion.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── JsonLd.tsx        # LocalBusiness + FAQPage schema
└── config/
    └── business.ts       # Single source of truth
```

## Contact Form

Form submissions are saved to Supabase `leads` table and redirect to `/thanks`. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`.

## SEO

- Unique metadata (title, description) on every page
- LocalBusiness (HVACBusiness) JSON-LD on all pages
- FAQPage JSON-LD on service pages
- Auto-generated `sitemap.xml` and `robots.txt`
- Internal links between services and service areas

## Images

The site uses icon-based design. To add photos (team, trucks, before/after), use `next/image` with `placeholder="blur"` and appropriate `width`/`height` or `fill` for responsive images.
