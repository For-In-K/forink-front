import { useRoutes } from 'react-router-dom';

import Questionnaire from '@src/pages/onboarding/template/Questionnaire';
import CheckPage from '@src/pages/onboarding/exam/CheckPage';

import { exam_question } from '@src/mocks/data/exam';

const ExamRoutes = () => {
  const LAST_QUESTION_ID = exam_question.length;
  const exams = exam_question;

  const routes = [
    {
      children: [
        ...exams.map((exam) => ({
          path: `${exam.examId}`,
          element: <Questionnaire size={LAST_QUESTION_ID} exam={exam} />,
        })),
        {
          path: 'check',
          element: <CheckPage />,
        },
      ],
    },
  ];

  const element = useRoutes(routes);
  return element;
};

export default ExamRoutes;
