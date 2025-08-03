import apiClient from './apiClient';
import type {
  GetOfficialGuideProfileResponse,
  GetGuideResumeResponse,
  GetPreGuideFeedbackResponse,
  GetPreGuideRateStatusResponse,
  GetPreGuideFeedbackRateResponse,
} from 'types/guides';

export const getGuide = async (): Promise<GetOfficialGuideProfileResponse> => {
  const res = await apiClient.get('/guides');
  return res.data;
};

export const createGuideResume = async () => {
  const res = await apiClient.post('/guides/resume');
  return res.data;
};

// 이력서 제출

export const getResume = async (): Promise<GetGuideResumeResponse> => {
  const res = await apiClient.get('/guides/resume');
  return res.data;
};
