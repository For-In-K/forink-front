/* UI 구현을 위한 타입 정의 */

export type InputMode = 'Dropdown' | 'Button' | 'Scale' | 'Text';

export interface Option {
  answerId: number;
  answer: string;
}

export interface BaseAnswer {
  mode: InputMode;
}

export interface OptionsAnswer extends BaseAnswer {
  mode: 'Dropdown' | 'Button' | 'Scale';
  options: Option[];
  conditionalOptions?: { [key: string]: Option[] };
}

export interface TextAnswer extends BaseAnswer {
  mode: 'Text';
}

export type Answer = OptionsAnswer | TextAnswer;

export interface Exam {
  examId: number;
  question: { title: string; description?: string };
  answer: Answer;
  dependsOn?: {
    examId: number;
    answerId?: number;
  };
}

export interface ExamResultPostDto {
  examId: number;
  answerId: number;
}

/* API를 위한 타입 정의 */

export interface UpdateExamRequest {
  answerId: number;
}
