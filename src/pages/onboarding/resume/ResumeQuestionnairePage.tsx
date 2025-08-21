import { useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { updateGuideResumeStep, submitGuideResume } from '@apis/resume';
import { resumeQuestions } from '@constants/resume';
import { useResumeStore } from '@stores/useResumeStore';
import { useCreateRoadmaps } from '@hooks/useRoadmaps';

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

  if (currentStep < 1 || currentStep > size) {
    return <Navigate to="/" replace />;
  }

  const { mutate: createRoadmapsRequest } = useCreateRoadmaps();

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
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-6 sm:px-6 md:px-15">
      <div className="flex w-full max-w-4xl items-center px-2 sm:px-6 md:px-10">
        <Progressbar
          totalSize={size}
          currentSize={resume.questionId}
          showNumber="fraction"
        />
      </div>

      <div className="my-6 flex w-full max-w-4xl flex-col items-center justify-center rounded-2xl bg-white p-4 shadow-md sm:my-8 sm:p-6 md:my-10 md:h-100 md:rounded-3xl md:p-12 lg:rounded-[50px] lg:p-20">
        <div className="flex w-full flex-1 md:flex-4">
          <QuestionTitle title={resume.questionTitle} />
        </div>

        <div className="flex w-full flex-1 justify-center px-2 py-4 sm:px-6 md:flex-3 md:px-10 md:py-0">
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

      <footer className="flex w-full max-w-4xl justify-end px-2 sm:px-6 md:px-0">
        <NextButton
          onClick={() => {
            if (submittedValue !== null) {
              handleAnswerSubmit(submittedValue);
            } else {
              toast.info('Please fill in your answer.');
            }
          }}
        />
      </footer>
    </div>
  );
};

export default ResumeQuestionnairePage;
