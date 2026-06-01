# Setup & Deployment Guide

## Local Development Setup

### Prerequisites

- Node.js 18+ 
- pnpm 8+ (or npm 9+)
- PostgreSQL 12+
- Docker & Docker Compose (optional, for containerized setup)

### Step 1: Install Dependencies

```bash
# Install pnpm globally (if not already installed)
npm install -g pnpm

# Install dependencies for all packages
pnpm install
```

### Step 2: Setup Database

```bash
# Using Docker Compose (recommended)
docker-compose up -d

# Or manually setup PostgreSQL
# Create database: saas_db
# Create user: user with password: password
```

### Step 3: Configure Environment Variables

```bash
# Copy example env files
cp apps/web/.env.example apps/web/.env.local
cp apps/admin/.env.example apps/admin/.env.local
cp packages/db/.env.example packages/db/.env

# Edit the files and set your configuration:
# - Database URL
# - NextAuth secret (generate: openssl rand -base64 32)
# - API keys (Claude, OAuth, etc)
```

### Step 4: Setup Database Schema

```bash
# Generate Prisma client
cd packages/db
pnpm generate

# Run migrations
pnpm db:push

# Optionally view data with Prisma Studio
pnpm db:studio
```

### Step 5: Build Packages

```bash
# Build all packages
pnpm build

# Or build specific packages
cd packages/ui && pnpm build
cd packages/api && pnpm build
cd packages/types && pnpm build
```

### Step 6: Start Development Servers

```bash
# Start all apps in development mode
pnpm dev

# Or run specific apps
cd apps/web && pnpm dev      # Dashboard on http://localhost:3000
cd apps/admin && pnpm dev    # Admin panel on http://localhost:3001
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t saas-dashboard:latest .
```

### Run with Docker Compose

```bash
# Build and start all services
docker-compose up --build

# Run in background
docker-compose up -d

# Stop services
docker-compose down
```

## Production Deployment

### Environment Configuration

Set the following environment variables for production:

```env
NODE_ENV=production
NEXTAUTH_SECRET=<generate-random-secret>
NEXTAUTH_URL=https://yourdomain.com
DATABASE_URL=postgresql://prod_user:prod_password@db-host:5432/saas_db
NEXT_PUBLIC_API_URL=https://api.yourdomain.com

# Optional integrations
CLAUDE_API_KEY=<your-api-key>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```

### Deployment Options

#### Vercel (Recommended for Next.js)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy:

```bash
vercel deploy --prod
```

#### Docker to Cloud (AWS, GCP, Azure)

```bash
# Build image
docker build -t saas-dashboard:latest .

# Push to registry (ECR, GCR, ACR)
docker push your-registry/saas-dashboard:latest

# Deploy using container orchestration (ECS, K8s, etc)
```

#### Traditional Server (VPS)

```bash
# SSH into server
ssh user@your-server.com

# Clone repository
git clone https://github.com/yourusername/saas-dashboard.git
cd saas-dashboard

# Setup environment
cp apps/web/.env.example apps/web/.env.local
cp apps/admin/.env.example apps/admin/.env.local

# Install dependencies
pnpm install

# Build
pnpm build

# Start with PM2
pm2 start "pnpm dev" --name "saas-dashboard"
```

## Database Migrations

### Generate Migration

```bash
cd packages/db

# Make changes to schema.prisma

# Generate migration
pnpm db:migrate

# Or push directly without migration files
pnpm db:push
```

### Reset Database (Development Only)

```bash
cd packages/db
pnpm db:push --force-reset
```

## Type Checking

```bash
# Type check all packages
pnpm type-check

# Watch mode
pnpm type-check -- --watch
```

## Linting

```bash
# Lint all packages
pnpm lint

# Fix linting issues
pnpm lint -- --fix
```

## Testing

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test -- --watch

# Coverage report
pnpm test -- --coverage
```

## Performance Optimization

### Build Analysis

```bash
# Analyze bundle size
cd apps/web
npm run build:analyze
```

### Database Indexing

Key indexes are already configured in `packages/db/prisma/schema.prisma`:
- User email (unique)
- Organization slug (unique)
- Workspace organization + slug (unique)
- WorkspaceMember userId + workspaceId (unique)
- Project workspaceId
- Task projectId & assigneeId
- AuditLog workspaceId, userId, timestamp

### Caching Strategy

- TanStack Query: Client-side caching with 5-minute stale time
- Browser: Static assets cached for 1 year
- Database: Connection pooling via PgBouncer recommended

## Monitoring & Logging

### Application Logs

```bash
# View logs
docker logs saas-dashboard

# With tail
docker logs -f saas-dashboard
```

### Database Monitoring

```bash
# Connect to database
psql postgresql://user:password@localhost:5432/saas_db

# Check connection count
SELECT count(*) FROM pg_stat_activity;

# Check slow queries (if configured)
SELECT * FROM pg_stat_statements WHERE mean_exec_time > 100;
```

## Troubleshooting

### Issue: Port already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
next dev --port 3002
```

### Issue: Database connection error

```bash
# Check PostgreSQL is running
docker ps | grep postgres

# Verify connection string
psql $DATABASE_URL

# Reset connection
docker-compose restart postgres
```

### Issue: Module not found

```bash
# Rebuild packages
pnpm build

# Clear cache
rm -rf node_modules
rm -rf .next
pnpm install
pnpm build
```

### Issue: Type errors

```bash
# Regenerate Prisma client
cd packages/db
pnpm generate

# Type check
pnpm type-check
```

## Performance Monitoring

### Key Metrics to Track

- **API Response Time**: Target < 200ms
- **Database Query Time**: Target < 50ms  
- **Page Load Time**: Target < 2s
- **Lighthouse Score**: Target > 90
- **Error Rate**: Target < 0.1%

### Optimization Tips

1. Enable database query optimization
2. Use CDN for static assets
3. Implement caching headers
4. Compress API responses
5. Lazy load components
6. Optimize images

## Security

### Best Practices

- ✅ Use HTTPS everywhere
- ✅ Validate all inputs
- ✅ Use prepared statements (Prisma handles this)
- ✅ Keep dependencies updated
- ✅ Implement rate limiting
- ✅ Use environment variables for secrets
- ✅ Enable CORS properly
- ✅ Implement audit logging
- ✅ Use strong authentication

### Update Dependencies

```bash
pnpm update --latest
pnpm audit
pnpm audit --fix
```

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [NextAuth.js Documentation](https://next-auth.js.org/)

---

For issues or questions, check the GitHub Issues or create a new discussion.
