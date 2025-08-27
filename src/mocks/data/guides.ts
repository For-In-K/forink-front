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
    location: 'Gangnam-gu, Seoul',
  },
  {
    memberId: 102,
    name: 'Minji Lee',
    language: 'Chinese, Japanese',
    nationality: 'China',
    guideExpCount: 3,
    expertise: 'Housing, Education, Daily Life Support',
    location: 'Jongno-gu, Seoul',
  },
  {
    memberId: 103,
    name: 'Carlos Rodríguez',
    language: 'Spanish',
    nationality: 'Mexico',
    guideExpCount: 7,
    expertise: 'Job Hunting, Visa, Health Insurance',
    location: 'Geumjeong-gu, Busan',
  },
  {
    memberId: 104,
    name: 'Aisha Khan',
    language: 'Urdu',
    nationality: 'Pakistan',
    guideExpCount: 4,
    expertise: 'Healthcare, Childcare',
    location: 'Seocho-gu, Seoul',
  },
  {
    memberId: 105,
    name: 'Takeshi Yamamoto',
    language: 'Japanese',
    nationality: 'Japan',
    guideExpCount: 6,
    expertise: 'Banking, Transportation',
    location: 'Yongsan-gu, Seoul',
  },
  {
    memberId: 106,
    name: 'Fatima Zahra',
    language: 'Arabic',
    nationality: 'Morocco',
    guideExpCount: 2,
    expertise: 'Visa, Public Services',
    location: 'Mapo-gu, Seoul',
  },
  {
    memberId: 107,
    name: 'Jean Dupont',
    language: 'French',
    nationality: 'France',
    guideExpCount: 5,
    expertise: 'Legal Aid, Housing',
    location: 'Jung-gu, Seoul',
  },
  {
    memberId: 108,
    name: 'Nguyen Thi Hoa',
    language: 'Vietnamese',
    nationality: 'Vietnam',
    guideExpCount: 3,
    expertise: 'Job Hunting, Banking',
    location: 'Dongdaemun-gu, Seoul',
  },
  {
    memberId: 109,
    name: 'John Smith',
    language: 'English',
    nationality: 'UK',
    guideExpCount: 8,
    expertise: 'University Admission, Visa',
    location: 'Seodaemun-gu, Seoul',
  },
  {
    memberId: 110,
    name: 'Tatiana Ivanova',
    language: 'Russian',
    nationality: 'Russia',
    guideExpCount: 4,
    expertise: 'Immigration, Medical Support',
    location: 'Gangbuk-gu, Seoul',
  },
];

export const preGuideFeedbacks: GetPreGuideFeedbackResponse = [
  {
    feedbackId: 1,
    feedbackTitle: 'Bank Account Opening',
    feedbackContent: `
Situation
I was trying to open a bank account as a newly arrived foreigner in Korea. I had my passport and alien registration card, but I wasn’t sure which banks were more foreigner-friendly.

Problem
The roadmap mentioned bringing basic identification, but it didn’t clarify that some banks also require a Korean phone number or proof of address (like a lease contract). At KEB Hana Bank, I was told I couldn’t proceed without a local phone number, which was not easy to get beforehand.

Suggestion
I suggest adding a table comparing major banks (e.g., KEB Hana, Shinhan, Woori) and their specific requirements for foreigners. Also, clarify that not all branches handle foreigner services — maybe even recommend visiting main branches in major districts like Gangnam or Hongdae.

Referenced Background Knowledge
- Experience from community forums (e.g., r/Korea, local KakaoTalk expat groups)
- Personal attempt at three different banks over a week
- Consultation with a Korean co-worker
    `,
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
  {
    feedbackId: 4,
    feedbackTitle: 'Visa Extension Guidance',
    feedbackContent: `
Situation
Needed to extend my D-4 visa for language study.

Problem
The roadmap gave a brief outline but didn’t mention the necessity of booking an immigration office appointment weeks in advance. The process also required a certificate of enrollment and proof of bank balance which was not in the checklist.

Suggestion
Include a detailed checklist with all required documents for different visa types. Also, add a reminder about making the online reservation early through the HiKorea website.
    `,
  },
  {
    feedbackId: 5,
    feedbackTitle: 'Neighborhood Orientation',
    feedbackContent: `
Provided a great walking tour of the local area, showing supermarkets, clinics, and bus stops. This really helped me settle in faster.
    `,
  },
  {
    feedbackId: 6,
    feedbackTitle: 'Lack of Public Transport Tips',
    feedbackContent: `
Was expecting advice on using T-money cards and transferring between buses and subway, but this wasn't covered.
    `,
  },
  {
    feedbackId: 7,
    feedbackTitle: 'Exceptional Help with Housing Contract',
    feedbackContent: `
Helped me review my housing lease in detail, explaining key legal terms and ensuring there were no unfair clauses. This gave me peace of mind before signing.
    `,
  },
];

export const guideFeedbackRates: GetPreGuideFeedbackRateResponse = [
  {
    ratingId: 1,
    feedbackTitle: 'Immigration Help',
    ratingCount: 12,
    allAvgScore: 4.3,
    expertiseAvgScore: 4.5,
    helpAvgScore: 4.2,
    recommendAvgScore: 4.1,
  },
  {
    ratingId: 2,
    feedbackTitle: 'Housing Guide',
    ratingCount: 9,
    allAvgScore: 4.0,
    expertiseAvgScore: 3.8,
    helpAvgScore: 4.1,
    recommendAvgScore: 4.2,
  },
];

export const preGuideRateStatus: GetPreGuideRateStatusResponse = {
  ratingStatus: 'IN PROGRESS',
};
