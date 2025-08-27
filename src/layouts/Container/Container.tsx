import { Outlet } from 'react-router-dom';
import ChatbotWidget from '@components/chatbot/ChatbotWidget';
import HomeServiceSign from '@layouts/HomeServiceSign';

import useAuth from '@hooks/useAuth';
import useChatbotRoutes from '@hooks/useChatbotRoutes';
import { useHomeServiceSign } from '@hooks/useSign';

const Container = () => {
  const { isSignedIn } = useAuth();

  const { isChatbotVisible } = useChatbotRoutes();
  const { isHomeServiceSignVisible } = useHomeServiceSign();

  return (
    <div className="mt-12 min-h-[calc(100vh-var(--height-min-header))] w-full md:mt-14 md:min-h-[calc(100vh-var(--height-header))]">
      {!isSignedIn && isHomeServiceSignVisible && <HomeServiceSign />}
      <div className="relative container mx-auto px-10 py-10 md:py-15">
        <Outlet />
        {isSignedIn && isChatbotVisible && <ChatbotWidget />}
      </div>
    </div>
  );
};

export default Container;
