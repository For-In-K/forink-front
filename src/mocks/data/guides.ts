import type {
  GetOfficialGuideProfileResponse,
  GetPreGuideFeedbackResponse,
  GetPreGuideRateStatusResponse,
  GetPreGuideFeedbackRateResponse,
} from 'types/guides';

export const officialGuideProfiles: GetOfficialGuideProfileResponse = [
  {
    memberId: 101,
    name: 'Anna Kim',
    language: 'English, Korean, Vietnamese',
    nationality: 'USA',
    guideExpCount: 5,
    expertise: 'Immigration, Banking',
  },
  {
    memberId: 102,
    name: 'Minji Lee',
    language: 'Chinese, Japanese',
    nationality: 'China',
    guideExpCount: 3,
    expertise: 'Housing, Education, Daily Life Support',
  },
  {
    memberId: 103,
    name: 'Carlos Rodríguez',
    language: 'Spanish',
    nationality: 'Mexico',
    guideExpCount: 7,
    expertise: 'Job Hunting, Visa, Health Insurance',
  },
  {
    memberId: 104,
    name: 'Aisha Khan',
    language: 'Urdu',
    nationality: 'Pakistan',
    guideExpCount: 4,
    expertise: 'Healthcare, Childcare',
  },
  {
    memberId: 105,
    name: 'Takeshi Yamamoto',
    language: 'Japanese',
    nationality: 'Japan',
    guideExpCount: 6,
    expertise: 'Banking, Transportation',
  },
  {
    memberId: 106,
    name: 'Fatima Zahra',
    language: 'Arabic',
    nationality: 'Morocco',
    guideExpCount: 2,
    expertise: 'Visa, Public Services',
  },
  {
    memberId: 107,
    name: 'Jean Dupont',
    language: 'French',
    nationality: 'France',
    guideExpCount: 5,
    expertise: 'Legal Aid, Housing',
  },
  {
    memberId: 108,
    name: 'Nguyen Thi Hoa',
    language: 'Vietnamese',
    nationality: 'Vietnam',
    guideExpCount: 3,
    expertise: 'Job Hunting, Banking',
  },
  {
    memberId: 109,
    name: 'John Smith',
    language: 'English',
    nationality: 'UK',
    guideExpCount: 8,
    expertise: 'University Admission, Visa',
  },
  {
    memberId: 110,
    name: 'Tatiana Ivanova',
    language: 'Russian',
    nationality: 'Russia',
    guideExpCount: 4,
    expertise: 'Immigration, Medical Support',
  },
];

export const preGuideFeedbacks: GetPreGuideFeedbackResponse = [
  {
    feedbackId: 1,
    feedbackTitle: 'Very Helpful!',
    feedbackContent: 'The guide provided detailed and accurate information.',
  },
  {
    feedbackId: 2,
    feedbackTitle: 'Good Communication',
    feedbackContent: 'Explained things clearly in my language.',
  },
  {
    feedbackId: 3,
    feedbackTitle: 'Could Improve',
    feedbackContent: 'Helpful but lacked some local knowledge.',
  },
];

export const guideFeedbackRates: GetPreGuideFeedbackRateResponse = [
  {
    rateId: 1,
    feedbackTitle: 'Immigration Help',
    rateCount: 12,
    averageScore: 4.3,
    expertiseScore: 4.5,
    helpScore: 4.2,
    recommendScore: 4.1,
  },
  {
    rateId: 2,
    feedbackTitle: 'Housing Guide',
    rateCount: 9,
    averageScore: 4.0,
    expertiseScore: 3.8,
    helpScore: 4.1,
    recommendScore: 4.2,
  },
];

export const preGuideRateStatus: GetPreGuideRateStatusResponse = {
  rateStatus: 'IN_PROGRESS',
};
