# Production Deployment Guide

## 🚀 Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder with:
- Minified code (using esbuild)
- Code splitting and tree shaking
- Optimized asset file names with cache-busting hashes
- Separate vendor chunks for better caching

## 📦 Preview Production Build

```bash
npm run preview:prod
```

This builds and previews the production bundle locally at http://localhost:4173

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments.

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

Or drag-and-drop the `dist` folder to Netlify dashboard.

### Option 3: GitHub Pages

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Automatically builds on push to main
- Deploys to GitHub Pages

**Setup Steps:**
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch - deployment will happen automatically

### Option 4: Manual Deployment

After running `npm run build`, deploy the `dist` folder to any static hosting:
- AWS S3 + CloudFront
- Firebase Hosting
- Azure Static Web Apps
- Cloudflare Pages

## 🔧 Environment Variables

Copy `.env.example` to `.env.production` and configure:

```env
VITE_APP_NAME="AWS Student Community Day MLRIT 2025"
VITE_APP_VERSION="1.0.0"
VITE_APP_ENV="production"
VITE_API_URL="https://api.example.com"
VITE_ENABLE_ANALYTICS=true
```

## ✅ Production Checklist

- [x] Vite config optimized for production
- [x] Environment variables configured
- [x] Meta tags and SEO optimized
- [x] Security headers configured
- [x] Cache headers for static assets
- [x] GitHub Actions CI/CD workflow
- [x] Deployment configs (Vercel, Netlify)
- [ ] Test production build locally
- [ ] Update API URLs if needed
- [ ] Enable analytics if required
- [ ] Configure custom domain

## 📊 Build Output

The production build includes:
- `assets/js/` - JavaScript bundles with hash
- `assets/css/` - Stylesheets with hash
- `assets/images/` - Optimized images
- `index.html` - Entry point

## 🔍 Performance Tips

1. Enable Gzip/Brotli compression on your hosting
2. Configure CDN for static assets
3. Enable HTTP/2 or HTTP/3
4. Monitor bundle size with `npm run build`
5. Use lazy loading for components if needed

## 🐛 Troubleshooting

**Build fails:**
- Run `npm run lint:fix` to fix linting issues
- Check `node_modules` and run `npm install` again

**Preview shows errors:**
- Check browser console for errors
- Verify environment variables are set correctly
- Ensure all assets are in the correct paths

**Deployment fails:**
- Verify build command and output directory
- Check deployment platform logs
- Ensure Node.js version compatibility (20.x recommended)
