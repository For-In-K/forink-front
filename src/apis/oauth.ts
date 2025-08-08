import apiClient from './apiClient';
import { MemberOAuthResponse } from 'types/oauth';

export const getOauthUrl = async () => {
  const res = await apiClient.get('/oauth/google');
  return res.data;
};

export const getOauthCallback = async (code: string) => {
  const res = await apiClient.get<MemberOAuthResponse>(
    `/oauth/google/callback?code=${code}`
  );
  return res.data;
};
