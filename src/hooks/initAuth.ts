import { useUserStore } from '@stores/useUserStore';
import { useTokenStore } from '@stores/useTokenStore';
import {
  getToken,
  getUserFromToken,
  removeToken as removeTokenFromCookie,
} from '@utils/token';

export const initAuth = () => {
  const token = getToken();
  const { setToken, clearToken } = useTokenStore.getState();
  const { setUser, clearUser } = useUserStore.getState();

  if (!token) {
    clearToken();
    clearUser();
    return;
  }

  const user = getUserFromToken(token);
  if (user) {
    setToken(token);
    setUser(user);
  } else {
    removeTokenFromCookie();
    clearToken();
    clearUser();
  }
};
