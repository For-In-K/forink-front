import { create } from 'zustand';

interface ExamState {
  answers: Record<number, number>;
  setAnswer: (examId: number, answerId: number) => void;
  resetAnswers: () => void;
}

export const useExamStore = create<ExamState>((set) => ({
  answers: {},
  setAnswer: (examId, answerId) =>
    set((state) => ({
      answers: { ...state.answers, [examId]: answerId },
    })),
  resetAnswers: () => set({ answers: {} }),
}));
