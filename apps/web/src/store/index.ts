import { create } from 'zustand';

interface Sidebar {
  isOpen: boolean;
  toggle: () => void;
}

export const useSidebarStore = create<Sidebar>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

interface WorkspaceStore {
  selectedWorkspaceId: string | null;
  setSelectedWorkspaceId: (id: string) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  selectedWorkspaceId: null,
  setSelectedWorkspaceId: (id: string) => set({ selectedWorkspaceId: id }),
}));

interface ModalStore {
  isOpen: boolean;
  type: 'createProject' | 'createTask' | 'editProject' | null;
  data: any;
  open: (type: ModalStore['type'], data?: any) => void;
  close: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  type: null,
  data: null,
  open: (type, data) =>
    set({ isOpen: true, type, data }),
  close: () =>
    set({ isOpen: false, type: null, data: null }),
}));

interface FilterStore {
  status: string | null;
  priority: string | null;
  search: string;
  setStatus: (status: string | null) => void;
  setPriority: (priority: string | null) => void;
  setSearch: (search: string) => void;
  reset: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  status: null,
  priority: null,
  search: '',
  setStatus: (status) => set({ status }),
  setPriority: (priority) => set({ priority }),
  setSearch: (search) => set({ search }),
  reset: () =>
    set({ status: null, priority: null, search: '' }),
}));
