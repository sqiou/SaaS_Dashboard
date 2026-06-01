import type { Metadata } from 'next';
import { DashboardLayout } from '@/components/DashboardLayout';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'SaaS Dashboard',
  description: 'Multi-tenant SaaS dashboard platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </body>
    </html>
  );
}
