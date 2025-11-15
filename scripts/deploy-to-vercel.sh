#!/bin/bash

# Automated Vercel Deployment Script
# This script guides you through deploying the dividend calculator to Vercel

set -e

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║     Dividend Calculator Hub - Vercel Deployment Script       ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check if Vercel CLI is installed
echo -e "${BLUE}Step 1: Checking Vercel CLI...${NC}"
if command -v vercel &> /dev/null; then
    echo -e "${GREEN}✓ Vercel CLI is installed ($(vercel --version))${NC}"
else
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
fi
echo ""

# Step 2: Login to Vercel
echo -e "${BLUE}Step 2: Login to Vercel${NC}"
echo "This will open your browser for authentication."
echo "Please login with your GitHub account."
echo ""
read -p "Press Enter to continue with 'vercel login'..."

vercel login

echo ""
echo -e "${GREEN}✓ Successfully logged in to Vercel${NC}"
echo ""

# Step 3: Deploy to preview
echo -e "${BLUE}Step 3: Deploying to Vercel (Preview)${NC}"
echo "This will create a preview deployment..."
echo ""

vercel --yes

echo ""
echo -e "${GREEN}✓ Preview deployment created!${NC}"
echo ""

# Step 4: Add environment variables
echo -e "${BLUE}Step 4: Setting up Environment Variables${NC}"
echo ""
echo "Adding environment variables for all environments (Production, Preview, Development)..."
echo ""

# Add MOCK_API_RESPONSES
echo "Setting MOCK_API_RESPONSES=true..."
echo "true" | vercel env add MOCK_API_RESPONSES production preview development

# Add Supabase URL (placeholder)
echo "Setting NEXT_PUBLIC_SUPABASE_URL..."
echo "https://placeholder-project.supabase.co" | vercel env add NEXT_PUBLIC_SUPABASE_URL production preview development

# Add Supabase Anon Key (placeholder)
echo "Setting NEXT_PUBLIC_SUPABASE_ANON_KEY..."
echo "placeholder_supabase_anon_key_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" | vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production preview development

# Add FMP API Key (placeholder)
echo "Setting FMP_API_KEY..."
echo "placeholder_fmp_api_key_demo" | vercel env add FMP_API_KEY production preview development

# Add NextAuth Secret
echo "Setting NEXTAUTH_SECRET..."
NEXTAUTH_SECRET=$(openssl rand -base64 32)
echo "$NEXTAUTH_SECRET" | vercel env add NEXTAUTH_SECRET production preview development

# Add other important env vars
echo "Setting NEXT_PUBLIC_APP_NAME..."
echo "Dividend Calculator Hub" | vercel env add NEXT_PUBLIC_APP_NAME production preview development

echo "Setting LOG_LEVEL..."
echo "info" | vercel env add LOG_LEVEL production preview development

echo "Setting DISABLE_ANALYTICS..."
echo "true" | vercel env add DISABLE_ANALYTICS production preview development

echo ""
echo -e "${GREEN}✓ Environment variables configured${NC}"
echo ""

# Step 5: Deploy to production
echo -e "${BLUE}Step 5: Deploy to Production${NC}"
read -p "Do you want to deploy to production now? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Deploying to production..."
    vercel --prod --yes
    echo ""
    echo -e "${GREEN}✓ Production deployment complete!${NC}"
else
    echo "Skipping production deployment."
    echo "You can deploy later with: vercel --prod"
fi

echo ""
echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                   Deployment Complete! 🎉                     ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""
echo "Your dividend calculator is now deployed on Vercel!"
echo ""
echo "Next steps:"
echo "1. Visit your Vercel dashboard: https://vercel.com/dashboard"
echo "2. Set up GitHub integration for auto-deployments"
echo "3. Update environment variables with real API keys when ready"
echo ""
echo "Useful commands:"
echo "  vercel                 - Deploy to preview"
echo "  vercel --prod          - Deploy to production"
echo "  vercel logs            - View deployment logs"
echo "  vercel env ls          - List environment variables"
echo ""
