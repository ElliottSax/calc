#!/bin/bash

# Security Implementation Test Suite
# Tests authentication and rate limiting for Calc monitoring endpoints
# Usage: ./tests/security-test.sh [BASE_URL] [API_KEY]

set -e

# Configuration
BASE_URL=${1:-"http://localhost:3000"}
API_KEY=${2:-"test-key-not-set"}
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "======================================"
echo "Security Implementation Test Suite"
echo "======================================"
echo ""
echo "Base URL: $BASE_URL"
echo "API Key: ${API_KEY:0:20}..."
echo ""

# Test counter
TESTS_RUN=0
TESTS_PASSED=0
TESTS_FAILED=0

# Helper function to run test
run_test() {
  local test_name=$1
  local expected_status=$2
  local actual_status=$3

  TESTS_RUN=$((TESTS_RUN + 1))

  if [ "$actual_status" -eq "$expected_status" ]; then
    echo -e "${GREEN}✓${NC} $test_name (Status: $actual_status)"
    TESTS_PASSED=$((TESTS_PASSED + 1))
  else
    echo -e "${RED}✗${NC} $test_name (Expected: $expected_status, Got: $actual_status)"
    TESTS_FAILED=$((TESTS_FAILED + 1))
  fi
}

echo "======================================"
echo "1. Testing Admin Authentication"
echo "======================================"
echo ""

# Test 1: GET /api/monitoring/metrics without auth (should fail)
echo -n "Test 1.1: GET /api/monitoring/metrics without auth... "
status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/api/monitoring/metrics")
run_test "Unauthorized access denied" 401 "$status"

# Test 2: GET /api/monitoring/metrics with Bearer token
echo -n "Test 1.2: GET /api/monitoring/metrics with Bearer token... "
status=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: Bearer $API_KEY" \
  "$BASE_URL/api/monitoring/metrics")
run_test "Bearer token authentication" 200 "$status"

# Test 3: GET /api/monitoring/metrics with X-API-Key header
echo -n "Test 1.3: GET /api/monitoring/metrics with X-API-Key header... "
status=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "X-API-Key: $API_KEY" \
  "$BASE_URL/api/monitoring/metrics")
run_test "X-API-Key authentication" 200 "$status"

# Test 4: PUT /api/monitoring/metrics without auth (should fail)
echo -n "Test 1.4: PUT /api/monitoring/metrics without auth... "
status=$(curl -s -o /dev/null -w "%{http_code}" -X PUT "$BASE_URL/api/monitoring/metrics")
run_test "PUT endpoint unauthorized access denied" 401 "$status"

# Test 5: PUT /api/monitoring/metrics with auth
echo -n "Test 1.5: PUT /api/monitoring/metrics with auth... "
status=$(curl -s -o /dev/null -w "%{http_code}" \
  -X PUT \
  -H "Authorization: Bearer $API_KEY" \
  "$BASE_URL/api/monitoring/metrics")
run_test "PUT endpoint authentication" 200 "$status"

# Test 6: GET /api/track-conversion without auth (should fail)
echo -n "Test 1.6: GET /api/track-conversion without auth... "
status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/api/track-conversion")
run_test "Conversion analytics unauthorized access denied" 401 "$status"

# Test 7: GET /api/track-conversion with auth
echo -n "Test 1.7: GET /api/track-conversion with auth... "
status=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: Bearer $API_KEY" \
  "$BASE_URL/api/track-conversion")
run_test "Conversion analytics authentication" 200 "$status"

echo ""
echo "======================================"
echo "2. Testing Rate Limiting"
echo "======================================"
echo ""

# Test 8: Rate limit on error endpoint (20 requests per minute)
echo -n "Test 2.1: Rate limiting on /api/errors (20 req/min)... "
success_count=0
rate_limited=false

for i in {1..25}; do
  status=$(curl -s -o /dev/null -w "%{http_code}" \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"error":"test","message":"Rate limit test"}' \
    "$BASE_URL/api/errors")

  if [ "$status" -eq 200 ]; then
    success_count=$((success_count + 1))
  elif [ "$status" -eq 429 ]; then
    rate_limited=true
    break
  fi
done

if [ "$rate_limited" = true ] && [ "$success_count" -le 20 ]; then
  echo -e "${GREEN}✓${NC} Rate limiting on /api/errors (Limited after $success_count requests)"
  TESTS_PASSED=$((TESTS_PASSED + 1))
else
  echo -e "${RED}✗${NC} Rate limiting on /api/errors (Expected limit after 20, got limited after $success_count)"
  TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TESTS_RUN=$((TESTS_RUN + 1))

# Wait for rate limit to reset
echo -e "${YELLOW}⏳${NC} Waiting 5 seconds for rate limit to partially reset..."
sleep 5

# Test 9: Rate limit on logs endpoint (20 requests per minute)
echo -n "Test 2.2: Rate limiting on /api/logs (20 req/min)... "
success_count=0
rate_limited=false

for i in {1..25}; do
  status=$(curl -s -o /dev/null -w "%{http_code}" \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"logs":[{"level":"info","message":"test","timestamp":"'$(date -u +%Y-%m-%dT%H:%M:%S.000Z)'"}]}' \
    "$BASE_URL/api/logs")

  if [ "$status" -eq 200 ]; then
    success_count=$((success_count + 1))
  elif [ "$status" -eq 429 ]; then
    rate_limited=true
    break
  fi
done

if [ "$rate_limited" = true ] && [ "$success_count" -le 20 ]; then
  echo -e "${GREEN}✓${NC} Rate limiting on /api/logs (Limited after $success_count requests)"
  TESTS_PASSED=$((TESTS_PASSED + 1))
else
  echo -e "${RED}✗${NC} Rate limiting on /api/logs (Expected limit after 20, got limited after $success_count)"
  TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TESTS_RUN=$((TESTS_RUN + 1))

echo ""
echo "======================================"
echo "3. Testing Public Endpoints"
echo "======================================"
echo ""

# Test 10: POST /api/monitoring/metrics should work without auth (client metrics)
echo -n "Test 3.1: POST /api/monitoring/metrics without auth... "
status=$(curl -s -o /dev/null -w "%{http_code}" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"test_metric","value":123,"category":"test"}' \
  "$BASE_URL/api/monitoring/metrics")
run_test "Client metrics submission allowed" 200 "$status"

# Test 11: POST /api/track-conversion should work without auth (client conversion)
echo -n "Test 3.2: POST /api/track-conversion without auth... "
status=$(curl -s -o /dev/null -w "%{http_code}" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"platform":"test","action":"signup"}' \
  "$BASE_URL/api/track-conversion")
run_test "Conversion tracking allowed" 200 "$status"

echo ""
echo "======================================"
echo "4. Testing Security Headers"
echo "======================================"
echo ""

# Test 12: Check security headers presence
echo -n "Test 4.1: Security headers present... "
headers=$(curl -s -I "$BASE_URL/")
header_count=0

# Check for key security headers
if echo "$headers" | grep -q "X-Frame-Options"; then header_count=$((header_count + 1)); fi
if echo "$headers" | grep -q "X-Content-Type-Options"; then header_count=$((header_count + 1)); fi
if echo "$headers" | grep -q "Referrer-Policy"; then header_count=$((header_count + 1)); fi
if echo "$headers" | grep -q "Permissions-Policy"; then header_count=$((header_count + 1)); fi

if [ "$header_count" -ge 4 ]; then
  echo -e "${GREEN}✓${NC} Security headers present ($header_count/4 found)"
  TESTS_PASSED=$((TESTS_PASSED + 1))
else
  echo -e "${RED}✗${NC} Security headers missing ($header_count/4 found)"
  TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TESTS_RUN=$((TESTS_RUN + 1))

echo ""
echo "======================================"
echo "Test Summary"
echo "======================================"
echo ""
echo "Total Tests: $TESTS_RUN"
echo -e "${GREEN}Passed: $TESTS_PASSED${NC}"
echo -e "${RED}Failed: $TESTS_FAILED${NC}"
echo ""

if [ "$TESTS_FAILED" -eq 0 ]; then
  echo -e "${GREEN}✓ All tests passed!${NC}"
  exit 0
else
  echo -e "${RED}✗ Some tests failed. Please review the output above.${NC}"
  exit 1
fi
