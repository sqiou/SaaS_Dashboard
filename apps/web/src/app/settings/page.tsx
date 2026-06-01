export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">Configure your workspace</p>
      </div>

      <div className="space-y-6">
        {/* Workspace Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Workspace Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Workspace Name
              </label>
              <input
                type="text"
                value="Engineering"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Workspace Slug
              </label>
              <input
                type="text"
                value="engineering"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                rows={4}
                defaultValue="Engineering workspace for product development"
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Notifications
          </h2>
          <div className="space-y-4">
            {[
              { label: 'Email notifications for task assignments', checked: true },
              { label: 'Email notifications for comments', checked: true },
              { label: 'Daily digest emails', checked: false },
              { label: 'Push notifications', checked: true },
            ].map((setting, i) => (
              <div key={i} className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked={setting.checked}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                />
                <label className="ml-3 text-sm text-gray-700">
                  {setting.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Danger Zone</h2>
          <p className="text-sm text-gray-600 mb-4">
            Irreversible and destructive actions
          </p>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Delete Workspace
          </button>
        </div>
      </div>
    </div>
  );
}
