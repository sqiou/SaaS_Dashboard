export default function OrganizationsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Organizations</h1>
          <p className="mt-2 text-gray-600">
            Manage all organizations in the system
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          + New Organization
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: 'TechCorp Inc',
            slug: 'techcorp',
            members: 12,
            workspaces: 3,
            created: '2024-01-15',
          },
          {
            name: 'DataFlow Systems',
            slug: 'dataflow',
            members: 8,
            workspaces: 2,
            created: '2024-01-20',
          },
          {
            name: 'CloudSync Pro',
            slug: 'cloudsync',
            members: 15,
            workspaces: 4,
            created: '2024-02-01',
          },
          {
            name: 'AI Solutions Ltd',
            slug: 'aisolutions',
            members: 5,
            workspaces: 1,
            created: '2024-02-15',
          },
        ].map((org) => (
          <div
            key={org.slug}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
                {org.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{org.name}</h3>
                <p className="text-sm text-gray-600">/{org.slug}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
              <div>
                <p className="text-sm text-gray-600">Members</p>
                <p className="text-2xl font-bold text-gray-900">{org.members}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Workspaces</p>
                <p className="text-2xl font-bold text-gray-900">
                  {org.workspaces}
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">Created {org.created}</p>

            <button className="w-full mt-4 px-3 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
