'use client';

import React, { Suspense } from 'react';
import { useState } from 'react';
import { Button } from '@saas/ui';

interface Sidebar {
  isOpen: boolean;
  toggle: () => void;
}

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gray-900 text-white transition-all duration-300 flex flex-col border-r border-gray-800`}
      >
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-xl font-bold">SaaS Dashboard</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-gray-800 p-2 rounded-lg transition-colors"
          >
            ☰
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-2">
          {[
            { name: 'Dashboard', icon: '📊', href: '/dashboard' },
            { name: 'Projects', icon: '📁', href: '/projects' },
            { name: 'Tasks', icon: '✓', href: '/tasks' },
            { name: 'Analytics', icon: '📈', href: '/analytics' },
            { name: 'Team', icon: '👥', href: '/team' },
            { name: 'Settings', icon: '⚙️', href: '/settings' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span>{item.name}</span>}
            </a>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-gray-800">
            <Button className="w-full bg-blue-600 hover:bg-blue-700" size="sm">
              Sign Out
            </Button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              U
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <Suspense fallback={<div className="p-8">Loading...</div>}>
            {children}
          </Suspense>
        </div>
      </main>
    </div>
  );
}
