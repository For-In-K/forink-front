export type InputMode = 'Dropdown' | 'Button' | 'Text' | 'Scale';

export interface Question {
  examId: number;
  question: { title: string; description?: string };
  answer: {
    mode: InputMode;
    options: string[];
    conditionalOptions?: { [key: string]: string[] };
  };
  dependsOn?: {
    examId: number;
  };
}
