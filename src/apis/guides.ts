import apiClient from './apiClient';
import type {
  GetOfficialGuideProfileResponse,
  GetGuideResumeResponse,
  GetPreGuideFeedbackResponse,
  GetPreGuideFeedbackRateResponse,
  GetPreGuideRateStatusResponse,
  UpdateGuideResumeStepRequest,
  SubmitFeedbackRateFieldRequest,
} from 'types/guides';

export const getGuideProfiles =
  async (): Promise<GetOfficialGuideProfileResponse> => {
    const res = await apiClient.get('/guides');
    return res.data;
  };

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

export const updateGuideResumeStep = async (
  stepNumber: number,
  payload: UpdateGuideResumeStepRequest
) => {
  const res = await apiClient.patch(
    `/guides/resume/steps/${stepNumber}`,
    payload
  );
  return res.data;
};

export const getPreGuideFeedbacks =
  async (): Promise<GetPreGuideFeedbackResponse> => {
    const res = await apiClient.get('/guides/feedbacks');
    return res.data;
  };

export const postRatingsOnFeedback = async (
  feedbackId: number,
  payload: SubmitFeedbackRateFieldRequest
) => {
  const res = await apiClient.post(
    `/guides/feedbacks/${feedbackId}/ratings`,
    payload
  );
  return res.data;
};

export const getPreGuideRatings =
  async (): Promise<GetPreGuideFeedbackRateResponse> => {
    const res = await apiClient.get('/guides/feedbacks/rating-summary');
    return res.data;
  };

export const getPreGuideStatus =
  async (): Promise<GetPreGuideRateStatusResponse> => {
    const res = await apiClient.get('/guides/feedbacks/rating-status');
    return res.data;
  };
