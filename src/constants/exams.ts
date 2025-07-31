import type { Exam } from 'types/exams';

function mapAnswers(answers: string[]) {
  return answers.map((answer, idx) => ({ answerId: idx, answer }));
}

export const examQuestions: Exam[] = [
  {
    examId: 1,
    question: {
      title: 'Which visa do you have to stay in Korea?',
    },
    answer: {
      mode: 'Dropdown',
      options: mapAnswers([
        'No visa',
        'A-1 (외교)',
        'A-2 (공무)',
        'A-3 (협정)',
        'B-1 (사증면제)',
        'B-2 (관광통과)',
        'C-1 (일시취재)',
        'C-3 (단기방문)',
        'C-4 (단기취업)',
        'D-1 (문화예술)',
        'D-2 (유학)',
        'D-3 (기술연수)',
        'D-4 (일반연수)',
        'D-5 (취재)',
        'D-6 (종교)',
        'D-7 (주재)',
        'D-8 (기업투자)',
        'D-9 (무역경영)',
        'D-10 (구직)',
        'E-1 (교수)',
        'E-2 (회화지도)',
        'E-3 (연구)',
        'E-4 (기술지도)',
        'E-5 (전문직업)',
        'E-6 (예술흥행)',
        'E-7 (특정활동)',
        'E-9 (비전문취업)',
        'F-2 (거주)',
        'F-4 (재외동포)',
        'F-5 (영주)',
        'F-6 (결혼이민)',
        'G-1 (기타)',
        'H-1 (관광취업/워킹홀리데이)',
        'H-2 (방문취업)',
      ]),
    },
  },
  {
    examId: 2,
    question: {
      title: 'What is your intended length of stay in Korea?',
    },
    answer: {
      mode: 'Dropdown',
      options: [],
      conditionalOptions: {
        0: mapAnswers([
          // No visa
          '초단기 체류 (1~14일)',
          '단기 체류 (15~30일)',
          '장기 관광 (31~90일)',
        ]),
        1: mapAnswers([
          // A-1
          '단기 체류 (1~6개월)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        2: mapAnswers([
          // A-2
          '단기 체류 (1~6개월)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        3: mapAnswers([
          // A-3
          '단기 체류 (1~6개월)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        4: mapAnswers([
          // B-1
          '초단기 체류 (1~14일)',
          '단기 체류 (15~30일)',
          '장기 관광 (31~90일)',
        ]),
        5: mapAnswers([
          // B-2
          '초단기 체류 (1~14일)',
          '단기 체류 (15~30일)',
          '장기 관광 (31~90일)',
        ]),
        6: mapAnswers(['단기 체류 (1~30일)', '중기 체류 (31~90일)']), // C-1
        7: mapAnswers([
          // C-3
          '초단기 체류 (1~14일)',
          '단기 체류 (15~30일)',
          '장기 관광/출장 (31~90일)',
        ]),
        8: mapAnswers([
          // C-4
          '단기 프로젝트 (1~30일)',
          '중기 프로젝트 (31~90일)',
        ]),
        9: mapAnswers([
          // D-1
          '단기 프로젝트 (1~3개월)',
          '중기 활동 (3~12개월)',
          '장기 활동 (1~3년)',
        ]),
        10: mapAnswers([
          // D-2
          '단기 학기 (3~6개월)',
          '정규과정 (6개월~1년)',
          '학위과정 (1~5년)',
        ]),
        11: mapAnswers(['단기 훈련 (1~6개월)', '표준 훈련 (6~12개월)']), // D-3
        12: mapAnswers(['단기 어학연수 (1~3개월)', '정규 어학과정 (3~12개월)']), // D-4
        13: mapAnswers(['단기 기획취재 (1~3개월)', '상주 취재 (3개월 이상)']), // D-5
        14: mapAnswers([
          // D-6
          '단기 선교/행사 (1~6개월)',
          '장기 종교기관 활동 (6개월~5년)',
        ]),
        15: mapAnswers(['단기 파견 (3~6개월)', '정규 주재 (6개월~3년)']), // D-7
        16: mapAnswers([
          // D-8
          '설립 준비 (1~6개월)',
          '초기 운영 (6개월~1년)',
          '안정화/운영 (1~5년)',
        ]),
        17: mapAnswers([
          // D-9
          '시장조사/준비 (1~3개월)',
          '영업 개시 (3~12개월)',
          '사업 운영 (1~5년)',
        ]),
        18: mapAnswers(['초기 구직 (1~6개월)', '연장 구직 (6개월~2년)']), // D-10
        19: mapAnswers([
          // E-1
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        20: mapAnswers([
          // E-2
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        21: mapAnswers([
          // E-3
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        22: mapAnswers([
          // E-4
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        23: mapAnswers([
          // E-5
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        24: mapAnswers([
          // E-6
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        25: mapAnswers([
          // E-7
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        26: mapAnswers([
          // E-9
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~1년)',
          '장기 체류 (1년 이상)',
        ]),
        27: mapAnswers([
          // F-2
          '단기 체류 (6개월 이하)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        28: mapAnswers([
          // F-4
          '단기 체류 (6개월 이하)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        29: mapAnswers(['모든 체류기간 공통']), // F-5
        30: mapAnswers([
          // F-6
          '단기 체류 (6개월 이하)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        31: mapAnswers(['개별 사유에 따라 출입국사무소 문의 필요']), // G-1
        32: mapAnswers(['단기 체류 (3개월 이하)', '중기 체류 (3개월 이상)']), // H-1
        33: mapAnswers([
          // H-2
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~3년)',
          '장기 체류 (3년 이상)',
        ]),
      },
    },
    dependsOn: {
      examId: 1,
    },
  },
  {
    examId: 3,
    question: {
      title: 'Do you have a place to live in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
  {
    examId: 4,
    question: {
      title: 'What is your intended area of residence?',
    },
    answer: {
      mode: 'Dropdown',
      options: [],
      conditionalOptions: {
        0: [{ answerId: -1, answer: 'No specific area' }],
        1: mapAnswers([
          '서울특별시',
          '부산광역시',
          '대구광역시',
          '인천광역시',
          '광주광역시',
          '대전광역시',
          '울산광역시',
          '세종특별자치시',
          '경기도',
          '강원특별자치도',
          '충청북도',
          '충청남도',
          '전라북도',
          '전라남도',
          '경상북도',
          '경상남도',
          '제주특별자치도',
        ]),
      },
    },
    dependsOn: {
      examId: 3,
      answerId: 1,
    },
  },
  {
    examId: 5,
    question: {
      title: 'Do you already have a Korean bank account?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
  {
    examId: 6,
    question: {
      title: 'Do you have access to health insurance in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
  {
    examId: 7,
    question: {
      title:
        'How confident are you in using basic Korean for daily life (e.g., shopping, asking directions)?',
    },
    answer: {
      mode: 'Scale',
      options: mapAnswers([
        'Not at all',
        'A little',
        'Moderately',
        'Confidently',
        'Fluent',
      ]),
    },
  },
  {
    examId: 8,
    question: {
      title:
        'Do you already have a Korean phone number and mobile phone (already have Korean phone SIM)?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
  {
    examId: 9,
    question: {
      title:
        'Do you understand how to register your address at the local immigration office?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
  {
    examId: 10,
    question: {
      title: 'Do you know how to find a job (or enroll in school) in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
  {
    examId: 11,
    question: {
      title:
        'Do you have a support network (friends, community, or help center) in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
  {
    examId: 12,
    question: {
      title: 'Do you plan to travel with your spouse or children?',
    },
    answer: {
      mode: 'Dropdown',
      options: mapAnswers([
        "No, I'm traveling alone",
        'Yes, with my spouse only',
        'Yes, with my children only',
        'Yes, with both my spouse and children',
      ]),
    },
  },
  {
    examId: 13,
    question: {
      title:
        "Do you plan to drive a car or obtain a driver's license in Korea?",
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
  {
    examId: 14,
    question: {
      title: 'Are you going to work in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
  {
    examId: 15,
    question: {
      title: 'What is your main job type/field in Korea?',
    },
    answer: {
      mode: 'Dropdown',
      options: [],
      conditionalOptions: {
        0: [{ answerId: -1, answer: 'No specific job type' }],
        1: mapAnswers([
          'Education (e.g., English teacher, university lecturer)',
          'Research / Academia',
          'Business / Administration',
          'IT / Technology',
          'Translation / Interpretation',
          'Arts / Culture / Media',
          'Service Industry (e.g., hospitality, food service)',
          'Manufacturing / Engineering',
          'Student Internship / Research Assistantship',
          'Other Employment (General)',
        ]),
      },
    },
    dependsOn: {
      examId: 14,
      answerId: 1,
    },
  },
  {
    examId: 16,
    question: {
      title: 'Are you going to study in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
  {
    examId: 17,
    question: {
      title: 'What is your education level or course type?',
    },
    answer: {
      mode: 'Dropdown',
      options: [],
      conditionalOptions: {
        0: [{ answerId: -1, answer: 'No specific education level' }],
        1: mapAnswers([
          'Undergraduate Student',
          'Graduate Student – Master’s or PhD',
          'Exchange Student',
          'Language Program Student',
          'Non-degree Student / Visiting Student',
        ]),
      },
    },
    dependsOn: {
      examId: 16,
      answerId: 1,
    },
  },
  {
    examId: 18,
    question: {
      title: 'Do you have any plan to start a business or invest in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
  {
    examId: 19,
    question: {
      title: 'Do you already have an alien registration card?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['No', 'Yes']),
    },
  },
];
