import { useRoutes } from 'react-router-dom';
import ExamRoutes from './ExamRoutes';

import SideLayout from '@layouts/SideLayout';
import MainLayout from '@layouts/MainLayout';
import Signin from '@src/pages/auth/Signin';
import Roadmap from '@pages/roadmap/Roadmap';
import Guide from '@pages/guide/Guide';
import Board from '@pages/board/Board';

const MainRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <div>This is home page.</div> },
        { path: 'roadmap', element: <Roadmap /> },
        { path: 'guide', element: <Guide /> },
        { path: 'board', element: <Board /> },
      ],
    },
    {
      element: <SideLayout />,
      children: [
        { path: 'signin', element: <Signin /> },
        {
          path: 'exams',
          children: ExamRoutes,
        },
      ],
    },
  ]);
};

export default MainRoutes;
