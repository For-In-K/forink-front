import type {
  GetRoadmapTypeResponse,
  GetSubroadmapsResponse,
  GetRoadmapStepDetailResponse,
} from 'types/roadmaps';

export const roadmapTypes: GetRoadmapTypeResponse = [
  { roadmapType: 'ADMINISTRATION', progressRatio: 95 },
  { roadmapType: 'TRAVEL', progressRatio: 75 },
  { roadmapType: 'CAREER', progressRatio: 50 },
  { roadmapType: 'EDUCATION', progressRatio: 80 },
  { roadmapType: 'HOUSING', progressRatio: 40 },
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

// export const roadmapStepDetail: GetRoadmapStepDetailResponse = [
//   {
//     stepNumber: 1,
//     stepTitle: 'Check if my current phone is compatible',
//     stepDescription: 'First, verify if your phone uses a Korean SIM card.',
//     contents: [
//       {
//         stepContentId: 1,
//         stepContent: 'Confirmed the phone is unlocked',
//         isChecked: true,
//       },
//       {
//         stepContentId: 2,
//         stepContent: 'Checked the SIM size compatibility for Korean SIMs',
//         isChecked: true,
//       },
//       {
//         stepContentId: 3,
//         stepContent: 'Verified phone supports Korean LTE/5G frequencies',
//         isChecked: true,
//       },
//       {
//         stepContentId: 4,
//         stepContent: 'Tested with a local friend’s SIM card (if possible)',
//         isChecked: true,
//       },
//     ],
//   },
//   {
//     stepNumber: 2,
//     stepTitle: 'Learn about carriers and plan types',
//     stepDescription: 'Find the right carrier and plan for you',
//     contents: [
//       {
//         stepContentId: 5,
//         stepContent:
//           'Understood the difference between prepaid and postpaid plans',
//         isChecked: true,
//       },
//       {
//         stepContentId: 6,
//         stepContent: 'Checked which carriers are foreigner-friendly',
//         isChecked: true,
//       },
//       {
//         stepContentId: 7,
//         stepContent: 'Compared prices and data limits of major carriers',
//         isChecked: true,
//       },
//       {
//         stepContentId: 8,
//         stepContent: 'Checked if ARC (Alien Registration Card) is required',
//         isChecked: true,
//       },
//     ],
//   },
//   {
//     stepNumber: 3,
//     stepTitle: 'Prepare required documents',
//     stepDescription:
//       'Gather all documents needed to open a mobile phone line in Korea.',
//     contents: [
//       {
//         stepContentId: 9,
//         stepContent: 'Alien Registration Card (ARC) or Passport ready',
//         isChecked: true,
//       },
//       {
//         stepContentId: 10,
//         stepContent: 'Korean bank account (if required for payment)',
//         isChecked: true,
//       },
//       {
//         stepContentId: 11,
//         stepContent: 'Residential address documentation prepared',
//         isChecked: true,
//       },
//     ],
//   },
//   {
//     stepNumber: 4,
//     stepTitle: 'Visit or contact a carrier store',
//     stepDescription:
//       'Go to a telecom shop or use online services to subscribe to a plan.',
//     contents: [
//       {
//         stepContentId: 12,
//         stepContent: 'Found a nearby store or online registration site',
//         isChecked: true,
//       },
//       {
//         stepContentId: 13,
//         stepContent: 'Communicated your needs (data, call, budget)',
//         isChecked: true,
//       },
//       {
//         stepContentId: 14,
//         stepContent: 'Received and tested your new SIM card',
//         isChecked: true,
//       },
//     ],
//   },
// ];

export const roadmapStepDetail: GetRoadmapStepDetailResponse = [
  {
    stepNumber: 1,
    stepTitle: '출국 전 필수 서류 준비',
    stepDescription:
      '한국 입국 및 초기 정착에 필요한 서류를 미리 확인하고 준비합니다.',
    contents: [
      {
        stepContentId: 1,
        stepContent: '여권 및 비자 유효기간 확인',
        isChecked: false,
      },
      {
        stepContentId: 2,
        stepContent: '항공권 예약 및 E-티켓 확인',
        isChecked: false,
      },
      {
        stepContentId: 3,
        stepContent:
          '초기 거주지 주소 및 증빙 서류 확보 (호텔 예약, 기숙사 등)',
        isChecked: false,
      },
      {
        stepContentId: 4,
        stepContent: '초기 정착 비용 환전 또는 해외 사용 가능 카드 준비',
        isChecked: false,
      },
      {
        stepContentId: 5,
        stepContent: '여권, 비자 등 중요 서류 사본 및 디지털 파일 준비',
        isChecked: false,
      },
    ],
  },
  {
    stepNumber: 2,
    stepTitle: '공항 도착 및 입국 절차',
    stepDescription:
      '공항에 도착하여 입국 심사 및 세관 신고를 완료하는 과정입니다.',
    contents: [
      {
        stepContentId: 6,
        stepContent: '입국 심사대 통과 (여권, 비자 제시)',
        isChecked: false,
      },
      {
        stepContentId: 7,
        stepContent: '수하물 수령',
        isChecked: false,
      },
      {
        stepContentId: 8,
        stepContent: '세관 신고서 제출 (해당 시)',
        isChecked: false,
      },
      {
        stepContentId: 9,
        stepContent: '공항에서 유심(USIM) 구매 또는 수령 (필요 시)',
        isChecked: false,
      },
      {
        stepContentId: 10,
        stepContent: '교통카드(T-money 등) 구매 및 충전',
        isChecked: false,
      },
    ],
  },
  {
    stepNumber: 3,
    stepTitle: '외국인 등록 및 체류지 신고',
    stepDescription:
      '입국 후 90일 이내에 관할 출입국·외국인관서에 방문하여 외국인 등록을 신청해야 합니다.',
    contents: [
      {
        stepContentId: 11,
        stepContent: '하이코리아(HiKorea) 웹사이트를 통한 방문 예약',
        isChecked: false,
      },
      {
        stepContentId: 12,
        stepContent: '통합신청서, 여권, 사진, 수수료 등 필요 서류 준비',
        isChecked: false,
      },
      {
        stepContentId: 13,
        stepContent: '예약된 날짜에 출입국·외국인관서 방문 및 서류 제출',
        isChecked: false,
      },
      {
        stepContentId: 14,
        stepContent: '거주지(숙소) 계약 후 14일 이내 체류지 변경 신고 완료',
        isChecked: false,
      },
    ],
  },
  {
    stepNumber: 4,
    stepTitle: '은행 계좌 개설',
    stepDescription:
      '한국에서의 금융 거래를 위해 본인 명의의 은행 계좌를 개설합니다.',
    contents: [
      {
        stepContentId: 15,
        stepContent: '외국인 친화적인 은행 선택 및 필요 서류 확인',
        isChecked: false,
      },
      {
        stepContentId: 16,
        stepContent: '여권, 외국인등록증(ARC) 지참 후 은행 방문',
        isChecked: false,
      },
      {
        stepContentId: 17,
        stepContent: '계좌 개설 신청서 작성 및 체크카드 발급',
        isChecked: false,
      },
      {
        stepContentId: 18,
        stepContent: '인터넷/모바일 뱅킹 신청 완료',
        isChecked: false,
      },
    ],
  },
  {
    stepNumber: 5,
    stepTitle: '건강보험 가입',
    stepDescription:
      '한국의 안정적인 의료 서비스를 이용하기 위해 국민건강보험에 가입합니다.',
    contents: [
      {
        stepContentId: 19,
        stepContent: '외국인 등록 후 6개월 거주 시 지역가입자로 자동 가입 확인',
        isChecked: false,
      },
      {
        stepContentId: 20,
        stepContent: '직장가입자의 경우, 입사 시 자동 가입 처리 확인',
        isChecked: false,
      },
      {
        stepContentId: 21,
        stepContent: '건강보험증 수령 및 정보 확인',
        isChecked: false,
      },
      {
        stepContentId: 22,
        stepContent: '집 근처 병원, 약국 위치 파악해두기',
        isChecked: false,
      },
    ],
  },
];
