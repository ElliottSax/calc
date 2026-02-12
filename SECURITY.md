# Security Implementation Guide

## Overview

This document describes the security measures implemented for the Calc (Dividend Calculator Hub) project, addressing CRIT-5 from the security audit.

## Critical Finding Addressed

**CRIT-5: Unauthenticated monitoring endpoints expose server internals**

Previously, the following endpoints were publicly accessible without authentication:
- `/api/monitoring/metrics` (GET, PUT) - System health, memory usage, CPU usage
- `/api/track-conversion` (GET) - Business analytics and conversion data
- `/api/errors` (POST) - Error logging endpoint
- `/api/logs` (POST) - Log ingestion endpoint

## Implemented Solutions

### 1. Admin API Key Authentication

**Pattern**: API key-based authentication for admin/monitoring endpoints
**Source**: Inspired by `auth-nextjs.md` pattern from `.agent-bus/patterns/`

#### Configuration

Generate a secure API key:
```bash
openssl rand -hex 32
```

Add to `.env.local`:
```bash
ADMIN_API_KEY=your-64-character-hex-key-here
```

#### Protected Endpoints

The following endpoints now require admin authentication:

| Endpoint | Method | Auth Required | Rate Limit |
|----------|--------|---------------|------------|
| `/api/monitoring/metrics` | GET | Yes | 30/min |
| `/api/monitoring/metrics` | PUT | Yes | 30/min |
| `/api/track-conversion` | GET | Yes | 30/min |
| `/api/monitoring/metrics` | POST | No (client) | 30/min |
| `/api/track-conversion` | POST | No (client) | 10/min |

#### Usage

Include the API key in one of two ways:

**Option 1: Bearer Token**
```bash
curl -H "Authorization: Bearer your-api-key-here" \
  https://yourdomain.com/api/monitoring/metrics
```

**Option 2: X-API-Key Header**
```bash
curl -H "X-API-Key: your-api-key-here" \
  https://yourdomain.com/api/monitoring/metrics
```

#### Security Features

1. **Timing-Safe Comparison**: Prevents timing attacks by using constant-time string comparison
2. **Environment-Based Config**: API key stored in environment variables, never in code
3. **Multiple Header Support**: Accepts both `Authorization: Bearer` and `X-API-Key` headers
4. **Clear Error Messages**: Returns 401 with instructions on how to authenticate

### 2. Rate Limiting for Log/Error Ingestion

**Pattern**: Endpoint-specific rate limiting to prevent DoS attacks
**Source**: Enhanced from existing `middleware.ts` rate limiting

#### Rate Limit Configurations

| Endpoint Type | Window | Max Requests | Purpose |
|---------------|--------|--------------|---------|
| Log Ingestion | 1 min | 20 requests | Prevent log flooding DoS |
| Error Reporting | 1 min | 20 requests | Prevent error flooding DoS |
| Monitoring | 1 min | 30 requests | Normal admin operations |
| Conversion Tracking | 1 min | 10 requests | Prevent fake conversion spam |

#### Protected Endpoints

- `/api/errors` (POST) - Client-side error reporting
- `/api/logs` (POST) - Browser log ingestion
- `/api/monitoring/metrics` (POST) - Client metrics submission
- `/api/track-conversion` (POST) - Conversion event tracking

#### Rate Limit Headers

When rate limited, responses include:
```
HTTP/1.1 429 Too Many Requests
Retry-After: 42
X-RateLimit-Limit: 20
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1707654321
```

### 3. Optional IP Allowlist

For additional security, you can restrict admin endpoints to specific IP addresses.

Add to `.env.local`:
```bash
ADMIN_ALLOWED_IPS=127.0.0.1,192.168.1.100,203.0.113.42
```

This adds a second layer of protection beyond the API key.

## Security Best Practices

### Environment Variables

**Never commit these to git:**
- `ADMIN_API_KEY` - Admin API authentication
- `SESSION_SECRET` - Session encryption
- Any API keys or secrets

**Always use `.env.local` for development and Vercel environment variables for production.**

### API Key Management

1. **Generate Strong Keys**: Use `openssl rand -hex 32` for 256-bit security
2. **Rotate Regularly**: Change API keys every 90 days
3. **Separate Keys per Environment**: Different keys for dev/staging/production
4. **Never Share Keys**: Each admin should have their own key (future enhancement)
5. **Monitor Usage**: Log all admin API access for audit trails

### Deployment Checklist

Before deploying to production:

- [ ] Generate secure `ADMIN_API_KEY` with `openssl rand -hex 32`
- [ ] Add `ADMIN_API_KEY` to Vercel environment variables
- [ ] Optionally configure `ADMIN_ALLOWED_IPS` for your admin IP addresses
- [ ] Test authenticated endpoints work with correct key
- [ ] Test endpoints return 401 without correct key
- [ ] Verify rate limiting works (test with curl in a loop)
- [ ] Review logs for any authentication failures

### Monitoring

Monitor these metrics in production:

1. **401 Errors**: Potential unauthorized access attempts
2. **429 Errors**: Rate limit hits (could indicate DoS or misconfigured client)
3. **403 Errors**: IP allowlist rejections
4. **Admin API Usage**: Frequency and patterns of admin endpoint access

## Architecture

### Authentication Flow

```
Client Request
    ↓
Middleware (global rate limit + security headers)
    ↓
Route Handler
    ↓
requireAdminAuth() → Check API key
    ↓
applyRateLimit() → Check endpoint-specific rate limit
    ↓
Business Logic
```

### File Structure

```
lib/
  auth-admin.ts          # Admin authentication utilities
  rate-limit.ts          # Rate limiting utilities

app/api/
  monitoring/metrics/    # Protected with auth + rate limit
  track-conversion/      # GET protected, POST rate limited
  errors/               # Rate limited
  logs/                 # Rate limited
```

## Testing

### Test Admin Authentication

```bash
# Should return 401 Unauthorized
curl https://yourdomain.com/api/monitoring/metrics

# Should return metrics data
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://yourdomain.com/api/monitoring/metrics

# Alternative header format
curl -H "X-API-Key: YOUR_API_KEY" \
  https://yourdomain.com/api/monitoring/metrics
```

### Test Rate Limiting

```bash
# Send 25 requests rapidly (should get 429 after 20)
for i in {1..25}; do
  curl -X POST https://yourdomain.com/api/errors \
    -H "Content-Type: application/json" \
    -d '{"error": "test"}' \
    -w "\nStatus: %{http_code}\n"
done
```

### Test IP Allowlist (if configured)

```bash
# From allowed IP - should work
curl -H "X-API-Key: YOUR_API_KEY" \
  https://yourdomain.com/api/monitoring/metrics

# From different IP - should return 403
# (Test from different network/VPN)
```

## Future Enhancements

1. **User-Based Authentication**: Migrate to NextAuth for per-user admin access
2. **Role-Based Access Control**: Different permissions for different admin roles
3. **Audit Logging**: Detailed logs of all admin operations
4. **Redis-Based Rate Limiting**: For distributed rate limiting across serverless instances
5. **API Key Rotation**: Automated key rotation with grace periods
6. **Webhook Signatures**: HMAC signatures for webhook endpoints
7. **2FA for Admin**: Two-factor authentication for admin API access

## References

- OWASP API Security Top 10: https://owasp.org/www-project-api-security/
- Pattern Source: `/mnt/e/projects/.agent-bus/patterns/auth-nextjs.md`
- Pattern Source: `/mnt/e/projects/.agent-bus/patterns/security-headers.md`
- Security Audit: `affiliate-sites-review.md` CRIT-5

## Support

For security concerns or questions, contact the security team or file a confidential issue.

**Last Updated**: 2026-02-11
