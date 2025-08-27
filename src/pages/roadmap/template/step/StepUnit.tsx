import { useState, useEffect, useCallback } from 'react';

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

  const stepNumber = step.stepNumber;
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
      <div className="flex w-full flex-col justify-start gap-8 rounded-3xl bg-white p-8 shadow-sm md:px-15 md:py-10">
        <div className="flex flex-col gap-2">
          <p className="text-title2 font-bold text-black">{stepTitle}</p>
          <p className="text-body font-medium text-zinc-500">
            {stepDescription}
          </p>
        </div>
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
