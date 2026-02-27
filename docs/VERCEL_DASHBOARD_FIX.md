# URGENT: Vercel Dashboard Configuration Required

## The Issue

Your code is **100% correct** and builds successfully locally. The 404 is happening because **Vercel has incorrect project settings** that need to be manually fixed in the dashboard.

## Required Actions in Vercel Dashboard

### Step 1: Access Your Project Settings

1. Go to: https://vercel.com/dashboard
2. Find your project (likely named "calc" or "dividend-calculator-hub")
3. Click on the project
4. Click **Settings** in the top navigation

### Step 2: Check and Fix Root Directory Setting

**CRITICAL:** This is likely the main issue.

1. In Settings, scroll to **Root Directory** section
2. **Check current value:**
   - If it says `dividend-calculator-hub` → **REMOVE IT**
   - If it's blank → **Good, leave it blank**

3. **To remove:**
   - Click **Edit**
   - **Clear the field** (leave it completely empty)
   - Click **Save**

**Why:** We moved the app to the repository root. Having "dividend-calculator-hub" as the root directory points to a folder that no longer exists → 404.

### Step 3: Check Git Integration

1. Still in Settings, go to **Git** section
2. **Check Production Branch:**
   - Current setting: ?
   - Should be: `claude/install-dividend-dependencies-011CUvuDEA4SSMZPrqgqiQ74`

3. **To change:**
   - Click **Edit** next to Production Branch
   - Select or enter: `claude/install-dividend-dependencies-011CUvuDEA4SSMZPrqgqiQ74`
   - Click **Save**

**Why:** Vercel might be trying to deploy from `main` branch (which doesn't have your changes) instead of your feature branch.

### Step 4: Trigger Manual Deployment

After fixing the settings above:

1. Go to **Deployments** tab
2. Click **Redeploy** button (top right)
3. Select:
   - ✅ Use existing Build Cache: **OFF**
   - ✅ Redeploy with latest commit
4. Click **Redeploy**

### Step 5: Monitor the Build

1. Watch the deployment progress
2. Click on the deployment to see **Build Logs**
3. **Check for:**
   - ✅ Build should succeed (no Google Fonts error)
   - ✅ "Compiled successfully"
   - ✅ "Generating static pages (24/24)"
   - ❌ If you see errors, share them with me

## What to Look For in Build Logs

**Good Build (what you should see):**
```
✓ Creating an optimized production build
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Generating static pages (24/24)
✓ Finalizing page optimization
```

**Bad Build (problems to watch for):**
```
❌ Failed to fetch font `Inter` → Should be FIXED now
❌ Cannot find module → Missing dependencies
❌ Type error → Code issues
```

## Alternative: Connect to Correct Branch

If changing settings is difficult, you can also:

1. Go to your project Settings
2. Click **Git** → **Production Branch**
3. Change to: `claude/install-dividend-dependencies-011CUvuDEA4SSMZPrqgqiQ74`

Or create a new Vercel project:
```bash
# Delete old project in Vercel dashboard
# Then from this directory run:
cd /home/user/calc
vercel --prod
# Follow prompts to create new project
```

## Verification After Fix

Once deployment completes:

1. **Check homepage:** https://calc-bay-one.vercel.app/
   - Should show: DRIP Calculator
   - Not: 404 error

2. **Check build logs** in Vercel dashboard
   - Should show: "Build Completed"
   - Not: "Build Failed"

## Current Repository Status ✅

Everything is ready on the code side:

```
✅ Next.js app at repository root
✅ package.json at root
✅ vercel.json simplified
✅ Google Fonts removed (build works locally)
✅ All files committed and pushed
✅ Latest commit: 0f4ace1
```

**The problem is ONLY in Vercel project settings, not your code.**

## If Still 404 After Following Above

Share with me:
1. Screenshot of Root Directory setting in Vercel
2. Screenshot of Git Production Branch setting
3. Screenshot/text of latest build logs
4. Deployment URL you're trying to access

---

**TL;DR:**
1. Go to Vercel Dashboard → Your Project → Settings
2. Set **Root Directory** to **BLANK** (remove "dividend-calculator-hub")
3. Set **Production Branch** to `claude/install-dividend-dependencies-011CUvuDEA4SSMZPrqgqiQ74`
4. Go to Deployments → Click **Redeploy**
5. Wait 2-3 minutes for build
6. Site should work!
