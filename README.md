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

### Demo Credentials
- **Email**: demo@example.com
- **Password**: password

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

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
# Push to GitHub
git push origin main

# Connect repo to Vercel
# - Web app: apps/web
# - Admin app: apps/admin
# Set environment variables in Vercel dashboard
# Deploy!
```

### Docker Deployment

```bash
# Build Docker image
docker build -t saas-dashboard:latest .

# Run with Docker Compose (includes PostgreSQL)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Environment Variables

Create `.env.local` files in `apps/web`, `apps/admin`, and `packages/db`:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/saas_db

# NextAuth
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

Generate a secure NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

## 🏃 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 or 3001
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

### Database Connection Issues
```bash
# Check if PostgreSQL is running
docker-compose ps

# Restart services
docker-compose restart

# Reset database
cd packages/db
pnpm db:push --force-reset
```

### Dependencies Issues
```bash
# Clean and reinstall
pnpm clean
pnpm install

# Clear turbo cache
pnpm exec turbo prune --scope=@saas/web --docker
```

## 📚 Code Examples

### Creating a Task API Endpoint

```typescript
// apps/web/src/app/api/tasks/route.ts
import { prisma } from '@saas/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  const task = await prisma.task.create({
    data: {
      title: body.title,
      projectId: body.projectId,
      priority: body.priority,
      dueDate: body.dueDate,
    },
  });

  return NextResponse.json(task);
}
```

### Using the API Client

```typescript
// apps/web/src/pages/tasks.tsx
import { tasksApi } from '@saas/api';
import { useQuery } from '@tanstack/react-query';

export default function TasksPage() {
  const { data: tasks } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => tasksApi.getTasks(),
  });

  return (
    <div>
      {tasks?.map(task => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
```

### Creating a Reusable Component

```typescript
// packages/ui/src/Button.tsx
export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-medium rounded transition-colors';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  };
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
      {...props} 
    />
  );
}
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

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review the code examples above

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma ORM](https://www.prisma.io/docs/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NextAuth.js](https://next-auth.js.org/)
- [Turborepo](https://turbo.build/repo/docs)
- [Zustand](https://zustand-demo.vercel.app/)
