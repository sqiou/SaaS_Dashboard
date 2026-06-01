import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@saas/api';
import type { Project, PaginatedResponse } from '@saas/types';

const PROJECT_QUERY_KEY = 'projects';

export function useProjects(workspaceId: string, page = 1) {
  return useQuery({
    queryKey: [PROJECT_QUERY_KEY, workspaceId, page],
    queryFn: () => api.projects.list(workspaceId, page),
  });
}

export function useProject(projectId: string) {
  return useQuery({
    queryKey: [PROJECT_QUERY_KEY, projectId],
    queryFn: () => api.projects.get(projectId),
  });
}

export function useCreateProject(workspaceId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Project>) =>
      api.projects.create(workspaceId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PROJECT_QUERY_KEY, workspaceId],
      });
    },
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Project> }) =>
      api.projects.update(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [PROJECT_QUERY_KEY, data.workspaceId],
      });
      queryClient.setQueryData([PROJECT_QUERY_KEY, data.id], data);
    },
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.projects.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PROJECT_QUERY_KEY],
      });
    },
  });
}
