import type {
  GetRoadmapTypeResponse,
  GetSubroadmapResponse,
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
