import apiClient from './apiClient';
import type { GuideResponse } from '@src/types/guides';

export const getGuide = async (): Promise<GuideResponse> => {
  const res = await apiClient.get('/guides');
  return res.data;
};

// export const createResume;
