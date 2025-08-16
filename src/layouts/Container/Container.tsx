import { Outlet } from 'react-router-dom';
import CustomToastContainer from '@components/toast/CustomToastContainer';
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
    <div className="mt-[var(--height-min-header)] w-full md:mt-[var(--height-header)]">
      {!isSignedIn && isHomeServiceSignVisible && <HomeServiceSign />}
      <div className="container mx-auto px-10 py-10 md:py-15">
        <Outlet />
        <CustomToastContainer />
        {isSignedIn && isChatbotVisible && <ChatbotWidget />}
      </div>
    </div>
  );
};

export default Container;
