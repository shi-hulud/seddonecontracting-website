# Seddon Contracting Website

Minimal, modern website for Seddon Contracting carpentry services in Penticton, BC.

## Project Structure

```
seddonecontracting-website/
├── index.html          # Main website
├── styles.css          # Styling
├── script.js           # Client-side functionality
├── photos/             # Portfolio images (to be added)
├── logo.png           # Logo file (to be added)
└── README.md          # This file
```

## Setup

### 1. Add Logo
Replace `logo.png` with the clean version from:
`~/Desktop/Sed Done Contracting/Branding/Logo/SD-Logo2.png`

### 2. Add Photos
Copy your best 5-8 work photos to `/photos` folder:
- Name them: `project-1.jpg`, `project-2.jpg`, etc.
- Include at least one before/after pair as `project-1.jpg` and `project-1-after.jpg`
- Photos should be 800x800px or larger (landscape or square work best)

### 3. Test Locally
```bash
cd ~/Projects/seddonecontracting-website
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

## Next Steps

1. **Domain Setup**
   - Register `seddonecontracting.com` (GoDaddy, Namecheap, etc.)
   - Point to hosting (Netlify, Vercel, or your preferred host)
   - Set up email forwarding from info@seddonecontracting.com

2. **Content Updates**
   - Add portfolio photos
   - Customize service descriptions as needed
   - Add testimonials or project details

3. **Backend (Optional)**
   - Contact form can be connected to Formspree, Netlify Forms, or similar
   - Or implement your own backend

## Color Scheme
- Primary: `#1a1a1a` (Dark charcoal)
- Accent: `#d4a574` (Warm bronze/gold)
- Light: `#f5f5f5` (Off-white)

## Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Portfolio gallery with hover effects
- ✅ Contact form
- ✅ Sticky navigation bar
- ✅ Clean, minimal aesthetic

## Customization Tips
- Edit color variables in `styles.css` (`:root` section)
- Adjust hero text and tagline in `index.html`
- Modify service descriptions as needed
- Add more sections (testimonials, team, etc.) by copying existing section structure

---

**Built:** April 4, 2026
**Status:** Ready for photos and deployment
