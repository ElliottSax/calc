# 🚀 Vercel Deployment - Step-by-Step Guide

## Prerequisites Completed ✅
- Vercel CLI installed (v48.9.0)
- All configuration files created
- Git repository ready
- Development server tested and working

---

## 📝 Manual Deployment Process

### Step 1: Login to Vercel (Required First)

Open your terminal and run:

```bash
cd /home/user/calc/dividend-calculator-hub
vercel login
```

**What happens:**
- Browser window opens
- Choose "Continue with GitHub"
- Authorize Vercel
- Return to terminal

**Alternative:** Use email authentication if preferred.

---

### Step 2: Link Project to GitHub (Optional but Recommended)

```bash
vercel link
```

**Answer the prompts:**
- Link to existing project? **N** (first time)
- What's your project's name? **dividend-calculator-hub**
- In which directory is your code located? **./

---

### Step 3: Deploy Preview Version

```bash
vercel
```

**Answer the prompts:**
- Set up and deploy? **Y**
- Which scope? **[Your Account]**
- Link to existing project? **N**
- What's your project's name? **dividend-calculator-hub**
- In which directory is your code located? **./

**Expected output:**
```
✓ Deployed to preview: https://dividend-calculator-hub-abc123.vercel.app
```

**🎉 You now have a preview URL!**

---

### Step 4: Configure Environment Variables

#### Option A: Using Vercel CLI (Recommended)

Add each variable for all environments (Production, Preview, Development):

```bash
# Enable mock mode (no real API keys needed)
vercel env add MOCK_API_RESPONSES
# Enter: true
# Select: Production, Preview, Development (space to select, enter to confirm)

# Supabase URL (placeholder)
vercel env add NEXT_PUBLIC_SUPABASE_URL
# Enter: https://placeholder-project.supabase.co
# Select: Production, Preview, Development

# Supabase Anon Key (placeholder)
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# Enter: placeholder_key_xxxxxxxx
# Select: Production, Preview, Development

# FMP API Key (placeholder)
vercel env add FMP_API_KEY
# Enter: placeholder_fmp_key
# Select: Production, Preview, Development

# NextAuth Secret (generate secure)
vercel env add NEXTAUTH_SECRET
# Generate: openssl rand -base64 32
# Enter: [generated secret]
# Select: Production, Preview, Development

# App Name
vercel env add NEXT_PUBLIC_APP_NAME
# Enter: Dividend Calculator Hub
# Select: Production, Preview, Development

# Logging Level
vercel env add LOG_LEVEL
# Enter: info
# Select: Production, Preview, Development

# Disable Analytics for Testing
vercel env add DISABLE_ANALYTICS
# Enter: true
# Select: Production, Preview, Development
```

#### Option B: Using Vercel Dashboard (Easier for Multiple Variables)

1. Go to: https://vercel.com/dashboard
2. Select your project: **dividend-calculator-hub**
3. Click: **Settings** → **Environment Variables**
4. Click: **Add New**

**Add these variables:**

| Variable | Value | Environments |
|----------|-------|--------------|
| `MOCK_API_RESPONSES` | `true` | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://placeholder-project.supabase.co` | All |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `placeholder_key_xxx` | All |
| `FMP_API_KEY` | `placeholder_fmp_key` | All |
| `NEXTAUTH_SECRET` | `[generate with openssl]` | All |
| `NEXT_PUBLIC_APP_NAME` | `Dividend Calculator Hub` | All |
| `LOG_LEVEL` | `info` | All |
| `DISABLE_ANALYTICS` | `true` | All |

**Copy from:** `.env.vercel.preview` file

---

### Step 5: Redeploy with Environment Variables

After adding environment variables, redeploy:

```bash
vercel --prod
```

Or trigger a new deployment from the dashboard.

---

### Step 6: Set Up GitHub Auto-Deployments

#### Using Vercel Dashboard (Recommended):

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click: **Add New...** → **Project**

2. **Import Git Repository**
   - Click: **Import Git Repository**
   - Select: **GitHub**
   - Find repository: `ElliottSax/calc`
   - Click: **Import**

3. **Configure Project**
   ```
   Framework Preset: Next.js (auto-detected)
   Root Directory: dividend-calculator-hub
   Build Command: npm run build (default)
   Output Directory: .next (default)
   Install Command: npm install (default)
   ```

4. **Add Environment Variables**
   - Copy all variables from Step 4
   - Or import from `.env.vercel.preview`

5. **Deploy**
   - Click: **Deploy**
   - Wait for build to complete (~2-3 minutes)

**✅ Auto-Deploy is Now Active!**

---

## 🔄 How Auto-Deployments Work

Once GitHub integration is set up:

### Automatic Triggers:

| Action | Deployment Type | URL Pattern |
|--------|----------------|-------------|
| Push to `main` branch | **Production** | `dividend-calculator-hub.vercel.app` |
| Push to other branches | **Preview** | `dividend-calculator-hub-git-[branch].vercel.app` |
| Create Pull Request | **Preview** | `dividend-calculator-hub-[pr-id].vercel.app` |
| Commit to PR | **Preview Update** | Same PR URL updates |

### Manual Triggers:

```bash
# Deploy current branch to preview
vercel

# Deploy to production
vercel --prod

# Deploy specific branch
git checkout feature-branch
vercel
```

---

## 📊 Deployment URLs You'll Receive

After successful deployment:

### 1. **Preview URL** (First Deployment)
```
https://dividend-calculator-hub-abc123.vercel.app
```
- Temporary
- For testing
- Changes with each deployment

### 2. **Production URL** (Main Branch)
```
https://dividend-calculator-hub.vercel.app
```
- Permanent
- Deployed from `main` branch
- Your main application URL

### 3. **Branch Preview URLs**
```
https://dividend-calculator-hub-git-[branch-name].vercel.app
```
- One per branch
- Auto-updates on push
- Perfect for feature testing

### 4. **Custom Domain** (Optional)
```
https://yourdomain.com
```
- Add in Vercel Dashboard → Domains
- Configure DNS
- Free SSL included

---

## 🎯 Expected Deployment Output

When you run `vercel`, you'll see:

```
Vercel CLI 48.9.0
? Set up and deploy "~/calc/dividend-calculator-hub"? [Y/n] Y
? Which scope do you want to deploy to? Your Account
? Link to existing project? [y/N] N
? What's your project's name? dividend-calculator-hub
? In which directory is your code located? ./
Auto-detected Project Settings (Next.js):
- Build Command: next build
- Output Directory: .next
- Development Command: next dev --port $PORT

🔗 Linked to your-account/dividend-calculator-hub (created .vercel)
🔍 Inspect: https://vercel.com/your-account/dividend-calculator-hub/[id] [1s]
✅ Production: https://dividend-calculator-hub.vercel.app [2m30s]
```

---

## 🧪 Testing Your Deployment

After deployment completes:

### 1. **Visit Your URL**
Open the production or preview URL in your browser.

### 2. **Test DRIP Calculator**
- Navigate to home page
- Enter test values:
  - Ticker: AAPL
  - Initial Investment: $10,000
  - Share Price: $175
  - Annual Dividend: $0.96
- Click "Calculate Results"
- Verify calculations appear

### 3. **Check Mock Mode**
With `MOCK_API_RESPONSES=true`, the app should:
- ✅ Load without API errors
- ✅ Use mock stock data
- ✅ Calculator works perfectly
- ✅ No Supabase errors (database disabled)

### 4. **Verify Environment Variables**
Check Vercel Dashboard → Settings → Environment Variables

---

## 🔐 Environment Variables Reference

### Required for Working App (with Mock Mode):

```bash
MOCK_API_RESPONSES=true
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder_xxx
FMP_API_KEY=placeholder_xxx
NEXTAUTH_SECRET=[generated_secret]
NEXT_PUBLIC_APP_NAME=Dividend Calculator Hub
LOG_LEVEL=info
DISABLE_ANALYTICS=true
```

### Optional (Enhance Functionality):

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT=ca-pub-XXXXXXXX
ENABLE_AFFILIATE_TRACKING=true
```

### For Production (Real APIs):

When ready for production with real APIs:

1. **Get Supabase Credentials:**
   - Create project at https://supabase.com
   - Get URL and keys from Project Settings → API
   - Update environment variables

2. **Get FMP API Key:**
   - Sign up at https://financialmodelingprep.com
   - Get API key from dashboard
   - Update FMP_API_KEY

3. **Disable Mock Mode:**
   ```bash
   MOCK_API_RESPONSES=false
   TEST_MODE=false
   DISABLE_ANALYTICS=false
   ```

4. **Redeploy:**
   ```bash
   vercel --prod
   ```

---

## 🔧 Different Environments Setup

### Preview vs Production Variables:

Vercel supports three environments:

1. **Production** - Main branch deployments
2. **Preview** - Branch and PR deployments
3. **Development** - Local development (`vercel dev`)

**Configure different values per environment:**

Example - API Keys:
- **Production**: Real FMP API key
- **Preview**: Demo/limited API key
- **Development**: Mock mode enabled

Example - Database:
- **Production**: Production Supabase project
- **Preview**: Staging Supabase project
- **Development**: Local database

**How to set:**

```bash
# Add variable for specific environment
vercel env add VARIABLE_NAME

# When prompted, select only the environments you want:
# → Production only: Space on Production, Enter
# → Preview only: Space on Preview, Enter
# → Both: Space on both, Enter
```

**Or in Dashboard:**
- Click variable name
- Edit
- Check/uncheck environments
- Save

---

## 📈 Monitoring Your Deployment

### View Deployment Logs:

```bash
# Recent logs
vercel logs

# Follow real-time
vercel logs --follow

# Specific deployment
vercel logs [deployment-url]
```

### Vercel Dashboard:

1. Visit: https://vercel.com/dashboard
2. Select your project
3. Click on a deployment
4. View:
   - Build logs
   - Function logs
   - Runtime logs
   - Performance metrics

### Enable Vercel Analytics:

1. Dashboard → Your Project → Analytics
2. Click: **Enable Analytics**
3. View:
   - Page views
   - Core Web Vitals
   - User geography
   - Device types

---

## 🐛 Troubleshooting

### Build Failures:

**Issue:** TypeScript errors during build
```bash
# Test locally first
npm run build

# Fix errors
npm run type-check
# Address any errors

# Commit and redeploy
git add .
git commit -m "Fix build errors"
git push
```

**Issue:** Missing dependencies
```bash
# Ensure package.json is committed
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

### Environment Variable Issues:

**Issue:** Variables not working
1. Verify in Vercel Dashboard → Settings → Environment Variables
2. Ensure correct environment selected (Production/Preview/Development)
3. Redeploy after adding variables: `vercel --prod`

**Issue:** Secrets exposed in logs
- Never log environment variables
- Use Vercel's encrypted environment variables
- Check `.vercelignore` includes `.env.local`

### Deployment Not Triggering:

**Issue:** Push to GitHub doesn't deploy
1. Check Vercel Dashboard → Project → Git
2. Verify repository connection
3. Check branch protection rules
4. Manually trigger: Deployments → ... → Redeploy

---

## ✅ Deployment Checklist

Before deploying:

- [ ] Vercel CLI installed
- [ ] Logged in to Vercel (`vercel login`)
- [ ] Project committed to Git
- [ ] Environment variables prepared
- [ ] `.env.local` NOT committed (in .gitignore)
- [ ] Build tested locally (`npm run build`)
- [ ] TypeScript passing (`npm run type-check`)

After first deployment:

- [ ] Preview URL received and tested
- [ ] Environment variables added
- [ ] Production deployment successful
- [ ] GitHub integration set up
- [ ] Custom domain added (optional)
- [ ] Analytics enabled
- [ ] Monitoring configured

---

## 🎉 Success Criteria

Your deployment is successful when:

✅ Preview URL loads without errors
✅ DRIP calculator functions correctly
✅ No console errors (F12 → Console)
✅ Mock mode working (no API errors)
✅ Auto-deployments trigger on Git push
✅ Environment variables configured
✅ Production URL accessible

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

## 🚀 Quick Reference Commands

```bash
# Login
vercel login

# Deploy preview
vercel

# Deploy production
vercel --prod

# Add environment variable
vercel env add VARIABLE_NAME

# List environment variables
vercel env ls

# View logs
vercel logs

# Remove deployment
vercel rm [url]

# Link to project
vercel link

# Pull environment variables locally
vercel env pull .env.local

# View project info
vercel inspect
```

---

**You're all set!** Follow the steps above to deploy your dividend calculator to Vercel. 🚀
