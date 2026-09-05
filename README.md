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

## Admin panel and JSON form storage

The website now stores a copy of every active form submission in a server-side JSON file while preserving the existing FormSubmit email flow.

Admin URL:

```text
/admin
```

Configure admin access before deployment by copying `.env.example` values into your environment:

```text
ADMIN_USERNAME=admin
ADMIN_PASSWORD=<strong-password>
ADMIN_SESSION_SECRET=<long-random-secret>
```

By default, form records are stored in:

```text
data/form-submissions.json
```

The storage writer uses atomic replacement and maintains:

```text
data/form-submissions.backup.json
```

The admin panel supports search, form/status filtering, JSON export, editable submission fields, follow-up status and private admin notes. All edits are written back to the same JSON storage.

### Important deployment requirement for JSON persistence

JSON-file storage needs a persistent writable server filesystem. For production, deploy the Next.js app on a Node server/VPS/container with a persistent disk/volume, and optionally point `FORM_SUBMISSIONS_FILE` to that mounted path. A stateless/serverless runtime with ephemeral filesystem storage cannot guarantee that runtime file writes will survive restarts or redeployments.

The browser also keeps a small local retry queue and uses a navigation-safe beacon fallback if the JSON API is temporarily unreachable. FormSubmit email submission remains independent so the existing email flow is not blocked by a temporary JSON write failure.
