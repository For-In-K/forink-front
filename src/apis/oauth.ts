import apiClient from './apiClient';
import { UserOAuthResponse } from 'types/oauth';

export const getOauthCallback = async (
  code: string
): Promise<UserOAuthResponse> => {
  const res = await apiClient.get('/oauth/google/callback', {
    params: { code },
  });
  return res.data;
};
