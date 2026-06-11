# MSIT Systems Pvt. Ltd.

Premium modern IT company website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and MongoDB Atlas via Mongoose.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment variables:

```bash
cp .env.example .env.local
```

3. Add your MongoDB Atlas connection string and database name to `.env.local`:

```env
MONGODB_URI=your_atlas_connection_string
MONGODB_DB_NAME=contactForm
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Start the development server:

```bash
npm run dev
```

## Features

- App Router architecture
- Premium dark UI with glassmorphism
- Framer Motion-driven animations
- Careers page and application flow
- Contact, careers, and newsletter API routes
- MongoDB Atlas + Mongoose integration
- SEO metadata, sitemap, and robots.txt

## Deploying to Vercel

Add the same environment variables in your Vercel project settings before deploying:

- `MONGODB_URI`
- `MONGODB_DB_NAME`
- `NEXT_PUBLIC_SITE_URL`
