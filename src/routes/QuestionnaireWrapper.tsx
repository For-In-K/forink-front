import { useParams } from 'react-router-dom';
import Questionnaire from '@src/pages/onboarding/template/Questionnaire';
import { exam_question } from '@src/constants/exams';

const LAST_QUESTION_ID = exam_question.length;

const QuestionnaireWrapper = () => {
  const { examId } = useParams();
  const examIdNum = Number(examId);
  if (!examIdNum || examIdNum < 1 || examIdNum > LAST_QUESTION_ID) {
    return <div>잘못된 문제 ID입니다.</div>;
  }

  const exam = exam_question.find((e) => e.examId === examIdNum);
  if (!exam) return <div>문제를 찾을 수 없습니다.</div>;

  return <Questionnaire size={LAST_QUESTION_ID} exam={exam} />;
};

export default QuestionnaireWrapper;
