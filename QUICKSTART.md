# Quick Start Guide

## 🚀 Get Up and Running in 2 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variable
Create `.env.local` file:
```bash
echo "HF_TOKEN=your_huggingface_token_here" > .env.local
```
> Get your token from https://huggingface.co/settings/tokens

### 3. Start Development
```bash
npm run dev
```

You'll see:
```
[0] 🚀 API Server running on http://localhost:3001
[1] VITE v5.4.19  ready in XXX ms
[1] ➜  Local:   http://localhost:8080/
```

### 4. Visit the App
Open your browser: **http://localhost:8080**

## ✨ How It Works

**In Development:**
- Vite runs frontend on port 8080
- Express server runs API on port 3001
- Vite proxies `/api/*` requests to port 3001

**In Production (Vercel):**
- Frontend is served as static files
- `/api/suggestions` runs as a serverless function
- No Express server needed

## 🧪 Test the AI Feature

1. Go to http://localhost:8080
2. Click "Get Started" → "Create Profile"
3. Fill out the form with sample data:
   - Name: Jane Doe
   - Country: United States
   - License: RN
   - Experience: 3-5 years
   - Specialization: ICU
   - Education: Bachelor's
4. Click "Submit Application"
5. **Watch the AI suggestions load automatically!** 🤖

## 📁 Key Files

| File | Purpose |
|------|---------|
| `server.js` | Local development API server |
| `api/suggestions.js` | Vercel production serverless function |
| `src/pages/NextSteps.tsx` | Page that displays AI suggestions |
| `.env.local` | Your HF_TOKEN (gitignored) |
| `vite.config.ts` | Proxy configuration |

## 🐛 Troubleshooting

### Port Already in Use
If you see "Port 8080 is in use":
```bash
# Kill the process
lsof -ti:8080 | xargs kill -9
# Or Vite will auto-select 8081
```

### API Not Working
Check that both servers are running:
```bash
# You should see TWO processes
# [0] API Server on :3001
# [1] Vite on :8080
```

### HF_TOKEN Error
```bash
# Verify .env.local exists
cat .env.local
# Should show: HF_TOKEN=hf_...
```

## 🚢 Deploy to Vercel

1. Push to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to https://vercel.com/new

3. Import your repository

4. Add environment variable:
   - Name: `HF_TOKEN`
   - Value: `your_huggingface_token_here`

5. Deploy! 🎉

Vercel will:
- Build your Vite app
- Deploy static files
- Auto-configure the `/api/suggestions` endpoint
- Everything just works!

## 📝 Development Tips

### Run Only Frontend
```bash
npm run dev:vite
```
(AI features won't work)

### Run Only API
```bash
npm run dev:api
```
(Access API directly at http://localhost:3001)

### Run Both Together
```bash
npm run dev
```
(Recommended - full experience)

## 🎯 Next Steps

- Check out [USAGE.md](./USAGE.md) for detailed feature documentation
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment guide
- Read [README.md](./README.md) for full project documentation

Happy coding! 🎉

