# Security Quick Reference Card

## 🔑 Admin API Access

### Setup (One-Time)
```bash
# 1. Generate key
openssl rand -hex 32

# 2. Add to .env.local
ADMIN_API_KEY=your-generated-key

# 3. Restart server
npm run dev
```

### Access Protected Endpoints
```bash
# Method 1: Bearer Token
curl -H "Authorization: Bearer YOUR_KEY" \
  https://domain.com/api/monitoring/metrics

# Method 2: X-API-Key Header
curl -H "X-API-Key: YOUR_KEY" \
  https://domain.com/api/monitoring/metrics
```

## 📊 Endpoint Summary

| Endpoint | Method | Auth? | Rate Limit | Purpose |
|----------|--------|-------|------------|---------|
| `/api/monitoring/metrics` | GET | ✅ Yes | 30/min | View metrics |
| `/api/monitoring/metrics` | POST | ❌ No | 30/min | Submit metrics |
| `/api/monitoring/metrics` | PUT | ✅ Yes | 30/min | Dashboard data |
| `/api/track-conversion` | GET | ✅ Yes | 30/min | View analytics |
| `/api/track-conversion` | POST | ❌ No | 10/min | Track conversion |
| `/api/errors` | POST | ❌ No | 20/min | Report errors |
| `/api/logs` | POST | ❌ No | 20/min | Submit logs |

## 🚨 Common Errors

### 401 Unauthorized
```json
{"error": "Unauthorized", "message": "Valid API key required..."}
```
**Fix**: Include `Authorization: Bearer YOUR_KEY` header

### 429 Rate Limited
```json
{"error": "Rate limit exceeded", "retryAfter": 42}
```
**Fix**: Wait 60 seconds or check `Retry-After` header

### 403 Forbidden
```json
{"error": "Forbidden", "message": "Access denied from your IP"}
```
**Fix**: Add your IP to `ADMIN_ALLOWED_IPS` or remove IP allowlist

## 🧪 Quick Test

```bash
# Test without auth (should fail)
curl https://your-domain.com/api/monitoring/metrics
# Expected: 401 Unauthorized

# Test with auth (should work)
curl -H "X-API-Key: YOUR_KEY" \
  https://your-domain.com/api/monitoring/metrics
# Expected: 200 OK with metrics data
```

## 📚 Full Documentation

- **Setup Guide**: `ADMIN_SETUP.md`
- **Security Details**: `SECURITY.md`
- **Fix Summary**: `SECURITY_FIXES_CRIT5.md`

## 🔒 Security Tips

1. ✅ Generate keys with `openssl rand -hex 32`
2. ✅ Never commit `.env.local` to git
3. ✅ Use different keys for dev/prod
4. ✅ Rotate keys every 90 days
5. ✅ Monitor logs for 401 errors (attacks)

---
**Quick Help**: See `ADMIN_SETUP.md` for detailed examples in all languages
