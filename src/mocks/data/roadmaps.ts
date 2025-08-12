import type {
  GetRoadmapTypeResponse,
  GetSubroadmapsResponse,
  GetRoadmapStepDetailResponse,
} from 'types/roadmaps';

export const roadmapTypes: GetRoadmapTypeResponse = [
  { type: 'ADMINISTRATION', progressRatio: 95 },
  { type: 'TRAVEL', progressRatio: 75 },
  { type: 'CAREER', progressRatio: 50 },
  { type: 'EDUCATION', progressRatio: 80 },
  { type: 'HOUSING', progressRatio: 40 },
];

export const subroadmaps: GetSubroadmapsResponse = [
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
        isChecked: true,
      },
      {
        stepContentId: 3,
        stepContent: 'Verified phone supports Korean LTE/5G frequencies',
        isChecked: true,
      },
      {
        stepContentId: 4,
        stepContent: 'Tested with a local friend’s SIM card (if possible)',
        isChecked: true,
      },
    ],
  },
  {
    stepNumber: 2,
    stepTitle: 'Learn about carriers and plan types',
    stepDescription: 'Find the right carrier and plan for you',
    contents: [
      {
        stepContentId: 5,
        stepContent:
          'Understood the difference between prepaid and postpaid plans',
        isChecked: true,
      },
      {
        stepContentId: 6,
        stepContent: 'Checked which carriers are foreigner-friendly',
        isChecked: true,
      },
      {
        stepContentId: 7,
        stepContent: 'Compared prices and data limits of major carriers',
        isChecked: true,
      },
      {
        stepContentId: 8,
        stepContent: 'Checked if ARC (Alien Registration Card) is required',
        isChecked: true,
      },
    ],
  },
  {
    stepNumber: 3,
    stepTitle: 'Prepare required documents',
    stepDescription:
      'Gather all documents needed to open a mobile phone line in Korea.',
    contents: [
      {
        stepContentId: 9,
        stepContent: 'Alien Registration Card (ARC) or Passport ready',
        isChecked: true,
      },
      {
        stepContentId: 10,
        stepContent: 'Korean bank account (if required for payment)',
        isChecked: true,
      },
      {
        stepContentId: 11,
        stepContent: 'Residential address documentation prepared',
        isChecked: true,
      },
    ],
  },
  {
    stepNumber: 4,
    stepTitle: 'Visit or contact a carrier store',
    stepDescription:
      'Go to a telecom shop or use online services to subscribe to a plan.',
    contents: [
      {
        stepContentId: 12,
        stepContent: 'Found a nearby store or online registration site',
        isChecked: true,
      },
      {
        stepContentId: 13,
        stepContent: 'Communicated your needs (data, call, budget)',
        isChecked: true,
      },
      {
        stepContentId: 14,
        stepContent: 'Received and tested your new SIM card',
        isChecked: true,
      },
    ],
  },
];
