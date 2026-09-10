# Noble Lab Attend

QR-based computer laboratory entry, PC allocation and exit tracking system for Noble Group of Institutions.

## Stack
- Next.js App Router
- Prisma
- PostgreSQL (Neon/Vercel Marketplace)
- Vercel deployment

## Local setup
```bash
npm install
cp .env.example .env
# add DATABASE_URL
npx prisma db push
npm run dev
```

Open `/` for the QR-linked entry form and `/admin` for the dashboard.

## Vercel
1. Import `realethancool/lab_attend` into Vercel.
2. Add `DATABASE_URL` under Project Settings → Environment Variables.
3. Deploy.
4. Run `npx prisma db push` locally against the production database once, or use a deployment command that runs Prisma migrations/push as part of your release process.
5. Print the QR shown on `/admin`. It automatically points to the deployed site's home page.

## Important
The current admin page is intentionally an initial operational version. Before public production use, add authentication/authorization to `/admin` so lab records cannot be edited by unauthorised visitors.
