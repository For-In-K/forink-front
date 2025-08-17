import { useLocation, matchPath } from 'react-router-dom';

export const useHomeServiceSign = () => {
  const location = useLocation();

  const isHomeServiceSignVisible = matchPath(
    { path: '/', end: true },
    location.pathname
  );

  return { isHomeServiceSignVisible };
};
