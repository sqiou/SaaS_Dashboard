# Quick Start Guide

Get the SaaS Dashboard running locally in 5 minutes.

## TL;DR

```bash
# 1. Install dependencies
pnpm install

# 2. Setup database (Docker Compose)
docker-compose up -d

# 3. Setup environment
cp apps/web/.env.example apps/web/.env.local
cp apps/admin/.env.example apps/admin/.env.local
cp packages/db/.env.example packages/db/.env

# 4. Initialize database
cd packages/db && pnpm db:push && cd ../..

# 5. Start development
pnpm dev
```

Done! Open:
- Dashboard: http://localhost:3000
- Admin: http://localhost:3001

## Demo Credentials

**Email:** demo@example.com  
**Password:** password

## Project Structure

```
├── apps/
│   ├── web/          # Main dashboard app
│   └── admin/        # Admin panel app
├── packages/
│   ├── ui/           # Shared UI components
│   ├── api/          # API client & utilities
│   ├── types/        # Shared TypeScript types
│   ├── db/           # Prisma schema
│   └── config/       # Shared configs
├── docker-compose.yml
└── turbo.json
```

## Common Commands

```bash
# Development
pnpm dev              # Start all apps
pnpm build            # Build all packages
pnpm type-check       # Type check
pnpm lint             # Lint code
pnpm test             # Run tests

# Database
cd packages/db
pnpm db:push          # Sync schema to DB
pnpm db:migrate       # Create migration
pnpm db:studio        # Open Prisma Studio (GUI)

# Clean up
pnpm clean            # Delete node_modules and builds
```

## Features Showcase

### Dashboard App (`apps/web`)
- ✅ Multi-workspace support
- ✅ Real-time task management
- ✅ Analytics dashboard
- ✅ Team collaboration
- ✅ Role-based access

### Admin Panel (`apps/admin`)
- ✅ User management
- ✅ Organization management
- ✅ System analytics
- ✅ Audit logs
- ✅ Settings management

### Shared Packages
- **@saas/ui**: Reusable React components
- **@saas/api**: Typed API client
- **@saas/types**: Shared type definitions
- **@saas/db**: Prisma ORM setup

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **State**: TanStack Query, Zustand
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL, Prisma
- **Auth**: NextAuth.js
- **Charts**: Recharts
- **Monorepo**: Turborepo

## Next Steps

1. **Explore the UI**: Visit http://localhost:3000
2. **Check the admin panel**: Visit http://localhost:3001
3. **View the schema**: `cd packages/db && pnpm db:studio`
4. **Read the docs**: Check DEPLOYMENT.md for detailed setup

## Environment Variables

Key variables to configure:

```env
# Authentication
NEXTAUTH_SECRET=generate-random-string
NEXTAUTH_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/saas_db

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Optional integrations
CLAUDE_API_KEY=your-api-key
GOOGLE_CLIENT_ID=your-client-id
```

## Troubleshooting

### Port 3000 already in use?
```bash
next dev --port 3002
```

### Database not connecting?
```bash
docker-compose restart postgres
docker-compose logs postgres
```

### Modules not found?
```bash
pnpm install
pnpm build
```

### Type errors?
```bash
cd packages/db && pnpm generate
pnpm type-check
```

## Performance Tips

- Database queries cached for 5 minutes by default
- Static assets cached for 1 year
- Use Recharts for real-time charts
- Implement pagination for large lists
- Optimize images with Next.js Image component

## Next: Authentication

The project uses NextAuth.js with credentials provider. To add OAuth:

1. Get client credentials from Google/GitHub
2. Add to environment variables
3. Configure in `apps/web/src/lib/auth.ts`

See [NextAuth.js Docs](https://next-auth.js.org/providers/google) for details.

## Need Help?

- Check the main [README.md](./README.md)
- Read [DEPLOYMENT.md](./DEPLOYMENT.md) for production setup
- Review the [Contributing Guide](./CONTRIBUTING.md)

Happy coding! 🚀
