import { useMemo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { examQuestions } from '@constants/exams';
import type { Answer, OptionsAnswer, Option } from 'types/exams';
import { useExamStore } from '@stores/useExamStore';

import Progressbar from '@components/status/Progressbar';
import QuestionTitle from '../template/Question/QuestionTitle';
import NextButton from '@components/button/NextButton';
import DropdownInput from '@components/input/DropdownInput';
import ButtonInput from '@components/input/ButtonInput';
import ScaleInput from '@components/input/ScaleInput';

const ExamQuestionnairePage = () => {
  const navigate = useNavigate();
  const { stepNumber } = useParams();
  const currentStep = Number(stepNumber ?? '1');
  const size = examQuestions.length;

  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

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
        return;
      } else if (
        exam.dependsOn.answerId !== undefined &&
        exam.dependsOn.answerId !== parentAnswer
      ) {
        const nextStep = currentStep + 1;
        setTimeout(() => {
          navigate(nextStep <= size ? `/exams/step/${nextStep}` : '/', {
            replace: true,
          });
        }, 2000);
        return;
      }
    }

    setSelectedValue(null);
  }, [answers, currentStep, exam, navigate, size]);

  if (!exam) return null;

  const filteredAnswer: Answer = useMemo(() => {
    if (exam.dependsOn && answers[exam.dependsOn.examId] !== undefined) {
      const conditionalOpts =
        exam.answer.conditionalOptions?.[answers[exam.dependsOn.examId]];
      if (conditionalOpts) {
        return { ...exam.answer, options: conditionalOpts } as OptionsAnswer;
      }
    }
    return exam.answer;
  }, [answers, exam]);

  const handleAnswerSubmit = () => {
    if (!selectedValue) {
      alert('Please select an answer before proceeding.');
      return;
    }
    saveAnswer(exam.examId, selectedValue.answerId);

    const nextStep = currentStep + 1;
    navigate(nextStep > size ? '/' : `/exams/step/${nextStep}`);
    setSelectedValue(null);
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

      <div className="border-primary my-10 flex h-100 w-full flex-col items-center justify-center rounded-[50px] border-2 bg-white p-12 md:p-20">
        <div className="flex w-full flex-1 justify-center">
          <QuestionTitle
            title={`Q${exam.examId}. ${exam.question.title}`}
            description={exam.question.description}
          />
        </div>

        <div className="flex w-full flex-1 justify-center">
          {filteredAnswer.mode === 'Dropdown' && (
            <DropdownInput
              options={filteredAnswer.options}
              onClick={setSelectedValue}
            />
          )}
          {filteredAnswer.mode === 'Button' && filteredAnswer.options && (
            <ButtonInput
              options={filteredAnswer.options}
              onSubmit={setSelectedValue}
            />
          )}
          {filteredAnswer.mode === 'Scale' && filteredAnswer.options && (
            <ScaleInput
              options={filteredAnswer.options}
              onSubmit={setSelectedValue}
            />
          )}
        </div>
      </div>

      <footer className="flex w-full justify-end">
        <NextButton onClick={handleAnswerSubmit} />
      </footer>
    </div>
  );
};

export default ExamQuestionnairePage;
