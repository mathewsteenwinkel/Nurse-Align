# Deploying to Vercel

This guide will help you deploy the Nurse-Align application to Vercel with AI-powered suggestions.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. A HuggingFace API token (get it from https://huggingface.co/settings/tokens)

## Deployment Steps

### 1. Push your code to GitHub

```bash
git add .
git commit -m "Add AI suggestions feature"
git push origin main
```

### 2. Import Project to Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel will automatically detect it as a Vite project

### 3. Configure Environment Variables

Before deploying, add your environment variable:

1. In the Vercel project settings, go to "Environment Variables"
2. Add the following variable:
   - **Name**: `HF_TOKEN`
   - **Value**: Your HuggingFace API token (e.g., `hf_xxxxxxxxxxxxxxxxxxxxx`)
   - **Environments**: Select all (Production, Preview, Development)

### 4. Deploy

Click "Deploy" and Vercel will:
- Install dependencies
- Build your Vite application
- Deploy the frontend and API routes

## How It Works

### Frontend (Vite + React)
- Built to static files in the `dist` directory
- Served by Vercel's CDN

### API Routes (Serverless Functions)
- `/api/suggestions.js` runs as a Node.js serverless function
- Automatically handles requests to `/api/suggestions`
- Uses the `HF_TOKEN` environment variable to authenticate with HuggingFace

### AI Integration
- Uses OpenAI SDK with HuggingFace router
- Model: `moonshotai/Kimi-K2-Instruct-0905`
- Generates personalized career suggestions based on nurse profiles

## Local Development

To test the full application with AI features:

1. Make sure you have `.env.local` with your `HF_TOKEN` in the project root
2. Run: `npm run dev`
3. Visit: `http://localhost:8080`

This starts both the Vite frontend and a local API server that mimics the production serverless function.

## Troubleshooting

### API Returns 500 Error
- Check that your `HF_TOKEN` is valid
- Check Vercel function logs in the dashboard

### Environment Variables Not Working
- Make sure you added them in Vercel dashboard
- Redeploy after adding environment variables

### CORS Issues
- The API routes are served from the same domain, so CORS shouldn't be an issue
- If you see CORS errors, check the browser console for details

## Costs

- **Vercel**: Free tier includes generous limits for hobby projects
- **HuggingFace API**: Check pricing at https://huggingface.co/pricing
  - Free tier available with rate limits
  - Pay-as-you-go for higher usage

## Production Checklist

- [ ] Environment variables configured in Vercel
- [ ] HuggingFace token is valid and has appropriate permissions
- [ ] Test the AI suggestions feature after deployment
- [ ] Monitor usage in HuggingFace dashboard
- [ ] Set up error tracking (optional: Sentry, LogRocket, etc.)

