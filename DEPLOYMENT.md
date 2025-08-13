# 🚀 GitHub Deployment Tutorial

Complete guide to deploy your Wiktor Tobjasz Portfolio to GitHub Pages and other platforms.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 18+ installed
- Your portfolio project ready

## 🌟 Option 1: GitHub Pages Deployment (Recommended)

### Step 1: Prepare Your Repository

1. **Create a new repository on GitHub:**
   - Go to GitHub.com and click "New repository"
   - Name it `wiktor-tobjasz-portfolio` or your preferred name
   - Make it public (required for free GitHub Pages)
   - Don't initialize with README (we already have one)

2. **Initialize git in your project:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Wiktor Tobjasz Portfolio"
   ```

3. **Connect to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/wiktor-tobjasz-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Configure Vite for GitHub Pages

Create `vite.config.ts` update (if needed):

```typescript
// Make sure your vite.config.ts has the correct base path
export default defineConfig({
  base: '/wiktor-tobjasz-portfolio/', // Use your repository name
  // ... rest of your config
});
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select "GitHub Actions"
5. The workflow file we created (`.github/workflows/deploy.yml`) will handle the deployment

### Step 4: Deploy

Push any changes to the main branch:
```bash
git add .
git commit -m "Setup for GitHub Pages deployment"
git push origin main
```

Your site will be available at:
`https://YOUR_USERNAME.github.io/wiktor-tobjasz-portfolio/`

## 🚀 Option 2: Vercel Deployment (Alternative)

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your GitHub repository

### Step 2: Configure Build Settings

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Deploy

- Click "Deploy"
- Vercel will automatically deploy on every push to main branch
- You'll get a custom `.vercel.app` domain

## 🌐 Option 3: Netlify Deployment

### Step 1: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with your GitHub account
3. Click "New site from Git"
4. Choose your repository

### Step 2: Configure Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Base directory**: (leave empty)

### Step 3: Deploy

- Click "Deploy site"
- Netlify will automatically deploy on every push
- You'll get a custom `.netlify.app` domain

## 🔧 Troubleshooting

### Common Issues:

1. **404 Errors on Refresh**
   - Add `_redirects` file to `public` folder:
   ```
   /*    /index.html   200
   ```

2. **Blank Page After Deployment**
   - Check if base path in `vite.config.ts` matches your repository name
   - Ensure all import paths are correct

3. **Build Fails**
   - Run `npm run build` locally first to test
   - Check for TypeScript errors: `npm run check`
   - Make sure all dependencies are in `package.json`

### Environment Variables

If you need environment variables:

1. **GitHub Pages**: Not supported for security reasons
2. **Vercel**: Add in project settings > Environment Variables
3. **Netlify**: Add in site settings > Environment variables

## 📱 Custom Domain (Optional)

### For GitHub Pages:
1. Buy a domain from a registrar
2. In your repository settings > Pages
3. Add your custom domain
4. Create CNAME record pointing to `YOUR_USERNAME.github.io`

### For Vercel/Netlify:
1. Go to domain settings in your dashboard
2. Add your custom domain
3. Follow the DNS configuration instructions

## 🎯 Performance Optimization

Before deployment, optimize your site:

```bash
# Build and test locally
npm run build
npm run preview

# Check bundle size
npm install -g webpack-bundle-analyzer
npx webpack-bundle-analyzer dist/assets
```

## 📝 Deployment Checklist

- [ ] Repository created and connected
- [ ] Environment variables configured (if needed)
- [ ] Build process tested locally
- [ ] Domain configured (if using custom domain)
- [ ] HTTPS enabled (automatic on most platforms)
- [ ] Performance tested
- [ ] SEO meta tags verified
- [ ] Social media preview tested

## 🔄 Continuous Deployment

All three platforms support automatic deployment:
- Push to `main` branch = automatic deployment
- Pull requests = preview deployments (Vercel/Netlify)
- Rollback available if issues occur

## 📞 Need Help?

If you encounter issues:

1. Check the platform's documentation
2. Review build logs for error messages
3. Test the build process locally
4. Contact support if needed

Your portfolio is now ready for the world to see! 🌟

---

**Quick Commands Summary:**

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# Regular updates
git add .
git commit -m "Update portfolio"
git push origin main
```