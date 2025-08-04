import type { Exam } from 'types/exams';
import { mapAnswers } from '@utils/answers';

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
        'A-1 (Diplomat)',
        'A-2 (Official)',
        'A-3 (Treaty)',
        'B-1 (Visa Exemption)',
        'B-2 (Tourist/Transit)',
        'C-1 (Temporary News Coverage)',
        'C-3 (Short-term Visit)',
        'C-4 (Short-term Employment)',
        'D-1 (Culture/Arts)',
        'D-2 (Study)',
        'D-3 (Industrial Training)',
        'D-4 (General Training)',
        'D-5 (News Coverage)',
        'D-6 (Religion)',
        'D-7 (Intra-company Transferee)',
        'D-8 (Corporate Investment)',
        'D-9 (Trade Management)',
        'D-10 (Job Seeking)',
        'E-1 (Professor)',
        'E-2 (Foreign Language Instructor)',
        'E-3 (Research)',
        'E-4 (Technological Guidance)',
        'E-5 (Professional Employment)',
        'E-6 (Arts/Entertainment)',
        'E-7 (Specific Activities)',
        'E-9 (Non-professional Employment)',
        'F-2 (Long-term Residency)',
        'F-4 (Overseas Korean)',
        'F-5 (Permanent Residency)',
        'F-6 (Marriage Migrant)',
        'G-1 (Miscellaneous)',
        'H-1 (Working Holiday)',
        'H-2 (Visit and Employment)',
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
          'Ultra-short stay (1–14 days)',
          'Short stay (15–30 days)',
          'Long-term tourism (31–90 days)',
        ]),
        1: mapAnswers([
          // A-1
          'Short stay (1–6 months)',
          'Medium stay (6 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        2: mapAnswers([
          // A-2
          'Short stay (1–6 months)',
          'Medium stay (6 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        3: mapAnswers([
          // A-3
          'Short stay (1–6 months)',
          'Medium stay (6 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        4: mapAnswers([
          // B-1
          'Ultra-short stay (1–14 days)',
          'Short stay (15–30 days)',
          'Long-term tourism (31–90 days)',
        ]),
        5: mapAnswers([
          // B-2
          'Ultra-short stay (1–14 days)',
          'Short stay (15–30 days)',
          'Long-term tourism (31–90 days)',
        ]),
        6: mapAnswers(['Short stay (1–30 days)', 'Medium stay (31–90 days)']), // C-1
        7: mapAnswers([
          // C-3
          'Ultra-short stay (1–14 days)',
          'Short stay (15–30 days)',
          'Long-term tourism/business trip (31–90 days)',
        ]),
        8: mapAnswers([
          // C-4
          'Short-term project (1–30 days)',
          'Medium-term project (31–90 days)',
        ]),
        9: mapAnswers([
          // D-1
          'Short-term project (1–3 months)',
          'Medium-term activities (3–12 months)',
          'Long-term activities (1–3 years)',
        ]),
        10: mapAnswers([
          // D-2
          'Short-term semester (3–6 months)',
          'Regular course (6 months–1 year)',
          'Degree program (1–5 years)',
        ]),
        11: mapAnswers([
          'Short-term training (1–6 months)',
          'Standard training (6–12 months)',
        ]), // D-3
        12: mapAnswers([
          'Short-term language study (1–3 months)',
          'Regular language program (3–12 months)',
        ]), // D-4
        13: mapAnswers([
          'Short-term special coverage (1–3 months)',
          'Resident coverage (over 3 months)',
        ]), // D-5
        14: mapAnswers([
          // D-6
          'Short-term mission/event (1–6 months)',
          'Long-term religious activities (6 months–5 years)',
        ]),
        15: mapAnswers([
          'Short-term dispatch (3–6 months)',
          'Regular posting (6 months–3 years)',
        ]), // D-7
        16: mapAnswers([
          // D-8
          'Preparation for establishment (1–6 months)',
          'Initial operation (6 months–1 year)',
          'Stabilization/operation (1–5 years)',
        ]),
        17: mapAnswers([
          // D-9
          'Market research/preparation (1–3 months)',
          'Business launch (3–12 months)',
          'Business operation (1–5 years)',
        ]),
        18: mapAnswers([
          'Initial job search (1–6 months)',
          'Extended job search (6 months–2 years)',
        ]), // D-10
        19: mapAnswers([
          // E-1
          'Short stay (up to 3 months)',
          'Medium stay (3 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        20: mapAnswers([
          // E-2
          'Short stay (up to 3 months)',
          'Medium stay (3 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        21: mapAnswers([
          // E-3
          'Short stay (up to 3 months)',
          'Medium stay (3 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        22: mapAnswers([
          // E-4
          'Short stay (up to 3 months)',
          'Medium stay (3 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        23: mapAnswers([
          // E-5
          'Short stay (up to 3 months)',
          'Medium stay (3 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        24: mapAnswers([
          // E-6
          'Short stay (up to 3 months)',
          'Medium stay (3 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        25: mapAnswers([
          // E-7
          'Short stay (up to 3 months)',
          'Medium stay (3 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        26: mapAnswers([
          // E-9
          'Short stay (up to 3 months)',
          'Medium stay (3 months–1 year)',
          'Long stay (over 1 year)',
        ]),
        27: mapAnswers([
          // F-2
          'Short stay (up to 6 months)',
          'Medium stay (6 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        28: mapAnswers([
          // F-4
          'Short stay (up to 6 months)',
          'Medium stay (6 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        29: mapAnswers(['Applicable to all stay durations']), // F-5
        30: mapAnswers([
          // F-6
          'Short stay (up to 6 months)',
          'Medium stay (6 months–2 years)',
          'Long stay (over 2 years)',
        ]),
        31: mapAnswers([
          'Please contact the immigration office depending on your individual circumstances',
        ]), // G-1
        32: mapAnswers([
          'Short stay (up to 3 months)',
          'Medium stay (over 3 months)',
        ]), // H-1
        33: mapAnswers([
          // H-2
          'Short stay (up to 3 months)',
          'Medium stay (3 months–3 years)',
          'Long stay (over 3 years)',
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
          'Seoul Special City',
          'Busan Metropolitan City',
          'Daegu Metropolitan City',
          'Incheon Metropolitan City',
          'Gwangju Metropolitan City',
          'Daejeon Metropolitan City',
          'Ulsan Metropolitan City',
          'Sejong Special Self-Governing City',
          'Gyeonggi Province',
          'Gangwon Special Self-Governing Province',
          'Chungcheongbuk Province',
          'Chungcheongnam Province',
          'Jeollabuk Province',
          'Jeollanam Province',
          'Gyeongsangbuk Province',
          'Gyeongsangnam Province',
          'Jeju Special Self-Governing Province',
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
