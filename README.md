# Portfolio — Barbara Stevenson

A pixel-perfect rebuild of my portfolio in Next.js, React, and Tailwind, built from Figma designs.

Live site: [barbarastevenson.design](https://barbarastevenson.design)

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/
    page.tsx                  # Home
    about/                    # About page
    case-studies/
      arm/                    # ARM — omnichannel investment experience
      bcm/                    # Big Cabal Media website
      bujeti-bills/           # Bujeti — recurring bills
      bujeti-category/        # Bujeti — category tracking
      bujeti-onboarding/      # Bujeti — onboarding flow
      burning-ram/            # Burning Ram restaurant
      citizen/                # Citizen — policy & governance
      emedic/                 # eMedic — pharmacy ecommerce
      life-bank/              # LifeBank — blood donation
      zikoko/                 # Zikoko website revamp
      zikoko-memes/           # Zikoko Memes platform
  components/                 # Shared components
public/
  images/                     # All case study imagery
```

Each case study page lives in its own folder under `src/app/case-studies/`, with its imagery in `public/images/` referenced by filename prefix (e.g. `ARM ONE 1.png`, `BCM 1.png`, `LIFE BANK 1.png`).

## Contact

- Email: barbarastevenson.design@gmail.com
- LinkedIn: [linkedin.com/in/barbarastevenson](https://linkedin.com/in/barbarastevenson)
- Medium: [medium.com/@barbarastevenson](https://medium.com/@barbarastevenson)
