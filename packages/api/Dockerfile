FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY packages/api/package*.json ./packages/api/

# Install dependencies
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the API
WORKDIR /app/packages/api
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 ayush

# Copy built application
COPY --from=builder --chown=ayush:nodejs /app/packages/api/dist ./dist
COPY --from=builder --chown=ayush:nodejs /app/packages/api/package*.json ./
COPY --from=builder --chown=ayush:nodejs /app/node_modules ./node_modules

USER ayush

EXPOSE 3000

ENV PORT 3000

CMD ["node", "dist/index.js"]
