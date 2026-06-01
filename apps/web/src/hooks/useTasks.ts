import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@saas/api';
import type { Task } from '@saas/types';

const TASKS_QUERY_KEY = 'tasks';

export function useTasks(projectId: string, page = 1) {
  return useQuery({
    queryKey: [TASKS_QUERY_KEY, projectId, page],
    queryFn: () => api.tasks.list(projectId, page),
  });
}

export function useTask(taskId: string) {
  return useQuery({
    queryKey: [TASKS_QUERY_KEY, taskId],
    queryFn: () => api.tasks.get(taskId),
  });
}

export function useCreateTask(projectId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Task>) =>
      api.tasks.create(projectId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TASKS_QUERY_KEY, projectId],
      });
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Task> }) =>
      api.tasks.update(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [TASKS_QUERY_KEY, data.projectId],
      });
      queryClient.setQueryData([TASKS_QUERY_KEY, data.id], data);
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.tasks.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TASKS_QUERY_KEY],
      });
    },
  });
}
