export interface GuideProfile {
  memberId: number;
  name: string;
  language: string;
  nationality: string;
  guideExpCount: number;
  expertise: string;
}

export type GetOfficialGuideProfileResponse = GuideProfile[];

export interface UpdateGuideResumeStepRequest {
  answer: string;
}

export interface GuideResume {
  name: string;
  age: string;
  nationality: string;
  language: string;
  expertise: string;
  link: string;
}

export type GetGuideResumeResponse = GuideResume;

export interface GuideFeedback {
  // now for pre guide
  feedbackId: number;
  feedbackTitle: string;
  feedbackContent: string;
}

export type GetPreGuideFeedbackResponse = GuideFeedback[];

export interface SubmitFeedbackRateFieldRequest {
  expertiseScore: number;
  helpScore: number;
  recommendScore: number;
}

export interface GuideFeedbackRate {
  rateId: number;
  feedbackTitle: string;
  rateCount: number;
  averageScore: number;
  expertiseScore: number;
  helpScore: number;
  recommendScore: number;
}

export type GetPreGuideFeedbackRateResponse = GuideFeedbackRate[];

export interface PreGuideRateStatus {
  rateStatus: 'IN_PROGRESS' | 'ALMOST';
}

export type GetPreGuideRateStatusResponse = PreGuideRateStatus;
