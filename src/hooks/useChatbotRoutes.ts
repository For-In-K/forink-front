import { useLocation, matchPath } from 'react-router-dom';
import { chatbotRoutes } from '@routes/route';

const useChatbotRoutes = () => {
  const location = useLocation();

  const isChatbotVisible = chatbotRoutes.some((route) =>
    matchPath({ path: route, end: false }, location.pathname)
  );

  return { isChatbotVisible };
};

export default useChatbotRoutes;
