export interface GuideProfile {
  memberId: number;
  name: string;
  language: string;
  nationality: string;
  guideExpCount: number;
  expertise: string;
  location: string;
}

export type GetOfficialGuideProfileResponse = GuideProfile[];

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

export interface GuideFeedbackRating {
  ratingId: number;
  feedbackTitle: string;
  ratingCount: number;
  allAvgScore: number;
  expertiseAvgScore: number;
  helpAvgScore: number;
  recommendAvgScore: number;
}

export type GetPreGuideFeedbackRateResponse = GuideFeedbackRating[];

export interface PreGuideRateStatus {
  ratingStatus: 'IN PROGRESS' | 'ALMOST';
}

export type GetPreGuideRateStatusResponse = PreGuideRateStatus;
