# Quick Start Guide

Get Ayush running in 5 minutes!

## 🚀 Fastest Way (Using Hosted Services)

### 1. Deploy Backend to Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)

```bash
# Or manually:
railway login
railway init
railway add postgresql
railway add redis
cd packages/api && railway up
```

### 2. Deploy Frontend to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kautilyaaiteam-rgb/ayush-ai-platform)

```bash
# Or manually:
cd apps/web
vercel --prod
```

### 3. Set Environment Variables

**Railway (Backend):**
```bash
railway variables set OPENAI_API_KEY=sk-...
railway variables set DATABASE_URL=postgresql://...
railway variables set REDIS_URL=redis://...
```

**Vercel (Frontend):**
```bash
vercel env add API_URL
# Enter your Railway API URL
```

### 4. Done! 🎉

Your Ayush instance is live!

---

## 💻 Local Development

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 7+

### Step 1: Clone & Install

```bash
git clone https://github.com/kautilyaaiteam-rgb/ayush-ai-platform.git
cd ayush-ai-platform
npm install
```

### Step 2: Environment Setup

```bash
cp .env.example .env
```

Edit `.env`:
```env
# Required
DATABASE_URL=postgresql://localhost:5432/ayush
REDIS_URL=redis://localhost:6379
OPENAI_API_KEY=sk-...

# Optional (add as needed)
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_AI_API_KEY=...
```

### Step 3: Database Setup

```bash
# Start PostgreSQL
# Create database
createdb ayush

# Run migrations
cd packages/api
npm run migrate
```

### Step 4: Start Services

```bash
# Terminal 1: API Server
cd packages/api
npm run dev
# Running on http://localhost:3000

# Terminal 2: Web App
cd apps/web
npm run dev
# Running on http://localhost:3001
```

### Step 5: Open Browser

Visit: http://localhost:3001

---

## 🐳 Docker (Easiest Local Setup)

### One Command Setup

```bash
docker-compose up -d
```

That's it! Everything runs in containers.

Access:
- Web: http://localhost:3001
- API: http://localhost:3000
- Database: localhost:5432
- Redis: localhost:6379

---

## 📱 Mobile Development

### iOS

```bash
cd apps/mobile
npm install
npx pod-install
npm run ios
```

### Android

```bash
cd apps/mobile
npm install
npm run android
```

---

## 🔑 Getting API Keys

### OpenAI (Required)
1. Go to https://platform.openai.com
2. Create account
3. Generate API key
4. Add to `.env`: `OPENAI_API_KEY=sk-...`

### Anthropic (Optional)
1. Go to https://console.anthropic.com
2. Create account
3. Generate API key
4. Add to `.env`: `ANTHROPIC_API_KEY=sk-ant-...`

### Google AI (Optional)
1. Go to https://makersuite.google.com
2. Create API key
3. Add to `.env`: `GOOGLE_AI_API_KEY=...`

---

## ✅ Verify Installation

### Check API Health
```bash
curl http://localhost:3000/health
# Should return: {"status":"ok"}
```

### Check Database
```bash
psql $DATABASE_URL -c "SELECT COUNT(*) FROM users;"
```

### Check Redis
```bash
redis-cli ping
# Should return: PONG
```

---

## 🎯 First Steps

### 1. Create Account
- Open http://localhost:3001
- Click "Sign Up"
- Enter email & password

### 2. Try AI Chat
- Click "New Chat"
- Type a message
- Get AI response

### 3. Generate Image
- Click "Generate Image"
- Enter prompt
- View generated image

### 4. Add Integration
- Go to Settings
- Click "Integrations"
- Connect your apps

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3002 npm run dev
```

### Database Connection Error
```bash
# Check PostgreSQL is running
pg_isready

# Check connection string
echo $DATABASE_URL
```

### Redis Connection Error
```bash
# Check Redis is running
redis-cli ping

# Start Redis
redis-server
```

### Module Not Found
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Next Steps

- [Architecture Guide](./ARCHITECTURE.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Features List](./FEATURES.md)
- [API Documentation](./API.md)
- [Contributing](../CONTRIBUTING.md)

---

## 💬 Get Help

- **Discord**: https://discord.gg/ayush
- **GitHub Issues**: https://github.com/kautilyaaiteam-rgb/ayush-ai-platform/issues
- **Email**: support@ayush.ai

---

## 🎉 You're Ready!

Start building with Ayush! Check out the [Features](./FEATURES.md) to see what you can do.
