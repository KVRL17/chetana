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

## Counselling-centre management workspace

The existing website-enquiry admin remains available and is now extended with a separate internal centre workspace. These routes are protected by the same admin session:

```text
/admin/centre          Executive centre overview
/admin/today           Daily command desk for schedule, dues and alerts
/admin/calendar        Combined seven-day appointment/session planner
/admin/leads           Offline CRM pipeline for calls, walk-ins and referrals
/admin/clients         Patient / customer / client profiles and Client 360°
/admin/sessions        Counselling session records and private notes
/admin/care-plans      Packages, session utilisation, fees and due dates
/admin/communications Client call / WhatsApp / email / front-desk history
/admin/documents       Client document metadata and secure file references
/admin/appointments    Centre appointment records
/admin/follow-ups      Calls, WhatsApp, email and session follow-ups
/admin/tasks           Internal centre tasks and reminders
/admin/services        Services and standard fee catalogue
/admin/payments        Client fees and receipts
/admin/expenses        Centre operational expenses
/admin/finance         Income, expense and outstanding-fee command view
/admin/inventory       Centre supplies and minimum-stock management
/admin/staff           Counsellor / staff directory
/admin/reports         Operational, CRM and financial summary
/admin/archive         Restorable no-loss archive
/admin/data            Full JSON export and storage status
```

Centre operational data is stored separately from website submissions in:

```text
data/centre-admin.json
data/centre-admin.backup.json
```

All centre records can be created and edited from the admin UI. The upgraded workspace also includes advanced search/status filtering, CRM conversion to client profiles, care-plan balances, communication history, inventory alerts, a daily attention queue, seven-day calendar and finance command view. Writes use the same queued, atomic JSON-file pattern and maintain a complete backup copy. Archiving does not discard the record: the full record is retained inside the JSON archive and can be restored from `/admin/archive`.

A website enquiry can also be converted into a centre client profile directly from the enquiry detail drawer using **Create client profile**. The original website submission remains untouched and the client record stores the source submission ID to prevent duplicate imports.

For a persistent production volume, set:

```text
CENTRE_ADMIN_FILE=/var/lib/chetana/centre-admin.json
```

Because counselling records can contain sensitive personal information, keep the admin credentials strong and ensure the JSON storage directory is private to the application/server account and is not served as a public static directory.
