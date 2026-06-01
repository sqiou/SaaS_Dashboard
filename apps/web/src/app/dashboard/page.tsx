export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Total Users</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">1,234</p>
          <p className="mt-2 text-sm text-green-600">↑ 12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Active Sessions</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">567</p>
          <p className="mt-2 text-sm text-green-600">↑ 8% from last hour</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Revenue</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">$24,892</p>
          <p className="mt-2 text-sm text-green-600">↑ 23% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Conversion</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">3.24%</p>
          <p className="mt-2 text-sm text-red-600">↓ 2% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue Over Time
          </h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center text-gray-500">
            Chart Placeholder (Recharts)
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Workspaces
          </h3>
          <div className="space-y-4">
            {['Engineering', 'Marketing', 'Product', 'Design'].map(
              (workspace, i) => (
                <div
                  key={workspace}
                  className="flex items-center justify-between py-2 border-b border-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-gray-700">{workspace}</span>
                  </div>
                  <span className="text-gray-900 font-semibold">
                    {1000 - i * 100} users
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[
            {
              user: 'Alice Johnson',
              action: 'created a new project',
              time: '2 hours ago',
            },
            {
              user: 'Bob Smith',
              action: 'joined Engineering workspace',
              time: '4 hours ago',
            },
            {
              user: 'Carol White',
              action: 'completed a task',
              time: '6 hours ago',
            },
            {
              user: 'David Brown',
              action: 'updated workspace settings',
              time: '1 day ago',
            },
          ].map((activity, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-gray-200"
            >
              <div>
                <p className="text-gray-900 font-medium">{activity.user}</p>
                <p className="text-sm text-gray-600">{activity.action}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
