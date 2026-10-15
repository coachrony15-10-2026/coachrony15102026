# MD RONY Portfolio — Build Plan

One complete homepage at `/`, following your brief section by section, in Bengali-first copy with English labels.

## Look and feel
- Navy, electric blue and cyan palette with light page backgrounds; navy for hero, approach and footer.
- Hind Siliguri (Bengali) + Montserrat (English), large controlled headings, thin borders, restrained shadows.
- Gentle fade-in on scroll, turned off for people who prefer reduced motion.

## Sections (top to bottom)
1. Sticky header — "MD RONY" wordmark + small CoachRony label, menu links that scroll to each section, "Let's Collaborate" button, compact mobile menu.
2. Hero — eyebrow, Bengali heading and paragraph, two buttons, expertise line. Right side: a tasteful portrait placeholder (no invented photo) — swap in your real portrait anytime.
3. About — editorial layout, signature text, CTA to projects.
4. Services — six light cards with icons and "Discuss a project" links to the contact form.
5. Featured projects — four cards with status labels. CoachRony Academy links to coachrony.com, Vibe Coding links to vibecoding.coachrony.com; others show "Link coming soon" (not clickable). All editable from one list.
6. Training — CoachRony Academy highlights, CTA to coachrony.com. No invented stats.
7. Professional journey — six experience areas, no dates or credentials.
8. My approach — five steps, horizontal on desktop, vertical on mobile.
9. Contact — working form (name, email, inquiry type, message) with validation, sending state, real success/error messages.
10. Footer — brand, links, website, social link slots, current year.

## Contact form
Enable Lovable Cloud so every inquiry is actually saved (not a fake success). You can view submissions in the Cloud dashboard. Email/social details stay as clearly marked placeholders until you provide them.

## Technical details
- `src/routes/index.tsx` composes section components in `src/components/portfolio/`; projects, services, journey and contact/social details live in `src/data/portfolio.ts`.
- Design tokens in `src/styles.css` (oklch), fonts via `<link>` in `__root.tsx`.
- Cloud table `inquiries` (insert-only for visitors, no public read), submission via a server function with zod validation.
- Page head: title, description, canonical https://coachrony.com/, OG/Twitter tags; root defaults updated.
- Verify with a mobile and desktop screenshot pass and a real form submission.

## Things I'll need from you later
Portrait photo, project screenshots/links, email, phone, social profile URLs.
