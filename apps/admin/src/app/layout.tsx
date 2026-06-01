import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel | SaaS Dashboard',
  description: 'Admin panel for SaaS dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-50">
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-900 text-white flex flex-col border-r border-gray-800">
            <div className="p-6">
              <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
            <nav className="flex-1 px-3 py-4 space-y-2">
              {[
                { name: 'Dashboard', icon: '📊', href: '/admin' },
                { name: 'Users', icon: '👥', href: '/admin/users' },
                { name: 'Organizations', icon: '🏢', href: '/admin/organizations' },
                { name: 'Analytics', icon: '📈', href: '/admin/analytics' },
                { name: 'Audit Logs', icon: '📋', href: '/admin/audit-logs' },
                { name: 'Settings', icon: '⚙️', href: '/admin/settings' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Administration</h2>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  Logout
                </button>
              </div>
            </header>

            {/* Content */}
            <div className="flex-1 overflow-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
