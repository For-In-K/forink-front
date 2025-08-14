import {
  GetRoadmapStepDetailResponse,
  GetRoadmapTypeResponse,
  GetSubroadmapsResponse,
  PostRoadmapFeedbackOnStepDetail,
  PostRoadmapFeedbackOnSubroadmap,
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

export const getRoadmapStepDetail = async ({
  roadmapId,
}: {
  roadmapId: number;
}): Promise<GetRoadmapStepDetailResponse> => {
  const res = await apiClient.get(`/roadmaps/${roadmapId}`);
  return res.data;
};

export const updateRoadmapStepDetailCheck = async (
  roadmapStepContentId: number
) => {
  const res = await apiClient.patch(`/roadmaps/${roadmapStepContentId}`);
  return res.data;
};

export const submitRoadmapFeedbackOnSubroadmap = async ({
  roadmapId,
  payload,
}: {
  roadmapId: number;
  payload: PostRoadmapFeedbackOnSubroadmap;
}) => {
  const res = await apiClient.post(`/roadmaps/${roadmapId}`, payload);
  return res.data;
};

export const submitRoadmapFeedbackOnStepDetail = async ({
  roadmapStepId,
  payload,
}: {
  roadmapStepId: number;
  payload: PostRoadmapFeedbackOnStepDetail;
}) => {
  const res = await apiClient.post(`/roadmaps/${roadmapStepId}`, payload);
  return res.data;
};
