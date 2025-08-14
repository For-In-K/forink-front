import { RoleType } from './global';

export type UserOAuthResponse = {
  token: string;
  memberId: number;
  email: string;
  name: string;
  role: RoleType;
  isCompleted: boolean;
};
