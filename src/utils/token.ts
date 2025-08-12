import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { RoleType, User } from 'types/global';
import { UserOAuthResponse } from 'types/oauth';

export const getToken = () => {
  return Cookies.get('token') || null;
};

export const setToken = (token: string) => {
  Cookies.set('token', token, { expires: 7 });
};

export const removeToken = () => {
  Cookies.remove('token');
};

export const getUserFromToken = (): User | null => {
  const token = getToken();
  if (!token) return null;
  try {
    const decoded = jwtDecode<UserOAuthResponse>(token);
    return {
      id: decoded.memberId,
      email: decoded.email,
      name: decoded.name,
      role: decoded.role as RoleType,
    } as User;
  } catch {
    return null;
  }
};
