# RFALA Website

Marketing site for **RFALA — AI Innovation Partner**, built with Next.js and deployed on Vercel.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) with React 19 and TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000. A helper script, `start-dev-3001.cmd`, starts the dev server on port 3001 instead.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

## Project structure

```
app/
  page.tsx          Home page (English)
  layout.tsx        Root layout and site metadata
  about/            About page (team, leadership)
  services/         Services and capabilities
  ecosystem/        Ecosystem page
  institute/        Institute page
  vision/           Vision page
  contact/          Contact page
  privacy/          Privacy policy
  fr/               French versions of the pages above
  components/       Shared components (ContentPage, ContactPage, MobileMenu, LanguageSwitcher)
messages/
  en.json, fr.json  Translated copy for the two languages
public/             Static assets
```

## Languages

The site is bilingual. English pages live at the root (`/about`, `/services`, …) and French pages under `/fr` (`/fr/about`, `/fr/services`, …), with copy sourced from `messages/en.json` and `messages/fr.json`. `LanguageSwitcher` toggles between the two.

## Inquiry forms

Three forms post to `/api/product-interest`: the Water Intelligence pilot request (`water`), the CareerAI early-access list (`careerai`), and the Technology & Product Advisory discovery session (`advisory`). The route validates the input, drops honeypot submissions, and forwards the result as JSON to the URL in the `PRODUCT_FORM_WEBHOOK_URL` environment variable:

```json
{ "form": "advisory", "locale": "en", "submittedAt": "2026-09-28T12:00:00.000Z", "values": { "name": "…", "email": "…", "company": "…", "stage": "inDevelopment", "project": "…", "consent": true } }
```

The destination must accept a JSON POST and answer with a 2xx status within 10 seconds.

- In development without that variable, submissions are printed to the server console.
- In production without it, the form shows an error so no request is silently lost. Set it in Vercel before relying on the forms.

## Deployment

Deployed on [Vercel](https://vercel.com/) using the Next.js framework preset (see `vercel.json`). Pushing to `main` triggers a production deployment.

## Content notes

- The canonical contact email is **contact@rfala.com**.
