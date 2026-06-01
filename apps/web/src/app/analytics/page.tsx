import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics | SaaS Dashboard',
};

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-2 text-gray-600">
          Comprehensive analytics and insights for your workspace
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Total Tasks</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">284</p>
          <p className="mt-2 text-sm text-green-600">↑ 12% from last week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Completed Tasks</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">156</p>
          <p className="mt-2 text-sm text-green-600">55% completion rate</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Team Members</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
          <p className="mt-2 text-sm text-gray-600">Active in this workspace</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Task Completion Trend
          </h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center text-gray-500">
            Chart Placeholder (Recharts)
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Contributors
          </h3>
          <div className="space-y-4">
            {['Alice Johnson', 'Bob Smith', 'Carol White', 'David Brown'].map(
              (member, i) => (
                <div
                  key={member}
                  className="flex items-center justify-between py-2 border-b border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {member.charAt(0)}
                    </div>
                    <span className="text-gray-700">{member}</span>
                  </div>
                  <span className="text-gray-900 font-semibold">
                    {30 - i * 5} tasks
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
