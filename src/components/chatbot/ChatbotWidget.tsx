import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatWindow from './ChatWindow';
import useChatBot from '@hooks/useChatBot';

const CHATBOT_LAYOUT = {
  BUTTON_SIZE: 64,
  BUTTON_MARGIN: 16,
  WINDOW_EXTRA_MARGIN: 32,
};

const ChatbotWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { createChatBot, isCreating } = useChatBot();

  const handleStartChat = () => {
    if (!isChatOpen) {
      createChatBot(undefined, {
        onSuccess: (data: any) => {
          const id = data?.chatId ?? data?.data?.chatId ?? null;
          if (id && Number(id) >= 1) {
            try {
              localStorage.setItem('fori_chatId', String(Number(id)));
            } catch {}
            setIsChatOpen(true);
          } else {
            setIsChatOpen(false);
          }
        },
        onError: () => {
          setIsChatOpen(false);
        },
      });
      return;
    }

    setIsChatOpen(false);
  };

  const chatWindowBottom =
    CHATBOT_LAYOUT.BUTTON_SIZE +
    CHATBOT_LAYOUT.BUTTON_MARGIN +
    CHATBOT_LAYOUT.WINDOW_EXTRA_MARGIN;

  return (
    <div className="pointer-events-auto fixed right-0 bottom-0 z-0 m-4">
      <button
        className={`from-primary flex items-center justify-center rounded-full bg-gradient-to-br to-blue-600 text-white transition-all duration-300 ${
          isCreating ? 'cursor-not-allowed opacity-60' : 'hover:scale-105'
        }`}
        style={{
          width: CHATBOT_LAYOUT.BUTTON_SIZE,
          height: CHATBOT_LAYOUT.BUTTON_SIZE,
        }}
        onClick={handleStartChat}
        aria-label={isChatOpen ? '챗봇 닫기' : '챗봇 열기'}
        disabled={isCreating}
      >
        <span
          className={`inline-block transition-transform duration-500 ${
            isCreating ? 'animate-spin' : ''
          } ${isChatOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          {isChatOpen ? <X size={25} /> : <MessageCircle size={20} />}
        </span>
      </button>

      {isChatOpen && <ChatWindow bottom={chatWindowBottom} />}
    </div>
  );
};

export default ChatbotWidget;
