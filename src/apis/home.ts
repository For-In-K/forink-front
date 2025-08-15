import axios from 'axios';

export interface SupportInfoCard {
  title: string;
  summary: string;
  article_url: string;
  thumbnail_url: string;
}

export type SupportInfoResponse = SupportInfoCard[];

export const getSupportInfo = async (): Promise<SupportInfoResponse> => {
  const response = await axios.get(`${import.meta.env.VITE_AI_BASE_URL}/home`);
  return response.data;
};
