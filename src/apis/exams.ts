import apiClient from './apiClient';
import type { UpdateExamRequest } from '@src/types/exams';

const updateExam = async (examId: number, payload: UpdateExamRequest) => {
  const res = await apiClient.patch(`/exams/steps/${examId}`, payload);
  return res.data;
};
