import apiClient from './apiClient';
import { RoleType } from 'types/global';

export interface MemberInformation {
  memberId: number;
  email: string;
  name: string;
  role: RoleType;
  point: number;
}

export const getMemberInformation = async (): Promise<MemberInformation> => {
  const res = await apiClient.get('/members/me');
  return res.data;
};
