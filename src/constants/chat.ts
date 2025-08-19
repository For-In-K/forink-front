export interface ChatBotInitMsg {
  initialMent: string;
  faqButtonText: string[];
}

export const chatBotInit: ChatBotInitMsg = {
  // initialMent:
  //   'Hi! 👋 I am Fori, your assistant.\nFeel free to ask me anything about life in Korea and administrative procedures.',
  // faqButtonText: [
  //   'How do I extend my visa?',
  //   'How do I get a foreigner registration card?',
  // ],
  initialMent:
    '안녕하세요! 👋 저는 Fori입니다. \n한국 생활과 행정 절차에 대해 궁금한 점이 있으면 언제든지 물어보세요.',
  faqButtonText: [
    '비자 연장 방법이 궁금해요.',
    '외국인 등록증 발급 방법을 알고 싶어요.?',
  ],
};
