export interface CreateChatBotResponse {
  chatId: number;
}

export interface GiveChatMessageRequest {
  message: string;
}

export interface ReceiveChatMessageResponse {
  chatAnswer: string;
}
