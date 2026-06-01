'use client';

import { useState } from 'react';
import { Button, Card, Input, Label } from '@saas/ui';

interface WorkspaceSwitcherProps {
  currentWorkspace?: string;
  workspaces?: Array<{ id: string; name: string }>;
  onSelect?: (workspaceId: string) => void;
}

export function WorkspaceSwitcher({
  currentWorkspace,
  workspaces = [],
  onSelect,
}: WorkspaceSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        className="w-full justify-between"
      >
        <span>{currentWorkspace || 'Select Workspace'}</span>
        <span>▼</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="max-h-48 overflow-y-auto">
            {workspaces.map((workspace) => (
              <button
                key={workspace.id}
                onClick={() => {
                  onSelect?.(workspace.id);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                {workspace.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
