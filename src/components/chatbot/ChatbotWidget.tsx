import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ChatWindow from './ChatWindow';

const CHATBOT_LAYOUT = {
  BUTTON_SIZE: 64,
  BUTTON_MARGIN: 16,
  WINDOW_EXTRA_MARGIN: 32,
};

const ChatbotWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleStartChat = () => setIsChatOpen((prev) => !prev);

  const chatWindowBottom =
    CHATBOT_LAYOUT.BUTTON_SIZE +
    CHATBOT_LAYOUT.BUTTON_MARGIN +
    CHATBOT_LAYOUT.WINDOW_EXTRA_MARGIN;

  return (
    <div className="fixed right-0 bottom-0 z-0 m-4">
      <button
        className={`${isChatOpen ? 'animate-none' : 'slowBounce'} from-primary flex size-15 items-center justify-center rounded-full bg-gradient-to-bl to-blue-800 transition-all duration-300 hover:scale-115`}
        onClick={handleStartChat}
        aria-label="챗봇 열기"
      >
        <MessageCircle className="text-white" size={16} />
      </button>
      {isChatOpen && <ChatWindow bottom={chatWindowBottom} />}
    </div>
  );
};

export default ChatbotWidget;
