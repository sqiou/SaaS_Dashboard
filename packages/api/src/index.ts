import type {
  User,
  Organization,
  Workspace,
  Project,
  Task,
  AuditLog,
  PaginatedResponse,
} from '@saas/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

async function apiCall<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'API Error');
  }

  return response.json();
}

// Users API
export const usersApi = {
  getProfile: () => apiCall<User>('/users/profile'),
  getUser: (id: string) => apiCall<User>(`/users/${id}`),
  updateProfile: (data: Partial<User>) =>
    apiCall<User>('/users/profile', {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
};

// Organizations API
export const organizationsApi = {
  list: () => apiCall<Organization[]>('/organizations'),
  get: (id: string) => apiCall<Organization>(`/organizations/${id}`),
  create: (data: Partial<Organization>) =>
    apiCall<Organization>('/organizations', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id: string, data: Partial<Organization>) =>
    apiCall<Organization>(`/organizations/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
};

// Workspaces API
export const workspacesApi = {
  list: (organizationId: string) =>
    apiCall<Workspace[]>(`/organizations/${organizationId}/workspaces`),
  get: (id: string) => apiCall<Workspace>(`/workspaces/${id}`),
  create: (organizationId: string, data: Partial<Workspace>) =>
    apiCall<Workspace>(`/organizations/${organizationId}/workspaces`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id: string, data: Partial<Workspace>) =>
    apiCall<Workspace>(`/workspaces/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
};

// Projects API
export const projectsApi = {
  list: (workspaceId: string, page = 1, pageSize = 20) =>
    apiCall<PaginatedResponse<Project>>(
      `/workspaces/${workspaceId}/projects?page=${page}&pageSize=${pageSize}`
    ),
  get: (id: string) => apiCall<Project>(`/projects/${id}`),
  create: (workspaceId: string, data: Partial<Project>) =>
    apiCall<Project>(`/workspaces/${workspaceId}/projects`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id: string, data: Partial<Project>) =>
    apiCall<Project>(`/projects/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    apiCall<void>(`/projects/${id}`, {
      method: 'DELETE',
    }),
};

// Tasks API
export const tasksApi = {
  list: (projectId: string, page = 1, pageSize = 50) =>
    apiCall<PaginatedResponse<Task>>(
      `/projects/${projectId}/tasks?page=${page}&pageSize=${pageSize}`
    ),
  get: (id: string) => apiCall<Task>(`/tasks/${id}`),
  create: (projectId: string, data: Partial<Task>) =>
    apiCall<Task>(`/projects/${projectId}/tasks`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id: string, data: Partial<Task>) =>
    apiCall<Task>(`/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    apiCall<void>(`/tasks/${id}`, {
      method: 'DELETE',
    }),
};

// Analytics API
export const analyticsApi = {
  getDashboardStats: (workspaceId: string) =>
    apiCall(`/workspaces/${workspaceId}/analytics/stats`),
  getChartData: (workspaceId: string, metric: string, days = 30) =>
    apiCall(
      `/workspaces/${workspaceId}/analytics/chart?metric=${metric}&days=${days}`
    ),
};

// Audit Logs API
export const auditLogsApi = {
  list: (workspaceId: string, page = 1, pageSize = 50) =>
    apiCall<PaginatedResponse<AuditLog>>(
      `/workspaces/${workspaceId}/audit-logs?page=${page}&pageSize=${pageSize}`
    ),
  get: (id: string) => apiCall<AuditLog>(`/audit-logs/${id}`),
};

export default {
  users: usersApi,
  organizations: organizationsApi,
  workspaces: workspacesApi,
  projects: projectsApi,
  tasks: tasksApi,
  analytics: analyticsApi,
  auditLogs: auditLogsApi,
};
