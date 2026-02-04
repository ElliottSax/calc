# Email Service Integration - Setup Guide

## ✅ What's Been Implemented

All email capture components are now fully functional and connected to a unified email service that supports multiple providers.

### Files Updated
- ✅ `lib/email/email-service.ts` - Unified email service (NEW)
- ✅ `app/api/newsletter/route.ts` - Updated to use email service
- ✅ `app/api/subscribe/route.ts` - Updated to use email service
- ✅ `components/email/ExitIntentPopup.tsx` - Now calls real API
- ✅ `components/email/InlineSignup.tsx` - Now calls real API
- ✅ `components/email/StickyBar.tsx` - Now calls real API

### Supported Email Providers
1. **ConvertKit** (Recommended for creators)
2. **SendGrid** (Good for transactional)
3. **Resend** (Modern, developer-friendly)
4. **Mailchimp** (Full-featured)
5. **Mock** (Development/testing)

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Choose Your Email Provider

**Recommendation: ConvertKit** for dividend newsletter
- Best for content creators
- Great automation
- Easy to use
- Free up to 1,000 subscribers

### Step 2: Get Your API Credentials

#### For ConvertKit:
1. Go to https://app.convertkit.com/account_settings/advanced_settings
2. Copy your **API Key**
3. Go to https://app.convertkit.com/forms
4. Create a new form (or use existing)
5. Copy the **Form ID** from the URL

#### For SendGrid:
1. Go to https://app.sendgrid.com/settings/api_keys
2. Create a new API key with "Marketing" permissions
3. Go to https://mc.sendgrid.com/contacts/lists
4. Create a list and copy the **List ID**

#### For Resend:
1. Go to https://resend.com/api-keys
2. Create a new API key
3. Go to https://resend.com/audiences
4. Create an audience and copy the **Audience ID**

#### For Mailchimp:
1. Go to https://admin.mailchimp.com/account/api/
2. Create a new API key
3. Go to https://admin.mailchimp.com/lists/
4. Find your list ID in settings
5. Note your server prefix (e.g., 'us1' from key ending)

### Step 3: Add to Environment Variables

Copy `.env.email.example` contents to your `.env.local`:

```bash
# Choose your provider
EMAIL_PROVIDER=convertkit

# Add your credentials
CONVERTKIT_API_KEY=your_actual_api_key_here
CONVERTKIT_FORM_ID=your_actual_form_id_here
```

### Step 4: Test It Works

1. Start your dev server: `npm run dev`
2. Go to http://localhost:3000
3. Scroll down and try the email signup
4. Check your email provider dashboard for the new subscriber

### Step 5: Deploy to Production

Add the same environment variables to your Vercel/production environment:

```bash
# In Vercel dashboard:
# Settings → Environment Variables → Add

EMAIL_PROVIDER = convertkit
CONVERTKIT_API_KEY = your_key
CONVERTKIT_FORM_ID = your_form_id
```

---

## 🎯 How It Works

### Architecture

```
User enters email
    ↓
Frontend Component (ExitIntentPopup, InlineSignup, etc.)
    ↓
POST /api/newsletter or /api/subscribe
    ↓
lib/email/email-service.ts (chooses provider)
    ↓
Provider API (ConvertKit, SendGrid, etc.)
    ↓
Email saved in your email service
    ↓
Welcome email sent (if configured)
```

### Email Capture Points

1. **Exit Intent Popup** - When user tries to leave
2. **Inline Signup** - In content areas
3. **Sticky Bottom Bar** - After scrolling
4. **Newsletter Footer** - Bottom of pages

### Tracking

All signups are tracked with:
- Email address
- Source (which component captured)
- Timestamp
- Custom fields (signup_page, etc.)

---

## 🔧 Advanced Configuration

### Adding Custom Fields

Edit `lib/email/email-service.ts`:

```typescript
const result = await subscribeToNewsletter({
  email,
  firstName,
  source: 'calculator',
  tags: ['interested-in-drip'],
  customFields: {
    calculator_type: 'retirement',
    portfolio_goal: 1000000,
    years_to_retirement: 20
  }
})
```

### Welcome Email

Most providers support automated welcome emails:

**ConvertKit:**
- Create a sequence
- Set it to trigger on form signup
- Add your welcome content

**SendGrid:**
- Create an automation
- Trigger on "Contact added to list"
- Send your template

**Resend/Mailchimp:**
- Similar automation setups available

### Error Handling

The service includes:
- ✅ Email validation
- ✅ API error handling
- ✅ Fallback to mock mode if credentials missing
- ✅ Detailed logging
- ✅ User-friendly error messages

---

## 📊 Monitoring

### Check Signup Success

Look in your logs for:
```
Newsletter subscription successful
{ subscriberId: 'xxx', email: 'user@example.com' }
```

### Common Issues

**"Mock subscription" in logs:**
- Your EMAIL_PROVIDER is set to 'mock' OR
- Your provider credentials are missing/invalid
- Check .env.local has correct values

**"API error" responses:**
- Invalid API key → Check credentials
- Invalid Form/List ID → Verify IDs match
- Network error → Check provider status

**No emails appearing:**
- Check spam/junk folder first
- Verify form/list is active
- Check provider dashboard for errors

---

## 🎉 Testing in Development

The service includes a mock mode for development:

```bash
# In .env.local
EMAIL_PROVIDER=mock
```

This will:
- Log subscriptions to console
- Return success responses
- NOT actually send emails
- Perfect for development/testing

---

## 📈 Next Steps

1. ✅ Choose provider and add credentials
2. ✅ Test signup flow works
3. 📝 Create welcome email sequence
4. 📝 Set up automation rules
5. 📝 Add tags for segmentation
6. 📝 Monitor conversion rates
7. 📝 Optimize signup CTAs

---

## 🆘 Support

**ConvertKit:** https://help.convertkit.com/
**SendGrid:** https://docs.sendgrid.com/
**Resend:** https://resend.com/docs
**Mailchimp:** https://mailchimp.com/help/

---

## ✅ Checklist

- [ ] Choose email provider
- [ ] Get API credentials
- [ ] Add to .env.local
- [ ] Test signup works locally
- [ ] Add to production env vars
- [ ] Create welcome email sequence
- [ ] Test in production
- [ ] Monitor first signups

**Estimated Setup Time:** 5-10 minutes

---

*Email integration complete! Start capturing leads and building your email list.*
