import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { resumeQuestions } from '@constants/resume';
import { useResumeStore } from '@stores/useResumeStore';
import { Option } from 'types/exams';

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

  const handleAnswerSubmit = (option: { answer: string } | string) => {
    saveAnswer(
      resume.questionId,
      typeof option === 'string' ? option : option.answer
    );
    console.log(submittedValue);
    const nextStep = currentStep + 1;
    const isLastQuestion = nextStep > size;
    navigate(isLastQuestion ? '/' : `/resume/step/${nextStep}`);
    setSubmittedValue(null);
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
      <div className="border-primary my-10 flex h-100 w-full flex-col items-center justify-center rounded-[50px] border-2 bg-white p-12 md:p-20">
        <div className="flex w-full flex-1">
          <QuestionTitle
            title={`Q${resume.questionId}. ${resume.questionTitle}`}
          />
        </div>
        <div className="flex w-full flex-1 justify-center">
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
