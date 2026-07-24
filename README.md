# Yousef Ayed — Portfolio

A dark, glassmorphic "cyber-defense / enterprise infrastructure" portfolio built with React (Vite), Tailwind CSS, Framer Motion, and lucide-react icons.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # to test the production build locally
```

The build output lands in `dist/`.

## Deploy

This is a static site after `npm run build` — deploy the `dist/` folder to any static host:

- **Vercel / Netlify**: import the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch (e.g. via the `gh-pages` npm package), or use a GitHub Action.

## Editing content

All text content (skills, projects, certifications, services, contact links) lives in one place:

```
src/data/content.js
```

Update names, dates, tags, and links there — the components read from this file, so you won't need to touch component code for content changes.

## Structure

```
src/
  components/
    Nav.jsx          — fixed glass navigation
    Hero.jsx          — headline + CTAs + terminal
    Terminal.jsx      — animated CLI health-check (signature element)
    GridBackground.jsx
    Skills.jsx        — core competencies + shared SectionHeading
    Projects.jsx      — featured projects
    Timeline.jsx      — academic & certifications timeline
    Services.jsx      — freelance services
    Contact.jsx       — form + direct contact links
    Footer.jsx
  data/
    content.js        — all copy, links, dates in one file
  App.jsx
  index.css
  main.jsx
```

## Notes

- The contact form builds a `mailto:` link with the form contents pre-filled (no backend required). Swap `handleSubmit` in `Contact.jsx` for a real API call (Formspree, Resend, your own endpoint) when ready.
- Respects `prefers-reduced-motion`.
- Colors, fonts, and animation keyframes are defined in `tailwind.config.js` — this is the single source of truth for the visual system.
