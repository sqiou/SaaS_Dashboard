export default function AdminPage() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Total Organizations</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">42</p>
          <p className="mt-2 text-sm text-green-600">↑ 5 new this month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Total Users</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">3,892</p>
          <p className="mt-2 text-sm text-green-600">↑ 120 this month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">Active Sessions</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">1,234</p>
          <p className="mt-2 text-sm text-green-600">↑ Now</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium">System Health</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">99.9%</p>
          <p className="mt-2 text-sm text-gray-600">Uptime this month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Organizations
          </h3>
          <div className="space-y-4">
            {['TechCorp', 'DataFlow Inc', 'CloudSync', 'AI Solutions'].map((org) => (
              <div
                key={org}
                className="flex items-center justify-between py-2 border-b border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {org.charAt(0)}
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">{org}</p>
                    <p className="text-sm text-gray-600">5 members</p>
                  </div>
                </div>
                <button className="px-3 py-1 rounded text-blue-600 hover:bg-blue-50 transition-colors">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            System Alerts
          </h3>
          <div className="space-y-4">
            {[
              { type: 'warning', message: 'High memory usage detected' },
              { type: 'info', message: 'Database backup completed' },
              { type: 'success', message: 'All services operational' },
            ].map((alert, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg ${
                  alert.type === 'warning'
                    ? 'bg-yellow-50 border border-yellow-200'
                    : alert.type === 'info'
                    ? 'bg-blue-50 border border-blue-200'
                    : 'bg-green-50 border border-green-200'
                }`}
              >
                <p
                  className={`text-sm font-medium ${
                    alert.type === 'warning'
                      ? 'text-yellow-800'
                      : alert.type === 'info'
                      ? 'text-blue-800'
                      : 'text-green-800'
                  }`}
                >
                  {alert.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
