import { useRoutes } from 'react-router-dom';
import ExamRoutes from './ExamRoutes';

import SideLayout from '@layouts/SideLayout';
import MainLayout from '@layouts/MainLayout';
import Signin from '@src/pages/auth/Signin';

import RoadmapTypeSelector from '@src/pages/roadmap/RoadmapTypeSelector';
import RoadmapDiagram from '@src/pages/roadmap/RoadmapDiagram';
import RoadmapStepDetail from '@src/pages/roadmap/RoadmapStepDetail';

import Guide from '@pages/guide/Guide';
import Board from '@pages/board/Board';

const MainRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <div>This is home page.</div> },
        { path: 'roadmap', element: <RoadmapTypeSelector /> },
        { path: 'roadmap/:roadmapType', element: <RoadmapDiagram /> },
        {
          path: 'roadmap/:roadmapType/:stepId',
          element: <RoadmapStepDetail />,
        },
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
