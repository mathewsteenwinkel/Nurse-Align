# How to Use the AI Suggestions Feature

## Overview

The AI-powered career suggestions feature automatically generates personalized recommendations for nurses after they submit their profile. The suggestions appear on the "Next Steps" page, before the job listings.

## User Flow

1. **Sign Up Page** (`/signup`)
   - User fills out their nursing profile
   - Required fields: Name, Email, Country, License Type, Experience, Specialization, Education
   - Click "Submit Application"

2. **AI Suggestions Generated Automatically**
   - User is redirected to Next Steps page
   - AI suggestions automatically load (no button click needed)
   - Loading spinner shows while AI generates recommendations
   - Suggestions appear in a highlighted card

3. **Next Steps Page** (`/next-steps`)
   - Personalized welcome message
   - **AI-Powered Career Recommendations** (appears first)
   - Your Personalized Path to Practice in Canada
   - Important Resources
   - Job listings CTA

## Testing Locally

```bash
npm run dev
```

This starts both:
- Frontend: http://localhost:8080
- API: http://localhost:3001

Visit http://localhost:8080 and:
1. Fill out sign-up form
2. Submit application
3. See AI suggestions load automatically on NextSteps page!

## Example AI Suggestions

Based on a nurse profile like:
- Name: Maria Garcia
- Country: Mexico
- License: RN
- Experience: 6-10 years
- Specialization: ICU
- Education: Bachelor's Degree (BSN)

The AI might generate:

```
1. Begin your NNAS application immediately - with your 6-10 years of ICU experience, you're a strong candidate for Canadian hospitals that have critical care nursing shortages.

2. Focus on English language proficiency testing (IELTS or CELBAN) as a Spanish-speaking professional. Aim for IELTS 7.0+ to be competitive for ICU positions.

3. Research provinces like Alberta and British Columbia which have high demand for critical care nurses and established pathways for Mexican healthcare professionals.

4. Connect with nursing regulators in your target province early - ICU experience is highly valued but you may need to complete bridging programs.

5. Consider reaching out to Canadian hospitals that sponsor international nurses, as your specialization is in high demand across Canada.
```

## API Technical Details

### Endpoint: `/api/suggestions`

**Method**: POST

**Request Body**:
```json
{
  "formData": {
    "fullName": "string",
    "currentCountry": "string",
    "nursingLicense": "string",
    "yearsExperience": "string",
    "specialization": "string",
    "education": "string",
    "additionalInfo": "string (optional)"
  }
}
```

**Response**:
```json
{
  "suggestions": "string (AI-generated text)",
  "success": true
}
```

**Error Response**:
```json
{
  "error": "string",
  "message": "string"
}
```

## Customization

### Modify AI Prompt

Edit `/api/suggestions.js` to customize the AI prompt:

```javascript
const prompt = `You are a career advisor specializing in international nursing careers in Canada. Based on the following nurse profile, provide 3-5 personalized suggestions...`;
```

### Change AI Model

To use a different HuggingFace model, update the model name in `/api/suggestions.js`:

```javascript
const completion = await client.chat.completions.create({
  model: "moonshotai/Kimi-K2-Instruct-0905", // Change this
  // ...
});
```

Available models: https://huggingface.co/models

### Adjust AI Parameters

Modify these settings in `/api/suggestions.js`:

```javascript
{
  max_tokens: 500,      // Max length of response
  temperature: 0.7,     // Creativity (0.0-1.0)
}
```

## Troubleshooting

### AI Suggestions Not Loading

1. **Check .env.local file exists**:
   ```bash
   cat .env.local
   # Should show: HF_TOKEN=your_token
   ```

2. **Verify HF_TOKEN is valid**:
   - Visit: https://huggingface.co/settings/tokens
   - Ensure token is active

3. **Check browser console for errors**:
   - Open DevTools (F12)
   - Look for red errors in Console tab
   - Common issue: API endpoint not found (use `npm run dev:api` not `npm run dev`)

4. **Check API is running**:
   - With `npm run dev`, you should see "🚀 API Server running on http://localhost:3001"
   - Visit: http://localhost:3001/api/suggestions with POST request to test

### AI Returns Generic Suggestions

- The AI prompt uses all form fields
- Make sure all fields are filled out completely
- More detailed "Additional Information" field = better suggestions

### Slow Response Time

- First API call may be slower (cold start)
- Subsequent calls are faster
- Production (Vercel) is faster than local development

## Production Deployment

When deployed to Vercel:
- AI suggestions work automatically
- No additional configuration needed
- Just ensure `HF_TOKEN` environment variable is set in Vercel dashboard
- API routes are automatically deployed

## Rate Limits

- HuggingFace free tier has rate limits
- Monitor usage at: https://huggingface.co/settings/billing
- Consider upgrading for production use with high traffic

