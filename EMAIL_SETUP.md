# Email Setup Guide

Your portfolio contact form is now configured to send emails to **zeineb.eya.rahmani@outlook.com**.

## Setup Instructions

### 1. Get Resend API Key

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day)
3. Navigate to **API Keys** section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables

1. Create a `.env.local` file in the root directory:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=onboarding@resend.dev
```

2. For production deployment (Vercel/Netlify), add these environment variables in your deployment settings.

### 3. Using a Custom Domain (Optional)

To use your own domain email (e.g., contact@yourdomain.com):

1. In Resend dashboard, go to **Domains**
2. Add your domain
3. Configure DNS records as shown
4. Verify domain
5. Update `FROM_EMAIL` in `.env.local`:
   ```
   FROM_EMAIL=Zeineb Eya Rahmani <contact@yourdomain.com>
   ```

### 4. Test the Contact Form

1. Start your dev server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your inbox at zeineb.eya.rahmani@outlook.com
5. Check spam folder if you don't see it

## Email Features

✅ **Recipient**: zeineb.eya.rahmani@outlook.com
✅ **Reply-To**: Sender's email (you can reply directly)
✅ **Subject**: Includes "Portfolio Contact:" prefix
✅ **Content**: Shows sender's email, subject, and message
✅ **Formatting**: Preserves line breaks and formatting

## Free Tier Limits

- **Resend Free**: 100 emails per day, 3,000 per month
- Perfect for portfolio contact forms
- No credit card required

## Troubleshooting

### Email not sending?

1. Check console for error messages
2. Verify `RESEND_API_KEY` is set correctly in `.env.local`
3. Make sure `.env.local` is in root directory (next to package.json)
4. Restart dev server after adding environment variables
5. Check Resend dashboard for delivery logs

### Using Gmail instead?

If you prefer Gmail, you can use **Nodemailer** with Gmail SMTP:

```javascript
// Alternative setup with Nodemailer (not implemented)
// Requires app-specific password for Gmail
```

## Production Deployment

For Vercel:
1. Go to your project settings
2. Environment Variables section
3. Add `RESEND_API_KEY` and `FROM_EMAIL`
4. Redeploy

For Netlify:
1. Site settings → Build & deploy → Environment
2. Add variables
3. Trigger redeploy

## Security Notes

- ✅ Never commit `.env.local` to git (already in .gitignore)
- ✅ API key is server-side only (not exposed to client)
- ✅ Rate limiting recommended for production
- ✅ Consider adding reCAPTCHA for spam protection

---

**Current Configuration:**
- Emails go to: `zeineb.eya.rahmani@outlook.com`
- Using: Resend API
- Free tier: 100 emails/day
