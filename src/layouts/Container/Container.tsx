import { Outlet } from 'react-router-dom';
import CustomToastContainer from '@components/toast/CustomToastContainer';
import ChatbotWidget from '@components/chatbot/ChatbotWidget';

import useChatbotRoutes from '@hooks/useChatbotRoutes';

const Container = () => {
  const { isChatbotVisible } = useChatbotRoutes();

  return (
    <>
      <div className="container mx-auto mt-[var(--height-min-header)] mb-24 w-full px-10 py-10 md:mt-[var(--height-header)] md:py-15">
        <Outlet />
        <CustomToastContainer />
        {isChatbotVisible && <ChatbotWidget />}
      </div>
    </>
  );
};

export default Container;
