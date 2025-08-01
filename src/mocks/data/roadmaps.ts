import type {
  GetRoadmapTypeResponse,
  GetSubroadmapResponse,
  GetRoadmapStepDetailResponse,
} from 'types/roadmaps';

export const roadmapTypes: GetRoadmapTypeResponse = [
  { type: 'ADMINISTRATION', progressRatio: 95 },
  { type: 'TRAVEL', progressRatio: 95 },
  { type: 'CAREER', progressRatio: 50 },
  { type: 'EDUCATION', progressRatio: 80 },
  { type: 'HOUSING', progressRatio: 40 },
  { type: 'FINANCE', progressRatio: 65 },
];

export const subroadmaps: GetSubroadmapResponse = [
  {
    roadmapId: 1,
    title: 'Visa Insurance',
    statusType: 'COMPLETED',
  },
  {
    roadmapId: 2,
    title: 'Immigration Registraion',
    statusType: 'COMPLETED',
  },
  {
    roadmapId: 3,
    title: 'Health Insurance',
    statusType: 'COMPLETED',
  },
  {
    roadmapId: 4,
    title: 'Residence Registration',
    statusType: 'COMPLETED',
  },
  {
    roadmapId: 5,
    title: 'Bank Account Opening',
    statusType: 'COMPLETED',
  },
  {
    roadmapId: 6,
    title: 'Mobile & Internet Setup',
    statusType: 'IN_PROGRESS',
  },
  {
    roadmapId: 7,
    title: 'Tax & Employment Registration',
    statusType: 'IN_PROGRESS',
  },
];

export const roadmapStepDetail: GetRoadmapStepDetailResponse = [
  {
    stepNumber: 1,
    stepTitle: 'Check if my current phone is compatible',
    stepDescription: 'First, verify if your phone uses a Korean SIM card.',
    contents: [
      {
        stepContentId: 1,
        stepContent: 'Confirmed the phone is unlocked',
        isChecked: true,
      },
      {
        stepContentId: 2,
        stepContent: 'Checked the SIM size compatibility for Korean SIMs',
        isChecked: false,
      },
    ],
  },
  {
    stepNumber: 2,
    stepTitle: 'Learn about carriers and plan types',
    stepDescription: 'Find the right carrier and plan for you',
    contents: [
      {
        stepContentId: 3,
        stepContent:
          'Understnad the difference between prepaid and postpaid plans',
        isChecked: false,
      },
      {
        stepContentId: 4,
        stepContent: 'checked which carriers are foreigner-friendly',
        isChecked: false,
      },
    ],
  },
];
