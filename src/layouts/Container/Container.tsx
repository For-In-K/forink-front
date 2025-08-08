import { Outlet } from 'react-router-dom';
import ChatbotWidget from '@components/chatbot/ChatbotWidget';

import useChatbotRoutes from '@hooks/useChatbotRoutes';

const Container = () => {
  const { isChatbotVisible } = useChatbotRoutes();

  return (
    <>
      <div className="container mx-auto mt-[var(--height-min-header)] w-full px-10 py-10 md:mt-[var(--height-header)] md:py-15">
        <Outlet />
        {isChatbotVisible && <ChatbotWidget />}
      </div>
    </>
  );
};

export default Container;
