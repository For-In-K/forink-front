import apiClient from './apiClient';
import {
  CreateChatBotResponse,
  GiveChatMessageRequest,
  ReceiveChatMessageResponse,
} from 'types/chat';

export const createChatBot = async (): Promise<CreateChatBotResponse> => {
  const response = await apiClient.post('/bots');
  return response.data;
};

export const exchangeChatMessage = async ({
  botId,
  payload,
}: {
  botId: number;
  payload: GiveChatMessageRequest;
}): Promise<ReceiveChatMessageResponse> => {
  const response = await apiClient.post(`/bots/${botId}/messages`, payload);
  return response.data;
};
