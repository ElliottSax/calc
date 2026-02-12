# Security Deployment Guide - CRIT-5 Fix

**Quick deployment guide specifically for the security implementation.**
**Use alongside `DEPLOYMENT_CHECKLIST.md` for full deployment.**

## Quick Start (5 minutes)

```bash
# 1. Generate production API key
openssl rand -hex 32

# 2. Add to Vercel (Settings → Environment Variables)
ADMIN_API_KEY=your-generated-key

# 3. Deploy
vercel --prod

# 4. Test
curl -H "Authorization: Bearer your-key" \
  https://your-domain.com/api/monitoring/metrics
```

## Pre-Deployment Checklist

### Local Testing
- [ ] Generate test API key: `openssl rand -hex 32`
- [ ] Add to `.env.local`: `ADMIN_API_KEY=your-test-key`
- [ ] Start server: `npm run dev`
- [ ] Run tests: `./tests/security-test.sh http://localhost:3000 your-test-key`
- [ ] Verify 12/12 tests pass

### Production Key
- [ ] Generate production key: `openssl rand -hex 32`
- [ ] Store in 1Password/Vault
- [ ] DO NOT commit to git
- [ ] DO NOT share in Slack/email

### Vercel Setup
- [ ] Add `ADMIN_API_KEY` to Vercel environment variables
- [ ] (Optional) Add `ADMIN_ALLOWED_IPS` if using IP restriction
- [ ] Set for "Production" environment
- [ ] (Optional) Set for "Preview" environment

## Deployment

```bash
# Deploy to production
vercel --prod

# Wait for build to complete
# Note the production URL
```

## Post-Deployment Testing

### Test 1: Unauthorized Access (Should Fail)
```bash
curl https://your-domain.com/api/monitoring/metrics
# Expected: 401 Unauthorized
```

### Test 2: Authorized Access (Should Work)
```bash
curl -H "Authorization: Bearer YOUR_PROD_KEY" \
  https://your-domain.com/api/monitoring/metrics
# Expected: 200 OK with metrics data
```

### Test 3: Rate Limiting (Should Limit After 20)
```bash
for i in {1..25}; do
  curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"error":"test"}' \
    https://your-domain.com/api/errors \
    -w "\nStatus: %{http_code}\n"
done
# Expected: First ~20 succeed (200), then 429
```

### Test 4: Full Test Suite
```bash
./tests/security-test.sh https://your-domain.com YOUR_PROD_KEY
# Expected: 12/12 tests pass
```

## Verification

- [ ] Protected endpoints require auth (401 without key)
- [ ] Authorized requests work (200 with key)
- [ ] Rate limiting active (429 after limit)
- [ ] Public endpoints still work (POST methods)
- [ ] No errors in Vercel logs
- [ ] No impact on conversion tracking

## Team Setup

### Share Access
1. Share `ADMIN_SETUP.md` with team
2. Distribute API key via 1Password/Vault
3. Test team members can access monitoring endpoints

### Update Tools
- [ ] Update monitoring dashboards with API key
- [ ] Update analytics tools with API key
- [ ] Update any scripts that call admin endpoints

## Monitoring

### Watch These Metrics
- **401 Errors**: Unauthorized attempts (alert if >10/hour)
- **429 Errors**: Rate limit hits (alert if >50/day)
- **Response Times**: Auth should add <1ms

### Set Up Alerts
```bash
# Vercel CLI (if using Vercel monitoring)
vercel logs --follow | grep -E "(401|429)"
```

## Rollback (If Needed)

### Option 1: Remove Auth (Emergency)
```bash
# Go to Vercel dashboard
# Settings → Environment Variables
# Delete ADMIN_API_KEY
# Redeploy
# ⚠️ WARNING: This reverts to vulnerable state!
```

### Option 2: Rollback Deployment
```bash
# Vercel dashboard → Deployments
# Find previous deployment
# Click "..." → "Promote to Production"
```

## Success Criteria

✅ Deployment successful when:
- All tests pass in production
- Protected endpoints require auth
- Public endpoints still work
- Team can access with API key
- No errors in logs
- No impact on user experience

## Time Estimate

- Pre-deployment: 15 minutes
- Deployment: 10 minutes
- Testing: 15 minutes
- Team setup: 20 minutes
- **Total**: ~1 hour

## Next Steps

After successful deployment:
1. Monitor for 24 hours
2. Review logs for any 401/429 errors
3. Update team wiki with auth instructions
4. Set calendar reminder for key rotation (90 days)

## Help

- **Setup questions**: See `ADMIN_SETUP.md`
- **Security details**: See `SECURITY.md`
- **Quick reference**: See `SECURITY_QUICK_REF.md`
- **Full deployment**: See `DEPLOYMENT_CHECKLIST.md`

---

**Status**: Ready for Deployment
**Risk**: LOW (well-tested, reversible)
**Impact**: HIGH (fixes critical vulnerability)
