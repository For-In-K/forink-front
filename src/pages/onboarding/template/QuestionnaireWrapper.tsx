import { useParams, Outlet } from 'react-router-dom';

import { examQuestions } from '@constants/exams';

const QuestionnaireWrapper = () => {
  const { stepNumber } = useParams();
  const step = Number(stepNumber);
  const currentExam = examQuestions[step - 1];

  return currentExam ? (
    <Outlet context={{ currentExam }} />
  ) : (
    <div>문항을 찾을 수 없습니다.</div>
  );
};

export default QuestionnaireWrapper;
