import { create } from 'zustand';
import { RoleType } from 'types/oauth';

export type User = {
  id: number;
  email: string;
  name: string;
  role: RoleType;
};

interface UserState {
  user: User | null;
  isUserInit: boolean;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isUserInit: false,
  setUser: (user) => set({ user, isUserInit: true }),
  clearUser: () => set({ user: null, isUserInit: false }),
}));
