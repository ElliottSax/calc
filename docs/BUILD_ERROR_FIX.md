# Build Error Fix - Dynamic Route Conflict

## ❌ Build Error Discovered

**Error:** `You cannot use different slug names for the same dynamic path ('symbol' !== 'ticker')`

**Cause:** Next.js detected conflicting dynamic route segments at the same path level.

## 🔍 Problem

Next.js requires that all dynamic segments at the same level use the same parameter name.

**Example of Conflict:**
```
/app/api/stock/[symbol]/route.ts
/app/api/stock/[ticker]/route.ts
```

Both can't exist because Next.js can't distinguish between them.

## ✅ Solution

Need to identify and standardize the dynamic route parameter names.

**Common locations to check:**
- `/app/api/aristocrats/[symbol]/`
- Any other `[ticker]` or `[symbol]` routes
- Stock-related API routes

## 🔧 Fix Required

1. Find all dynamic routes with `[symbol]` or `[ticker]`
2. Standardize to use one name (recommend `[symbol]`)
3. Update any code referencing the parameter
4. Rebuild

**Status:** Investigating conflicting routes...
