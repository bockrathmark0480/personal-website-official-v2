# Mark Bockrath - Personal Website

AI-Driven Sales Executive Portfolio built with React + Vite

## Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (already set up: `v0-personal-website-development`)
- This code in a GitHub repository

### Deployment Steps

1. **Push to GitHub** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - Vite migration"
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

2. **Connect to Vercel**:
   - Go to https://vercel.com/dashboard
   - Find your project: `v0-personal-website-development`
   - Go to Settings → Git → Connect Repository
   - Select your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Vercel Auto-Configuration**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
personal-website/
├── public/               # Static assets
│   └── Exec_resume_10_2025.docx
├── src/
│   ├── assets/          # Images
│   │   └── Bockrath_Website_Picture.png
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── GemShowcase.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   └── Portfolio.jsx
│   ├── data/           # Data files
│   │   └── gems.js
│   ├── styles/         # CSS
│   │   └── index.css
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Font Awesome 6
- **Hosting**: Vercel

## Features

- ✅ Fully compiled React (no client-side JSX)
- ✅ Production-ready build process
- ✅ Responsive design
- ✅ Dark/Light theme toggle
- ✅ Interactive GEM Library with search/filter
- ✅ Professional portfolio showcase
- ✅ Downloadable resume

## DNS Configuration (After Deployment)

Once deployed to Vercel, update Cloudflare DNS:

1. Remove old GitHub Pages records
2. Add Vercel CNAME record:
   - Type: CNAME
   - Name: @ (or www)
   - Target: cname.vercel-dns.com
3. Configure custom domain in Vercel project settings

## Troubleshooting

**Build fails?** 
- Check `npm install` completed successfully
- Verify all components are properly imported

**Images not loading?**
- Ensure files are in `src/assets/`
- Check import statements use correct paths

**Sections not rendering?**
- Open browser console for errors
- Verify all components are imported in App.jsx

## Contact

Questions about deployment? Check Vercel docs or contact support.
