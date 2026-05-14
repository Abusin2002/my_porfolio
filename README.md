# Mohamed Abusin (Abu) — Portfolio

A premium, production-ready full-stack developer portfolio built with **React.js + Vite + Tailwind CSS + Framer Motion**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Navigate into the project
cd abu-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Build for Production
```bash
npm run build
npm run preview   # preview production build locally
```

---

## 📁 Folder Structure

```
src/
├── assets/               # Static assets (images, icons, SVGs)
├── components/
│   ├── Common/
│   │   ├── AnimatedGrid.jsx   # Animated background grid + blobs
│   │   ├── ScrollProgress.jsx # Top scroll progress bar
│   │   └── SectionTitle.jsx   # Reusable section heading
│   ├── Navbar/            # Sticky navbar with blur + mobile menu
│   ├── Hero/              # Animated hero with typewriter
│   ├── About/             # About section with trait cards
│   ├── Skills/            # Skill cards + tech marquee
│   ├── Experience/        # Vertical timeline experience
│   ├── Projects/          # Project cards with hover effects
│   │   └── ProjectCard.jsx
│   ├── Stats/             # Animated counter stats
│   ├── Contact/           # Contact form + socials
│   └── Footer/            # Minimal animated footer
├── data/
│   └── index.js           # All portfolio content (centralized)
├── hooks/
│   ├── useTypewriter.js   # Typewriter animation hook
│   ├── useScrollSpy.js    # Active section detection
│   └── useCounter.js      # Animated number counter
├── styles/
│   └── globals.css        # Tailwind + custom design tokens
├── App.jsx                # Root component
└── main.jsx               # Entry point
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#04060f` |
| Surface | `#0a0d1a` |
| Cyan (primary) | `#00d4ff` |
| Violet | `#8b5cf6` |
| Fuchsia | `#d946ef` |
| Font | Plus Jakarta Sans + JetBrains Mono |

---

## 🛠️ Tech Stack

| Tech | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| Vite | 5.3 | Build tool |
| Tailwind CSS | 3.4 | Utility styling |
| Framer Motion | 11 | Animations |
| React Icons | 5.2 | Icon library |

---

## ✏️ Customization

1. **Update content** → Edit `src/data/index.js`
2. **Change colors** → Edit `tailwind.config.js` and `globals.css`
3. **Add projects** → Add entries to the `PROJECTS` array in `data/index.js`
4. **Replace contact info** → Update email/WhatsApp in `data/index.js` and `Contact/index.jsx`
5. **Add real links** → Replace `href: '#'` values in `SOCIALS` arrays

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build
npm run build

# Drag the `dist/` folder into Netlify's deploy area
# Or use: netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## ⚡ Performance Tips

- All images should be in WebP format and stored in `src/assets/`
- Lazy-load sections using `whileInView` (already configured via Framer Motion)
- Use `loading="lazy"` on project preview images when added
- Keep bundle lean — avoid unnecessary dependencies
- Enable Brotli/gzip on your hosting provider

---

## 🔍 SEO

- Edit `index.html` to update meta tags, OG image URL, and canonical URL
- Replace `mohamedabusinai2020@gmail.com` with your real email
- Add a real `og-image.png` (1200×630) in the `public/` folder
- Consider adding `sitemap.xml` and `robots.txt` to `public/`

---

## 📝 License

MIT — free to use and modify for personal use.
