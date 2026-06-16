# Personal Brand Website

A premium personal brand site built with **Next.js** and **Tailwind CSS**. Designed to book consultations and establish authority in AI, GTM, Sales, and Performance Marketing.

## Quick Start

### 1. Install Node.js

Download from [nodejs.org](https://nodejs.org) (LTS version). This gives you `node` and `npm`.

### 2. Install dependencies

```bash
cd personal-brand-site
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, expertise, case studies, blog preview |
| `/about` | Your story, philosophy, how you work |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts |
| `/case-studies` | Client results and outcomes |
| `/newsletter` | Email signup |
| `/book-consultation` | Primary CTA — book a call |
| `/contact` | Contact form |

## Customize Your Site

**All your personal info lives in one file:**

```
src/lib/site-data.ts
```

Update your name, email, social links, Calendly URL, stats, case studies, and blog posts there.

## Project Structure

```
src/
├── app/              # Pages (Next.js App Router)
│   ├── page.tsx      # Home page
│   ├── about/
│   ├── blog/
│   ├── case-studies/
│   ├── newsletter/
│   ├── book-consultation/
│   └── contact/
├── components/       # Reusable UI (Header, Footer, Button, etc.)
└── lib/
    └── site-data.ts  # Your content and config
```

## Deploy

Push to GitHub and deploy free on [Vercel](https://vercel.com):

1. Create a GitHub repo and push this code
2. Go to vercel.com → Import Project → select your repo
3. Click Deploy

## Next Steps

- [ ] Update `src/lib/site-data.ts` with your real info
- [ ] Add your Calendly link to `calendlyUrl`
- [ ] Connect newsletter to [Beehiiv](https://beehiiv.com) or [ConvertKit](https://convertkit.com)
- [ ] Connect contact form to [Formspree](https://formspree.io) or [Resend](https://resend.com)
- [ ] Replace placeholder blog content with your writing
- [ ] Add real case study images to `/public/images/`
