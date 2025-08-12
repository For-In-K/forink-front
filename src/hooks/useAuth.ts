import { useCallback, useEffect } from 'react';
import { useUserStore } from '@stores/useUserStore';
import { useTokenStore } from '@stores/useTokenStore';
import { getUserFromToken } from '@utils/token';

const useAuth = () => {
  const { user, setUser, clearUser } = useUserStore();
  const { token, setToken, clearToken } = useTokenStore();

  const isSignedIn = user !== null && token !== null;

  const isUser = isSignedIn && user.role === 'ROLE_회원';
  const isPreGuide = isSignedIn && user.role === 'ROLE_예비가이드';
  const isGuide = isSignedIn && user.role === 'ROLE_가이드';

  const signIn = useCallback(
    (token: string) => {
      setToken(token);
    },
    [setToken]
  );

  const signOut = useCallback(() => {
    clearToken();
    clearUser();
  }, [clearToken, clearUser]);

  useEffect(() => {
    const userFromToken = token ? getUserFromToken() : null;
    userFromToken ? setUser(userFromToken) : clearUser();
  }, [token, setUser, clearUser]);

  return {
    user,
    isSignedIn,
    isUser,
    isPreGuide,
    isGuide,
    signOut,
    signIn,
  };
};

export default useAuth;
