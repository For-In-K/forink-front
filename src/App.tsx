import { useRoutes } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import Roadmap from '@pages/roadmap/Roadmap';
import Guide from '@pages/guide/Guide';
import Board from '@pages/board/Board';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/roadmap', element: <Roadmap /> },
        { path: '/guide', element: <Guide /> },
        { path: '/board', element: <Board /> },
      ],
    },
  ]);
  return routes;
};

export default App;
