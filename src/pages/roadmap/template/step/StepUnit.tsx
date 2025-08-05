import { useState } from 'react';
import type { Step } from 'types/roadmaps';
import ChecklistUnit from '@components/status/ChecklistUnit';
import SubmitButton from '@components/button/SubmitButton';
import StepFeedbackModal from '@components/modal/StepFeedbackModal';

interface StepUnitProps {
  step: Step;
}

const StepUnit = ({ step }: StepUnitProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const unitTitle = `${step.stepNumber}. ${step.stepTitle}`;
  const unitDescription = step.stepDescription;
  const isUnitCompleted = !step.contents.every((content) => content.isChecked);

  const handleFeedbackModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFeedbackStepSubmit = () => {
    console.log('Submitted');
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="absolute top-0 left-0 z-10 flex w-full">
        <StepFeedbackModal
          stepNumber={step.stepNumber}
          open={isModalOpen}
          onClose={handleFeedbackModalClose}
        />
      </div>
      <div className="relative flex w-full flex-col justify-start gap-8 rounded-3xl bg-white p-8 shadow-sm md:px-15 md:py-10">
        <div className="gap-10">
          <p className="text-title2 text-black">{unitTitle}</p>
          <p className="text-caption text-text-muted">{unitDescription}</p>
        </div>
        <div className="flex flex-col gap-3">
          {step.contents.map((content, index) => (
            <ChecklistUnit key={index} content={content} />
          ))}
        </div>
        <div className="flex justify-end">
          <SubmitButton
            disabled={!isUnitCompleted}
            onClick={handleFeedbackStepSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default StepUnit;
