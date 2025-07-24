import type { Exam } from '@src/types/exam';

function mapAnswers(answers: string[]) {
  return answers.map((answer, idx) => ({ answerId: idx, answer }));
}

export const exam_question: Exam[] = [
  {
    examId: 1,
    question: {
      title: 'Which visa do you have to stay in Korea?',
    },
    answer: {
      mode: 'Dropdown',
      options: mapAnswers([
        'No visa',
        'A-1',
        'A-2',
        'A-3',
        'B-1',
        'B-2',
        'C-1',
        'C-3',
        'C-4',
        'D-1',
        'D-2',
        'D-3',
        'D-4',
        'D-5',
        'D-6',
        'D-7',
        'D-8',
        'D-9',
        'D-10',
        'E-1',
        'E-2',
        'E-3',
        'E-4',
        'E-5',
        'E-6',
        'E-7',
        'E-8',
        'E-9',
        'E-10',
        'F-1',
        'F-2',
        'F-3',
        'F-4',
        'F-5',
        'F-6',
        'G-1',
        'H-1',
        'H-2',
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
        'No visa': mapAnswers([
          '초단기 체류 (1~14일)',
          '단기 체류 (15~30일)',
          '장기 관광 (31~90일)',
        ]),
        'A-1': mapAnswers([
          '단기 체류 (1~6개월)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'A-2': mapAnswers([
          '단기 체류 (1~6개월)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'A-3': mapAnswers([
          '단기 체류 (1~6개월)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'B-1': mapAnswers([
          '초단기 체류 (1~14일)',
          '단기 체류 (15~30일)',
          '장기 관광 (31~90일)',
        ]),
        'B-2': mapAnswers([
          '초단기 체류 (1~14일)',
          '단기 체류 (15~30일)',
          '장기 관광 (31~90일)',
        ]),
        'C-1': mapAnswers(['단기 체류 (1~30일)', '중기 체류 (31~90일)']),
        'C-3': mapAnswers([
          '초단기 체류 (1~14일)',
          '단기 체류 (15~30일)',
          '장기 관광/출장 (31~90일)',
        ]),
        'C-4': mapAnswers([
          '단기 프로젝트 (1~30일)',
          '중기 프로젝트 (31~90일)',
        ]),
        'D-1': mapAnswers([
          '단기 프로젝트 (1~3개월)',
          '중기 활동 (3~12개월)',
          '장기 활동 (1~3년)',
        ]),
        'D-2': mapAnswers([
          '단기 학기 (3~6개월)',
          '정규과정 (6개월~1년)',
          '학위과정 (1~5년)',
        ]),
        'D-3': mapAnswers(['단기 훈련 (1~6개월)', '표준 훈련 (6~12개월)']),
        'D-4': mapAnswers([
          '단기 어학연수 (1~3개월)',
          '정규 어학과정 (3~12개월)',
        ]),
        'D-5': mapAnswers([
          '단기 기획취재 (1~3개월)',
          '상주 취재 (3개월 이상)',
        ]),
        'D-6': mapAnswers([
          '단기 선교/행사 (1~6개월)',
          '장기 종교기관 활동 (6개월~5년)',
        ]),
        'D-7': mapAnswers(['단기 파견 (3~6개월)', '정규 주재 (6개월~3년)']),
        'D-8': mapAnswers([
          '설립 준비 (1~6개월)',
          '초기 운영 (6개월~1년)',
          '안정화/운영 (1~5년)',
        ]),
        'D-9': mapAnswers([
          '시장조사/준비 (1~3개월)',
          '영업 개시 (3~12개월)',
          '사업 운영 (1~5년)',
        ]),
        'D-10': mapAnswers(['초기 구직 (1~6개월)', '연장 구직 (6개월~2년)']),
        'E-1': mapAnswers([
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'E-2': mapAnswers([
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'E-3': mapAnswers([
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'E-4': mapAnswers([
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'E-5': mapAnswers([
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'E-6': mapAnswers([
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'E-7': mapAnswers([
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'E-9': mapAnswers([
          '단기 체류 (3개월 이하)',
          '중기 체류 (3개월~1년)',
          '장기 체류 (1년 이상)',
        ]),
        'F-2': mapAnswers([
          '단기 체류 (6개월 이하)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'F-4': mapAnswers([
          '단기 체류 (6개월 이하)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'F-5': mapAnswers(['모든 체류기간 공통']),
        'F-6': mapAnswers([
          '단기 체류 (6개월 이하)',
          '중기 체류 (6개월~2년)',
          '장기 체류 (2년 이상)',
        ]),
        'G-1': mapAnswers(['개별 사유에 따라 출입국사무소 문의 필요']),
        'H-1': mapAnswers(['단기 체류 (3개월 이하)', '중기 체류 (3개월 이상)']),
        'H-2': mapAnswers([
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
      options: mapAnswers(['Yes', 'No']),
    },
  },
  {
    examId: 4,
    question: {
      title: 'Do you already have a Korean bank account?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['Yes', 'No']),
    },
  },
  {
    examId: 5,
    question: {
      title: 'Do you have access to health insurance in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['Yes', 'No']),
    },
  },
  {
    examId: 6,
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
    examId: 7,
    question: {
      title:
        'Do you already have a Korean phone number and mobile phone (already have Korean phone SIM)?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['Yes', 'No']),
    },
  },
  {
    examId: 8,
    question: {
      title:
        'Do you understand how to register your address at the local immigration office?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['Yes', 'No']),
    },
  },
  {
    examId: 9,
    question: {
      title: 'Do you know how to find a job (or enroll in school) in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['Yes', 'No']),
    },
  },
  {
    examId: 10,
    question: {
      title:
        'Do you have a support network (friends, community, or help center) in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['Yes', 'No']),
    },
  },
  {
    examId: 11,
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
    examId: 12,
    question: {
      title:
        "Do you plan to drive a car or obtain a driver's license in Korea?",
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['Yes', 'No']),
    },
  },
  {
    examId: 13,
    question: {
      title: 'Are you going to work in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['Yes', 'No']),
    },
  },
  {
    examId: 14,
    question: {
      title: "What is your main job type/field in Korea? (if 'Yes' to Q13)",
    },
    answer: {
      mode: 'Dropdown',
      options: mapAnswers([
        'IT/Tech',
        'Arts & Culture',
        'Manufacturing',
        'Education',
        'Other (Please specify)',
      ]),
    },
  },
  {
    examId: 15,
    question: {
      title: 'Are you going to study in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['Yes', 'No']),
    },
  },
  {
    examId: 16,
    question: {
      title: "What is your education level or course type? (if 'Yes' to Q14)",
    },
    answer: {
      mode: 'Dropdown',
      options: mapAnswers([
        'Language Program',
        'Undergraduate',
        "Graduate (Master's/PhD)",
        'Exchange Student',
        'Other (Please specify)',
      ]),
    },
  },
  {
    examId: 17,
    question: {
      title: 'Do you have any plan to start a business or invest in Korea?',
    },
    answer: {
      mode: 'Button',
      options: mapAnswers(['Yes', 'No']),
    },
  },
];
