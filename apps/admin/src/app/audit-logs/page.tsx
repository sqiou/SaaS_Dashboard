export default function AuditLogsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Audit Logs</h1>
          <p className="mt-2 text-gray-600">Complete activity history</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Export
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                User
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Action
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Entity
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Timestamp
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                IP Address
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              {
                user: 'Alice Johnson',
                action: 'create',
                entity: 'Project',
                timestamp: '2024-03-15 14:32:00',
                ip: '192.168.1.100',
              },
              {
                user: 'Bob Smith',
                action: 'update',
                entity: 'User',
                timestamp: '2024-03-15 13:21:00',
                ip: '192.168.1.101',
              },
              {
                user: 'Carol White',
                action: 'delete',
                entity: 'Task',
                timestamp: '2024-03-15 12:10:00',
                ip: '192.168.1.102',
              },
              {
                user: 'David Brown',
                action: 'login',
                entity: 'Session',
                timestamp: '2024-03-15 11:00:00',
                ip: '192.168.1.103',
              },
            ].map((log, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {log.user}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      log.action === 'create'
                        ? 'bg-green-100 text-green-800'
                        : log.action === 'update'
                        ? 'bg-blue-100 text-blue-800'
                        : log.action === 'delete'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {log.action}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{log.entity}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {log.timestamp}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{log.ip}</td>
                <td className="px-6 py-4 text-right">
                  <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors text-sm font-medium">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
