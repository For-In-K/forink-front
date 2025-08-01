import { useRoutes } from 'react-router-dom';
import ExamRoutes from './ExamRoutes';

import SideLayout from '@layouts/SideLayout';
import MainLayout from '@layouts/MainLayout';
import SigninPage from '@pages/auth/SigninPage';

import RoadmapTypeSelectorPage from '@pages/roadmap/RoadmapTypeSelectorPage';
import RoadmapDiagramPage from '@pages/roadmap/RoadmapDiagramPage';
import RoadmapStepDetailPage from '@pages/roadmap/RoadmapStepDetailPage';

import GuideProfilePage from '@pages/guide/GuideProfilePage';
import Board from '@pages/board/Board';

const MainRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <div>This is home page.</div> },
        { path: 'roadmap', element: <RoadmapTypeSelectorPage /> },
        { path: 'roadmap/:roadmapType', element: <RoadmapDiagramPage /> },
        {
          path: 'roadmap/:roadmapType/:roadmapId',
          element: <RoadmapStepDetailPage />,
        },
        { path: 'guide', element: <GuideProfilePage /> },
        { path: 'board', element: <Board /> },
      ],
    },
    {
      element: <SideLayout />,
      children: [
        { path: 'signin', element: <SigninPage /> },
        {
          path: 'exams',
          children: ExamRoutes,
        },
        { path: 'resume', element: <div>This is resume page.</div> },
      ],
    },
  ]);
};

export default MainRoutes;
