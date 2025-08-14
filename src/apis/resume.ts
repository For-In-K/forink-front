import apiClient from './apiClient';
import type {
  GetGuideResumeResponse,
  UpdateGuideResumeStepRequest,
} from 'types/resume';

export const createGuideResume = async () => {
  const res = await apiClient.post('/guides/resume');
  return res.data;
};

export const submitGuideResume = async () => {
  const res = await apiClient.post('/guides/resume/submit');
  return res.data;
};

export const getGuideResume = async (): Promise<GetGuideResumeResponse> => {
  const res = await apiClient.get('/guides/resume');
  return res.data;
};

export const updateGuideResumeStep = async ({
  stepNumber,
  payload,
}: {
  stepNumber: number;
  payload: UpdateGuideResumeStepRequest;
}) => {
  const res = await apiClient.patch(
    `/guides/resume/steps/${stepNumber}`,
    payload
  );
  return res.data;
};
