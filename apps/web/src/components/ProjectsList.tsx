'use client';

import { useState } from 'react';
import { Button, Card, Input, Label, EmptyState, LoadingSpinner } from '@saas/ui';

interface Project {
  id: string;
  name: string;
  description: string | null;
  status: 'active' | 'archived';
  createdAt: Date;
}

interface ProjectsListProps {
  workspaceId: string;
  projects: Project[];
  isLoading?: boolean;
  onCreateProject?: () => void;
  onSelectProject?: (project: Project) => void;
}

export function ProjectsList({
  projects,
  isLoading = false,
  onCreateProject,
  onSelectProject,
}: ProjectsListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <EmptyState
        title="No projects yet"
        description="Create your first project to get started"
        action={
          <Button
            onClick={onCreateProject}
            variant="primary"
          >
            Create Project
          </Button>
        }
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onSelectProject?.(project)}
        >
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.name}
                </h3>
                {project.description && (
                  <p className="mt-2 text-sm text-gray-600">
                    {project.description}
                  </p>
                )}
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
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Created {new Date(project.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
