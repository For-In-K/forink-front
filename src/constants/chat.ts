export interface ChatBotInitMsg {
  initialMent: string;
  faqButtonText: string[];
}

export const chatBotInit: ChatBotInitMsg = {
  initialMent:
    'Hi! 👋 I am Fori, your assistant.\nFeel free to ask me anything about life in Korea and administrative procedures.',
  faqButtonText: [
    'How do I extend my visa?',
    'How do I get a foreigner registration card?',
  ],
};
