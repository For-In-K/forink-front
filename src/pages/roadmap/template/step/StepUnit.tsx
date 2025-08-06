import { useState } from 'react';
import type { Step } from 'types/roadmaps';
import ChecklistUnit from '@components/status/ChecklistUnit';
import SubmitButton from '@components/button/SubmitButton';
import StepFeedbackModal from '@components/modal/StepFeedbackModal';

interface StepUnitProps {
  step: Step;
}

const StepUnit = ({ step }: StepUnitProps) => {
  const [stepFeedbackOpen, setstepFeedbackOpen] = useState(false);

  const stepNumber = step.stepNumber;
  const stepTitle = `${step.stepNumber}. ${step.stepTitle}`;
  const stepDescription = step.stepDescription;

  const isStepCompleted = step.contents.every((content) => content.isChecked);

  const handleFeedbackModalClose = () => {
    setstepFeedbackOpen(false);
  };

  const handleFeedbackStepSubmit = () => {
    console.log('Submitted');
    setstepFeedbackOpen(true);
  };

  return (
    <>
      <div className="absolute top-0 left-0 z-10 flex w-full">
        <StepFeedbackModal
          stepNumber={stepNumber}
          open={stepFeedbackOpen}
          onClose={handleFeedbackModalClose}
        />
      </div>
      <div className="flex w-full flex-col justify-start gap-8 rounded-3xl bg-white p-8 shadow-sm md:px-15 md:py-10">
        <div className="gap-10">
          <p className="text-title2 text-black">{stepTitle}</p>
          <p className="text-caption text-text-muted">{stepDescription}</p>
        </div>
        <div className="flex flex-col gap-3">
          {step.contents.map((content, index) => (
            <ChecklistUnit key={index} content={content} />
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
