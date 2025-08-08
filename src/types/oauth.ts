export interface MemberOAuthResponse {
  token: string;
  memberId: number;
  email: string;
  name: string;
  role: 'ROLE_회원' | 'ROLE_예비가이드' | 'ROLE_가이드';
}
