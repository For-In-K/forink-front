import type {
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
