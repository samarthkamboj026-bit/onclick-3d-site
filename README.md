# Onclick Innovations — 3D Website

Full redesign with immersive 3D neural-network background, SEO/GEO-optimized content across 17 pages, and static export ready for deployment.

## Pages (20 routes)

| Route | Page |
|-------|------|
| `/` | Homepage — hero, stats, services, case studies, FAQ |
| `/about` | About Us |
| `/services` | Services hub |
| `/services/custom-software` | Custom Software Development |
| `/services/ai-development` | AI Development |
| `/services/ai-model-training` | AI Model Training |
| `/services/openclaw` | OpenCLAW Autonomous AI |
| `/services/automation` | Workflow Automation |
| `/services/web-development` | Web Development |
| `/services/mobile-app` | Mobile App Development |
| `/services/ui-ux` | UI/UX Design |
| `/services/data-management` | Data Management |
| `/services/it-consultation` | IT Consulting |
| `/portfolio` | Case Studies |
| `/contact` | Contact + inquiry form |
| `/career` | Careers |
| `/technology` | Technology Stack |

## Design System

- **3D Scene:** Floating neural network nodes (Three.js / React Three Fiber) with cyan, violet, and orange accents
- **UI:** Glassmorphism cards, gradient typography, dark navy background
- **Fonts:** Clash Display (headings), Inter (body), JetBrains Mono (labels)
- **Colors:** Cyan `#06b6d4`, Violet `#8b5cf6`, Orange `#f97316`, Deep navy `#030712`

## Local Development

```bash
cd onclick-3d-site
npm install
npm run dev
# Open http://localhost:3000
```

## Production Build

```bash
npm run build
# Static files exported to ./out/
```

## Deploy Options

### Vercel (recommended)
1. Push `onclick-3d-site/` to a Git repo
2. Import in Vercel → auto-detects Next.js
3. Deploy — static export works out of the box

### Any static host (Netlify, S3, Cloudflare Pages)
Upload the `out/` folder after `npm run build`.

### Replace current React SPA
1. Build: `npm run build`
2. Upload `out/` contents to your hosting root
3. Configure SPA fallback to `index.html` for client routes (or use trailing slashes — already enabled)

## Content Source

All page copy is in `lib/content.ts` — sourced from the full SEO + GEO content pack. Edit there and rebuild to update any page.

## SEO Notes

- Each page has unique `metaTitle` and `metaDescription`
- Homepage includes GEO definitional paragraph for AI search citations
- FAQ sections on every service page for featured snippets
- Internal linking via navbar, footer, and service grid

## Next Steps

1. Review pages locally with `npm run dev`
2. Swap placeholder contact form action with your backend/CRM endpoint
3. Add JSON-LD schema blocks (recommendations in content pack)
4. Connect domain and deploy `out/` folder
