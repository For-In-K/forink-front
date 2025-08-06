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

export interface UpdateGuideResumeStepRequest {
  answer: string;
}

export interface GuideResume {
  name: string;
  age: string;
  nationality: string;
  language: string;
  expertise: string;
  link: string;
}

export type GetGuideResumeResponse = GuideResume;
