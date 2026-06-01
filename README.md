# SaaS Dashboard Platform - Interview Ready Project 🚀

A production-grade, multi-tenant SaaS dashboard platform built with cutting-edge technologies. This is the perfect portfolio project showcasing enterprise-level architecture and modern web development practices.

## ✨ Key Features

- 🔐 **Authentication**: NextAuth.js with JWT, credentials, and OAuth support
- 🏢 **Multi-tenancy**: Organization + Workspace model for ultimate flexibility
- 👥 **Role-Based Access Control**: Admin, User, Viewer roles with permissions
- 📊 **Analytics Dashboard**: Real-time charts and metrics with Recharts
- ⚡ **Real-time Data**: TanStack Query for server state, Zustand for UI state
- 🎨 **Design System**: Custom Tailwind component library with Radix UI
- 📈 **Infinite Scrolling**: Optimized table views with pagination
- ✨ **Optimistic Updates**: Instant UI feedback with automatic sync
- 📋 **Audit Logs**: Complete audit trail for compliance
- 🛠️ **Admin Panel**: User, organization, and system management
- 🚀 **Workspace Switching**: Seamless context switching between workspaces

## 📁 Project Structure

```
saas-dashboard/
├── apps/
│   ├── web/                    # Main dashboard (http://localhost:3000)
│   │   ├── src/
│   │   │   ├── app/           # Next.js 14 app router
│   │   │   │   ├── dashboard/ # Dashboard page
│   │   │   │   ├── projects/  # Projects management
│   │   │   │   ├── tasks/     # Task management
│   │   │   │   ├── team/      # Team collaboration
│   │   │   │   ├── analytics/ # Analytics views
│   │   │   │   ├── settings/  # Workspace settings
│   │   │   │   └── api/       # API routes
│   │   │   ├── components/    # React components
│   │   │   ├── hooks/         # Custom React hooks
│   │   │   ├── lib/           # Utilities & auth
│   │   │   ├── store/         # Zustand stores
│   │   │   └── styles/        # Global styles
│   │   └── next.config.js
│   │
│   └── admin/                  # Admin panel (http://localhost:3001)
│       ├── src/
│       │   ├── app/
│       │   │   ├── users/     # User management
│       │   │   ├── organizations/  # Org management
│       │   │   ├── analytics/ # System analytics
│       │   │   ├── audit-logs/# Audit trail
│       │   │   └── settings/  # System settings
│       │   └── ...
│       └── next.config.js
│
├── packages/
│   ├── ui/                    # Design system
│   │   └── src/
│   │       └── index.tsx      # Button, Card, Badge, etc
│   │
│   ├── api/                   # API client
│   │   └── src/
│   │       └── index.ts       # Typed API endpoints
│   │
│   ├── types/                 # Shared types
│   │   └── src/
│   │       └── index.ts       # User, Project, Task, etc
│   │
│   ├── db/                    # Prisma ORM
│   │   ├── prisma/
│   │   │   └── schema.prisma # Database schema
│   │   └── migrations/        # DB migrations
│   │
│   └── config/                # Shared configs
│       ├── tsconfig.json
│       └── eslint.json
│
├── docker-compose.yml         # Local dev environment
├── Dockerfile                 # Production image
├── turbo.json                 # Turborepo config
├── package.json               # Root workspace
├── QUICKSTART.md              # 5-minute setup
├── DEPLOYMENT.md              # Production guide
├── CONTRIBUTING.md            # Contribution guide
└── README.md                  # This file
```

## 🚀 Quick Start (5 minutes)

### 1. Prerequisites
- Node.js 18+ 
- pnpm 8+ (or npm 9+)
- PostgreSQL 12+ (or Docker)

### 2. Clone & Install

```bash
git clone https://github.com/yourusername/saas-dashboard.git
cd saas-dashboard
pnpm install
```

### 3. Database Setup

```bash
# Option A: Docker (recommended)
docker-compose up -d

# Option B: Manual PostgreSQL
# Create database: saas_db
# Create user: user / password
```

### 4. Environment Setup

```bash
cp apps/web/.env.example apps/web/.env.local
cp apps/admin/.env.example apps/admin/.env.local
cp packages/db/.env.example packages/db/.env
```

Edit the `.env.local` files with your configuration.

### 5. Initialize Database

```bash
cd packages/db
pnpm db:push
cd ../..
```

### 6. Start Development

```bash
pnpm dev
```

**Open in browser:**
- Dashboard: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3001](http://localhost:3001)

**Demo credentials:**
- Email: `demo@example.com`
- Password: `password`

## 📚 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - 5-minute setup guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Production deployment
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with app router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Unstyled component primitives

### State Management
- **TanStack Query** - Server state management & caching
- **Zustand** - Lightweight UI state management

### Backend & Database
- **Prisma** - ORM for database
- **PostgreSQL** - Relational database
- **NextAuth.js** - Authentication

### Visualization
- **Recharts** - React charts library

### Monorepo & Build
- **Turborepo** - Monorepo orchestration
- **pnpm** - Fast package manager
- **TypeScript** - Type checking

## 📋 What's Included

### Dashboard Features
- ✅ Multi-workspace support with switcher
- ✅ Real-time analytics dashboard with charts
- ✅ Project management system
- ✅ Task management with filters
- ✅ Team member management
- ✅ Workspace settings
- ✅ Infinite scroll tables
- ✅ Optimistic updates (add/edit/delete instantly)

### Admin Features
- ✅ System-wide user management
- ✅ Organization management
- ✅ System analytics and metrics
- ✅ Complete audit logs
- ✅ Email configuration
- ✅ Security settings
- ✅ Rate limiting configuration

### Architecture Features
- ✅ RBAC with admin/user/viewer roles
- ✅ Multi-tenant database design
- ✅ Audit trail for compliance
- ✅ Type-safe API client
- ✅ Shared design system
- ✅ Monorepo structure
- ✅ Docker support

## 🗄️ Database Schema

Key models:
- **User** - Application users
- **Organization** - Company/team container
- **Workspace** - Sub-tenant within organization
- **WorkspaceMember** - User + role in workspace
- **Project** - Project container
- **Task** - Individual tasks with assignments
- **AuditLog** - Complete audit trail
- **AnalyticsData** - Metrics storage

[View full schema](./packages/db/prisma/schema.prisma)

## 🔐 Security Features

- ✅ NextAuth.js JWT authentication
- ✅ Password hashing with bcrypt
- ✅ SQL injection prevention (Prisma)
- ✅ CORS configuration
- ✅ Rate limiting ready
- ✅ Audit logging
- ✅ Role-based access control
- ✅ Environment variable secrets

## 📊 API Design

### RESTful Endpoints
```
GET    /api/workspaces/:id
PATCH  /api/workspaces/:id
DELETE /api/workspaces/:id

GET    /api/projects?workspaceId=...
POST   /api/workspaces/:id/projects

GET    /api/tasks?projectId=...
PATCH  /api/tasks/:id
DELETE /api/tasks/:id

GET    /api/audit-logs?workspaceId=...
GET    /api/analytics/stats?workspaceId=...
```

### Typed API Client
```typescript
import { api } from '@saas/api';

// Fully typed
const projects = await api.projects.list(workspaceId);
const updated = await api.projects.update(id, { name: 'New Name' });
```

## 🎨 Component Library

Reusable components in `@saas/ui`:
- Button
- Card
- Input
- Label
- Badge
- LoadingSpinner
- EmptyState
- And more...

```typescript
import { Button, Card, Badge } from '@saas/ui';
```

## 📦 Workspace Scripts

```bash
# Development
pnpm dev              # Start all apps
pnpm build            # Build all packages

# Type & Lint
pnpm type-check       # TypeScript checking
pnpm lint             # ESLint

# Testing
pnpm test             # Run tests
pnpm test --coverage  # Coverage report

# Database
cd packages/db
pnpm db:push          # Sync schema
pnpm db:migrate       # Create migration
pnpm db:studio        # Prisma Studio GUI

# Clean
pnpm clean            # Remove node_modules & builds
```

## 🚀 Deployment

### Docker
```bash
docker build -t saas-dashboard .
docker run -p 3000:3000 -p 3001:3001 saas-dashboard
```

### Vercel (Recommended)
```bash
vercel deploy --prod
```

### Docker Compose
```bash
docker-compose up -d
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed production setup.

## 🎯 Why This Project Stands Out

1. **Enterprise Architecture** - Multi-tenant design with workspaces
2. **Full-Stack** - Frontend, backend, database, admin panel
3. **Production-Ready** - Docker, environment configs, error handling
4. **Type-Safe** - Full TypeScript across the stack
5. **Scalable** - Monorepo structure, database indexing, caching
6. **Interview-Ready** - Well-documented, clean code, best practices
7. **Feature-Complete** - Auth, RBAC, analytics, audit logs
8. **Modern Stack** - Next.js 14, React 18, TypeScript, Tailwind

## 📈 Performance

- Client-side caching: 5-minute stale time
- Database indexes on key columns
- Pagination support
- Image optimization
- Bundle size optimized
- Lighthouse score > 90 (target)

## 🧪 Testing

```bash
# Unit tests
pnpm test

# Watch mode
pnpm test --watch

# Coverage
pnpm test --coverage
```

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for:
- Development workflow
- Code style guide
- Commit conventions
- PR process
- Common tasks

## 📝 License

MIT License - feel free to use this as a portfolio project!

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## ⭐ Show Your Support

If you find this project helpful, please give it a star! ⭐

---

**Ready to impress interviewers?** This is production-grade code that demonstrates:
- Full-stack development
- System design thinking
- Database modeling
- Authentication & authorization
- UI/UX implementation
- DevOps (Docker)
- Best practices

Perfect for senior engineer roles! 🎯
