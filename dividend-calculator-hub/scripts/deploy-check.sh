#!/bin/bash

# Deployment Pre-flight Check Script
# Run this before deploying to Vercel

set -e

echo "🚀 Dividend Calculator Hub - Deployment Pre-flight Check"
echo "═══════════════════════════════════════════════════════════"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check functions
check_pass() {
    echo -e "${GREEN}✓${NC} $1"
}

check_fail() {
    echo -e "${RED}✗${NC} $1"
    ERRORS=$((ERRORS + 1))
}

check_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
    WARNINGS=$((WARNINGS + 1))
}

ERRORS=0
WARNINGS=0

# 1. Check Node.js version
echo "Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -ge 18 ]; then
    check_pass "Node.js version: $(node -v)"
else
    check_fail "Node.js version too old: $(node -v). Need v18+"
fi
echo ""

# 2. Check if dependencies are installed
echo "Checking dependencies..."
if [ -d "node_modules" ]; then
    check_pass "node_modules directory exists"
else
    check_fail "node_modules not found. Run: npm install"
fi
echo ""

# 3. Check TypeScript compilation
echo "Running TypeScript type check..."
if npm run type-check > /dev/null 2>&1; then
    check_pass "TypeScript compilation successful"
else
    check_fail "TypeScript errors found. Run: npm run type-check"
fi
echo ""

# 4. Check ESLint
echo "Running ESLint..."
if npm run lint > /dev/null 2>&1; then
    check_pass "ESLint passed"
else
    check_warn "ESLint warnings/errors found. Run: npm run lint"
fi
echo ""

# 5. Check build
echo "Testing production build..."
if npm run build > /dev/null 2>&1; then
    check_pass "Production build successful"
else
    check_fail "Production build failed. Run: npm run build"
fi
echo ""

# 6. Check environment variables template
echo "Checking environment configuration..."
if [ -f ".env.production.example" ]; then
    check_pass ".env.production.example exists"
else
    check_warn ".env.production.example not found"
fi
echo ""

# 7. Check Vercel configuration
echo "Checking Vercel configuration..."
if [ -f "vercel.json" ]; then
    check_pass "vercel.json exists"
else
    check_warn "vercel.json not found"
fi
echo ""

# 8. Check Git status
echo "Checking Git status..."
if git diff-index --quiet HEAD --; then
    check_pass "No uncommitted changes"
else
    check_warn "Uncommitted changes detected. Commit before deploying."
fi
echo ""

# 9. Check if on correct branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"
if [[ "$CURRENT_BRANCH" == "main" || "$CURRENT_BRANCH" == "master" ]]; then
    check_pass "On main/master branch"
else
    check_warn "Not on main/master branch. Current: $CURRENT_BRANCH"
fi
echo ""

# Summary
echo "═══════════════════════════════════════════════════════════"
echo "Pre-flight Check Summary"
echo "═══════════════════════════════════════════════════════════"

if [ $ERRORS -gt 0 ]; then
    echo -e "${RED}✗ $ERRORS critical error(s) found${NC}"
    echo ""
    echo "Please fix errors before deploying to production."
    exit 1
elif [ $WARNINGS -gt 0 ]; then
    echo -e "${YELLOW}⚠ $WARNINGS warning(s) found${NC}"
    echo ""
    echo "You can proceed, but consider addressing warnings."
    exit 0
else
    echo -e "${GREEN}✓ All checks passed!${NC}"
    echo ""
    echo "Ready to deploy to Vercel! 🚀"
    echo ""
    echo "Next steps:"
    echo "  1. vercel         (deploy to preview)"
    echo "  2. vercel --prod  (deploy to production)"
    exit 0
fi
