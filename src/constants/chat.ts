export interface ChatBotInitMsg {
  initialMent: string;
  faqButtonText: string[];
}

export const chatBotInit: ChatBotInitMsg = {
  initialMent:
    '안녕하세요! 👋 도우미 Fori예요.\n한국 생활과 행정 절차에 대해 궁금한 점이 있으면 언제든 물어보세요.',
  faqButtonText: [
    '비자 연장 방법이 궁금해요.',
    '외국인등록증 발급은 어떻게 하나요?',
  ],
};
