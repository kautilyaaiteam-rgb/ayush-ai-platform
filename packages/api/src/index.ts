import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.get('/api/v1', (req, res) => {
  res.json({
    name: 'Ayush API',
    version: '0.1.0',
    endpoints: {
      auth: '/api/v1/auth',
      ai: '/api/v1/ai',
      users: '/api/v1/users',
      integrations: '/api/v1/integrations',
    },
  });
});

// AI Routes
app.post('/api/v1/ai/chat', async (req, res) => {
  try {
    const { message, model = 'gpt-4' } = req.body;
    
    // TODO: Implement AI gateway
    res.json({
      response: 'AI response will be implemented here',
      model,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Ayush API running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
});

export default app;
