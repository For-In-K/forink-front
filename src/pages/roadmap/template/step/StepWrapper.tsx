import StepUnit from './StepUnit';
import { roadmapStepDetail } from '@mocks/data/roadmaps';

interface StepWrapperProps {
  roadmapId: number;
}

const StepWrapper = ({ roadmapId }: StepWrapperProps) => {
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        {roadmapStepDetail.map((step) => (
          <StepUnit key={step.stepNumber} step={step} />
        ))}
      </div>
    </>
  );
};

export default StepWrapper;
