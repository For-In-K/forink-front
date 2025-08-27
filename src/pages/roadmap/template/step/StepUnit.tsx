import { useState, useEffect } from 'react';
import { Check, Lightbulb } from 'lucide-react';

import type { Step } from 'types/roadmaps';
import ChecklistUnit from '@components/status/ChecklistUnit';
import SubmitButton from '@components/button/SubmitButton';
import StepFeedbackModal from '@components/modal/StepFeedbackModal';

interface StepUnitProps {
  step: Step;
  roadmapId: number;
}

const StepUnit = ({ step, roadmapId }: StepUnitProps) => {
  const [stepFeedbackOpen, setstepFeedbackOpen] = useState(false);
  const [contents, setContents] = useState(step.contents);

  useEffect(() => {
    setContents(step.contents);
  }, [step.contents]);

  // const stepNumber = step.stepNumber;
  const stepTitle = `${step.stepNumber}. ${step.stepTitle}`;
  const stepDescription = step.stepDescription;

  const isStepCompleted = contents.every((content) => content.isChecked);

  const handleFeedbackModalClose = () => setstepFeedbackOpen(false);
  const handleFeedbackStepSubmit = () => setstepFeedbackOpen(true);

  return (
    <>
      <div className="absolute top-0 left-0 z-10 flex w-full">
        <StepFeedbackModal
          stepNumber={contents[0].stepContentId}
          stepTitle={stepTitle}
          open={stepFeedbackOpen}
          onClose={handleFeedbackModalClose}
        />
      </div>

      <div
        className={`relative flex w-full flex-col justify-start gap-8 rounded-3xl border p-8 shadow-sm transition-all duration-300 md:px-10 ${
          isStepCompleted
            ? 'bg-primary/10 border-primary/20 backdrop-blur-sm'
            : 'border-border bg-white hover:shadow-lg'
        }`}
      >
        {isStepCompleted && (
          <div className="bg-primary absolute top-4 right-4 flex items-center gap-1 rounded-full px-3 py-1.5 text-white shadow-sm">
            <Check className="h-3 w-3" />
            <span className="text-xs font-medium">완료됨</span>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <p
            className={`text-title2 font-bold transition-all duration-300 ${
              isStepCompleted
                ? 'text-primary/80 decoration-primary/60 line-through decoration-2'
                : 'text-text-primary'
            }`}
          >
            {stepTitle}
          </p>
          <p
            className={`text-body font-medium transition-all duration-300 ${
              isStepCompleted
                ? 'text-primary/60 decoration-primary/40 line-through'
                : 'text-zinc-500'
            }`}
          >
            {stepDescription}
          </p>
        </div>

        {isStepCompleted && (
          <div className="border-primary/20 flex items-start gap-3 rounded-xl border bg-white/70 p-4 backdrop-blur-sm">
            <Lightbulb className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="text-primary mb-1 text-sm font-medium">
                단계 완료 확인
              </p>
              <p className="text-primary/80 text-sm">
                다음 단계로 진행하기 전에 필요한 서류나 정보가 준비되었는지
                확인해주세요.
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {contents.map((content) => (
            <ChecklistUnit key={content.stepContentId} content={content} />
          ))}
        </div>

        <div className="flex justify-end">
          <SubmitButton
            disabled={!isStepCompleted}
            onClick={handleFeedbackStepSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default StepUnit;
