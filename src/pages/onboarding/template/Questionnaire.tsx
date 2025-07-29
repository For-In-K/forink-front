import { useNavigate } from 'react-router-dom';
import type { Exam, Option, ExamResultPostDto } from '@src/types/exams';
import Progressbar from '@src/components/input/Progressbar';
import QuestionTitle from './Question/QuestionTitle';
import QuestionInput from './Question/QuestionInput';
import Logo from '@assets/logo/logo-name.svg?react';

interface QuestionnaireProps {
  size: number;
  exam: Exam;
}

const Questionnaire = ({ size, exam }: QuestionnaireProps) => {
  const navigate = useNavigate();

  const handleAnswerSelect = (option: Option) => {
    const examResult: ExamResultPostDto = {
      examId: exam.examId,
      answerId: option.answerId,
    };

    console.log(examResult);

    const nextQuestionId = exam.examId + 1;
    const isLastQuestion = nextQuestionId > size;

    navigate(isLastQuestion ? '/exams/check' : `/exams/${nextQuestionId}`);
  };
  return (
    <>
      <div className="flex w-full max-w-300 flex-col items-center justify-center px-15">
        <div className="flex w-full items-center px-10">
          <Progressbar
            totalSize={size}
            currentSize={exam.examId}
            showNumber="fraction"
          />
        </div>
        <div className="border-primary my-10 flex h-100 w-full flex-col items-center justify-center rounded-[50px] border-2 bg-white p-10 md:px-20">
          <div className="flex w-full flex-1">
            <QuestionTitle
              title={`Q${exam.examId}. ${exam.question.title}`}
              description={exam.question.description}
            />
          </div>
          <div className="flex flex-1">
            <QuestionInput
              options={exam.answer}
              onChange={handleAnswerSelect}
            />
          </div>
        </div>
        <footer>
          <Logo className="h-10 animate-bounce opacity-60" />
        </footer>
      </div>
    </>
  );
};

export default Questionnaire;
