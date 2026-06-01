import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@saas/api';
import type { Workspace } from '@saas/types';

const WORKSPACES_QUERY_KEY = 'workspaces';

export function useWorkspaces(organizationId: string) {
  return useQuery({
    queryKey: [WORKSPACES_QUERY_KEY, organizationId],
    queryFn: () => api.workspaces.list(organizationId),
  });
}

export function useWorkspace(workspaceId: string) {
  return useQuery({
    queryKey: [WORKSPACES_QUERY_KEY, workspaceId],
    queryFn: () => api.workspaces.get(workspaceId),
  });
}

export function useCreateWorkspace(organizationId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Workspace>) =>
      api.workspaces.create(organizationId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [WORKSPACES_QUERY_KEY, organizationId],
      });
    },
  });
}

export function useUpdateWorkspace() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Workspace> }) =>
      api.workspaces.update(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [WORKSPACES_QUERY_KEY, data.organizationId],
      });
      queryClient.setQueryData([WORKSPACES_QUERY_KEY, data.id], data);
    },
  });
}
