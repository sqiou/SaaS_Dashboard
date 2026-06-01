# SaaS Dashboard Platform

A production-grade, multi-tenant SaaS dashboard platform built with cutting-edge technologies. This is a complete, interview-ready project showcasing enterprise-level architecture and modern web development practices.

## 🎯 Quick Start (5 Minutes)

### Prerequisites
- Node.js 18+
- pnpm 8+ (or npm 9+)
- PostgreSQL 12+ (or Docker)

### Installation & Running

```bash
# 1. Install dependencies
pnpm install

# 2. Setup database with Docker
docker-compose up -d

# 3. Setup environment files
cp apps/web/.env.example apps/web/.env.local
cp apps/admin/.env.example apps/admin/.env.local
cp packages/db/.env.example packages/db/.env

# 4. Initialize database
cd packages/db && pnpm db:push && cd ../..

# 5. Start development servers
pnpm dev
```

Then open:
- **Dashboard**: http://localhost:3000
- **Admin Panel**: http://localhost:3001


## 📊 Project Overview

This SaaS platform includes two fully-functional Next.js applications:

### 🌐 Web Dashboard (Port 3000)
- Multi-workspace support with workspace switching
- Real-time task management and project tracking
- Analytics dashboard with charts and metrics
- Team collaboration features with role-based access
- Responsive UI with Tailwind CSS

### 🔧 Admin Panel (Port 3001)
- User management and role assignment
- Organization and workspace administration
- System analytics and monitoring
- Comprehensive audit logs for compliance
- System settings and configuration

## ✨ Features

### Authentication & Authorization
- Email/password authentication with NextAuth.js
- JWT token-based sessions with secure httpOnly cookies
- Role-based access control (Admin, User, Viewer)
- Session management and logout functionality
- Protected routes with middleware

### Multi-Tenancy
- Organization and Workspace models for flexibility
- Workspace members with granular role permissions
- Seamless workspace switching
- Database-level tenant isolation
- User invitation system with pending invitations

### Dashboard Features
- **Projects**: Create, edit, delete, and archive projects
- **Tasks**: Manage tasks with status, priority, and due dates
- **Teams**: Invite members, assign roles, manage permissions
- **Analytics**: Real-time charts and metrics using Recharts
- **Workspace Settings**: Configure workspace preferences
- **Audit Logs**: Complete audit trail for all actions

### Admin Features
- **System Dashboard**: Monitor organizations, users, and sessions
- **User Management**: View and manage all users
- **Organizations**: Manage organizational data
- **Analytics**: System-wide analytics and health monitoring
- **Settings**: Configure system-wide preferences

## 🏗️ Architecture

### Tech Stack

**Frontend**
- Next.js 14 with App Router
- React 18 with TypeScript
- Tailwind CSS for styling
- TanStack Query for server state management
- Zustand for lightweight UI state
- Recharts for analytics

**Backend**
- Next.js API Routes
- Prisma ORM for database access
- NextAuth.js for authentication
- PostgreSQL database

**Development**
- Turbo for monorepo management
- pnpm for package management
- TypeScript for type safety
- ESLint for code quality

### Project Structure

```
saas-dashboard/
├── apps/
│   ├── web/                          # Main dashboard
│   │   ├── src/
│   │   │   ├── app/                  # Next.js 14 app router
│   │   │   │   ├── dashboard/        # Dashboard page
│   │   │   │   ├── projects/         # Projects management
│   │   │   │   ├── tasks/            # Task management
│   │   │   │   ├── team/             # Team collaboration
│   │   │   │   ├── analytics/        # Analytics views
│   │   │   │   ├── settings/         # Workspace settings
│   │   │   │   └── api/              # API routes
│   │   │   ├── components/           # React components
│   │   │   ├── hooks/                # Custom React hooks
│   │   │   ├── lib/                  # Utilities & auth
│   │   │   ├── store/                # Zustand stores
│   │   │   └── styles/               # Global styles
│   │   ├── next.config.js
│   │   ├── tailwind.config.js
│   │   ├── postcss.config.js
│   │   └── tsconfig.json
│   │
│   └── admin/                        # Admin panel
│       ├── src/
│       │   ├── app/
│       │   │   ├── users/            # User management
│       │   │   ├── organizations/    # Org management
│       │   │   ├── analytics/        # System analytics
│       │   │   ├── audit-logs/       # Audit trail
│       │   │   └── settings/         # System settings
│       │   └── ...
│       ├── next.config.js
│       ├── tailwind.config.js
│       ├── postcss.config.js
│       └── tsconfig.json
│
├── packages/
│   ├── ui/                           # Design system
│   │   ├── src/
│   │   │   └── index.tsx             # Shared components
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── api/                          # API client
│   │   ├── src/
│   │   │   └── index.ts              # Typed API endpoints
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── types/                        # Shared types
│   │   ├── src/
│   │   │   └── index.ts              # User, Project, Task types
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── db/                           # Prisma ORM
│   │   ├── prisma/
│   │   │   └── schema.prisma         # Database schema
│   │   ├── migrations/               # DB migrations
│   │   ├── package.json
│   │   └── .env.example
│   │
│   └── config/                       # Shared configs
│       ├── tsconfig.json
│       ├── eslint.json
│       └── package.json
│
├── docker-compose.yml                # Docker setup
├── Dockerfile                        # Production image
├── turbo.json                        # Turborepo config
├── package.json                      # Root workspace
├── pnpm-workspace.yaml               # pnpm workspaces
└── README.md                         # This file
```

### Database Schema

The project uses Prisma ORM with the following models:

- **User**: Authentication and profile
- **Organization**: Top-level tenant container
- **Workspace**: Sub-tenant for organizations
- **Project**: Workspace project/container
- **Task**: Individual work items with status and priority
- **AuditLog**: Complete audit trail for compliance
- **Session**: NextAuth sessions
- Plus supporting models for members and relationships

## 📦 Available Commands

### Development
```bash
pnpm dev              # Start all development servers
pnpm build            # Build all packages
pnpm type-check       # Run TypeScript type checking
pnpm lint             # Lint all code
pnpm test             # Run tests
pnpm clean            # Clean all node_modules and builds
```

### Database
```bash
cd packages/db

pnpm db:push          # Sync Prisma schema to database
pnpm db:migrate       # Create and run migrations
pnpm db:studio        # Open Prisma Studio (visual DB manager)
pnpm generate         # Generate Prisma client
```

### Workspace-specific
```bash
cd apps/web
pnpm dev              # Start web dashboard only

cd apps/admin
pnpm dev              # Start admin panel only

cd packages/ui
pnpm build            # Build UI component library
```

### Dependencies Issues
```bash
# Clean and reinstall
pnpm clean
pnpm install

# Clear turbo cache
pnpm exec turbo prune --scope=@saas/web --docker
```

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests: `pnpm test`
4. Type-check: `pnpm type-check`
5. Lint: `pnpm lint`
6. Commit: `git commit -am 'Add your feature'`
7. Push: `git push origin feature/your-feature`
8. Open a Pull Request

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma ORM](https://www.prisma.io/docs/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NextAuth.js](https://next-auth.js.org/)
- [Turborepo](https://turbo.build/repo/docs)
- [Zustand](https://zustand-demo.vercel.app/)
