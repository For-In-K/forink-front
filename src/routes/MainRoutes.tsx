import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRoutes } from 'react-router-dom';
import { ExamRoutes, ResumeRoutes } from './OnboardingRoutes';

import SideLayout from '@layouts/SideLayout';
import MainLayout from '@layouts/MainLayout';
import SigninPage from '@pages/auth/SigninPage';
import SigninOptionPage from '@pages/auth/SigninOptionPage';
import SigninCallback from '@pages/auth/SigninCallback';

import RoadmapTypeSelectorPage from '@pages/roadmap/RoadmapTypeSelectorPage';
import RoadmapDiagramPage from '@pages/roadmap/RoadmapDiagramPage';
import RoadmapStepDetailPage from '@pages/roadmap/RoadmapStepDetailPage';

import GuideProfilePage from '@pages/guide/GuideProfilePage';
import GuideRatingPage from '@pages/board/GuideRatingPage';
import PreGuideStatusPage from '@pages/board/PreGuideStatusPage';
import ResumeFinalViewPage from '@pages/onboarding/resume/ResumeFinalViewPage';

import NotFound from '@pages/fallback/NotFound';

const MainRoutes = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const html = document.documentElement;

    html.lang = i18n.language;
    html.dir = i18n.dir(i18n.language);

    html.classList.remove('lang-eng', 'lang-kor', 'lang-chi', 'lang-vie');
    html.classList.add(`lang-${i18n.language}`);
  }, [i18n.language]);

  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <div>This is home page.</div> },
        {
          path: 'roadmap',
          children: [
            { index: true, element: <RoadmapTypeSelectorPage /> },
            { path: ':roadmapType', element: <RoadmapDiagramPage /> },
            {
              path: ':roadmapType/:roadmapId',
              element: <RoadmapStepDetailPage />,
            },
          ],
        },
        {
          path: 'guide',
          children: [{ index: true, element: <GuideProfilePage /> }],
        },
        {
          path: 'board',
          children: [
            { path: 'guide/rating', element: <GuideRatingPage /> },
            { path: 'guide/status', element: <PreGuideStatusPage /> },
          ],
        },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      element: <SideLayout />,
      children: [
        { path: 'signin', element: <SigninPage /> },
        { path: 'oauth/google/callback', element: <SigninCallback /> },
        { path: 'signin/option', element: <SigninOptionPage /> },
        {
          path: 'exams',
          children: ExamRoutes,
        },
        { path: 'resume', children: ResumeRoutes },
        { path: 'resume/final', element: <ResumeFinalViewPage /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);
};

export default MainRoutes;
