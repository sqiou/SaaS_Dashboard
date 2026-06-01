export default function TasksPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
          <p className="mt-2 text-gray-600">Manage all your tasks and track progress</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          + New Task
        </button>
      </div>

      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search tasks..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
          <option value="">All Status</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Project
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Priority
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Assignee
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Due Date
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              {
                title: 'Implement authentication',
                project: 'Website Redesign',
                status: 'in-progress',
                priority: 'high',
                assignee: 'Alice Johnson',
                dueDate: '2024-03-20',
              },
              {
                title: 'Design landing page',
                project: 'Website Redesign',
                status: 'todo',
                priority: 'high',
                assignee: 'Bob Smith',
                dueDate: '2024-03-18',
              },
              {
                title: 'Setup CI/CD pipeline',
                project: 'Mobile App',
                status: 'in-progress',
                priority: 'medium',
                assignee: 'Carol White',
                dueDate: '2024-03-25',
              },
              {
                title: 'Fix loading performance',
                project: 'Mobile App',
                status: 'done',
                priority: 'low',
                assignee: 'David Brown',
                dueDate: '2024-03-10',
              },
            ].map((task, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {task.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{task.project}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      task.status === 'done'
                        ? 'bg-green-100 text-green-800'
                        : task.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      task.priority === 'high'
                        ? 'bg-red-100 text-red-800'
                        : task.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {task.assignee}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {task.dueDate}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors text-sm font-medium">
                    Edit
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
