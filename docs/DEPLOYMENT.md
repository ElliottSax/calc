# Vercel Deployment Guide for Dividend Calculator Hub

This guide will walk you through deploying your Next.js dividend calculator application to Vercel.

## Prerequisites

- [x] Vercel CLI installed (`npm install -g vercel`)
- [ ] Vercel account (sign up at https://vercel.com)
- [ ] GitHub repository with your code
- [ ] Supabase project (for database)
- [ ] Financial Modeling Prep API key (for stock data)

## Quick Deployment Steps

### 1. Login to Vercel

```bash
vercel login
```

This will open a browser window for authentication. Choose your preferred login method:
- GitHub (Recommended)
- GitLab
- Bitbucket
- Email

### 2. Link Your Project to GitHub (First Time Only)

If you haven't already, push your code to GitHub:

```bash
git remote -v  # Verify remote is set
git push origin claude/install-dividend-dependencies-011CUvuDEA4SSMZPrqgqiQ74
```

### 3. Deploy to Vercel

Navigate to your project directory and run:

```bash
cd /home/user/calc/dividend-calculator-hub
vercel
```

You'll be prompted with several questions:

```
? Set up and deploy "~/calc/dividend-calculator-hub"? [Y/n] Y
? Which scope do you want to deploy to? [Your Account]
? Link to existing project? [y/N] N
? What's your project's name? dividend-calculator-hub
? In which directory is your code located? ./
```

**Vercel will auto-detect Next.js and configure accordingly.**

### 4. Configure Environment Variables

After the initial deployment, add environment variables:

#### Option A: Using Vercel CLI

```bash
# Supabase
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY

# Financial Modeling Prep API
vercel env add FMP_API_KEY

# Security
vercel env add NEXTAUTH_SECRET
```

For each command, you'll be prompted to enter the value and select environments (Production, Preview, Development).

#### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your project
3. Click **Settings** → **Environment Variables**
4. Add each variable with values from `.env.production.example`

**Required Variables:**
```
NEXT_PUBLIC_SUPABASE_URL=https://[your-project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
FMP_API_KEY=your_fmp_api_key
NEXTAUTH_SECRET=your_secret_at_least_32_chars_long
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

**Recommended Variables:**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
LOG_LEVEL=info
```

### 5. Redeploy with Environment Variables

After adding environment variables, trigger a new deployment:

```bash
vercel --prod
```

This deploys to production with all environment variables.

## Setting Up Automatic Deployments

### Option 1: GitHub Integration (Recommended)

1. **Connect GitHub to Vercel:**
   - Go to https://vercel.com/dashboard
   - Click **New Project**
   - Click **Import Git Repository**
   - Select your GitHub repository
   - Click **Import**

2. **Configure Project Settings:**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `dividend-calculator-hub`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

3. **Add Environment Variables** (as described in Step 4 above)

4. **Deploy**: Click **Deploy**

**Automatic Deployment Triggers:**
- ✅ Push to `main` branch → Production deployment
- ✅ Push to other branches → Preview deployment
- ✅ Pull Request created → Preview deployment with unique URL

### Option 2: Vercel CLI with Git Integration

```bash
# Link to GitHub repo
vercel link

# Production deployment from main branch
git checkout main
git push origin main  # Automatically triggers Vercel deployment
```

## Deployment URLs

After deployment, you'll receive three types of URLs:

1. **Production URL**: `https://dividend-calculator-hub.vercel.app`
   - Main production site
   - Deployed from `main` branch

2. **Preview URLs**: `https://dividend-calculator-hub-git-[branch].vercel.app`
   - Unique URL for each branch/PR
   - Perfect for testing before merging

3. **Custom Domain** (optional): `https://yourdomain.com`
   - Add in Vercel Dashboard → Domains

## Vercel Configuration Files

The following files have been created to optimize your deployment:

### `vercel.json`
- Build and deployment settings
- Security headers
- Framework configuration

### `.vercelignore`
- Files to exclude from deployment
- Reduces bundle size
- Improves build performance

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test DRIP calculator functionality
- [ ] Check Supabase database connection
- [ ] Verify API calls to Financial Modeling Prep
- [ ] Test authentication (if enabled)
- [ ] Check analytics integration
- [ ] Monitor Core Web Vitals in Vercel Analytics
- [ ] Set up custom domain (optional)

## Monitoring and Analytics

### Vercel Analytics (Built-in)

Enable in Vercel Dashboard:
1. Go to your project
2. Click **Analytics** tab
3. Enable **Vercel Analytics**

Tracks:
- Page views
- Performance metrics
- Core Web Vitals
- User behavior

### Application Logs

View deployment and runtime logs:

```bash
# View recent logs
vercel logs

# View logs for specific deployment
vercel logs [deployment-url]

# Stream real-time logs
vercel logs --follow
```

## Troubleshooting

### Build Failures

**Issue**: TypeScript errors during build
```bash
# Run type check locally
npm run type-check

# Fix errors and redeploy
git commit -am "Fix TypeScript errors"
git push
```

**Issue**: Missing environment variables
- Check Vercel Dashboard → Settings → Environment Variables
- Ensure all required variables are set for Production

**Issue**: Import errors
```bash
# Clear local cache
rm -rf .next node_modules
npm install
npm run build
```

### Runtime Errors

**Issue**: 500 Internal Server Error
- Check Vercel logs: `vercel logs`
- Verify API keys are correct
- Check Supabase connection

**Issue**: API rate limiting
- Upgrade Financial Modeling Prep plan
- Implement caching
- Add rate limiting in middleware

## Performance Optimization

Vercel automatically optimizes:
- ✅ Image optimization
- ✅ Static page generation
- ✅ Edge caching
- ✅ Gzip/Brotli compression

Additional optimizations:
1. Enable ISR (Incremental Static Regeneration) for stock pages
2. Use Vercel Edge Functions for API routes
3. Implement SWR for client-side data fetching
4. Enable Vercel Image Optimization

## Costs

**Free Tier Includes:**
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Preview deployments
- Analytics (basic)

**Pro Tier** ($20/month):
- 1 TB bandwidth
- Advanced analytics
- Password protection
- Team collaboration

## Useful Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# List deployments
vercel ls

# View project info
vercel inspect

# Remove deployment
vercel rm [deployment-url]

# Pull environment variables
vercel env pull

# Link project
vercel link
```

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js on Vercel: https://vercel.com/docs/frameworks/nextjs
- Community: https://github.com/vercel/vercel/discussions

## Next Steps

1. Set up custom domain
2. Enable Vercel Analytics
3. Configure preview deployments
4. Set up monitoring alerts
5. Implement A/B testing (optional)
6. Add performance monitoring

---

**Deployed successfully?** 🎉

Share your production URL:
- Production: `https://dividend-calculator-hub.vercel.app`
- GitHub: `https://github.com/ElliottSax/calc`
