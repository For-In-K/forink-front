import { Option } from './exams';

export interface ResumeAnswer {
  mode: 'Text' | 'Dropdown' | 'Selector';
  options?: Option[];
}

export interface ResumeQuestion {
  questionId: number;
  questionTitle: string;
  answer: ResumeAnswer;
}

export type GetResumeQuestionResponse = ResumeQuestion[];
