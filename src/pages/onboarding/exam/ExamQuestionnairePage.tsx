import { useMemo, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createExamStep } from '@apis/exams';
import { examQuestions } from '@constants/exams';
import type { Answer, OptionsAnswer, Option } from 'types/exams';
import { useExamStore } from '@stores/useExamStore';
import useRoadmaps from '@hooks/useRoadmaps';

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

  const { createRoadmapsRequest } = useRoadmaps();

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

  const { mutate: createExamStepAnswer } = useMutation({
    mutationFn: createExamStep,
    onSuccess: () => {
      const nextStep = currentStep + 1;
      const isLastStep = nextStep > size;

      if (isLastStep) {
        createRoadmapsRequest();
        navigate('/');
      } else {
        navigate(`/exams/step/${nextStep}`);
      }

      toast.success('Answer saved successfully!');
      setSelectedValue(null);
    },
    onError: () => toast.error('답변이 저장되지 않았어요'),
  });

  const handleAnswerSubmit = () => {
    if (!selectedValue) {
      toast.info('답변을 선택해주세요');
      return;
    }
    saveAnswer(exam.examId, selectedValue.answerId);
    createExamStepAnswer({
      stepNumber: currentStep,
      payload: { answer: selectedValue.answerId },
    });
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

      <div className="my-10 flex h-100 w-full flex-col items-center justify-center rounded-[50px] bg-white p-12 shadow-md md:p-20">
        <div className="flex w-full flex-4 justify-center">
          <QuestionTitle
            title={`Q${exam.examId}. ${exam.question.title}`}
            description={exam.question.description}
          />
        </div>

        <div className="flex w-full flex-3 justify-center px-10">
          {filteredAnswer.mode === 'Dropdown' && (
            <DropdownInput
              key={`${currentStep}`}
              options={filteredAnswer.options}
              onClick={setSelectedValue}
            />
          )}
          {filteredAnswer.mode === 'Button' && filteredAnswer.options && (
            <ButtonInput
              key={`${currentStep}`}
              options={filteredAnswer.options}
              onSubmit={setSelectedValue}
            />
          )}
          {filteredAnswer.mode === 'Scale' && filteredAnswer.options && (
            <ScaleInput
              key={`${currentStep}`}
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
