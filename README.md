<h1 align="center">🚀 Codekricks — Collaborative Code Snippets, Instantly</h1>

Codekricks is a modern, shareable code editor and snippet hub. Write in 10+ languages, run code in the browser, share snippets with comments, and upgrade to Pro for more. Built with Next.js 15, Convex, Clerk, and Monaco.

## Highlights

- Next.js 15 (App Router) + TypeScript
- Monaco editor with 5 editor themes (VS Dark/Light, GitHub Dark, Monokai, Solarized Dark)
- 10 languages via Piston API (JS/TS, Python, Java, Go, Rust, C++, C#, Ruby, Swift)
- Light/Dark site theme with a handy toggle and accessible contrast
- Shareable snippets with comments and user profiles
- Convex backend for data, real-time, and webhooks
- Clerk authentication (email/password + OAuth ready)
- Free & Pro plans (Lemon Squeezy webhooks supported)

## Tech Stack

- Framework: Next.js 15, React 18.3
- UI: Tailwind CSS, Framer Motion, lucide-react
- Editor: @monaco-editor/react
- State: zustand
- Backend: Convex
- Auth: Clerk

## Prerequisites

- Node.js 18+ (recommended LTS)
- An account for:
	- Clerk (for auth keys)
	- Convex (for deployment URL)
	- Lemon Squeezy (only if you plan to enable paid webhooks)

## Quick Start

1) Install dependencies

```powershell
npm install
```

2) Create `.env.local` at the project root

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# From your Convex project or dev deployment
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Optional: set in provider dashboards and Convex env for verification
# CLERK_WEBHOOK_SECRET=
# LEMON_SQUEEZY_WEBHOOK_SECRET=
```

3) Start the app (development)

```powershell
npm run dev
```

Then open http://localhost:3000

## Building for Production

```powershell
npm run build
npm start
```

## Configuring Services

### Clerk

- Create an application in Clerk.
- Copy Publishable and Secret keys into `.env.local`.
- Set allowed redirect/callback URLs if you enable OAuth.

### Convex

- Create a Convex project or start a dev deployment.
- Populate `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL` in `.env.local`.
- For webhook verification (optional), add `CLERK_WEBHOOK_SECRET` and `LEMON_SQUEEZY_WEBHOOK_SECRET` to Convex dashboard env vars as well.

### Payments (Optional)

Lemon Squeezy webhook verification is supported. Add `LEMON_SQUEEZY_WEBHOOK_SECRET` to your Convex environment and provider.

## Scripts

- `npm run dev` — start the Next.js dev server
- `npm run build` — create a production build
- `npm start` — run the production server
- `npm run lint` — run ESLint

## Features in Detail

- Editor and Languages
	- Monaco editor, adjustable font size, smooth scrolling.
	- 10 languages with ready-made sample code. Execution powered by the Piston API.
- Snippets & Sharing
	- Create, view, share snippets; add comments; browse community snippets with filters.
- Profiles & History
	- See your execution history and stats on your profile.
- Theming
	- Site-wide light/dark theme toggle using semantic CSS tokens.
- Pro Plan
	- Upgrade to unlock premium features (see Pricing page). Webhook verification supported.

## Environment Variables Reference

Required for local dev:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — Clerk publishable key
- `CLERK_SECRET_KEY` — Clerk secret key
- `CONVEX_DEPLOYMENT` — Convex deployment identifier
- `NEXT_PUBLIC_CONVEX_URL` — Convex URL

Optional (if using webhooks):

- `CLERK_WEBHOOK_SECRET` — verify Clerk webhooks in Convex
- `LEMON_SQUEEZY_WEBHOOK_SECRET` — verify Lemon Squeezy webhooks in Convex

## Troubleshooting

- Dev server exits immediately (Windows)
	- Kill stray Node processes and clear the Next cache:
		```powershell
		Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
		Remove-Item -Recurse -Force .next
		npm run dev
		```
- React/Monaco peer dependency
	- React is pinned to 18.3 for @monaco-editor/react compatibility.
- Convex not reachable
	- Ensure `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL` are set and valid.
- Clerk errors
	- Double-check publishable/secret keys and domain settings in Clerk dashboard.

## Deploy

Deploy to your favorite platform (e.g., Vercel). Don’t forget to add all env vars in the hosting dashboard. Build with `npm run build` and start with `npm start`.

## License & Credits

This project is open-sourced under the MIT License. See `LICENSE`.

Original inspiration and foundation from the Code Craft project by Burak (MIT). Codekricks includes additional theming and branding changes.

