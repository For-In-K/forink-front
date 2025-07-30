import apiClient from './apiClient';

import type { CreateRoadmapsResponse } from '@src/types/roadmaps';

export const createRoadmaps = async (): Promise<CreateRoadmapsResponse> => {
  const res = await apiClient.post('/roadmaps');
  return res.data;
};

export const getRoadmap = async (roadmapType: string) => {
  const res = await apiClient.get(`/roadmaps/${roadmapType}`);
};
