# 🚀 Quick Start: Deploy to Vercel in 5 Minutes

## Prerequisites
✅ Vercel CLI installed
✅ GitHub account
✅ Vercel account (free)

## Step 1: Login to Vercel (30 seconds)

```bash
vercel login
```

Choose **GitHub** when prompted and authorize Vercel.

## Step 2: Deploy to Preview (1 minute)

```bash
cd /home/user/calc/dividend-calculator-hub
vercel
```

Answer the prompts:
```
? Set up and deploy? Y
? Which scope? [Your Account]
? Link to existing project? N
? What's your project's name? dividend-calculator-hub
? In which directory is your code located? ./
```

**You'll get a preview URL immediately!** 🎉
Example: `https://dividend-calculator-hub-abc123.vercel.app`

## Step 3: Add Environment Variables (2 minutes)

### Required Variables:

```bash
# Add Supabase URL
vercel env add NEXT_PUBLIC_SUPABASE_URL
# Enter: https://your-project.supabase.co
# Select: Production, Preview, Development

# Add Supabase Anon Key
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# Enter: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
# Select: Production, Preview, Development

# Add FMP API Key
vercel env add FMP_API_KEY
# Enter: your_fmp_api_key
# Select: Production, Preview, Development

# Add NextAuth Secret (generate random string)
vercel env add NEXTAUTH_SECRET
# Enter: your_random_secret_at_least_32_chars
# Select: Production, Preview, Development
```

**Quick tip:** Generate a secure secret:
```bash
openssl rand -base64 32
```

### Or use Vercel Dashboard:
1. Go to https://vercel.com/dashboard
2. Select your project
3. Settings → Environment Variables
4. Add variables from `.env.production.example`

## Step 4: Deploy to Production (1 minute)

```bash
vercel --prod
```

**Done!** Your app is live at:
- Production: `https://dividend-calculator-hub.vercel.app`
- Custom domain: Add in Vercel Dashboard → Domains

## Step 5: Setup Auto-Deploy (30 seconds)

### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click **New Project**
3. Select **Import Git Repository**
4. Choose your GitHub repo
5. Click **Deploy**

✅ **Auto-deploy is now active!**
- Push to `main` → Production deployment
- Push to other branches → Preview deployment

### Option B: Via CLI

```bash
vercel link
```

This connects your local repo to Vercel.

## Useful Commands

```bash
# Deploy preview
npm run vercel:preview

# Deploy production
npm run vercel:prod

# View logs
npm run vercel:logs

# Pull environment variables locally
npm run vercel:env

# Pre-flight check
./scripts/deploy-check.sh
```

## Environment Variables Quick Reference

**Essential (Required):**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
FMP_API_KEY=your_key
NEXTAUTH_SECRET=random_32_char_string
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

**Optional (Recommended):**
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
LOG_LEVEL=info
ENABLE_AFFILIATE_TRACKING=true
```

## Troubleshooting

**Build failed?**
```bash
# Test locally first
npm run build

# Check types
npm run type-check

# Fix errors and redeploy
vercel --prod
```

**Environment variables not working?**
1. Verify in Vercel Dashboard → Settings → Environment Variables
2. Make sure they're set for "Production"
3. Redeploy: `vercel --prod`

**API not working?**
- Check Supabase URL and keys
- Verify FMP API key is valid
- Check Vercel logs: `vercel logs`

## What Gets Deployed?

✅ Next.js application
✅ API routes
✅ Static assets
✅ Environment variables (securely)
❌ `.env.local` (not deployed - use Vercel env vars)
❌ `node_modules` (rebuilt on Vercel)
❌ Test files (excluded via `.vercelignore`)

## Performance Features (Automatic)

Vercel automatically provides:
- ✅ CDN with 100+ edge locations
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Gzip/Brotli compression
- ✅ HTTP/2 & HTTP/3
- ✅ Incremental Static Regeneration

## Monitoring

**View Analytics:**
1. Vercel Dashboard → Your Project → Analytics
2. See page views, performance, Core Web Vitals

**View Logs:**
```bash
vercel logs
vercel logs --follow  # Real-time
```

## Cost

**Free Tier:**
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Preview deployments

**Upgrade needed if:**
- ❌ You exceed 100 GB bandwidth
- ❌ You need team collaboration
- ❌ You want advanced analytics

## Next Steps

1. ✅ Add custom domain (optional)
2. ✅ Enable Vercel Analytics
3. ✅ Set up monitoring alerts
4. ✅ Configure preview deployment protection
5. ✅ Add performance budgets

## Support

- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Status: https://vercel-status.com

---

**Total time:** ~5 minutes
**Cost:** $0 (free tier)
**Difficulty:** Easy ⭐️

Happy deploying! 🚀
