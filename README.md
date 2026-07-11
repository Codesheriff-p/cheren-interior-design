# Prydumano Design — Interior Studio Website

A modern, production-ready interior design portfolio website built with **Vite + React 19 + TypeScript + Tailwind CSS v4 + GSAP**. Inspired by the Prydumano Design aesthetic — dark luxury, warm brass tones, and cinematic scroll animations.

---

## Preview

> Live site: [prydumano-website.pages.dev](https://prydumano-website.pages.dev/)

**Design System:**
- 🎨 Palette: Obsidian `#0D0C0A` · Brass Gold `#C9A96E` · Warm Cream `#F2EDE4`
- 🔤 Display: Cormorant Garamond (serif) · Body: DM Sans (sans)
- ✨ Animations: GSAP + ScrollTrigger — staggered reveals, counters, clip paths, parallax

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 6.x | Build tool & dev server |
| React | 19.x | UI framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility CSS (`@tailwindcss/vite` plugin) |
| GSAP | 3.12.x | Animations |
| @gsap/react | 2.x | `useGSAP` hook for React |

---

## Sections

1. **Navbar** — Fixed, transparent → frosted glass on scroll, mobile hamburger menu
2. **Hero** — Full-viewport split layout, staggered word reveal, floating image grid
3. **Marquee Strip** — Infinite scrolling brand band
4. **About** — Split layout with animated stat counters (200+ projects, 8 yrs, 98% satisfaction)
5. **Services** — 4-card grid: Interior Design · 3D Visualization · Furniture Selection · Turnkey
6. **Portfolio** — Asymmetric masonry grid with category filters + hover overlays
7. **Process** — 4-step timeline with sticky image (Discovery → Design → 3D → Execution)
8. **Testimonials** — 4 client quote cards with interactive selection
9. **Contact** — Split form with email/phone/location info + success state
10. **Footer** — Brand, nav links, social icons, copyright

---

## Getting Started

### 1. Clone

```bash
git clone https://github.com/YOUR_USERNAME/prydumano-website.git
cd prydumano-website
```

### 2. Install

```bash
npm install
```

### 3. Dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 4. Build for production

```bash
npm run build
```

Output goes to `/dist` — ready to deploy.

### 5. Preview production build

```bash
npm run preview
```

---

## Deployment

### Cloudflare Pages (recommended)

1. Push repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) → New Project
3. Connect GitHub repo
4. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Deploy ✓

### Vercel

```bash
npx vercel --prod
```

### GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

---

## Project Structure

```
prydumano-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed nav with scroll awareness
│   │   ├── Hero.tsx            # Full-viewport hero with GSAP word reveal
│   │   ├── MarqueeStrip.tsx    # CSS infinite marquee band
│   │   ├── About.tsx           # Studio info + animated stat counters
│   │   ├── Services.tsx        # 4 service cards with hover states
│   │   ├── Portfolio.tsx       # Masonry grid with filter tabs
│   │   ├── Process.tsx         # Timeline steps + sticky image
│   │   ├── Testimonials.tsx    # Client quote cards
│   │   ├── Contact.tsx         # Contact form + info panel
│   │   └── Footer.tsx          # Site footer
│   ├── App.tsx                 # Root component, GSAP plugin registration
│   ├── main.tsx                # React 19 entry point
│   └── index.css               # Tailwind v4 + CSS design tokens + global styles
├── index.html                  # HTML shell + Google Fonts
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── package.json
└── .gitignore
```

---

## Customisation

### Swap images

All portfolio images use [Unsplash](https://unsplash.com/@prydumanodesign). Replace any `src` URL in the component files with your own images.

### Change brand colour

Edit the `--color-gold` variable in `src/index.css`:

```css
@theme {
  --color-gold: #C9A96E;   /* ← change this */
}
```

### Update contact info

Edit the contact array in `src/components/Contact.tsx` — email, phone, and studio location.

### Add real form submission

In `Contact.tsx`, replace the `handleSubmit` stub with your API call (Formspree, EmailJS, your own backend, etc.):

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSubmitted(true)
}
```

---

## Animations

All animations are powered by **GSAP + ScrollTrigger** via the `useGSAP` hook:

- **Hero words** — staggered `y: 110% → 0%` clip reveal on page load
- **Stat counters** — `textContent` count-up on scroll enter
- **Section headings** — `opacity + y` fade-up on scroll
- **Portfolio cards** — staggered scale + fade on scroll
- **Process timeline** — `scaleY` line fill animation
- **Marquee** — pure CSS infinite `translateX` animation

Respects `prefers-reduced-motion` — all animations are disabled for users who opt out (see `index.css`).

---

## Performance Notes

- Images are lazy-loaded (`loading="lazy"`) except Hero which uses `loading="eager"`
- Fonts are preconnected via `<link rel="preconnect">` in `index.html`
- All Unsplash images use `?w=800&q=80` query params for optimal sizing
- GSAP ScrollTriggers are killed on unmount to prevent memory leaks

---

## Credits

- **Photography:** [Prydumano Design on Unsplash](https://unsplash.com/@prydumanodesign)
- **Fonts:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts
- **Animations:** [GSAP](https://gsap.com/) by GreenSock

---

*Built with care. Every space tells a story.*
