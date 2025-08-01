import type { Step } from 'types/roadmaps';
import ChecklistUnit from '@components/status/ChecklistUnit';
import SubmitButton from '@components/button/SubmitButton';

interface StepUnitProps {
  step: Step;
}

const StepUnit = ({ step }: StepUnitProps) => {
  const unitTitle = `${step.stepNumber}. ${step.stepTitle}`;
  const unitDescription = step.stepDescription;

  return (
    <>
      <div className="flex w-full flex-col justify-start gap-5 rounded-3xl bg-white p-8 shadow-xs md:gap-8 md:px-15 md:py-10">
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
          <SubmitButton />
        </div>
      </div>
    </>
  );
};

export default StepUnit;
