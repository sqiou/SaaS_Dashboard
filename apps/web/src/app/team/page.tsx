export default function TeamPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team</h1>
          <p className="mt-2 text-gray-600">Manage team members and permissions</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          + Invite Member
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Role
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Joined
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              {
                name: 'Alice Johnson',
                email: 'alice@example.com',
                role: 'admin',
                joined: '2024-01-15',
                status: 'active',
              },
              {
                name: 'Bob Smith',
                email: 'bob@example.com',
                role: 'user',
                joined: '2024-01-20',
                status: 'active',
              },
              {
                name: 'Carol White',
                email: 'carol@example.com',
                role: 'user',
                joined: '2024-02-01',
                status: 'active',
              },
              {
                name: 'David Brown',
                email: 'david@example.com',
                role: 'viewer',
                joined: '2024-02-10',
                status: 'invited',
              },
            ].map((member) => (
              <tr key={member.email} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {member.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{member.email}</td>
                <td className="px-6 py-4 text-sm">
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option value="admin">Admin</option>
                    <option value="user" selected={member.role === 'user'}>
                      User
                    </option>
                    <option value="viewer" selected={member.role === 'viewer'}>
                      Viewer
                    </option>
                  </select>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{member.joined}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      member.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors text-sm font-medium">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors text-sm font-medium">
                    Remove
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
