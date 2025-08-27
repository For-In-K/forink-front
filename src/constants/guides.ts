import {
  GetRoadmapTypeResponse,
  GetSubroadmapsResponse,
  GetRoadmapStepDetailResponse,
} from 'types/roadmaps';

export const guideSafeImageUrls: {
  [key: string]: string;
} = {
  Jaewon:
    'https://github.com/For-In-K/forink-light-db/blob/main/guides/jaewon.png?raw=true',
  Suhyen:
    'https://github.com/For-In-K/forink-light-db/blob/main/guides/suhyen.png?raw=true',
  Taehyen:
    'https://github.com/For-In-K/forink-light-db/blob/main/guides/taehyun.png?raw=true',
  Jungsan:
    'https://github.com/For-In-K/forink-light-db/blob/main/guides/jungsan.png?raw=true',
  'Anna Kim':
    'https://github.com/For-In-K/forink-light-db/blob/main/guides/annakim.png?raw=true',
  'Minji Lee':
    'https://github.com/For-In-K/forink-light-db/blob/main/guides/minjilee.png?raw=true',
  'Carlos Rodríguez':
    'https://github.com/For-In-K/forink-light-db/blob/main/guides/carlosrodriguez.png?raw=true',
  'Aisha Khan':
    'https://github.com/For-In-K/forink-light-db/blob/main/guides/aishakhan.png?raw=true',
  'Takeshi Yamamoto': '',
  'Fatima Zahra':
    'https://github.com/For-In-K/forink-light-db/blob/main/guides/fatimazahra.png?raw=true',
  'Jean Dupont': '',
  'Nguyen Thi Hoa':
    'https://github.com/For-In-K/forink-light-db/blob/main/guides/nguyenthihoa.png?raw=true',
  'John Smith': '',
  'Tatiana Ivanova': '',
};

export const guideRoadmapTypes: GetRoadmapTypeResponse = [
  { roadmapType: 'ADMINISTRATION', progressRatio: 0 },
];

export const guideAdministrationSubroadmap: GetSubroadmapsResponse = [
  {
    roadmapId: 101,
    title: '외국인 등록',
    statusType: 'COMPLETED',
  },
];

export const guideAdministrationStepDetail: GetRoadmapStepDetailResponse = [
  {
    stepNumber: 1,
    stepTitle: '방문 예약 및 서류 준비',
    stepDescription:
      '출입국·외국인청 방문을 위해 온라인으로 미리 방문 예약을 하고, 필요한 서류를 꼼꼼히 챙겨야 합니다.',
    contents: [
      {
        stepContentId: 1011,
        stepContent: '하이코리아(HiKorea) 웹사이트에서 방문 예약하기',
        isChecked: true,
      },
      {
        stepContentId: 1012,
        stepContent: '통합신청서 (신고서) 작성',
        isChecked: true,
      },
      {
        stepContentId: 1013,
        stepContent: '여권 및 사증(VISA) 원본 및 사본',
        isChecked: true,
      },
      {
        stepContentId: 1014,
        stepContent: '컬러 증명사진 1매 (3.5cm x 4.5cm)',
        isChecked: true,
      },
      {
        stepContentId: 1015,
        stepContent: '체류지 입증 서류 (부동산 계약서, 숙소제공 확인서 등)',
        isChecked: true,
      },
      {
        stepContentId: 1016,
        stepContent: '수수료 3만원 (정부수입인지)',
        isChecked: true,
      },
    ],
  },
  {
    stepNumber: 2,
    stepTitle: '출입국·외국인청 방문 및 신청',
    stepDescription:
      '예약한 날짜에 맞춰 관할 출입국·외국인청에 방문하여 서류를 제출하고, 생체 정보(지문 및 얼굴)를 등록합니다.',
    contents: [
      {
        stepContentId: 1021,
        stepContent: '준비된 서류 담당자에게 제출',
        isChecked: true,
      },
      {
        stepContentId: 1022,
        stepContent: '수수료 납부 및 정부수입인지 부착',
        isChecked: true,
      },
      {
        stepContentId: 1023,
        stepContent: '지문 및 안면 정보 등록',
        isChecked: true,
      },
      {
        stepContentId: 1024,
        stepContent: '외국인등록 신청 접수증 수령',
        isChecked: true,
      },
    ],
  },
  {
    stepNumber: 3,
    stepTitle: '외국인등록증 수령',
    stepDescription:
      '신청 후 약 3~6주가 소요됩니다. 신청 시 선택한 방법(방문 수령 또는 배송)에 따라 등록증을 수령합니다.',
    contents: [
      {
        stepContentId: 1031,
        stepContent: '배송 신청 시 자택에서 등기우편으로 수령',
        isChecked: true,
      },
      {
        stepContentId: 1032,
        stepContent: '방문 수령 신청 시, 접수증을 가지고 직접 방문하여 수령',
        isChecked: true,
      },
    ],
  },
];
