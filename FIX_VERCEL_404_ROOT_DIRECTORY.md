# Fix Vercel 404 Error - Root Directory Configuration

## The Problem

You're getting a **404: NOT_FOUND** error because Vercel is deploying from the **repository root** (`/calc`) instead of the **app subdirectory** (`/calc/dividend-calculator-hub`).

Your repository structure:
```
/calc (repository root)
├── dividend-calculator-hub/    ← Next.js app is here
│   ├── app/
│   ├── components/
│   ├── package.json
│   └── vercel.json
├── scripts/
└── *.md files
```

Vercel is looking for the Next.js app at the root level, but it's in the `dividend-calculator-hub` subdirectory.

## The Solution: Configure Root Directory in Vercel Dashboard

### Step 1: Go to Vercel Dashboard

1. Visit https://vercel.com/dashboard
2. Find your project (likely named "calc" or similar)
3. Click on the project

### Step 2: Configure Root Directory

1. Click **Settings** (in the top navigation)
2. Scroll down to **Root Directory** section
3. Click **Edit**
4. Enter: `dividend-calculator-hub`
5. Click **Save**

### Step 3: Redeploy

After saving the Root Directory setting:

**Option A: Redeploy from Dashboard**
1. Go to **Deployments** tab
2. Click the **•••** menu on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

**Option B: Trigger New Deployment with Git**
```bash
cd /home/user/calc
git commit --allow-empty -m "Trigger redeploy with correct root directory"
git push -u origin claude/install-dividend-dependencies-011CUvuDEA4SSMZPrqgqiQ74
```

## Alternative: Quick Fix with Manual Deployment

If you can't find the Root Directory setting, deploy manually from the correct directory:

```bash
cd /home/user/calc/dividend-calculator-hub
vercel --yes --prod
```

This deploys directly from the app directory, bypassing the root directory issue.

## Why This Happened

When Vercel auto-deploys from GitHub:
1. It clones your entire repository
2. Looks for `package.json` in the root
3. Doesn't find one (it's in `dividend-calculator-hub/`)
4. Returns 404 because there's no app to deploy

## What the Root Directory Setting Does

Setting Root Directory to `dividend-calculator-hub` tells Vercel:
- "The app is in this subdirectory, not the root"
- Start the build process from `dividend-calculator-hub/`
- Look for `package.json` in `dividend-calculator-hub/`

## Verify After Fix

Once redeployed with the correct Root Directory:

1. Visit the deployment URL
2. You should see the homepage (not 404)
3. Test the DRIP Calculator
4. Check the Aristocrats page
5. Verify Learn page loads

## Expected Result

✅ Homepage loads with DRIP calculator
✅ Aristocrats page displays table
✅ Learn page shows courses
✅ No 404 errors
✅ All features work with graceful Supabase fallback

---

## Still Getting 404?

If you still get 404 after setting Root Directory:

1. **Check Build Logs** in Vercel Dashboard → Deployments → Click deployment → View Function Logs
2. **Share the error** - look for any build failures or errors
3. **Verify package.json exists** at `dividend-calculator-hub/package.json`

The Root Directory setting is the key to fixing this 404 error!
