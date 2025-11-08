# Setting Up GitHub Auto-Deployment with Vercel

## Overview
After your initial deployment, you can enable automatic deployments from GitHub. This means every time you push code to GitHub, Vercel will automatically deploy it.

---

## 🔄 How Auto-Deployment Works

| GitHub Action | Vercel Response | URL Type |
|--------------|----------------|----------|
| Push to `main` branch | **Production Deployment** | `dividend-calculator-hub.vercel.app` |
| Push to other branches | **Preview Deployment** | `dividend-calculator-hub-git-[branch].vercel.app` |
| Create Pull Request | **PR Preview** | `dividend-calculator-hub-[pr-number].vercel.app` |
| Commit to PR | **Preview Update** | Same PR URL, updated automatically |

---

## 📋 Setup Instructions

### Method 1: Via Vercel Dashboard (Recommended)

**Step 1: Go to Vercel Dashboard**
1. Visit: https://vercel.com/new
2. Click: **"Add New..."** → **"Project"**

**Step 2: Import Git Repository**
1. Click: **"Import Git Repository"**
2. If not connected, click: **"Continue with GitHub"**
3. Authorize Vercel to access your repositories
4. Find and select: `ElliottSax/calc`
5. Click: **"Import"**

**Step 3: Configure Project Settings**

```
Framework Preset:     Next.js (auto-detected ✓)
Root Directory:       dividend-calculator-hub
Build Command:        npm run build (default)
Output Directory:     .next (default)
Install Command:      npm install (default)
Development Command:  npm run dev (default)
```

**Step 4: Configure Environment Variables**

Add the same variables from `ENV_VARS_FOR_VERCEL.txt`:

Click: **"Environment Variables"** section

For each variable, click **"Add"** and enter:
- Name: (e.g., MOCK_API_RESPONSES)
- Value: (e.g., true)
- Environments: Check ☑ Production, ☑ Preview, ☑ Development

**Required variables:**
- `MOCK_API_RESPONSES` = `true`
- `NEXT_PUBLIC_SUPABASE_URL` = `https://example.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `example_key`
- `FMP_API_KEY` = `example_key`
- `NEXTAUTH_SECRET` = `[generate with openssl rand -base64 32]`
- `NEXT_PUBLIC_APP_NAME` = `Dividend Calculator Hub`
- `DISABLE_ANALYTICS` = `true`
- `LOG_LEVEL` = `info`

**Step 5: Deploy**

Click: **"Deploy"**

Wait 2-3 minutes for the build to complete.

**✅ Auto-Deploy is Now Active!**

---

### Method 2: Via Vercel CLI

If you've already deployed via CLI, you can link to GitHub:

```bash
cd /home/user/calc/dividend-calculator-hub

# Link project to Vercel
vercel link

# The project is now connected
# Future pushes to GitHub will trigger deployments
```

Then go to Vercel Dashboard → Your Project → Settings → Git to verify the connection.

---

## 🔗 Verifying GitHub Integration

After setup, verify the integration:

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Select your project: `dividend-calculator-hub`

2. **Check Git Integration:**
   - Click: **Settings** → **Git**
   - You should see:
     - ✅ Connected Repository: `ElliottSax/calc`
     - ✅ Production Branch: `main`
     - ✅ Root Directory: `dividend-calculator-hub`

3. **Check Deployment Triggers:**
   - Settings → Git → **Ignored Build Step**
   - Should be: `(empty)` or `default`

---

## 🧪 Testing Auto-Deployment

### Test 1: Push to Main Branch (Production)

```bash
cd /home/user/calc/dividend-calculator-hub

# Make a small change
echo "# Test" >> README.md

# Commit and push
git add README.md
git commit -m "Test auto-deployment"
git push origin main

# Watch in Vercel Dashboard → Deployments
# A new production deployment should start automatically
```

### Test 2: Create a Preview Deployment (Feature Branch)

```bash
# Create a new branch
git checkout -b feature/test-preview

# Make a change
echo "Testing preview" >> test.txt

# Commit and push
git add test.txt
git commit -m "Test preview deployment"
git push origin feature/test-preview

# Check Vercel Dashboard → Deployments
# A preview deployment should start with URL:
# https://dividend-calculator-hub-git-feature-test-preview.vercel.app
```

### Test 3: Pull Request Preview

```bash
# From your feature branch, create a PR on GitHub
# Visit: https://github.com/ElliottSax/calc/pull/new/feature/test-preview

# Vercel will automatically:
# 1. Create a preview deployment
# 2. Comment on the PR with the preview URL
# 3. Update the preview with each new commit
```

---

## 📊 Understanding Deployment URLs

After GitHub integration is set up:

### Production URL (Main Branch)
```
https://dividend-calculator-hub.vercel.app
```
- Deploys from: `main` branch
- Updates on: Every push to `main`
- Purpose: Live production site

### Preview URLs (Feature Branches)
```
https://dividend-calculator-hub-git-[branch-name].vercel.app
```
Example: `https://dividend-calculator-hub-git-feature-new-calc.vercel.app`
- Deploys from: Any branch except `main`
- Updates on: Every push to that branch
- Purpose: Test features before merging

### Pull Request URLs
```
https://dividend-calculator-hub-[pr-id].vercel.app
```
Example: `https://dividend-calculator-hub-pr-5.vercel.app`
- Deploys from: Pull requests
- Updates on: Every commit to the PR
- Purpose: Review changes before merging

---

## ⚙️ Customizing Deployment Behavior

### Ignore Specific Paths

If you want to skip deployments for certain changes (like docs):

1. Go to: Vercel Dashboard → Settings → Git
2. **Ignored Build Step** → Click "Edit"
3. Add command to check if deployment is needed:

```bash
bash -c "git diff HEAD^ HEAD --quiet -- docs/"
```

This skips deployment if only `docs/` changed.

### Production Branch

To change which branch deploys to production:

1. Go to: Settings → Git
2. **Production Branch** → Select branch
3. Default: `main` or `master`

### Deploy Hooks

Get a URL to trigger deployments via API:

1. Go to: Settings → Git → Deploy Hooks
2. Click: **Create Hook**
3. Name: `Manual Deploy`
4. Branch: `main`
5. Copy the webhook URL
6. Trigger deployments with: `curl -X POST [webhook-url]`

---

## 🔐 Environment Variables Per Environment

You can set different values for Production vs Preview:

**Example: Use real API in production, mock in preview**

### For Production:
```
FMP_API_KEY = your_real_fmp_api_key
MOCK_API_RESPONSES = false
```

### For Preview/Development:
```
FMP_API_KEY = demo_key
MOCK_API_RESPONSES = true
```

**How to set:**

1. Dashboard → Settings → Environment Variables
2. Click variable name or "Add New"
3. Check ONLY the environments you want
   - ☑ Production
   - ☐ Preview (unchecked)
   - ☐ Development (unchecked)

---

## 📱 Deployment Notifications

Get notified when deployments complete:

### Vercel Dashboard Notifications
Settings → Notifications → Enable:
- ✅ Deployment Started
- ✅ Deployment Ready
- ✅ Deployment Failed

### GitHub Checks
Auto-enabled when GitHub is connected:
- ✅ Shows deployment status on PRs
- ✅ Blocks merge if deployment fails (optional)
- ✅ Adds preview URL to PR comments

### Slack Integration
Settings → Integrations → Slack:
- Get notified in Slack channel
- Deployment status updates
- Error alerts

---

## 🐛 Troubleshooting Auto-Deployment

### Deployment Not Triggering

**Issue:** Pushed to GitHub but no deployment started

**Solutions:**
1. Check Git connection: Settings → Git
2. Verify branch name matches production branch
3. Check if deployment was skipped (ignored build step)
4. Manually trigger: Deployments → ... → Redeploy

### Build Failing

**Issue:** Deployment fails during build

**Solutions:**
1. Check build logs: Deployments → Click deployment → View Build Logs
2. Test build locally: `npm run build`
3. Verify environment variables are set
4. Check for TypeScript errors: `npm run type-check`

### Wrong Branch Deploying to Production

**Issue:** Non-main branch deployed to production

**Solutions:**
1. Settings → Git → Production Branch → Ensure `main` is selected
2. Check deployment trigger: Deployments → Click deployment → See "Triggered by"

---

## ✅ Auto-Deployment Checklist

After setup, verify:

- [ ] GitHub repository connected in Vercel Dashboard
- [ ] Production branch set to `main`
- [ ] Root directory set to `dividend-calculator-hub`
- [ ] Environment variables configured
- [ ] Test push triggers deployment
- [ ] Preview deployments work for feature branches
- [ ] PR deployments create preview URLs
- [ ] Deployment notifications enabled
- [ ] GitHub checks showing on PRs

---

## 🎯 Benefits of Auto-Deployment

✅ **No Manual Deployments** - Push and it's live
✅ **Preview Every Change** - Test before merging
✅ **Automatic Rollbacks** - Revert to previous deployment instantly
✅ **Team Collaboration** - Everyone can trigger deployments
✅ **CI/CD Pipeline** - Automated testing and deployment
✅ **Zero Downtime** - Seamless deployments with no interruption

---

## 📞 Need Help?

- **Vercel Git Docs**: https://vercel.com/docs/concepts/git
- **GitHub Integration**: https://vercel.com/docs/concepts/git/vercel-for-github
- **Support**: https://vercel.com/support

---

**Your dividend calculator is now set up for continuous deployment!** 🚀

Every push to GitHub will automatically deploy to Vercel.
