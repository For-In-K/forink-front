import { useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { resumeQuestions } from '@constants/resume';
import { useResumeStore } from '@stores/useResumeStore';

import Logo from '@assets/logo/logo-name.svg?react';
import Progressbar from '@components/status/Progressbar';
import QuestionTitle from '../template/Question/QuestionTitle';
import QuestionInput from '../template/Question/QuestionInput';

const ResumeQuestionnairePage = () => {
  const navigate = useNavigate();
  const { stepNumber } = useParams();
  const currentStep = Number(stepNumber ?? '1');
  const size = resumeQuestions.length;

  const answers = useResumeStore((state) => state.answers);
  const saveAnswer = useResumeStore((state) => state.setAnswers);

  const resume = useMemo(
    () => resumeQuestions.find((e) => e.questionId === currentStep),
    [currentStep]
  );

  if (!resume) return null;

  const handleAnswerSubmit = (option: string) => {
    saveAnswer(resume.questionId, option);
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
      <div className="border-primary my-10 flex h-100 w-full flex-col items-center justify-center rounded-[50px] border-2 bg-white p-10 md:px-20">
        <div className="flex w-full flex-1">
          <QuestionTitle
            title={`Q${resume.questionId}. ${resume.questionTitle}`}
          />
        </div>
        <div className="flex flex-1">
          {/* <QuestionInput
            answer={resume.answer.options}
            onChange={handleAnswerSubmit}
          /> */}
        </div>
      </div>
      <footer>
        <Logo className="h-10 animate-bounce opacity-60" />
      </footer>
    </div>
  );
};

export default ResumeQuestionnairePage;
