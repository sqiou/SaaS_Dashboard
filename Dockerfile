FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy monorepo files
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build all packages
RUN pnpm build

# Expose ports
EXPOSE 3000 3001

# Start both apps
CMD ["pnpm", "dev"]
