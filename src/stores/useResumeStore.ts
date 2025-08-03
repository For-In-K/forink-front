import { create } from 'zustand';

interface ResumeState {
  answers: Record<number, string>;
  setAnswers: (questionId: number, answerValue: string) => void;
  resetAnswers: () => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  answers: {},
  setAnswers: (questionId, answerValue) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: answerValue },
    })),
  resetAnswers: () => set({ answers: {} }),
}));
