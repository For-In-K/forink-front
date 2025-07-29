import type {
  CreateRoadmapResponse,
  GetRoadmapTypeResponse,
  GetSubroadmapResponse,
} from '@src/types/roadmaps';

export const roadmapTypes: GetRoadmapTypeResponse = [
  { type: 'ADMINISTRATION', progressRatio: 95 },
  { type: 'TRAVEL', progressRatio: 95 },
  { type: 'CAREER', progressRatio: 50 },
  { type: 'EDUCATION', progressRatio: 80 },
  { type: 'HOUSING', progressRatio: 40 },
  { type: 'FINANCE', progressRatio: 65 },
];

export const roadmaps: CreateRoadmapResponse = [
  {
    type: 'ADMINISTRATION',
    order: 1,
    title: 'Visa Insurance',
    steps: [
      {
        stepNumber: 1,
        stepTitle: 'Check if my current phone is compatible',
        stepDescription: 'First, verify if your phone uses a Korean SIM card.',
        contents: [
          {
            stepContent: 'Confirmed the phone is unlocked',
          },
          {
            stepContent: 'Checked the SIM size compatibility for Korean SIMs',
          },
        ],
      },
      {
        stepNumber: 2,
        stepTitle: 'Learn about carriers and plan types',
        stepDescription: 'Find the right carrier and plan for you',
        contents: [
          {
            stepContent:
              'Understnad the difference between prepaid and postpaid plans',
          },
          {
            stepContent: 'checked which carriers are foreigner-friendly',
          },
        ],
      },
    ],
  },
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
    statusType: 'IN_PROGRESS',
  },
];
