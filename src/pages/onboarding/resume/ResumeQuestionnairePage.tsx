import { useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { updateGuideResumeStep, submitGuideResume } from '@apis/resume';
import { resumeQuestions } from '@constants/resume';
import { useResumeStore } from '@stores/useResumeStore';
import useRoadmaps from '@hooks/useRoadmaps';

import Progressbar from '@components/status/Progressbar';
import QuestionTitle from '../template/Question/QuestionTitle';
import TextInput from '@components/input/TextInput';
import DropdownInput from '@components/input/DropdownInput';
import MultiSelectInput from '@components/input/MultiSelectInput';
import NextButton from '@components/button/NextButton';

const ResumeQuestionnairePage = () => {
  const navigate = useNavigate();
  const { stepNumber } = useParams();
  const currentStep = Number(stepNumber ?? '1');
  const size = resumeQuestions.length;

  const { createRoadmapsRequest } = useRoadmaps();

  const [submittedValue, setSubmittedValue] = useState<string | null>(null);

  const answers = useResumeStore((state) => state.answers);
  const saveAnswer = useResumeStore((state) => state.setAnswers);

  const resume = useMemo(
    () => resumeQuestions.find((e) => e.questionId === currentStep),
    [currentStep]
  );

  if (!resume) return null;

  const handleSelect = (option: { answer: string } | string) => {
    setSubmittedValue(typeof option === 'string' ? option : option.answer);
  };

  const { mutate: updateGuideResumeAnswer } = useMutation({
    mutationFn: updateGuideResumeStep,
    onSuccess: () => {
      const nextStep = currentStep + 1;
      const isLastQuestion = nextStep > size;

      if (isLastQuestion) {
        navigate('/');
      } else {
        navigate(`/resume/step/${nextStep}`);
      }

      toast.success('Answer saved successfully!');
      setSubmittedValue(null);
    },
    onError: (error) => {
      toast.error(`Failed to save your answer: ${error.message}`);
    },
  });

  const { mutate: submitResume } = useMutation({
    mutationFn: submitGuideResume,
  });

  const handleAnswerSubmit = (option: { answer: string } | string) => {
    saveAnswer(
      resume.questionId,
      typeof option === 'string' ? option : option.answer
    );
    updateGuideResumeAnswer({
      stepNumber: currentStep,
      payload: { answer: typeof option === 'string' ? option : option.answer },
    });
    submitResume();
  };

  return (
    <div className="flex w-full max-w-300 flex-col items-center justify-center px-15">
      <div className="flex w-full items-center px-10">
        <Progressbar
          totalSize={size}
          currentSize={resume.questionId}
          showNumber="fraction"
        />
      </div>
      <div className="my-10 flex h-100 w-full flex-col items-center justify-center rounded-[50px] bg-white p-12 shadow-md md:p-20">
        <div className="flex w-full flex-4">
          <QuestionTitle
            title={`Q${resume.questionId}. ${resume.questionTitle}`}
          />
        </div>
        <div className="flex w-full flex-3 justify-center px-10">
          {resume.answer.mode === 'Text' && (
            <TextInput
              value={submittedValue}
              onType={(val) => setSubmittedValue(val)}
            />
          )}
          {resume.answer.mode === 'Dropdown' && resume.answer.options && (
            <DropdownInput
              options={resume.answer.options}
              onClick={handleSelect}
            />
          )}
          {resume.answer.mode === 'Selector' && resume.answer.options && (
            <MultiSelectInput
              options={resume.answer.options}
              onChange={handleSelect}
            />
          )}
        </div>
      </div>
      <footer className="flex w-full justify-end">
        <NextButton
          onClick={() => {
            console.log(submittedValue);
            if (submittedValue !== null) {
              handleAnswerSubmit(submittedValue);
            } else {
              alert('Please fill in your answer.');
            }
          }}
        />
      </footer>
    </div>
  );
};

export default ResumeQuestionnairePage;
