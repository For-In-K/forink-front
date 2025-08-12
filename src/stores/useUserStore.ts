import { create } from 'zustand';
import { User } from 'types/global';

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
