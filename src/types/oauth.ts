export type RoleType = 'ROLE_회원' | 'ROLE_예비가이드' | 'ROLE_가이드';

export interface UserOAuthResponse {
  token: string;
  memberId: number;
  email: string;
  name: string;
  role: RoleType;
}
