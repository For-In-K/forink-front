import {
  GetRoadmapStepDetailResponse,
  GetRoadmapTypeResponse,
  GetSubroadmapsResponse,
  PostRoadmapFeedbackOnType,
  PostRoadmapDetailFeedbackOnType,
} from 'types/roadmaps';
import apiClient from './apiClient';

export const createRoadmaps = async () => {
  const res = await apiClient.post('/roadmaps');
  return res.data;
};

export const getRoadmapTypes = async (): Promise<GetRoadmapTypeResponse> => {
  const res = await apiClient.get('/roadmaps');
  return res.data;
};

export const getRoadmapsOnType = async (
  roadmapType: string
): Promise<GetSubroadmapsResponse> => {
  const res = await apiClient.get(`/roadmaps/${roadmapType}`);
  return res.data;
};

export const getRoadmapStepDetail = async (
  roadmapId: number
): Promise<GetRoadmapStepDetailResponse> => {
  const res = await apiClient.get(`/roadmaps/${roadmapId}`);
  return res.data;
};

export const updateRoadmapStepDetailCheck = async (
  roadmapStepContentId: number
) => {
  const res = await apiClient.patch(`/roadmaps/${roadmapStepContentId}`);
  return res.data;
};

export const submitRoadmapFeedbackOnType = async (
  roadmapStepId: number,
  payload: PostRoadmapFeedbackOnType
) => {
  const res = await apiClient.post(`/roadmaps/${roadmapStepId}`);
  return res.data;
};

export const submitRoadmapDetailFeedbackOnType = async (
  roadmapId: number,
  payload: PostRoadmapDetailFeedbackOnType
) => {
  const res = await apiClient.post(`/roadmaps/${roadmapId}`);
  return res.data;
};
