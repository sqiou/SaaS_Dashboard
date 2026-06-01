export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-2 text-gray-600">System-wide analytics and metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Total Tasks</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">12,847</p>
          <p className="mt-2 text-sm text-green-600">↑ 8% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Completed Tasks</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">8,934</p>
          <p className="mt-2 text-sm text-gray-600">69.5% completion rate</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Active Users</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">4,521</p>
          <p className="mt-2 text-sm text-green-600">↑ 12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Avg. Response Time</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">145ms</p>
          <p className="mt-2 text-sm text-green-600">↓ 5% improvement</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Tasks Over Time
          </h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center text-gray-500">
            Chart Placeholder (Recharts)
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Organizations
          </h3>
          <div className="space-y-4">
            {[
              { name: 'TechCorp', tasks: 1234, users: 45 },
              { name: 'DataFlow', tasks: 987, users: 32 },
              { name: 'CloudSync', tasks: 856, users: 28 },
              { name: 'AI Solutions', tasks: 654, users: 18 },
            ].map((org, i) => (
              <div
                key={org.name}
                className="flex items-center justify-between py-2 border-b border-gray-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-gray-700 font-medium">{org.name}</span>
                </div>
                <div className="text-sm text-gray-600">
                  {org.tasks} tasks · {org.users} users
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
