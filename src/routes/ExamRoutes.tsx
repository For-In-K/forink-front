import type { RouteObject } from 'react-router-dom';
import QuestionnaireWrapper from './QuestionnaireWrapper';
import CheckPage from '@src/pages/onboarding/exam/CheckPage';

const ExamRoutes: RouteObject[] = [
  {
    path: ':examId',
    element: <QuestionnaireWrapper />,
  },
  {
    path: 'check',
    element: <CheckPage />,
  },
];

export default ExamRoutes;
