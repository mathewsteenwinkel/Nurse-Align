# Nurse Align

A platform connecting international nurses with Canadian healthcare opportunities, featuring AI-powered career suggestions.

## Features

- 🏥 Nurse profile creation and management
- 🤖 AI-powered personalized career recommendations (using HuggingFace API)
- 🎯 Job matching based on specialization and experience
- 📋 Credential guidance for international nurses
- 🌍 Country-specific pathways (US, Mexico, and other countries)

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router v6
- **AI**: OpenAI SDK with HuggingFace Router (Kimi-K2-Instruct model)
- **Deployment**: Vercel (Frontend + Serverless Functions)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- HuggingFace API token ([get one here](https://huggingface.co/settings/tokens))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Nurse-Align
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the project root:
```bash
HF_TOKEN=your_huggingface_token_here
```

### Development

Run the development server with API:
```bash
npm run dev
```

This will start:
- **Vite dev server** on http://localhost:8080 (frontend)
- **API server** on http://localhost:3001 (backend)

The frontend automatically proxies `/api/*` requests to the API server.

Visit: **http://localhost:8080** to use the app with full AI functionality.

## Project Structure

```
Nurse-Align/
├── api/                    # Vercel serverless functions (production)
│   └── suggestions.js      # AI suggestions endpoint
├── server.js               # Local development API server
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   └── NavLink.tsx
│   ├── pages/             # Route pages
│   │   ├── Home.tsx
│   │   ├── SignUp.tsx
│   │   ├── NextSteps.tsx
│   │   ├── Jobs.tsx
│   │   └── Credentials.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── services/          # API services
├── public/                # Static assets
├── vercel.json           # Vercel deployment config
└── vite.config.ts        # Vite configuration
```

## How AI Suggestions Work

1. User fills out the sign-up form with their nursing profile
2. Upon submission, they're redirected to the NextSteps page
3. The page automatically calls `/api/suggestions` endpoint
4. The serverless function sends profile data to HuggingFace API
5. AI generates 3-5 personalized career recommendations
6. Suggestions are displayed before the job listings

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Vercel.

Quick steps:
1. Push code to GitHub
2. Import project to Vercel
3. Add `HF_TOKEN` environment variable
4. Deploy!

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `HF_TOKEN` | HuggingFace API token | Yes |

## API Endpoints

### POST `/api/suggestions`
Generates AI-powered career suggestions for a nurse profile.

**Request Body:**
```json
{
  "formData": {
    "fullName": "Jane Smith",
    "currentCountry": "USA",
    "nursingLicense": "RN",
    "yearsExperience": "5-10",
    "specialization": "ICU",
    "education": "BSN",
    "additionalInfo": "..."
  }
}
```

**Response:**
```json
{
  "suggestions": "1. Complete NNAS...\n2. Focus on...",
  "success": true
}
```

## Scripts

- `npm run dev` - Start development (Vite + API server)
- `npm run dev:vite` - Start Vite only (no API)
- `npm run dev:api` - Start API server only
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue on GitHub.
