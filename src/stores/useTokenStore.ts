import { create } from 'zustand';

export type TokenStore = {
  token: string | null;
  isTokenInit: boolean;
  setToken: (token: string | null) => void;
  clearToken: () => void;
};

export const useTokenStore = create<TokenStore>((set) => ({
  token: null,
  isTokenInit: false,
  setToken: (token) => set({ token, isTokenInit: true }),
  clearToken: () => set({ token: null, isTokenInit: false }),
}));
