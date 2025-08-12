import { useLocation, matchPath } from 'react-router-dom';
import { chatbotRoutes } from '@constants/chat';

const useChatbotRoutes = () => {
  const location = useLocation();

  const isChatbotVisible = chatbotRoutes.some((route) =>
    matchPath({ path: route, end: false }, location.pathname)
  );

  return { isChatbotVisible };
};

export default useChatbotRoutes;
