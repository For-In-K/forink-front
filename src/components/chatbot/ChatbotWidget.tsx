import { useState } from 'react';
import ChatIcon from '@assets/icons/chat.svg?react';
import ChatWindow from './ChatWindow';

const CHATBOT_LAYOUT = {
  BUTTON_SIZE: 64,
  BUTTON_MARGIN: 16,
  WINDOW_EXTRA_MARGIN: 32,
};

const ChatbotWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => setIsChatOpen((prev) => !prev);

  const chatWindowBottom =
    CHATBOT_LAYOUT.BUTTON_SIZE +
    CHATBOT_LAYOUT.BUTTON_MARGIN +
    CHATBOT_LAYOUT.WINDOW_EXTRA_MARGIN;

  return (
    <div className="fixed right-0 bottom-0 m-4">
      <button
        className={`${isChatOpen ? 'animate-none' : 'slowBounce'} transition-all duration-300 hover:scale-105`}
        onClick={handleChatToggle}
        aria-label="챗봇 열기"
      >
        <ChatIcon />
      </button>
      {isChatOpen && <ChatWindow bottom={chatWindowBottom} />}
    </div>
  );
};

export default ChatbotWidget;
