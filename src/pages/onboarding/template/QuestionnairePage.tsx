import { useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { examQuestions } from '@constants/exams';
import type { Answer, OptionsAnswer } from 'types/exams';
import { useExamStore } from '@stores/useExamStore';

import Logo from '@assets/logo/logo-name.svg?react';
import Progressbar from '@components/status/Progressbar';
import QuestionTitle from './Question/QuestionTitle';
import QuestionInput from './Question/QuestionInput';

const QuestionnairePage = () => {
  const navigate = useNavigate();
  const { stepNumber } = useParams<{ stepNumber: string }>();
  const currentStep = Number(stepNumber ?? '1');
  const size = examQuestions.length;

  const answers = useExamStore((state) => state.answers);
  const saveAnswer = useExamStore((state) => state.setAnswer);

  const exam = useMemo(
    () => examQuestions.find((e) => e.examId === currentStep),
    [currentStep]
  );

  useEffect(() => {
    if (!exam) return;

    if (exam.dependsOn) {
      const parentAnswer = answers[exam.dependsOn.examId];
      if (parentAnswer === undefined) {
        navigate(`/exams/step/${exam.dependsOn.examId}`, { replace: true });
      } else if (
        exam.dependsOn.answerId !== undefined &&
        exam.dependsOn.answerId !== parentAnswer
      ) {
        const nextStep = currentStep + 1;
        if (nextStep <= size) {
          setTimeout(() => {
            navigate(`/exams/step/${nextStep}`, { replace: true });
          }, 1500);
        } else {
          navigate('/', { replace: true });
        }
      }
    }
  }, [answers, currentStep, exam, navigate, size]);

  if (!exam) return null;

  const filteredAnswer: Answer = useMemo(() => {
    if (
      exam.answer.mode !== 'Text' &&
      exam.dependsOn &&
      answers[exam.dependsOn.examId] !== undefined
    ) {
      const conditionalOpts =
        exam.answer.conditionalOptions?.[answers[exam.dependsOn.examId]];
      if (conditionalOpts) {
        return {
          ...exam.answer,
          options: conditionalOpts,
        } as OptionsAnswer;
      }
    }
    return exam.answer;
  }, [answers, exam]);

  const handleAnswerSelect = (option: { answerId: number }) => {
    saveAnswer(exam.examId, option.answerId);

    const nextStep = currentStep + 1;
    const isLastQuestion = nextStep > size;
    navigate(isLastQuestion ? '/' : `/exams/step/${nextStep}`);
  };

  return (
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
            answer={filteredAnswer}
            onChange={handleAnswerSelect}
          />
        </div>
      </div>
      <footer>
        <Logo className="h-10 animate-bounce opacity-60" />
      </footer>
    </div>
  );
};

export default QuestionnairePage;
