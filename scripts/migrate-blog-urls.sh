#!/bin/bash

###############################################################################
# Blog URL Migration Script
# Migrates from numeric blog IDs to SEO-friendly slugs
# Usage: bash scripts/migrate-blog-urls.sh [--validate-only] [--verbose]
###############################################################################

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Options
VALIDATE_ONLY=false
VERBOSE=false

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --validate-only)
      VALIDATE_ONLY=true
      shift
      ;;
    --verbose)
      VERBOSE=true
      shift
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Function to print messages
print_info() {
  echo -e "${BLUE}ℹ${NC}  $1"
}

print_success() {
  echo -e "${GREEN}✓${NC}  $1"
}

print_warning() {
  echo -e "${YELLOW}⚠${NC}  $1"
}

print_error() {
  echo -e "${RED}✗${NC}  $1"
}

print_header() {
  echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${BLUE}${1}${NC}"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
}

# Validation functions
check_file_exists() {
  local file=$1
  if [ ! -f "$file" ]; then
    print_error "File not found: $file"
    return 1
  fi
  return 0
}

check_directory_exists() {
  local dir=$1
  if [ ! -d "$dir" ]; then
    print_error "Directory not found: $dir"
    return 1
  fi
  return 0
}

validate_typescript_syntax() {
  local file=$1
  if ! npx tsc --noEmit "$file" 2>/dev/null; then
    print_warning "TypeScript syntax may have issues in $file"
    return 1
  fi
  return 0
}

# Check essential files
check_migration_files() {
  print_header "Checking Migration Files"

  local files=(
    "lib/blog/slug-mapping.ts"
    "lib/blog/blog-sitemap.ts"
    "app/blog/[id]/route.ts"
    "app/blog/page.tsx"
    "app/sitemap.ts"
    "BLOG_URL_MIGRATION.md"
  )

  local all_exist=true

  for file in "${files[@]}"; do
    if check_file_exists "$file"; then
      print_success "Found: $file"
    else
      print_error "Missing: $file"
      all_exist=false
    fi
  done

  return $([ "$all_exist" = true ] && echo 0 || echo 1)
}

# Verify slug mapping completeness
verify_slug_mapping() {
  print_header "Verifying Slug Mapping"

  local mapping_file="lib/blog/slug-mapping.ts"

  if ! check_file_exists "$mapping_file"; then
    print_error "Cannot verify slug mapping: file not found"
    return 1
  fi

  # Check for required entries
  local required_ids=("1" "2" "3" "4" "5" "6" "7" "8" "9" "10")
  local all_found=true

  for id in "${required_ids[@]}"; do
    if grep -q "'$id':" "$mapping_file"; then
      print_success "Found mapping for ID: $id"
    else
      print_warning "Missing mapping for ID: $id"
      all_found=false
    fi
  done

  return $([ "$all_exist" = true ] && echo 0 || echo 1)
}

# Check for hardcoded numeric blog links
check_hardcoded_links() {
  print_header "Checking for Hardcoded Numeric Links"

  local pattern='href.*blog\/[0-9]+'
  local excluded_files=(".next" "node_modules" ".git" "build" "dist")

  # Build exclude pattern for grep
  local exclude_pattern=""
  for excluded in "${excluded_files[@]}"; do
    exclude_pattern="$exclude_pattern --exclude-dir=$excluded"
  done

  local found=0
  local matches=$(grep -r "$pattern" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" $exclude_pattern . 2>/dev/null || true)

  if [ -z "$matches" ]; then
    print_success "No hardcoded numeric blog links found"
    return 0
  else
    print_warning "Found potential hardcoded numeric links:"
    echo "$matches" | head -10
    found=1
  fi

  return $found
}

# Verify sitemap includes blog posts
verify_sitemap() {
  print_header "Verifying Sitemap Configuration"

  local sitemap_file="app/sitemap.ts"

  if ! check_file_exists "$sitemap_file"; then
    print_error "Sitemap file not found"
    return 1
  fi

  # Check for blogPostPages
  if grep -q "blogPostPages" "$sitemap_file"; then
    print_success "Sitemap includes blog post pages"
  else
    print_error "Sitemap missing blog post pages"
    return 1
  fi

  # Check for blogCategoryPages
  if grep -q "blogCategoryPages" "$sitemap_file"; then
    print_success "Sitemap includes blog category pages"
  else
    print_error "Sitemap missing blog category pages"
    return 1
  fi

  # Check for blogTagPages
  if grep -q "blogTagPages" "$sitemap_file"; then
    print_success "Sitemap includes blog tag pages"
  else
    print_error "Sitemap missing blog tag pages"
    return 1
  fi

  return 0
}

# Verify route handler
verify_route_handler() {
  print_header "Verifying Redirect Route Handler"

  local route_file="app/blog/[id]/route.ts"

  if ! check_file_exists "$route_file"; then
    print_error "Route handler not found"
    return 1
  fi

  # Check for 301 status
  if grep -q "301" "$route_file"; then
    print_success "Route handler returns 301 status"
  else
    print_error "Route handler doesn't return 301 status"
    return 1
  fi

  # Check for validation
  if grep -q "isValidBlogId\|getSlugForId" "$route_file"; then
    print_success "Route handler validates and maps IDs"
  else
    print_error "Route handler missing validation"
    return 1
  fi

  return 0
}

# Verify page.tsx uses helper function
verify_page_links() {
  print_header "Verifying Blog Page Links"

  local page_file="app/blog/page.tsx"

  if ! check_file_exists "$page_file"; then
    print_error "Blog page not found"
    return 1
  fi

  # Check for getPostSlug import
  if grep -q "getSlugForId" "$page_file"; then
    print_success "Blog page imports slug mapping"
  else
    print_error "Blog page doesn't import slug mapping"
    return 1
  fi

  # Check for getPostSlug helper function
  if grep -q "function getPostSlug" "$page_file"; then
    print_success "Blog page has getPostSlug helper"
  else
    print_error "Blog page missing getPostSlug helper"
    return 1
  fi

  return 0
}

# Run all validations
run_validations() {
  print_header "Running All Validations"

  local all_passed=true

  if ! check_migration_files; then all_passed=false; fi
  if ! verify_slug_mapping; then all_passed=false; fi
  if ! check_hardcoded_links; then all_passed=false; fi
  if ! verify_sitemap; then all_passed=false; fi
  if ! verify_route_handler; then all_passed=false; fi
  if ! verify_page_links; then all_passed=false; fi

  return $([ "$all_passed" = true ] && echo 0 || echo 1)
}

# Build and test
build_and_test() {
  print_header "Building and Testing"

  if [ "$VALIDATE_ONLY" = true ]; then
    print_info "Skipping build (--validate-only mode)"
    return 0
  fi

  print_info "Running build..."
  if npm run build > /dev/null 2>&1; then
    print_success "Build completed successfully"
    return 0
  else
    print_error "Build failed"
    return 1
  fi
}

# Generate migration report
generate_report() {
  print_header "Migration Status Report"

  local report_file="BLOG_URL_MIGRATION_REPORT.txt"

  cat > "$report_file" << EOF
Blog URL Migration Report
Generated: $(date)

Files Created:
- lib/blog/slug-mapping.ts
- app/blog/[id]/route.ts
- lib/blog/blog-sitemap.ts

Files Modified:
- app/blog/page.tsx
- app/sitemap.ts
- next.config.js

Configuration:
- 301 Redirects: ENABLED
- Sitemap Generation: DYNAMIC
- Cache Duration: 1 year (31536000 seconds)

Next Steps:
1. Deploy to staging environment
2. Test all redirects
3. Verify sitemap generation
4. Deploy to production
5. Submit sitemap to Google Search Console
6. Monitor rankings for 2-4 weeks

Documentation:
- See BLOG_URL_MIGRATION.md for complete details
- See Testing Checklist in BLOG_URL_MIGRATION.md
- See Common Issues & Solutions in BLOG_URL_MIGRATION.md
EOF

  print_success "Report generated: $report_file"
}

# Main execution
main() {
  echo ""
  print_header "Blog URL Migration Script"

  print_info "Starting validation..."
  print_info "Validate Only: $VALIDATE_ONLY"
  print_info "Verbose: $VERBOSE"
  echo ""

  if run_validations; then
    print_success "All validations passed!"
    echo ""

    if build_and_test; then
      print_success "Build successful!"
      generate_report
      echo ""
      print_success "Migration ready for deployment!"
      echo ""
      print_info "Next steps:"
      echo "  1. Review BLOG_URL_MIGRATION.md"
      echo "  2. Deploy to staging"
      echo "  3. Test redirects"
      echo "  4. Deploy to production"
      echo "  5. Update Search Console"
      echo ""
      return 0
    else
      print_error "Build failed! Check errors above."
      return 1
    fi
  else
    print_error "Validation failed! Check errors above."
    return 1
  fi
}

# Run main function
main
exit $?
