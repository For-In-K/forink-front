import type { RouteObject } from 'react-router-dom';
import QuestionnaireWrapper from '../pages/onboarding/template/QuestionnaireWrapper';
import ExamQuestionnairePage from '@pages/onboarding/exam/ExamQuestionnairePage';
import ResumeQuestionnairePage from '@pages/onboarding/resume/ResumeQuestionnairePage';

export const ExamRoutes: RouteObject[] = [
  {
    path: 'step',
    element: <QuestionnaireWrapper />,
    children: [{ path: ':stepNumber', element: <ExamQuestionnairePage /> }],
  },
];

export const ResumeRoutes: RouteObject[] = [
  {
    path: 'step',
    element: <QuestionnaireWrapper />,
    children: [{ path: ':stepNumber', element: <ResumeQuestionnairePage /> }],
  },
];

export default ExamRoutes;
