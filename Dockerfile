# ------------------------
# 1. Builder stage
# ------------------------
FROM node:22.19.0-alpine3.21 AS builder

RUN apk add --no-cache libc6-compat python3 make g++

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /home/node/app

# Copy package.json + lockfile
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# ------------------------
# 2. Runtime stage
# ------------------------
FROM node:22.19.0-alpine3.21

# Install PM2 (pinned version)
RUN npm install -g pm2@5.4.2

# Create app folder
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
USER node

# Copy built files and node_modules
COPY --chown=node:node --from=builder /home/node/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /home/node/app ./

# Set production environment
ENV NODE_ENV=production

EXPOSE 4000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:4000/health || exit 1

# Start app using PM2
CMD ["pm2-runtime", "ecosystem.config.js"]
