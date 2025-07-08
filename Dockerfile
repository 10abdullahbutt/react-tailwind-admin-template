# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile
COPY . .
RUN npm run build || yarn build

# Stage 2: Serve
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json package-lock.json* ./
RUN npm install --production --frozen-lockfile || yarn install --production --frozen-lockfile
EXPOSE 3000
CMD ["npx", "serve", "dist"] 