# Vercel Deployment Instructions

## Your Project is Ready to Deploy! 🚀

All configuration files, scripts, and documentation are complete and pushed to GitHub.

---

## Quick Deploy (Automated)

### Step 1: Login to Vercel
```bash
vercel login
```
- Choose **GitHub** when prompted
- Browser will open for authentication
- Authorize Vercel to access your GitHub account

### Step 2: Run Automated Deployment
```bash
cd /home/user/calc/dividend-calculator-hub
./deploy-now.sh
```

**The script will automatically:**
- ✅ Deploy preview version
- ✅ Set all environment variables with placeholder values
- ✅ Deploy to production
- ✅ Display your live URL

---

## Manual Deployment (Step by Step)

If you prefer manual control:

### 1. Login to Vercel
```bash
vercel login
```

### 2. Deploy Preview
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

You'll get a preview URL immediately!

### 3. Add Environment Variables

Copy these commands one by one:

```bash
# Enable mock mode (works without real API keys)
echo "true" | vercel env add MOCK_API_RESPONSES production preview development

# Supabase URL
echo "https://example.supabase.co" | vercel env add NEXT_PUBLIC_SUPABASE_URL production preview development

# Supabase Anon Key
echo "example_supabase_anon_key_placeholder" | vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production preview development

# FMP API Key
echo "example_fmp_key_placeholder" | vercel env add FMP_API_KEY production preview development

# NextAuth Secret (auto-generated secure value)
openssl rand -base64 32 | vercel env add NEXTAUTH_SECRET production preview development

# App Name
echo "Dividend Calculator Hub" | vercel env add NEXT_PUBLIC_APP_NAME production preview development

# Logging
echo "info" | vercel env add LOG_LEVEL production preview development

# Disable analytics in testing
echo "true" | vercel env add DISABLE_ANALYTICS production preview development
```

### 4. Deploy to Production
```bash
vercel --prod
```

**Done!** Your app is live! 🎉

---

## Alternative: Deploy via Vercel Dashboard

### 1. Go to Vercel Dashboard
Visit: https://vercel.com/new

### 2. Import Git Repository
- Click **"Import Git Repository"**
- Connect with GitHub
- Select repository: `ElliottSax/calc`
- Click **"Import"**

### 3. Configure Project
```
Framework Preset:     Next.js (auto-detected ✓)
Root Directory:       dividend-calculator-hub
Build Command:        npm run build (default)
Output Directory:     .next (default)
Install Command:      npm install (default)
```

### 4. Add Environment Variables

Use the values from `ENV_VARS_FOR_VERCEL.txt` file.

Click **"Environment Variables"** section, then for each variable:
- Click **"Add"**
- Enter Name and Value
- Check ☑ Production, ☑ Preview, ☑ Development

**Required variables:**
- `MOCK_API_RESPONSES` = `true`
- `NEXT_PUBLIC_SUPABASE_URL` = `https://example.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `example_supabase_anon_key_placeholder`
- `FMP_API_KEY` = `example_fmp_key_placeholder`
- `NEXTAUTH_SECRET` = [generate with `openssl rand -base64 32`]
- `NEXT_PUBLIC_APP_NAME` = `Dividend Calculator Hub`
- `LOG_LEVEL` = `info`
- `DISABLE_ANALYTICS` = `true`

### 5. Deploy
Click **"Deploy"** button and wait 2-3 minutes.

---

## After Deployment

### Expected URLs

**Production:**
```
https://dividend-calculator-hub.vercel.app
```

**Preview (feature branches):**
```
https://dividend-calculator-hub-git-[branch-name].vercel.app
```

### Verify Deployment
```bash
# View logs
vercel logs

# Check deployment status
vercel ls

# Pull environment variables locally
vercel env pull
```

### Test Your Calculator
1. Visit your production URL
2. Navigate to DRIP Calculator
3. Enter test data:
   - Initial Investment: $10,000
   - Share Price: $175
   - Annual Dividend: $0.96
   - Monthly Contribution: $500
   - Years: 20
4. Click "Calculate"
5. Verify results display correctly

---

## Setup GitHub Auto-Deployment

See detailed guide in: `GITHUB_AUTO_DEPLOY_SETUP.md`

### Quick Steps:

**Option 1: Via Vercel Dashboard**
1. Go to: https://vercel.com/dashboard
2. Select your project
3. Go to: Settings → Git
4. Verify:
   - ✅ Connected Repository: `ElliottSax/calc`
   - ✅ Production Branch: `main`
   - ✅ Root Directory: `dividend-calculator-hub`

**Now automatic deployments are active!**
- Push to `main` → Production deployment
- Push to other branches → Preview deployment
- Create PR → Automatic preview URL

**Option 2: Via CLI**
```bash
vercel link
```

---

## Troubleshooting

### Build Failed?
```bash
# Test locally first
npm run build

# Check for TypeScript errors
npm run type-check

# View Vercel build logs
vercel logs
```

### Environment Variables Not Working?
1. Go to: Vercel Dashboard → Settings → Environment Variables
2. Verify all variables are set for **Production** environment
3. Redeploy: `vercel --prod`

### Need Help?
- Check: `DEPLOYMENT_SUMMARY.md`
- Read: `VERCEL_QUICK_START.md`
- See: `VERCEL_DEPLOYMENT_STEPS.md`
- Review: `ENV_VARS_FOR_VERCEL.txt`

---

## What's Already Configured

✅ **Vercel CLI** installed (v48.9.0)
✅ **All dependencies** installed and verified
✅ **TypeScript** compilation passing (zero errors)
✅ **Development server** tested and working
✅ **DRIP calculator** logic verified with test data
✅ **Deployment files** created:
   - `vercel.json` - Project configuration
   - `.vercelignore` - Deployment exclusions
   - `.env.production.example` - Environment template
   - `.env.vercel.preview` - Preview environment
✅ **Documentation** complete:
   - `DEPLOYMENT.md` - Comprehensive guide
   - `VERCEL_QUICK_START.md` - 5-minute guide
   - `DEPLOYMENT_SUMMARY.md` - Overview
   - `VERCEL_DEPLOYMENT_STEPS.md` - Step-by-step
   - `GITHUB_AUTO_DEPLOY_SETUP.md` - Auto-deployment
   - `ENV_VARS_FOR_VERCEL.txt` - Variables reference
✅ **Scripts** ready:
   - `deploy-now.sh` - Automated deployment
   - `scripts/deploy-check.sh` - Pre-flight validation
   - `scripts/deploy-to-vercel.sh` - Full automation
✅ **All changes** committed and pushed to GitHub
✅ **Branch:** `claude/install-dividend-dependencies-011CUvuDEA4SSMZPrqgqiQ74`

---

## Ready to Deploy!

**Choose your method:**

1. **Fastest (Automated):**
   ```bash
   vercel login
   ./deploy-now.sh
   ```

2. **Manual Control:**
   Follow "Manual Deployment" steps above

3. **Dashboard:**
   Visit https://vercel.com/new and import repository

---

**Deployment Time:** ~5 minutes
**Cost:** $0 (Free tier)
**Your app will be live on Vercel's global CDN!** 🚀
