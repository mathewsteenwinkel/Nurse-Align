import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// AI Suggestions endpoint
app.post('/api/suggestions', async (req, res) => {
  try {
    const { formData } = req.body;

    if (!formData) {
      return res.status(400).json({ error: 'Form data is required' });
    }

    // Validate required fields
    if (!formData.fullName || !formData.currentCountry || !formData.nursingLicense) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        details: 'fullName, currentCountry, and nursingLicense are required' 
      });
    }

    // Initialize OpenAI client with HuggingFace router
    const client = new OpenAI({
      baseURL: "https://router.huggingface.co/v1",
      apiKey: process.env.HF_TOKEN,
    });

    // Create a contextual prompt based on the nurse's profile
    const prompt = `You are a career advisor specializing in international nursing careers in Canada. Based on the following nurse profile, provide 3-5 personalized suggestions or next steps they should consider for their Canadian nursing career journey.

Nurse Profile:
- Name: ${formData.fullName}
- Current Country: ${formData.currentCountry}
- License Type: ${formData.nursingLicense}
- Years of Experience: ${formData.yearsExperience}
- Specialization: ${formData.specialization}
- Education: ${formData.education}
${formData.additionalInfo ? `- Additional Info: ${formData.additionalInfo}` : ''}

Please provide actionable, specific suggestions tailored to their background. Keep each suggestion concise (1-2 sentences). Format your response as a numbered list.`;

    // Call the AI API
    const completion = await client.chat.completions.create({
      model: "moonshotai/Kimi-K2-Instruct-0905",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const suggestions = completion.choices[0].message.content;

    return res.status(200).json({ 
      suggestions,
      success: true 
    });

  } catch (error) {
    console.error('Error calling AI API:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      formData: req.body.formData
    });
    return res.status(500).json({ 
      error: 'Failed to generate suggestions',
      message: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 API Server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/suggestions\n`);
});

