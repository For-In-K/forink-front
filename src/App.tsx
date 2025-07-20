import { useRoutes } from 'react-router-dom';
import SideLayout from '@layouts/SideLayout';
import MainLayout from '@layouts/MainLayout';
import Signin from '@pages/auth/Signin';
import Roadmap from '@pages/roadmap/Roadmap';
import Guide from '@pages/guide/Guide';
import Board from '@pages/board/Board';

const App = () => {
  const routes = useRoutes([
    {
      element: <SideLayout />,
      children: [
        { path: 'signin', element: <Signin /> },
        {
          path: 'onboarding',
          children: [
            { path: 'user/:pageId', element: '' },
            { path: 'guide/:pageId', element: '' },
          ],
        },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        { index: true, element: '' },
        { path: 'roadmap', element: <Roadmap /> },
        { path: 'guide', element: <Guide /> },
        { path: 'board', element: <Board /> },
      ],
    },
  ]);
  return routes;
};

export default App;
