import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | SaaS Dashboard',
};

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="mt-2 text-gray-600">Manage all your projects in one place</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: 'Website Redesign',
            description: 'Complete redesign of the marketing website',
            status: 'active',
            tasks: 12,
          },
          {
            name: 'Mobile App',
            description: 'iOS and Android mobile applications',
            status: 'active',
            tasks: 24,
          },
          {
            name: 'API Integration',
            description: 'Third-party API integrations',
            status: 'archived',
            tasks: 8,
          },
        ].map((project) => (
          <div
            key={project.name}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{project.description}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{project.tasks}</span> tasks
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
