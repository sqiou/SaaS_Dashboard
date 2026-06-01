# Contributing Guide

Thank you for your interest in contributing to SaaS Dashboard Platform! This guide will help you get started.

## Code of Conduct

- Be respectful and inclusive
- Focus on the code, not the person
- Help others learn and grow
- Report issues professionally

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/saas-dashboard.git`
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Follow the setup in [QUICKSTART.md](./QUICKSTART.md)

## Development Workflow

### 1. Make Your Changes

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes in your editor
# Test locally: pnpm dev

# Build and test
pnpm build
pnpm type-check
pnpm lint
pnpm test
```

### 2. Commit Changes

```bash
git add .
git commit -m "feat: add cool new feature"
```

#### Commit Message Format

Follow conventional commits:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation
- `style:` formatting
- `refactor:` code reorganization
- `perf:` performance improvement
- `test:` test addition/modification
- `chore:` dependency update, build config, etc

Examples:
```
feat: add workspace switcher component
fix: resolve task list pagination issue
docs: update database schema documentation
refactor: simplify API client structure
```

### 3. Push and Create Pull Request

```bash
git push origin feature/my-feature
```

Create a PR on GitHub with:
- Clear title describing the change
- Description of what changed and why
- References to related issues (fixes #123)
- Screenshots if UI changes
- Checklist of tested scenarios

## Code Style

### TypeScript

- Use strict mode (`tsconfig.json` has `strict: true`)
- Explicit types preferred over `any`
- Use interfaces for object shapes
- Avoid default exports in packages

```typescript
// ✅ Good
interface User {
  id: string;
  email: string;
  name: string | null;
}

export function getUser(id: string): User {
  // ...
}

// ❌ Avoid
export default function getUser(id: any): any {
  // ...
}
```

### React Components

- Use functional components
- Use hooks (useState, useEffect, custom hooks)
- Memoize expensive computations
- Name components with PascalCase

```typescript
// ✅ Good
export function UserCard({ user }: { user: User }) {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div className="...">
      {user.name}
    </div>
  );
}

// ❌ Avoid
export default class UserCard extends React.Component {
  // ...
}
```

### Styling

- Use Tailwind CSS classes
- Follow mobile-first approach
- Use semantic color names (gray-900, blue-600)
- Extract complex styles to components

```typescript
// ✅ Good
<div className="flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow">

// ❌ Avoid  
<div style={{display: 'flex', justifyContent: 'space-between', ...}}>
```

### File Organization

```
packages/ui/
├── src/
│   ├── index.tsx              # Main export
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   ├── hooks/
│   │   ├── useWindowSize.ts
│   │   └── ...
│   └── utils/
│       ├── cn.ts
│       └── ...
├── tsconfig.json
└── package.json
```

## Testing

### Unit Tests

```bash
# Run tests
pnpm test

# Watch mode
pnpm test --watch

# Coverage
pnpm test --coverage
```

### Manual Testing

1. Test the feature locally: `pnpm dev`
2. Test in different browsers
3. Test on mobile (use DevTools)
4. Test keyboard navigation
5. Test with screen readers if relevant

## Documentation

### README Files

- Describe what the package/app does
- Include installation instructions
- Provide usage examples
- Link to relevant documentation

### Code Comments

- Comment complex logic
- Explain "why", not "what"
- Use JSDoc for functions
- Keep comments up-to-date

```typescript
/**
 * Calculates the time until a task is due
 * @param dueDate - The task due date
 * @returns Time remaining in milliseconds, or null if overdue
 */
function getTimeUntilDue(dueDate: Date): number | null {
  // ...
}
```

## Pull Request Process

1. **Before submitting:**
   - [ ] Code follows style guide
   - [ ] All tests pass: `pnpm test`
   - [ ] Types check: `pnpm type-check`
   - [ ] Lints pass: `pnpm lint`
   - [ ] Documentation updated
   - [ ] No console warnings/errors

2. **PR Description includes:**
   - [ ] What changed and why
   - [ ] Tests added/modified
   - [ ] Breaking changes noted
   - [ ] Screenshots (if UI changes)
   - [ ] Resolves/Fixes issues

3. **Review process:**
   - At least one approval required
   - All conversations resolved
   - CI checks passing
   - Ready to merge

## Common Tasks

### Add a New Component to UI Package

```typescript
// 1. Create file: packages/ui/src/components/NewComponent.tsx
import React from 'react';

export interface NewComponentProps {
  // ...
}

export const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ ...props }, ref) => {
    return <div ref={ref} {...props} />;
  }
);

NewComponent.displayName = 'NewComponent';

// 2. Export from: packages/ui/src/index.tsx
export { NewComponent } from './components/NewComponent';

// 3. Use in apps
import { NewComponent } from '@saas/ui';
```

### Add a New API Endpoint

```typescript
// 1. Add to Prisma schema: packages/db/prisma/schema.prisma

// 2. Create migration: cd packages/db && pnpm db:migrate

// 3. Add API client: packages/api/src/index.ts
export const newApi = {
  list: () => apiCall('/new-endpoint'),
  get: (id: string) => apiCall(`/new-endpoint/${id}`),
  create: (data: any) => apiCall('/new-endpoint', { method: 'POST', body: JSON.stringify(data) }),
};

// 4. Create API route: apps/web/src/app/api/new-endpoint/route.ts
export async function GET(request: NextRequest) {
  // Implementation
}
```

### Add a New Page

```typescript
// 1. Create: apps/web/src/app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      {/* Page content */}
    </div>
  );
}

// 2. Add to sidebar navigation in: apps/web/src/components/DashboardLayout.tsx

// 3. Pages route automatically at /new-page
```

## Performance Guidelines

- Keep components focused and small
- Memoize expensive computations
- Use pagination for large lists
- Lazy load images and components
- Avoid unnecessary re-renders

## Accessibility

- Use semantic HTML (`<button>`, `<nav>`, etc)
- Include alt text for images
- Support keyboard navigation
- Use ARIA labels where needed
- Test with screen readers

## Security Considerations

- Validate all inputs
- Sanitize user-generated content
- Use parameterized queries (Prisma)
- Keep secrets in environment variables
- Don't log sensitive data
- Use HTTPS in production

## Getting Help

- Check existing issues/PRs
- Ask in GitHub Discussions
- Review relevant documentation
- Look at similar implementations in codebase

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors graph

Thank you for contributing! 🎉
