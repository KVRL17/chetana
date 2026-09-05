# Chetana Counselling Centre Website

A production-focused counselling and training website built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, React Hook Form and Zod.

## Main sections

- Premium responsive home page
- Counsellor and centre information
- Eight counselling service pages
- Training catalogue with individual programme detail pages
- School/college and HRD training pages
- Resources and article pages
- Searchable FAQ section
- Contact, callback and appointment forms
- Privacy policy, terms and disclaimer
- SEO metadata, structured data, robots.txt and sitemap.xml

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm run start
```

## Project configuration

Primary business information, contact details, navigation and SEO copy are centralised in:

```text
src/config/site.ts
```

Service, training, FAQ and article content is kept under:

```text
src/data/
```

## Notes

- Forms use client-side validation through React Hook Form and Zod.
- Appointment links can preselect a service using the `service` query parameter.
- The design does not rely on missing stock photography or placeholder testimonials.
- Training programme links resolve to real dynamic detail pages.

## Mobile experience

The responsive layer is intentionally designed rather than simply scaled down from desktop. Mobile includes a compact full-screen navigation experience, balanced hero composition, touch-friendly CTA sizing, 2×2 trust metrics, shorter service cards, a vertical counselling-process timeline, responsive training/resource cards, mobile-safe form inputs, compact breadcrumbs, a floating contact dock, and footer spacing for device safe areas. Desktop breakpoints retain the premium desktop presentation.
