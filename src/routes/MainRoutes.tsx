import { useRoutes } from 'react-router-dom';
import { ExamRoutes, ResumeRoutes } from './OnboardingRoutes';

import SideLayout from '@layouts/SideLayout';
import MainLayout from '@layouts/MainLayout';
import SigninPage from '@pages/auth/SigninPage';

import RoadmapTypeSelectorPage from '@pages/roadmap/RoadmapTypeSelectorPage';
import RoadmapDiagramPage from '@pages/roadmap/RoadmapDiagramPage';
import RoadmapStepDetailPage from '@pages/roadmap/RoadmapStepDetailPage';

import GuideProfilePage from '@pages/guide/GuideProfilePage';
import GuideRatingPage from '@pages/board/GuideRatingPage';
import PreGuideStatusPage from '@pages/board/PreGuideStatusPage';

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
        {
          path: 'guide',
          children: [
            { index: true, element: <GuideProfilePage /> },
            { path: 'rating', element: <GuideRatingPage /> },
            { path: 'status', element: <PreGuideStatusPage /> },
          ],
        },
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
        { path: 'resume', children: ResumeRoutes },
      ],
    },
  ]);
};

export default MainRoutes;
