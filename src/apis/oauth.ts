import apiClient from './apiClient';

export const getOauthUrl = async () => {
  const res = await apiClient.get('/oauth/google');
  return res.data;
};
