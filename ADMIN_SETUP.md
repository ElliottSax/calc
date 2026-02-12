# Admin Authentication Setup Guide

## Quick Start (5 minutes)

This guide will help you secure your monitoring and analytics endpoints.

## Step 1: Generate API Key

Run this command in your terminal:

```bash
openssl rand -hex 32
```

You'll get output like:
```
a3f8b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1
```

Copy this entire string.

## Step 2: Add to Environment

### Local Development

Create or edit `.env.local` in your project root:

```bash
ADMIN_API_KEY=a3f8b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1
```

### Production (Vercel)

1. Go to your Vercel dashboard
2. Select your project (Calc/Dividend Calculator Hub)
3. Go to Settings → Environment Variables
4. Add new variable:
   - **Name**: `ADMIN_API_KEY`
   - **Value**: Your generated key
   - **Environment**: Production (and Preview if needed)
5. Click "Save"
6. Redeploy your application

## Step 3: Test Authentication

### Test Without Key (Should Fail)

```bash
curl https://your-domain.vercel.app/api/monitoring/metrics
```

Expected response:
```json
{
  "error": "Unauthorized",
  "message": "Valid API key required. Provide via Authorization: Bearer <key> or X-API-Key: <key> header"
}
```

### Test With Key (Should Succeed)

```bash
curl -H "Authorization: Bearer YOUR_API_KEY_HERE" \
  https://your-domain.vercel.app/api/monitoring/metrics
```

Expected response:
```json
{
  "health": {
    "status": "healthy",
    "uptime": 1234.56,
    ...
  },
  ...
}
```

## Step 4: Use in Your Tools

### Browser Developer Console

```javascript
fetch('https://your-domain.vercel.app/api/monitoring/metrics', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY_HERE'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

### Postman

1. Create new request
2. Set URL: `https://your-domain.vercel.app/api/monitoring/metrics`
3. Go to "Headers" tab
4. Add header:
   - Key: `Authorization`
   - Value: `Bearer YOUR_API_KEY_HERE`
5. Send request

### curl

```bash
# Option 1: Bearer token
curl -H "Authorization: Bearer YOUR_API_KEY_HERE" \
  https://your-domain.vercel.app/api/monitoring/metrics

# Option 2: X-API-Key header
curl -H "X-API-Key: YOUR_API_KEY_HERE" \
  https://your-domain.vercel.app/api/monitoring/metrics
```

### Python

```python
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY_HERE'
}

response = requests.get(
    'https://your-domain.vercel.app/api/monitoring/metrics',
    headers=headers
)

print(response.json())
```

### Node.js

```javascript
const fetch = require('node-fetch');

fetch('https://your-domain.vercel.app/api/monitoring/metrics', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY_HERE'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## Optional: IP Allowlist

For extra security, restrict admin endpoints to your office/home IP.

### Find Your IP Address

```bash
curl ifconfig.me
```

### Add to Environment

`.env.local` or Vercel environment variables:

```bash
ADMIN_ALLOWED_IPS=203.0.113.42,198.51.100.10
```

(Comma-separated list of IP addresses)

## Protected Endpoints

These endpoints now require authentication:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/monitoring/metrics` | GET | View system metrics and health |
| `/api/monitoring/metrics` | PUT | Get dashboard data |
| `/api/track-conversion` | GET | View conversion analytics |

## Rate Limits

Even with authentication, rate limits apply:

| Endpoint | Limit | Window |
|----------|-------|--------|
| Monitoring endpoints | 30 requests | per minute |
| Error/log ingestion | 20 requests | per minute |
| Conversion tracking | 10 requests | per minute |

If you hit the limit, wait 60 seconds or check the `Retry-After` header.

## Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Don't share your API key** - Each team member should have their own
3. **Rotate keys every 90 days** - Generate new key, update environment
4. **Use HTTPS only** - Never send API key over HTTP
5. **Monitor for unauthorized attempts** - Check logs for 401 errors

## Troubleshooting

### "Admin authentication not configured" (500 error)

- Your `ADMIN_API_KEY` is not set or is too short (needs 32+ characters)
- Run `openssl rand -hex 32` to generate a valid key

### "Unauthorized" (401 error)

- Your API key is incorrect
- You forgot to include the `Authorization` or `X-API-Key` header
- Your key has been rotated and you're using an old one

### "Forbidden" (403 error)

- Your IP address is not in the `ADMIN_ALLOWED_IPS` list
- Connect from an allowed IP or remove the IP allowlist

### "Rate limit exceeded" (429 error)

- You're making too many requests
- Wait for the time specified in `Retry-After` header
- Check if you have a loop or script hitting the endpoint repeatedly

## Need Help?

- Read full documentation: `SECURITY.md`
- Check environment variables in Vercel dashboard
- Verify `.env.local` exists and contains `ADMIN_API_KEY`
- Test with curl commands above to isolate the issue

---

**Setup Time**: 5 minutes
**Difficulty**: Easy
**Security Level**: High
