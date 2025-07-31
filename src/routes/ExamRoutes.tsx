import type { RouteObject } from 'react-router-dom';
import QuestionnaireWrapper from './QuestionnaireWrapper';
import QuestionnairePage from '@pages/onboarding/template/QuestionnairePage';
import CheckPage from '@pages/onboarding/exam/CheckPage';

const ExamRoutes: RouteObject[] = [
  {
    path: 'step',
    element: <QuestionnaireWrapper />,
    children: [{ path: ':stepNumber', element: <QuestionnairePage /> }],
  },
  {
    path: 'check',
    element: <CheckPage />,
  },
];

export default ExamRoutes;
