import { GetResumeQuestionResponse } from 'types/resume';

export const resumeQuestions: GetResumeQuestionResponse = [
  {
    questionId: 1,
    questionTitle: 'What is your name?',
    answer: {
      mode: 'Text',
    },
  },
  {
    questionId: 2,
    questionTitle: 'What is your age?',
    answer: {
      mode: 'Text',
    },
  },
  {
    questionId: 3,
    questionTitle: 'What is your nationality?',
    answer: {
      mode: 'Dropdown',
    },
  },
  {
    questionId: 4,
    questionTitle: 'Select all the languages you are fluent in.',
    answer: {
      mode: 'Selector',
    },
  },
  {
    questionId: 5,
    questionTitle: 'Describe your guide expertise shortly.',
    answer: {
      mode: 'Text',
    },
  },
  {
    questionId: 6,
    questionTitle: 'Write down your external resume link.',
    answer: {
      mode: 'Text',
    },
  },
];
