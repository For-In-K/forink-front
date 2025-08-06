import apiClient from './apiClient';
import type {
  CreateExamResponse,
  CreateExamStepRequest,
  GetExamResponse,
} from 'types/exams';

export const createUserExam = async (): Promise<CreateExamResponse> => {
  const res = await apiClient.post('/exams');
  return res.data;
};

export const getExam = async (): Promise<GetExamResponse> => {
  const res = await apiClient.get('exams');
  return res.data;
};

export const createExamStep = async ({
  stepNumber,
  payload,
}: {
  stepNumber: number;
  payload: CreateExamStepRequest;
}) => {
  const res = await apiClient.post(`exams/step/${stepNumber}`, payload);
  return res.data;
};
