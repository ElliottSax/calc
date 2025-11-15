#!/bin/bash
# Quick Vercel Deployment Script
# This script will guide you through deploying to Vercel

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║     Dividend Calculator - Vercel Deployment                  ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Ensure we're in the right directory
cd /home/user/calc/dividend-calculator-hub

echo "📍 Current directory: $(pwd)"
echo ""

# Step 1: Login (this will open a browser)
echo "Step 1: Logging in to Vercel..."
echo "This will open your browser for authentication."
echo ""

vercel login

if [ $? -ne 0 ]; then
    echo "❌ Login failed. Please try again."
    exit 1
fi

echo ""
echo "✅ Login successful!"
echo ""

# Step 2: Deploy to preview
echo "Step 2: Deploying to Vercel (Preview)..."
echo ""

vercel --yes

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed."
    exit 1
fi

echo ""
echo "✅ Preview deployment complete!"
echo ""

# Step 3: Set environment variables
echo "Step 3: Setting environment variables..."
echo ""

echo "Adding MOCK_API_RESPONSES..."
echo "true" | vercel env add MOCK_API_RESPONSES production preview development || true

echo "Adding NEXT_PUBLIC_SUPABASE_URL..."
echo "https://example.supabase.co" | vercel env add NEXT_PUBLIC_SUPABASE_URL production preview development || true

echo "Adding NEXT_PUBLIC_SUPABASE_ANON_KEY..."
echo "example_supabase_anon_key_placeholder" | vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production preview development || true

echo "Adding FMP_API_KEY..."
echo "example_fmp_key_placeholder" | vercel env add FMP_API_KEY production preview development || true

echo "Adding NEXTAUTH_SECRET..."
NEXTAUTH_SECRET=$(openssl rand -base64 32)
echo "$NEXTAUTH_SECRET" | vercel env add NEXTAUTH_SECRET production preview development || true

echo "Adding NEXT_PUBLIC_APP_NAME..."
echo "Dividend Calculator Hub" | vercel env add NEXT_PUBLIC_APP_NAME production preview development || true

echo "Adding DISABLE_ANALYTICS..."
echo "true" | vercel env add DISABLE_ANALYTICS production preview development || true

echo ""
echo "✅ Environment variables configured!"
echo ""

# Step 4: Deploy to production
echo "Step 4: Deploying to production..."
echo ""

vercel --prod --yes

echo ""
echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║              🎉 Deployment Complete!                         ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""
echo "Your dividend calculator is now live on Vercel!"
echo ""
echo "Next steps:"
echo "1. Visit Vercel dashboard: https://vercel.com/dashboard"
echo "2. Set up GitHub integration for auto-deployments"
echo "3. Test your calculator at the provided URL"
echo ""
