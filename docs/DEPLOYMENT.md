# Deployment Guide

## Prerequisites

- Node.js 18+
- Python 3.10+
- PostgreSQL 14+
- Redis 7+
- Git

## Environment Setup

### 1. Clone Repository

```bash
git clone https://github.com/kautilyaaiteam-rgb/ayush-ai-platform.git
cd ayush-ai-platform
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install all workspace dependencies
npm run install:all
```

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your credentials:
- Database URLs
- AI API keys
- Storage credentials
- Authentication secrets

## Local Development

### Start All Services

```bash
# Terminal 1: Start API server
cd packages/api
npm run dev

# Terminal 2: Start web app
cd apps/web
npm run dev

# Terminal 3: Start AI gateway (optional)
cd packages/ai-gateway
python -m uvicorn main:app --reload
```

Access:
- Web App: http://localhost:3001
- API: http://localhost:3000
- API Docs: http://localhost:3000/api/v1

## Production Deployment

### Deploy to Railway (Backend)

1. **Create Railway Project**
```bash
railway login
railway init
```

2. **Add PostgreSQL Database**
```bash
railway add postgresql
```

3. **Add Redis**
```bash
railway add redis
```

4. **Deploy API**
```bash
cd packages/api
railway up
```

5. **Set Environment Variables**
```bash
railway variables set OPENAI_API_KEY=sk-...
railway variables set ANTHROPIC_API_KEY=sk-ant-...
# Add all required variables
```

### Deploy to Vercel (Frontend)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy Web App**
```bash
cd apps/web
vercel --prod
```

3. **Configure Environment Variables**
- Go to Vercel Dashboard
- Add all required environment variables
- Redeploy

### Deploy to Supabase (Database)

1. **Create Supabase Project**
- Go to https://supabase.com
- Create new project
- Note your project URL and keys

2. **Run Migrations**
```bash
cd packages/api
npx supabase db push
```

3. **Set up Row Level Security**
```sql
-- Run the RLS policies from schema.sql
```

## Docker Deployment (Alternative)

### Build Images

```bash
# Build API image
docker build -t ayush-api -f packages/api/Dockerfile .

# Build web image
docker build -t ayush-web -f apps/web/Dockerfile .
```

### Run with Docker Compose

```bash
docker-compose up -d
```

## Monitoring Setup

### Sentry (Error Tracking)

1. Create Sentry project
2. Add DSN to environment variables
3. Initialize in app:

```typescript
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

### Analytics

Add analytics tracking:
- Google Analytics
- Mixpanel
- PostHog

## SSL/TLS Setup

### Vercel (Automatic)
- SSL certificates automatically provisioned
- Custom domains supported

### Railway (Automatic)
- SSL certificates automatically provisioned
- Custom domains supported

## Custom Domain Setup

### Vercel
1. Go to project settings
2. Add custom domain
3. Update DNS records

### Railway
1. Go to project settings
2. Add custom domain
3. Update DNS records

## Backup Strategy

### Database Backups
```bash
# Automated daily backups
railway backup create

# Manual backup
pg_dump $DATABASE_URL > backup.sql
```

### File Storage Backups
- S3 versioning enabled
- Cross-region replication
- Lifecycle policies

## Scaling

### Horizontal Scaling
- Railway: Increase replicas
- Vercel: Automatic scaling

### Vertical Scaling
- Railway: Upgrade plan
- Database: Increase resources

## Health Checks

### API Health Check
```bash
curl https://api.ayush.ai/health
```

### Database Health
```bash
railway run pg_isready
```

## Rollback Procedure

### Railway
```bash
railway rollback
```

### Vercel
```bash
vercel rollback
```

## Troubleshooting

### Common Issues

**Build Failures**
- Check Node.js version
- Clear node_modules and reinstall
- Check environment variables

**Database Connection Issues**
- Verify DATABASE_URL
- Check firewall rules
- Verify SSL settings

**API Errors**
- Check logs: `railway logs`
- Verify environment variables
- Check rate limits

## Performance Optimization

### CDN Setup
- Cloudflare for static assets
- Image optimization
- Caching headers

### Database Optimization
- Add indexes
- Query optimization
- Connection pooling

### API Optimization
- Response caching
- Compression
- Rate limiting

## Security Checklist

- [ ] Environment variables secured
- [ ] SSL/TLS enabled
- [ ] Rate limiting configured
- [ ] CORS properly configured
- [ ] API keys rotated regularly
- [ ] Database backups automated
- [ ] Monitoring alerts set up
- [ ] Security headers configured
- [ ] Input validation enabled
- [ ] SQL injection prevention

## Cost Monitoring

### Set up Billing Alerts
- Railway: Set spending limits
- Vercel: Monitor usage
- AI APIs: Set budget alerts
- Database: Monitor storage

## Support

- Documentation: https://docs.ayush.ai
- Discord: https://discord.gg/ayush
- Email: support@ayush.ai
